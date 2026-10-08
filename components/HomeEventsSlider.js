'use client';

import {useRef,useState} from 'react';
import {realEvents,eventCard} from '../data/events';

const events=realEvents.map(eventCard);

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
          key={item.name+'-'+i}
          onClick={stopClick}
          draggable="false"
        >
          <div className="homeWideEventDate"><b>{item.day}</b><small>{item.month}</small></div>
          <div className="homeWideEventImage"><img src={item.image} alt={item.name+' '+item.year} draggable="false"/></div>
          <div className="homeWideEventBody"><h3>{item.name}</h3><p>{item.year} · {item.province}</p><span>Etkinliği görüntüle <b>›</b></span></div>
        </a>)}
      </div>

      <button className="homeWideEdge homeWideEdgeRight" type="button" onClick={()=>move(1)} aria-label="Sonraki etkinlikler">
        <span>YAKLAŞAN ETKİNLİKLER</span><b>›</b>
      </button>
    </div>
  </section>;
}
