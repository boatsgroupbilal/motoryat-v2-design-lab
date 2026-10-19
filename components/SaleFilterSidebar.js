'use client';

import {usePathname,useRouter,useSearchParams} from 'next/navigation';
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
    <div className="saleFilterSectionBody" id={'sale-filter-'+id} style={{display:open?'block':'none'}}>{children}</div>
  </div>;
}

export default function SaleFilterSidebar({vesselTypes=[],makers=[],years=[],locations=[],statuses=[]}){
  const [openId,setOpenId]=useState(null);
  const pathname=usePathname();
  const router=useRouter();
  const search=useSearchParams();
  const value=(key)=>search.get(key)||'';

  return <form className="saleFilterSidebar" aria-label="Arama Filtreleri" action={pathname} method="get">
    <h2>Arama Filtreleri</h2>

    <Section id="type" label="Tekne türü" openId={openId} setOpenId={setOpenId}>
      <select name="tip" defaultValue={value('tip')}><option value="">Tümü</option>{vesselTypes.map(x=><option value={x} key={x}>{x}</option>)}</select>
    </Section>

    <Section id="brand" label="Marka" openId={openId} setOpenId={setOpenId}>
      <select name="marka" defaultValue={value('marka')}><option value="">Tümü</option>{makers.map(x=><option value={x} key={x}>{x}</option>)}</select>
    </Section>

    <Section id="search" label="Tekne / model ara" openId={openId} setOpenId={setOpenId}>
      <input name="q" defaultValue={value('q')} type="search" placeholder="Tekne, marka veya model"/>
    </Section>

    <Section id="location" label="Konum" openId={openId} setOpenId={setOpenId}>
      <select name="konum" defaultValue={value('konum')}><option value="">Tüm konumlar</option>{locations.map(x=><option value={x} key={x}>{x}</option>)}</select>
    </Section>

    <Section id="length" label="Boy (metre)" openId={openId} setOpenId={setOpenId}>
      <div className="saleFilterPair"><input name="min_boy" defaultValue={value('min_boy')} inputMode="decimal" placeholder="En az"/><input name="max_boy" defaultValue={value('max_boy')} inputMode="decimal" placeholder="En çok"/></div>
    </Section>

    <Section id="year" label="Yıl" openId={openId} setOpenId={setOpenId}>
      <div className="saleFilterPair">
        <select name="min_yil" defaultValue={value('min_yil')}><option value="">En az</option>{[...years].reverse().map(x=><option value={x} key={'min-'+x}>{x}</option>)}</select>
        <select name="max_yil" defaultValue={value('max_yil')}><option value="">En çok</option>{years.map(x=><option value={x} key={'max-'+x}>{x}</option>)}</select>
      </div>
    </Section>

    <Section id="price" label="Fiyat" openId={openId} setOpenId={setOpenId}>
      <div className="saleFilterPair"><input name="min_fiyat" defaultValue={value('min_fiyat')} inputMode="numeric" placeholder="En az"/><input name="max_fiyat" defaultValue={value('max_fiyat')} inputMode="numeric" placeholder="En çok"/></div>
    </Section>

    <Section id="status" label="Durum" openId={openId} setOpenId={setOpenId}>
      <select name="durum" defaultValue={value('durum')}><option value="">Tümü</option>{statuses.map(x=><option value={x} key={x}>{x}</option>)}</select>
    </Section>

    <Section id="cabins" label="En az kabin" openId={openId} setOpenId={setOpenId}>
      <select name="min_kabin" defaultValue={value('min_kabin')}><option value="">Farketmez</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5+</option></select>
    </Section>

    <Section id="hours" label="En fazla motor saati" openId={openId} setOpenId={setOpenId}>
      <input name="max_saat" defaultValue={value('max_saat')} inputMode="numeric" placeholder="Örn. 500"/>
    </Section>

    <button type="submit" className="saleFilterApply">İlanları Göster</button>
    <button type="button" className="saleFilterClear" onClick={()=>router.push(pathname)}>Filtreleri Temizle</button>
  </form>;
}
