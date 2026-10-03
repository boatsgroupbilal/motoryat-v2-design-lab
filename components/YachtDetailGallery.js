'use client';

import {useState} from 'react';

export default function YachtDetailGallery({images,title,meta,year,status,price,isCharter=false}){
  const safe=(images||[]).filter(Boolean);
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState(0);

  const show=(i)=>{setActive(i);setOpen(true)};
  const prev=(e)=>{e.stopPropagation();setActive(v=>(v-1+safe.length)%safe.length)};
  const next=(e)=>{e.stopPropagation();setActive(v=>(v+1)%safe.length)};

  return <>
    <section className="syCompactGallery" aria-label={title+' görsel galerisi'}>
      <button className="syCompactMain" type="button" onClick={()=>show(0)}>
        <img src={safe[0]} alt={title}/>
        <span className="syCompactMediaCount">▣ {safe.length}</span>
      </button>

      <div className="syCompactThumbs">
        <button type="button" onClick={()=>show(1)}>
          <img src={safe[1]||safe[0]} alt={title+' görünüm 2'}/>
        </button>
        <button type="button" onClick={()=>show(2)}>
          <img src={safe[2]||safe[0]} alt={title+' görünüm 3'}/>
          <span>GALERİ</span>
        </button>
      </div>

      <div className="syCompactInfo">
        <div className="syCompactInfoBody">
          <h1>{title}</h1>
          <p>{meta}</p>
          <div className="syCompactFacts">
            <div><small>YIL</small><b>{year}</b></div>
            <div><small>DURUM</small><b>{status}</b></div>
          </div>
          <div className="syCompactPrice">
            <small>{isCharter?'CHARTER FİYATI':'FİYATI'}</small>
            <strong>{price}</strong>
          </div>
        </div>
        <div className={"syCompactStatus "+(isCharter?'charter':'sale')}>
          <span>›</span>
          <b>{isCharter?'KİRALIK İLAN':'SATIŞ İLANI'}</b>
        </div>
      </div>
    </section>

    {open&&<div className="syGalleryLightbox" role="dialog" aria-modal="true" onClick={()=>setOpen(false)}>
      <button className="syGalleryClose" type="button" onClick={()=>setOpen(false)} aria-label="Kapat">×</button>
      {safe.length>1&&<button className="syGalleryPrev" type="button" onClick={prev} aria-label="Önceki">‹</button>}
      <img src={safe[active]} alt={title+' büyük görünüm'} onClick={e=>e.stopPropagation()}/>
      {safe.length>1&&<button className="syGalleryNext" type="button" onClick={next} aria-label="Sonraki">›</button>}
      <div className="syGalleryCounter">{active+1} / {safe.length}</div>
    </div>}
  </>
}
