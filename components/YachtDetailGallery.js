'use client';

import {useRef,useState} from 'react';

export default function YachtDetailGallery({images,title}){
  const gallery=[...new Set((images||[]).filter(Boolean))];
  const [active,setActive]=useState(0);
  const [open,setOpen]=useState(false);
  const stripRef=useRef(null);

  if(!gallery.length) return null;

  const prev=(e)=>{
    e?.stopPropagation();
    setActive(v=>(v-1+gallery.length)%gallery.length);
  };
  const next=(e)=>{
    e?.stopPropagation();
    setActive(v=>(v+1)%gallery.length);
  };
  const select=(i)=>{
    setActive(i);
    const strip=stripRef.current;
    const node=strip?.children?.[i];
    if(strip&&node){
      const left=node.offsetLeft-(strip.clientWidth-node.clientWidth)/2;
      strip.scrollTo({left,behavior:'smooth'});
    }
  };

  return <>
    <section className="syGalleryRef" aria-label={title+' görsel galerisi'}>
      <div className="syGalleryRefHero">
        {gallery.length>1&&<button className="syGalleryRefArrow left" type="button" onClick={prev} aria-label="Önceki fotoğraf">‹</button>}

        <button className="syGalleryRefMain" type="button" onClick={()=>setOpen(true)} aria-label="Fotoğrafı büyüt">
          <img src={gallery[active]} alt={title+' '+(active+1)}/>
        </button>

        {gallery.length>1&&<button className="syGalleryRefArrow right" type="button" onClick={next} aria-label="Sonraki fotoğraf">›</button>}

        <div className="syGalleryRefCount">▣ <b>{gallery.length}</b> RESİM</div>
        <button className="syGalleryRefFullscreen" type="button" onClick={()=>setOpen(true)} aria-label="Tam ekran galeri">⛶</button>
      </div>

      {gallery.length>1&&<>
        <div className="syGalleryRefStrip" ref={stripRef}>
          {gallery.map((src,i)=><button
            key={src+i}
            type="button"
            className={i===active?'active':''}
            onClick={()=>select(i)}
            aria-label={(i+1)+'. fotoğrafı seç'}
          >
            <img src={src} alt={title+' küçük görsel '+(i+1)}/>
          </button>)}
        </div>
        <div className="syGalleryRefProgress">
          <span style={{width:Math.max(7,100/gallery.length)+'%',left:(active*(100/gallery.length))+'%'}}></span>
        </div>
      </>}
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
