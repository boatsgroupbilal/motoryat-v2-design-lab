import {NextResponse} from 'next/server';
const json=(body,status)=>NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request){
 if(process.env.MOTORYAT_V2_WRITES_ENABLED!=='true')return json({error:'Taslak kayıt servisi henüz etkin değil.'},503);
 const base=process.env.MOTORYAT_V2_SUPABASE_URL;
 const key=process.env.MOTORYAT_V2_SUPABASE_ANON_KEY;
 if(!base||!key)return json({error:'Supabase yapılandırması eksik.'},503);
 const authorization=request.headers.get('authorization')||'';
 const token=authorization.match(/^Bearer ([A-Za-z0-9._~+/-]+={0,2})$/)?.[1];
 if(!token)return json({error:'Giriş yapmanız gerekiyor.'},401);
 let payload;try{payload=await request.json()}catch{return json({error:'Geçersiz JSON.'},400)}
 if(!payload||typeof payload!=='object'||Array.isArray(payload))return json({error:'Geçersiz kayıt.'},400);
 const {kind,vessel,values,equipment,storeId}=payload;
 if(!['Satılık','Kiralık'].includes(kind)||typeof vessel!=='string'||vessel.length>60||!values||typeof values!=='object'||Array.isArray(values)||!Array.isArray(equipment)||equipment.length>150)return json({error:'İlan alanları geçersiz.'},400);
 const title=String(values['İlan başlığı']||'').trim();
 if(title.length<3||title.length>180)return json({error:'İlan başlığı 3–180 karakter olmalı.'},400);
 if(Object.keys(values).length>60||Object.entries(values).some(([k,v])=>k.length>90||typeof v!=='string'||v.length>15000)||equipment.some(v=>typeof v!=='string'||v.length>100))return json({error:'Alan sınırı aşıldı.'},400);
 const origin=base.replace(/\/$/,'');
 const headers={apikey:key,Authorization:'Bearer '+token};
 let auth;
 try{auth=await fetch(origin+'/auth/v1/user',{headers,cache:'no-store'})}catch{return json({error:'Kimlik doğrulama servisine erişilemiyor.'},503)}
 if(!auth.ok)return json({error:'Oturum geçersiz; yeniden giriş yapın.'},401);
 const user=await auth.json();
 if(!user?.id)return json({error:'Kullanıcı doğrulanamadı.'},401);
 // Store-linked listings require existing store membership and RLS on the target table.
 // Never trust user_id / owner_id from the browser. The database policy is the final gate.
 if(storeId!==null&&storeId!==undefined&&(typeof storeId!=='string'||storeId.length>80))return json({error:'Mağaza kimliği geçersiz.'},400);
 const record={owner_id:user.id,store_id:storeId||null,kind,vessel_type:vessel,title,payload:{values,equipment},status:'draft'};
 let response;
 try{response=await fetch(origin+'/rest/v1/v2_listing_drafts',{method:'POST',headers:{...headers,'Content-Type':'application/json','Prefer':'return=representation'},body:JSON.stringify(record),cache:'no-store'})}catch{return json({error:'Veritabanına erişilemiyor.'},503)}
 if(!response.ok){if(response.status===401||response.status===403)return json({error:'Bu mağaza adına taslak oluşturma yetkiniz yok.'},403);return json({error:'Taslak kaydedilemedi. Veritabanı yapılandırmasını kontrol edin.'},503)}
 const saved=await response.json();
 return json({id:saved?.[0]?.id||null,status:'draft',message:'Taslak kaydedildi; yayınlanmadı.'},201);
}
