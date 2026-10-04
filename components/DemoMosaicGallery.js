'use client';

import {useState} from 'react';

const media=[
  {type:'image',src:'/sale-yener-35.webp',alt:'Demo Yacht 42 ana görünüm'},
  {type:'video',src:'/listings/grande-mare/gm42/walkthrough.mp4',poster:'/sale-euro-700.webp',alt:'Demo Yacht 42 video'},
  {type:'image',src:'/sale-euro-850.webp',alt:'Demo Yacht 42 üst görünüm'},
  {type:'image',src:'/sale-euro-760.webp',alt:'Demo Yacht 42 tersane görünümü'},
  {type:'image',src:'/charter-luna-hero.webp',alt:'Demo Yacht 42 kıç görünüm'}
];

export default function DemoMosaicGallery(){
  const [active,setActive]=useState(null);
  const open=item=>setActive(item);
  const close=()=>setActive(null);

  return <>
    <div className="demoMosaicGallery">
      <button className="demoMosaicMain" type="button" onClick={()=>open(media[0])} aria-label="Ana fotoğrafı büyüt">
        <img src={media[0].src} alt={media[0].alt}/>
        <span className="demoStockBadge">SATILIK</span>
      </button>

      <button className="demoMosaicTile demoMosaicVideo" type="button" onClick={()=>open(media[1])} aria-label="Videoyu aç">
        <img src={media[1].poster} alt={media[1].alt}/>
        <span className="demoPlayCircle">▶</span>
        <strong>VİDEOLARI İZLE <b>(1)</b></strong>
      </button>

      <button className="demoMosaicTile" type="button" onClick={()=>open(media[2])} aria-label="Fotoğrafı büyüt">
        <img src={media[2].src} alt={media[2].alt}/>
      </button>

      <button className="demoMosaicTile" type="button" onClick={()=>open(media[3])} aria-label="Fotoğrafı büyüt">
        <img src={media[3].src} alt={media[3].alt}/>
      </button>

      <button className="demoMosaicTile demoMosaicCountTile" type="button" onClick={()=>open(media[4])} aria-label="Tüm fotoğrafları gör">
        <img src={media[4].src} alt={media[4].alt}/>
        <span className="demoPhotoCount">▣ <b>24 FOTOĞRAF</b></span>
      </button>
    </div>

    {active&&<div className="demoLightbox" role="dialog" aria-modal="true" aria-label="Galeri önizleme">
      <button className="demoLightboxClose" type="button" onClick={close} aria-label="Kapat">×</button>
      {active.type==='video'
        ? <video controls autoPlay playsInline poster={active.poster}><source src={active.src} type="video/mp4"/></video>
        : <img src={active.src} alt={active.alt}/>}
    </div>}
  </>;
}
