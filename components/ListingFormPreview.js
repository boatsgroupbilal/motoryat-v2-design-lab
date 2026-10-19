'use client';
import {useState} from 'react';
import {equipmentGroups,vesselTypes,charterModes,typeFields} from '../data/listing-attributes';

const commonFields=['Marka','Model','Üretim yılı','Boy (metre)','En (metre)','Gövde malzemesi','Kamara sayısı','Yatak sayısı','Motor markası','Yakıt tipi','Bandıra','Bulunduğu yer'];
export default function ListingFormPreview(){
 const [kind,setKind]=useState('Satılık');
 const [vessel,setVessel]=useState('Motoryat');
 const [values,setValues]=useState({});
 const [selected,setSelected]=useState([]);
 const [preview,setPreview]=useState(false);
 const [saving,setSaving]=useState(false);
 const [saveMessage,setSaveMessage]=useState('');
 const [storeId,setStoreId]=useState('');
 const update=(k,v)=>setValues(old=>({...old,[k]:v}));
 const toggle=(v,check)=>setSelected(old=>check?[...old,v]:old.filter(x=>x!==v));
 const fields=[...commonFields,...(typeFields[vessel]||[])];
 async function saveDraft(){
  setSaveMessage('');
  let session;
  try{session=JSON.parse(sessionStorage.getItem('motoryat_v2_session')||'null')}catch{}
  if(!session?.token||Date.now()>=session.expiresAt){setSaveMessage('Taslak kaydı için önce giriş yapın: /giris');return}
  setSaving(true);
  try{
   const response=await fetch('/api/v2/listing-drafts',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+session.token},body:JSON.stringify({kind,vessel,values,equipment:selected,storeId:storeId||null})});
   const result=await response.json();
   setSaveMessage(response.ok?'Taslak kaydedildi. İlan yayınlanmadı.':result.error||'Kayıt başarısız.');
  }catch{setSaveMessage('Taslak servisine ulaşılamıyor.')}finally{setSaving(false)}
 }
 return <div className="v2ListingForm">
  <p className="v2ListingDraftNotice">V2 form taslağıdır. Taslak kayıt özelliği V2 Supabase etkinleştirilince çalışır. Bu form hiçbir ilanı doğrudan yayınlamaz.</p>
  <div className="v2ListingTwo">
   <label>İlan türü<select value={kind} onChange={e=>setKind(e.target.value)}><option>Satılık</option><option>Kiralık</option></select></label>
   <label>Tekne türü<select value={vessel} onChange={e=>setVessel(e.target.value)}>{vesselTypes.map(t=><option key={t}>{t}</option>)}</select></label>
  </div>
  <h2>İlan Bilgileri</h2>
  <div className="v2ListingTwo">
   {['İlan başlığı','Fiyat','Para birimi','Konum','Durum',...(kind==='Kiralık'?['Kiralama tipi','Fiyat dönemi']:['Satış modeli','Takas'])].map(key=><label key={key}>{key}{key==='Kiralama tipi'?<select value={values[key]||''} onChange={e=>update(key,e.target.value)}><option value="">Seçiniz</option>{charterModes.map(v=><option key={v}>{v}</option>)}</select>:key==='Fiyat dönemi'?<select value={values[key]||''} onChange={e=>update(key,e.target.value)}><option value="">Seçiniz</option><option>Günlük</option><option>Haftalık</option></select>:key==='Durum'?<select value={values[key]||''} onChange={e=>update(key,e.target.value)}><option value="">Seçiniz</option><option>Yeni</option><option>İkinci El</option><option>Refit</option></select>:key==='Satış modeli'?<select value={values[key]||''} onChange={e=>update(key,e.target.value)}><option value="">Seçiniz</option><option>Doğrudan Satış</option><option>Yeni İnşa</option><option>Proje</option><option>Sipariş Üzerine</option></select>:<input value={values[key]||''} onChange={e=>update(key,e.target.value)} placeholder={key}/>}</label>)}
  </div>
  <h2>Teknik Bilgiler</h2>
  <div className="v2ListingTwo">{fields.map(key=><label key={key}>{key}<input value={values[key]||''} onChange={e=>update(key,e.target.value)} placeholder={key}/></label>)}</div>
  <h2>Özellikler ve Donanımlar</h2>
  {Object.entries(equipmentGroups).map(([group,items])=><fieldset key={group} className="v2ListingEquipment"><legend>{group}</legend><div>{items.map(item=><label key={item}><input type="checkbox" checked={selected.includes(item)} onChange={e=>toggle(item,e.target.checked)}/>{item}</label>)}</div></fieldset>)}
  <h2>Açıklama</h2>
  <label>İlan açıklaması<textarea rows={6} value={values.description||''} onChange={e=>update('description',e.target.value)} placeholder="Teknenin açıklamasını yazın."/></label>
  <h2>Fotoğraf ve Video</h2>
  <p className="v2ListingDraftNotice">Dosya yükleme ve kalıcı medya kaydı, ilan yayınlama altyapısı bağlandığında etkinleştirilecektir.</p>
  <label>Mağaza kimliği (isteğe bağlı, yetki kontrolüne tabidir)<input value={storeId} onChange={e=>setStoreId(e.target.value)} placeholder="Yetkili mağaza UUID"/></label>
  <button type="button" disabled={saving} onClick={saveDraft}>{saving?'Kaydediliyor…':'Taslak Olarak Kaydet'}</button>
  {saveMessage&&<p role="status" className="v2ListingDraftNotice">{saveMessage}</p>}
  <button type="button" onClick={()=>setPreview(p=>!p)}>{preview?'Önizlemeyi Kapat':'Form Önizlemesini Gör'}</button>
  {preview&&<div className="v2ListingFormResult"><h3>{values['İlan başlığı']||'İlan başlığı belirtilmedi'}</h3><p>{kind} · {vessel} · {values['Fiyat']||'Fiyat Sorunuz'}</p><h4>Girilen bilgiler</h4><dl>{Object.entries(values).filter(([k,v])=>v&&k!=='description').map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><h4>Seçilen donanımlar ({selected.length})</h4><p>{selected.join(' · ')||'Henüz özellik seçilmedi.'}</p></div>}
 </div>;
}
