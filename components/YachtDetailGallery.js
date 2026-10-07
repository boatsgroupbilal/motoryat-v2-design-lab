'use client';

import {useRef,useState} from 'react';

export default function YachtDetailGallery({images,title,totalCount}){
  const gallery=[...new Set((images||[]).filter(Boolean))];
  const [active,setActive]=useState(0);
  const [open,setOpen]=useState(false);
  const touchStart=useRef(null);

  if(!gallery.length) return null;

  const move=(delta,e)=>{
    e?.stopPropagation();
    setActive(v=>(v+delta+gallery.length)%gallery.length);
  };

  const onTouchStart=(e)=>{
    touchStart.current=e.touches?.[0]?.clientX??null;
  };

  const onTouchEnd=(e)=>{
    if(touchStart.current==null) return;
    const end=e.changedTouches?.[0]?.clientX??touchStart.current;
    const delta=end-touchStart.current;
    touchStart.current=null;
    if(Math.abs(delta)<45) return;
    setActive(v=>delta<0?(v+1)%gallery.length:(v-1+gallery.length)%gallery.length);
  };

  const preview=gallery.slice(0,3);

  return <>
    <section className="syGalleryRef" aria-label={title+' görsel galerisi'}>
      <div className="syGalleryRefHero" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {gallery.length>1&&<button className="syGalleryRefArrow left" type="button" onClick={(e)=>move(-1,e)} aria-label="Önceki fotoğraf">‹</button>}

        <button className="syGalleryRefMain" type="button" onClick={()=>setOpen(true)} aria-label="Fotoğrafı büyüt">
          <img src={gallery[active]} alt={title+' '+(active+1)}/>
        </button>

        {gallery.length>1&&<button className="syGalleryRefArrow right" type="button" onClick={(e)=>move(1,e)} aria-label="Sonraki fotoğraf">›</button>}

        <div className="syGalleryRefCount">▣ <b>{totalCount||gallery.length}</b> RESİM</div>
        <button className="syGalleryRefFullscreen" type="button" onClick={()=>setOpen(true)} aria-label="Tam ekran galeri">⛶</button>
      </div>

      {preview.length>1&&<div className="syGalleryRefPreviewRow" aria-label="Galeri önizlemeleri">
        {preview.map((src,i)=><button
          key={src+i}
          type="button"
          className={i===active?'active':''}
          onClick={()=>setActive(i)}
          aria-label={(i+1)+'. fotoğrafı seç'}
        >
          <img src={src} alt={title+' küçük görsel '+(i+1)}/>
          {i===2&&gallery.length>3?<span>+{gallery.length-3}</span>:null}
        </button>)}
      </div>}
    </section>

    {open&&<div className="syGalleryLightbox" role="dialog" aria-modal="true" aria-label="İlan fotoğraf galerisi" onClick={()=>setOpen(false)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <button className="syGalleryClose" type="button" onClick={()=>setOpen(false)} aria-label="Kapat">×</button>
      {gallery.length>1&&<button className="syGalleryPrev" type="button" onClick={(e)=>move(-1,e)} aria-label="Önceki">‹</button>}
      <img src={gallery[active]} alt={title+' büyük görünüm'} onClick={e=>e.stopPropagation()}/>
      {gallery.length>1&&<button className="syGalleryNext" type="button" onClick={(e)=>move(1,e)} aria-label="Sonraki">›</button>}
      <div className="syGalleryCounter">{active+1} / {gallery.length}</div>
    </div>}
  </>;
}
