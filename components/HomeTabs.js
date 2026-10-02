'use client';
import {useState} from 'react';

export default function HomeTabs({sale,charter}){
 const [tab,setTab]=useState('s');
 const tabs=[['s','Satılık'],['k','Kiralık'],['y','Yeni inşa']];
 const projects=sale.map((x,i)=>({...x,title:'Proje '+(i+1),meta:(i===0?'60 m · teslim 2028':i===1?'45 m · teslim 2027':i===2?'38 m · teslim 2027':'72 m · teslim 2029'),price:'Fiyat sorunuz',href:'/yeni-insa'}));
 const data=tab==='k'?charter:tab==='y'?projects:sale;
 return <section id="ilan" className="dpSection dpListingsSection"><div className="dpWrap"><div className="dpHead"><h2>Öne çıkan yatlar</h2><a href={tab==='k'?'/kiralik':tab==='y'?'/yeni-insa':'/satilik'}>Tüm ilanlar</a></div><div className="dpTabs" role="tablist">{tabs.map(([id,label])=><button key={id} role="tab" aria-selected={tab===id} onClick={()=>setTab(id)}>{label}</button>)}</div><div className="dpList">{data.slice(0,4).map((x,i)=><a className="dpCard" href={x.href} key={i}><div className="dpImg"><img src={x.image} alt={x.title}/></div><div className="dpT"><h3>{x.title}</h3><div className="dpM">{x.meta}</div><div className="dpPrice">{x.price}</div></div></a>)}</div></div></section>
}
