'use client';

import {useState} from 'react';

export default function YachtDetailGallery({images,title}){
  const safe=[...new Set((images||[]).filter(Boolean))];
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState(0);

  if(!safe.length) return null;

  const show=(i)=>{setActive(i);setOpen(true)};
  const prev=(e)=>{e.stopPropagation();setActive(v=>(v-1+safe.length)%safe.length)};
  const next=(e)=>{e.stopPropagation();setActive(v=>(v+1)%safe.length)};

  return <>
    <section className="syGalleryClean" aria-label={title+' görsel galerisi'}>
      <button className="syGalleryCleanMain" type="button" onClick={()=>show(0)} aria-label="Ana fotoğrafı büyüt">
        <img src={safe[0]} alt={title}/>
        <span>📷 {safe.length} FOTOĞRAF</span>
      </button>

      {safe.length>1&&<div className="syGalleryCleanStrip">
        {safe.slice(0,5).map((src,i)=><button key={src+i} type="button" onClick={()=>show(i)} aria-label={(i+1)+'. fotoğrafı büyüt'}>
          <img src={src} alt={title+' görünüm '+(i+1)}/>
          {i===4&&safe.length>5&&<span>+{safe.length-5}</span>}
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
