'use client';
import {useState} from 'react';

export default function HomeTabs({sale,charter}){
  const [tab,setTab]=useState('sale');
  const tabs=[
    ['sale','Satılık'],
    ['charter','Kiralık'],
    ['new','Yeni İnşa']
  ];
  const data=tab==='charter'?charter:sale;
  return <section className="stdTabsSection">
    <div className="stdContainer">
      <div className="stdTabsBar">
        {tabs.map(([id,label])=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}>{label}</button>)}
      </div>
      <div className="stdListingGrid">
        {data.slice(0,4).map((x,i)=><a className="stdListingCard" href={x.href} key={i}>
          <img src={x.image} alt={x.title}/>
          <div><small>{tab==='charter'?'CHARTER':tab==='new'?'YENİ İNŞA':'SATILIK'}</small><h3>{x.title}</h3><p>{x.meta}</p><b>{x.price}</b></div>
        </a>)}
      </div>
    </div>
  </section>
}
