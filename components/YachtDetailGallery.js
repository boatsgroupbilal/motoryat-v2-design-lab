'use client';

import {useState} from 'react';

export default function YachtDetailGallery({images,title}){
  const safe=(images||[]).filter(Boolean);
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState(0);

  const show=(i)=>{setActive(i);setOpen(true)};
  const prev=(e)=>{e.stopPropagation();setActive(v=>(v-1+safe.length)%safe.length)};
  const next=(e)=>{e.stopPropagation();setActive(v=>(v+1)%safe.length)};

  return <>
    <section className="sySimpleGallery" aria-label={title+' görsel galerisi'}>
      <button className="sySimpleGalleryMain" type="button" onClick={()=>show(0)} aria-label="Ana fotoğrafı büyüt">
        <img src={safe[0]} alt={title}/>
        <span>{safe.length} FOTOĞRAF</span>
      </button>

      <div className="sySimpleGalleryThumbs">
        <button type="button" onClick={()=>show(1)} aria-label="İkinci fotoğrafı büyüt">
          <img src={safe[1]||safe[0]} alt={title+' görünüm 2'}/>
        </button>
        <button type="button" onClick={()=>show(2)} aria-label="Üçüncü fotoğrafı büyüt">
          <img src={safe[2]||safe[0]} alt={title+' görünüm 3'}/>
          <span>TÜM FOTOĞRAFLAR</span>
        </button>
      </div>
    </section>

    {open&&<div className="syGalleryLightbox" role="dialog" aria-modal="true" aria-label="İlan fotoğraf galerisi" onClick={()=>setOpen(false)}>
      <button className="syGalleryClose" type="button" onClick={()=>setOpen(false)} aria-label="Kapat">×</button>
      {safe.length>1&&<button className="syGalleryPrev" type="button" onClick={prev} aria-label="Önceki">‹</button>}
      <img src={safe[active]} alt={title+' büyük görünüm'} onClick={e=>e.stopPropagation()}/>
      {safe.length>1&&<button className="syGalleryNext" type="button" onClick={next} aria-label="Sonraki">›</button>}
      <div className="syGalleryCounter">{active+1} / {safe.length}</div>
    </div>}
  </>
}
