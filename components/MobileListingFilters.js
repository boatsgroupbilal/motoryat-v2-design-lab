'use client';

import {useEffect,useState} from 'react';
import {usePathname,useRouter,useSearchParams} from 'next/navigation';

export default function MobileListingFilters({type='sale'}){
  const [open,setOpen]=useState(false);
  const pathname=usePathname();
  const router=useRouter();
  const search=useSearchParams();
  const value=(key)=>search.get(key)||'';
  const title=type==='charter'?'Kiralık Yat Filtreleri':'Satılık Yat Filtreleri';

  useEffect(()=>{
    if(!open) return;
    const prev=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const onKey=e=>{if(e.key==='Escape') setOpen(false)};
    window.addEventListener('keydown',onKey);
    return ()=>{
      document.body.style.overflow=prev;
      window.removeEventListener('keydown',onKey);
    };
  },[open]);

  return <>
    <button type="button" className="mobileListingFilterTab" aria-expanded={open} aria-controls="mobile-listing-filter-panel" onClick={()=>setOpen(true)}>
      <span>FİLTRELER</span>
    </button>

    <div className={'mobileListingFilterOverlay'+(open?' open':'')} onClick={()=>setOpen(false)} aria-hidden="true"/>

    <aside id="mobile-listing-filter-panel" className={'mobileListingFilterDrawer'+(open?' open':'')} aria-hidden={!open} aria-label={title}>
      <div className="mobileListingFilterHead">
        <div><small>ARAMAYI DARALT</small><h2>{title}</h2></div>
        <button type="button" onClick={()=>setOpen(false)} aria-label="Filtreleri kapat">×</button>
      </div>

      <form className="mobileListingFilterFields" action={pathname} method="get">
        <label className="mobileListingFilterField">
          <small>TEKNE / MODEL</small>
          <input name="q" defaultValue={value('q')} placeholder="Ara"/>
        </label>

        <label className="mobileListingFilterField">
          <small>YAT TÜRÜ</small>
          <input name="tip" defaultValue={value('tip')} placeholder="Motoryat, Gulet..."/>
        </label>

        <label className="mobileListingFilterField">
          <small>{type==='charter'?'DESTİNASYON':'KONUM'}</small>
          <input name={type==='charter'?'destinasyon':'konum'} defaultValue={value(type==='charter'?'destinasyon':'konum')} placeholder="Şehir / bölge"/>
        </label>

        <div className="mobileListingFilterField mobileListingFilterRange">
          <small>BOY (m)</small>
          <div><input name="min_boy" defaultValue={value('min_boy')} inputMode="decimal" placeholder="Min"/><input name="max_boy" defaultValue={value('max_boy')} inputMode="decimal" placeholder="Max"/></div>
        </div>

        {type==='sale'?<div className="mobileListingFilterField mobileListingFilterRange">
          <small>YIL</small>
          <div><input name="min_yil" defaultValue={value('min_yil')} inputMode="numeric" placeholder="Min"/><input name="max_yil" defaultValue={value('max_yil')} inputMode="numeric" placeholder="Max"/></div>
        </div>:null}

        <div className="mobileListingFilterField mobileListingFilterRange">
          <small>FİYAT</small>
          <div><input name="min_fiyat" defaultValue={value('min_fiyat')} inputMode="numeric" placeholder="Min"/><input name="max_fiyat" defaultValue={value('max_fiyat')} inputMode="numeric" placeholder="Max"/></div>
        </div>

        <div className="mobileListingFilterActions">
          <button type="button" className="mobileListingFilterClear" onClick={()=>{setOpen(false);router.push(pathname)}}>TEMİZLE</button>
          <button type="submit" className="mobileListingFilterApply">SONUÇLARI GÖSTER</button>
        </div>
      </form>
    </aside>
  </>;
}
