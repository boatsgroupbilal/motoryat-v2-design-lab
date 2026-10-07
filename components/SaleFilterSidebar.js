'use client';

import {useState} from 'react';

function Section({id,label,openId,setOpenId,children}){
  const open=openId===id;
  return <div className={'saleFilterSection'+(open?' open':'')}>
    <button
      type="button"
      className="saleFilterSectionHead"
      aria-expanded={open}
      aria-controls={'sale-filter-'+id}
      onClick={()=>setOpenId(open?null:id)}
    >
      <span>{label}</span>
      <b aria-hidden="true">{open?'−':'+'}</b>
    </button>
    {open?<div className="saleFilterSectionBody" id={'sale-filter-'+id}>{children}</div>:null}
  </div>;
}

export default function SaleFilterSidebar({vesselTypes=[],makers=[],years=[],locations=[],statuses=[]}){
  const [openId,setOpenId]=useState(null);

  return <aside className="saleFilterSidebar" aria-label="Arama Filtreleri">
    <h2>Arama Filtreleri</h2>

    <Section id="type" label="Tekne türü" openId={openId} setOpenId={setOpenId}>
      <select defaultValue=""><option value="">Tümü</option>{vesselTypes.map(x=><option key={x}>{x}</option>)}</select>
    </Section>

    <Section id="brand" label="Marka" openId={openId} setOpenId={setOpenId}>
      <select defaultValue=""><option value="">Tümü</option>{makers.map(x=><option key={x}>{x}</option>)}</select>
    </Section>

    <Section id="search" label="Tekne / model ara" openId={openId} setOpenId={setOpenId}>
      <input type="search" placeholder="Tekne, marka veya model"/>
    </Section>

    <Section id="location" label="Konum" openId={openId} setOpenId={setOpenId}>
      <select defaultValue=""><option value="">Tüm konumlar</option>{locations.map(x=><option key={x}>{x}</option>)}</select>
    </Section>

    <Section id="length" label="Boy (metre)" openId={openId} setOpenId={setOpenId}>
      <div className="saleFilterPair"><input inputMode="decimal" placeholder="En az"/><input inputMode="decimal" placeholder="En çok"/></div>
    </Section>

    <Section id="year" label="Yıl" openId={openId} setOpenId={setOpenId}>
      <div className="saleFilterPair">
        <select defaultValue=""><option value="">En az</option>{[...years].reverse().map(x=><option key={'min-'+x}>{x}</option>)}</select>
        <select defaultValue=""><option value="">En çok</option>{years.map(x=><option key={'max-'+x}>{x}</option>)}</select>
      </div>
    </Section>

    <Section id="price" label="Fiyat (EUR)" openId={openId} setOpenId={setOpenId}>
      <div className="saleFilterPair"><input inputMode="numeric" placeholder="En az"/><input inputMode="numeric" placeholder="En çok"/></div>
    </Section>

    <Section id="status" label="Durum" openId={openId} setOpenId={setOpenId}>
      <select defaultValue=""><option value="">Tümü</option>{statuses.map(x=><option key={x}>{x}</option>)}</select>
    </Section>

    <Section id="cabins" label="En az kabin" openId={openId} setOpenId={setOpenId}>
      <select defaultValue=""><option value="">Farketmez</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select>
    </Section>

    <Section id="hours" label="En fazla motor saati" openId={openId} setOpenId={setOpenId}>
      <input inputMode="numeric" placeholder="Örn. 500"/>
    </Section>

    <button type="button" className="saleFilterApply">İlanları Göster</button>
    <button type="button" className="saleFilterClear">Filtreleri Temizle</button>
  </aside>;
}
