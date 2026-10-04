'use client';

import {useEffect,useRef,useState} from 'react';

export default function DemoMosaicGallery({
  title='Yat',
  images=[],
  photoCount,
  videoCount=1,
  videoSrc='/listings/grande-mare/gm42/walkthrough.mp4'
}){
  const fallback=[
    '/sale-yener-35.webp',
    '/sale-euro-700.webp',
    '/sale-euro-850.webp',
    '/sale-euro-760.webp',
    '/charter-luna-hero.webp'
  ];
  const unique=[...new Set([...(images||[]),...fallback].filter(Boolean))];
  const gallery=unique.slice(0,Math.max(5,unique.length));
  const shown=[gallery[0],gallery[1],gallery[2],gallery[3],gallery[4]];
  const totalPhotos=photoCount||gallery.length;

  const [active,setActive]=useState(null);
  const [videoOpen,setVideoOpen]=useState(false);
  const touchStart=useRef(null);

  useEffect(()=>{
    if(active===null&&!videoOpen) return;
    const onKey=e=>{
      if(e.key==='Escape'){setActive(null);setVideoOpen(false)}
      if(active!==null&&e.key==='ArrowLeft') setActive(v=>(v-1+gallery.length)%gallery.length);
      if(active!==null&&e.key==='ArrowRight') setActive(v=>(v+1)%gallery.length);
    };
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[active,videoOpen,gallery.length]);

  const move=(delta,e)=>{
    e?.stopPropagation();
    setActive(v=>(v+delta+gallery.length)%gallery.length);
  };

  const onTouchStart=e=>{
    touchStart.current=e.touches?.[0]?.clientX??null;
  };
  const onTouchEnd=e=>{
    if(active===null||touchStart.current==null) return;
    const end=e.changedTouches?.[0]?.clientX??touchStart.current;
    const delta=end-touchStart.current;
    touchStart.current=null;
    if(Math.abs(delta)<45) return;
    setActive(v=>delta<0?(v+1)%gallery.length:(v-1+gallery.length)%gallery.length);
  };

  return <>
    <section className="demoMosaicGallery" aria-label={title+' galerisi'}>
      <button className="demoMosaicMain" type="button" onClick={()=>setActive(0)} aria-label="Ana fotoğrafı büyüt">
        <img src={shown[0]} alt={title+' ana görünüm'}/>
        <span className="demoMosaicStatus">SATILIK</span>
      </button>

      <div className="demoMosaicSide">
        <button className="demoMosaicTile demoMosaicVideo" type="button" onClick={()=>setVideoOpen(true)} aria-label="Videoları izle">
          <img src={shown[1]} alt={title+' video önizleme'}/>
          <span className="demoMosaicVideoShade">
            <i className="demoMosaicPlay">▶</i>
            <b>VİDEOLARI İZLE ({videoCount})</b>
          </span>
        </button>

        <button className="demoMosaicTile" type="button" onClick={()=>setActive(2)} aria-label="Fotoğrafı büyüt">
          <img src={shown[2]} alt={title+' üst görünüm'}/>
        </button>

        <button className="demoMosaicTile" type="button" onClick={()=>setActive(3)} aria-label="Fotoğrafı büyüt">
          <img src={shown[3]} alt={title+' detay görünüm'}/>
        </button>

        <button className="demoMosaicTile demoMosaicCountTile" type="button" onClick={()=>setActive(4)} aria-label="Tüm fotoğrafları gör">
          <img src={shown[4]} alt={title+' kıç görünüm'}/>
          <span className="demoMosaicCount">▣ <b>{totalPhotos} FOTOĞRAF</b></span>
        </button>
      </div>
    </section>

    {active!==null&&<div className="demoMosaicModal" role="dialog" aria-modal="true" aria-label="Fotoğraf galerisi" onClick={()=>setActive(null)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <button className="demoMosaicClose" type="button" onClick={()=>setActive(null)} aria-label="Kapat">×</button>
      {gallery.length>1&&<button className="demoMosaicPrev" type="button" onClick={e=>move(-1,e)} aria-label="Önceki fotoğraf">‹</button>}
      <img src={gallery[active]} alt={title+' büyük görünüm '+(active+1)} onClick={e=>e.stopPropagation()}/>
      {gallery.length>1&&<button className="demoMosaicNext" type="button" onClick={e=>move(1,e)} aria-label="Sonraki fotoğraf">›</button>}
      <div className="demoMosaicCounter">{active+1} / {gallery.length}</div>
    </div>}

    {videoOpen&&<div className="demoMosaicModal" role="dialog" aria-modal="true" aria-label="Yat videosu" onClick={()=>setVideoOpen(false)}>
      <button className="demoMosaicClose" type="button" onClick={()=>setVideoOpen(false)} aria-label="Kapat">×</button>
      <video className="demoMosaicModalVideo" controls autoPlay playsInline poster={shown[1]} onClick={e=>e.stopPropagation()}>
        <source src={videoSrc} type="video/mp4"/>
      </video>
    </div>}
  </>;
}
