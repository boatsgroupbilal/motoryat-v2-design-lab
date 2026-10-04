'use client';

import {useEffect,useState} from 'react';

const saleFilters=[
  ['TÜR','Tüm yatlar'],
  ['BOY','0 m — 100 m+'],
  ['FİYAT','Tüm fiyatlar'],
  ['YIL','Tüm yıllar'],
  ['TERSANE','Tümü'],
  ['KONUM','Tümü']
];

const charterFilters=[
  ['DESTİNASYON','Akdeniz'],
  ['TARİH','Tarih seçin'],
  ['MİSAFİR','2+'],
  ['YAT TÜRÜ','Tümü'],
  ['BOY','Tümü'],
  ['FİYAT','Tümü']
];

export default function MobileListingFilters({type='sale'}){
  const [open,setOpen]=useState(false);
  const filters=type==='charter'?charterFilters:saleFilters;
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
    <button
      type="button"
      className="mobileListingFilterTab"
      aria-expanded={open}
      aria-controls="mobile-listing-filter-panel"
      onClick={()=>setOpen(true)}
    >
      <span>FİLTRELER</span>
    </button>

    <div
      className={'mobileListingFilterOverlay'+(open?' open':'')}
      onClick={()=>setOpen(false)}
      aria-hidden="true"
    />

    <aside
      id="mobile-listing-filter-panel"
      className={'mobileListingFilterDrawer'+(open?' open':'')}
      aria-hidden={!open}
      aria-label={title}
    >
      <div className="mobileListingFilterHead">
        <div>
          <small>ARAMAYI DARALT</small>
          <h2>{title}</h2>
        </div>
        <button type="button" onClick={()=>setOpen(false)} aria-label="Filtreleri kapat">×</button>
      </div>

      <div className="mobileListingFilterFields">
        {filters.map(([label,value])=>
          <button type="button" className="mobileListingFilterField" key={label}>
            <small>{label}</small>
            <b>{value}</b>
            <span>›</span>
          </button>
        )}
      </div>

      <div className="mobileListingFilterActions">
        <button type="button" className="mobileListingFilterClear">TEMİZLE</button>
        <button type="button" className="mobileListingFilterApply" onClick={()=>setOpen(false)}>SONUÇLARI GÖSTER</button>
      </div>
    </aside>
  </>;
}
