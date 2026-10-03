'use client';

import {useRef,useState} from 'react';

const events=[
  {day:'08',month:'EKİM',title:'Monaco Yat Fuarı',year:'2026',image:'/hero-home.webp'},
  {day:'28',month:'EKİM',title:'Fort Lauderdale Uluslararası Tekne Fuarı',year:'2026',image:'/store-directory.webp'},
  {day:'13',month:'KASIM',title:'Sydney Tekne Fuarı',year:'2026',image:'/charter-sunreef.webp'},
  {day:'17',month:'OCAK',title:'Boot Düsseldorf',year:'2027',image:'/sale-euro-850.webp'},
  {day:'09',month:'EYLÜL',title:'Cannes Yachting Festival',year:'2027',image:'/charter-luna-hero.webp'},
  {day:'24',month:'EKİM',title:'Bosphorus Boat Show',year:'2027',image:'/store-mengi.webp'}
];

export default function HomeEventsSlider(){
  const railRef=useRef(null);
  const drag=useRef({active:false,startX:0,startScroll:0,moved:false});
  const [dragging,setDragging]=useState(false);

  const move=(direction)=>{
    const rail=railRef.current;
    if(!rail) return;
    const amount=Math.max(320,rail.clientWidth*.72);
    rail.scrollBy({left:direction*amount,behavior:'smooth'});
  };

  const onPointerDown=(e)=>{
    const rail=railRef.current;
    if(!rail) return;
    drag.current={active:true,startX:e.clientX,startScroll:rail.scrollLeft,moved:false};
    setDragging(true);
    rail.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove=(e)=>{
    const rail=railRef.current;
    if(!rail||!drag.current.active) return;
    const dx=e.clientX-drag.current.startX;
    if(Math.abs(dx)>5) drag.current.moved=true;
    rail.scrollLeft=drag.current.startScroll-dx;
  };

  const endDrag=(e)=>{
    const rail=railRef.current;
    drag.current.active=false;
    setDragging(false);
    try{rail?.releasePointerCapture?.(e.pointerId)}catch{}
  };

  const stopClick=(e)=>{
    if(drag.current.moved){
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved=false;
    }
  };

  return <section className="homeWideEvents" aria-label="Yaklaşan etkinlikler">
    <div className="homeWideEventsShell">
      <button className="homeWideEdge homeWideEdgeLeft" type="button" onClick={()=>move(-1)} aria-label="Önceki etkinlikler">
        <span>ÖNCEKİ ETKİNLİKLER</span><b>‹</b>
      </button>

      <div
        ref={railRef}
        className={'homeWideEventsRail '+(dragging?'isDragging':'')}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={(e)=>{if(drag.current.active) endDrag(e)}}
      >
        {events.map((item,i)=><a
          className="homeWideEventCard"
          href="/haberler/etkinlikler-fuarlar"
          key={item.title+'-'+i}
          onClick={stopClick}
          draggable="false"
        >
          <div className="homeWideEventDate"><b>{item.day}</b><small>{item.month}</small></div>
          <div className="homeWideEventImage"><img src={item.image} alt={item.title+' '+item.year} draggable="false"/></div>
          <div className="homeWideEventBody"><h3>{item.title}</h3><p>{item.year}</p><span>Etkinliği görüntüle <b>›</b></span></div>
        </a>)}
      </div>

      <button className="homeWideEdge homeWideEdgeRight" type="button" onClick={()=>move(1)} aria-label="Sonraki etkinlikler">
        <span>YAKLAŞAN ETKİNLİKLER</span><b>›</b>
      </button>
    </div>
  </section>;
}
