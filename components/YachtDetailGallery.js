'use client';

import {useState} from 'react';

export default function YachtDetailGallery({images,title}){
  const gallery=[...new Set((images||[]).filter(Boolean))];
  const [active,setActive]=useState(0);
  const [open,setOpen]=useState(false);

  if(!gallery.length) return null;

  const prev=(e)=>{
    e?.stopPropagation();
    setActive(v=>(v-1+gallery.length)%gallery.length);
  };
  const next=(e)=>{
    e?.stopPropagation();
    setActive(v=>(v+1)%gallery.length);
  };

  return <>
    <section className="syGalleryPro" aria-label={title+' görsel galerisi'}>
      <div className="syGalleryProHero">
        {gallery.length>1&&<button type="button" className="syGalleryProArrow left" onClick={prev} aria-label="Önceki fotoğraf">‹</button>}

        <button type="button" className="syGalleryProMain" onClick={()=>setOpen(true)} aria-label="Fotoğrafı büyüt">
          <img src={gallery[active]} alt={title+' '+(active+1)}/>
        </button>

        {gallery.length>1&&<button type="button" className="syGalleryProArrow right" onClick={next} aria-label="Sonraki fotoğraf">›</button>}

        <div className="syGalleryProCount">📷 <b>{gallery.length}</b> RESİM</div>
      </div>

      {gallery.length>1&&<div className="syGalleryProStrip">
        {gallery.map((src,i)=><button
          key={src+i}
          type="button"
          className={i===active?'active':''}
          onClick={()=>setActive(i)}
          aria-label={(i+1)+'. fotoğrafı seç'}
        >
          <img src={src} alt={title+' küçük görsel '+(i+1)}/>
        </button>)}
      </div>}
    </section>

    {open&&<div className="syGalleryLightbox" role="dialog" aria-modal="true" aria-label="İlan fotoğraf galerisi" onClick={()=>setOpen(false)}>
      <button className="syGalleryClose" type="button" onClick={()=>setOpen(false)} aria-label="Kapat">×</button>
      {gallery.length>1&&<button className="syGalleryPrev" type="button" onClick={prev} aria-label="Önceki">‹</button>}
      <img src={gallery[active]} alt={title+' büyük görünüm'} onClick={e=>e.stopPropagation()}/>
      {gallery.length>1&&<button className="syGalleryNext" type="button" onClick={next} aria-label="Sonraki">›</button>}
      <div className="syGalleryCounter">{active+1} / {gallery.length}</div>
    </div>}
  </>
}
