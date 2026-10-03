'use client';

import {useState} from 'react';

export default function YachtDetailGallery({images,title}){
  const safe=[...new Set((images||[]).filter(Boolean))];
  const visible=safe.slice(0,3);
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState(0);

  const show=(i)=>{setActive(i);setOpen(true)};
  const prev=(e)=>{e.stopPropagation();setActive(v=>(v-1+safe.length)%safe.length)};
  const next=(e)=>{e.stopPropagation();setActive(v=>(v+1)%safe.length)};

  return <>
    <section className="sySimpleGallery" aria-label={title+' görsel galerisi'}>
      <button className="sySimpleGalleryMain" type="button" onClick={()=>show(0)} aria-label="Ana fotoğrafı büyüt">
        <img src={visible[0]} alt={title}/>
        <span>📷 {safe.length} FOTOĞRAF</span>
      </button>

      {visible.length>1&&<div className={"sySimpleGalleryThumbs "+(visible.length===2?"single":"")}>
        {visible.slice(1).map((src,i)=><button key={src+i} type="button" onClick={()=>show(i+1)} aria-label={(i+2)+'. fotoğrafı büyüt'}>
          <img src={src} alt={title+' görünüm '+(i+2)}/>
          {i===visible.slice(1).length-1&&<span>TÜM FOTOĞRAFLAR · {safe.length}</span>}
        </button>)}
      </div>}
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
