'use client';
import {useState} from 'react';
export default function V2LoginForm(){
 const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[status,setStatus]=useState(''),[busy,setBusy]=useState(false);
 const base=process.env.NEXT_PUBLIC_MOTORYAT_V2_SUPABASE_URL;
 const key=process.env.NEXT_PUBLIC_MOTORYAT_V2_SUPABASE_ANON_KEY;
 async function submit(event){
  event.preventDefault();
  if(!base||!key){setStatus('V2 kullanıcı girişi henüz etkin değil.');return}
  setBusy(true);setStatus('');
  try{
   const response=await fetch(base.replace(/\/$/,'')+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:key,'Content-Type':'application/json'},body:JSON.stringify({email,password})});
   const result=await response.json();
   if(!response.ok||!result.access_token){setStatus('Giriş başarısız. E-posta ve şifrenizi kontrol edin.');return}
   sessionStorage.setItem('motoryat_v2_session',JSON.stringify({token:result.access_token,expiresAt:Date.now()+Math.max(0,(result.expires_in||3600)-60)*1000}));
   window.location.assign('/ilan-ver');
  }catch{setStatus('Giriş sunucusuna erişilemiyor.')}finally{setBusy(false)}
 }
 return <form className="loginCard" onSubmit={submit}>
  <img src="/motoryat-logo-real.png" alt="Motoryat"/>
  <h1>Hesabınıza giriş yapın</h1>
  <p>İlan taslaklarını yönetmek için V2 hesabınızla giriş yapın.</p>
  <div className="formField"><label htmlFor="v2-email">E-posta</label><input id="v2-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} autoComplete="email"/></div>
  <div className="formField"><label htmlFor="v2-password">Şifre</label><input id="v2-password" type="password" required value={password} onChange={e=>setPassword(e.target.value)} autoComplete="current-password"/></div>
  <button className="formSubmit" type="submit" disabled={busy}>{busy?'Giriş yapılıyor…':'Giriş Yap'}</button>
  {status&&<p role="status">{status}</p>}
  <div className="loginLinks"><a href="/ilan-ver">İlan Formu</a><a href="/magaza-ac">Mağaza Aç</a></div>
 </form>;
}
