'use client';
import {usePathname,useRouter,useSearchParams} from 'next/navigation';
import {useState} from 'react';

const sections=[
 ['type','Tekne türü', 'tip'],
 ['destination','Destinasyon','destinasyon'],
 ['length','Boy (metre)',null],
 ['price','Fiyat',null],
 ['year','Yıl',null]
];
export default function CharterFilterSidebar({types=[],destinations=[],years=[]}){
 const [opened,setOpened]=useState('type');
 const pathname=usePathname(),router=useRouter(),search=useSearchParams();
 const value=key=>search.get(key)||'';
 return <form className="saleFilterSidebar charterFilterSidebar" aria-label="Kiralık yat filtreleri" action={pathname} method="get">
  <h2>Arama Filtreleri</h2>
  {sections.map(([id,label,key])=><div className="saleFilterSection" key={id}>
   <button type="button" className="saleFilterSectionHead" aria-expanded={opened===id} onClick={()=>setOpened(opened===id?null:id)}><span>{label}</span><b aria-hidden="true">{opened===id?'−':'+'}</b></button>
   <div className="saleFilterSectionBody" style={{display:opened===id?'block':'none'}}>
    {id==='type'&&<select name="tip" defaultValue={value('tip')}><option value="">Tümü</option>{types.map(t=><option key={t} value={t}>{t}</option>)}</select>}
    {id==='destination'&&<select name="destinasyon" defaultValue={value('destinasyon')}><option value="">Tüm destinasyonlar</option>{destinations.map(t=><option key={t} value={t}>{t}</option>)}</select>}
    {id==='length'&&<div className="saleFilterPair"><input name="min_boy" defaultValue={value('min_boy')} inputMode="decimal" placeholder="En az"/><input name="max_boy" defaultValue={value('max_boy')} inputMode="decimal" placeholder="En çok"/></div>}
    {id==='price'&&<div className="saleFilterPair"><input name="min_fiyat" defaultValue={value('min_fiyat')} inputMode="numeric" placeholder="En az"/><input name="max_fiyat" defaultValue={value('max_fiyat')} inputMode="numeric" placeholder="En çok"/></div>}
    {id==='year'&&<div className="saleFilterPair"><select name="min_yil" defaultValue={value('min_yil')}><option value="">En az</option>{[...years].reverse().map(t=><option key={t} value={t}>{t}</option>)}</select><select name="max_yil" defaultValue={value('max_yil')}><option value="">En çok</option>{years.map(t=><option key={t} value={t}>{t}</option>)}</select></div>}
   </div>
  </div>)}
  <button type="submit" className="saleFilterApply">İlanları Göster</button>
  <button type="button" className="saleFilterClear" onClick={()=>router.push(pathname)}>Filtreleri Temizle</button>
 </form>;
}
