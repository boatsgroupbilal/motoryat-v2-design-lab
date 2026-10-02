'use client';
import {useState} from 'react';
import {YachtCard} from './Card';

const saleSellers=['Euro Boat','Euro Boat','Euro Boat','Yener Tekne'];
const charterSellers=['Lady Luna Charter','Sunreef Yachts Charter','Lady Luna Charter','Lady Luna Charter'];
const years=['2026','2026','2025','2024'];

export default function HomeTabs({sale,charter}){
 const [tab,setTab]=useState('s');
 const tabs=[['s','Satılık'],['k','Kiralık'],['y','Yeni inşa']];
 const projects=sale.map((x,i)=>({
   ...x,
   title:'Proje '+(i+1),
   meta:(i===0?'60 m · teslim 2028':i===1?'45 m · teslim 2027':i===2?'38 m · teslim 2027':'72 m · teslim 2029'),
   price:'Fiyat sorunuz',
   href:'/yeni-insa'
 }));
 const data=tab==='k'?charter:tab==='y'?projects:sale;
 const type=tab==='k'?'charter':'sale';
 const sellers=tab==='k'?charterSellers:saleSellers;

 return <section id="ilan" className="dpSection dpListingsSection">
   <div className="dpWrap">
     <div className="dpHead">
       <h2>Öne çıkan yatlar</h2>
       <a href={tab==='k'?'/kiralik':tab==='y'?'/yeni-insa':'/satilik'}>Tüm ilanlar</a>
     </div>

     <div className="dpTabs" role="tablist">
       {tabs.map(([id,label])=>
         <button key={id} role="tab" aria-selected={tab===id} onClick={()=>setTab(id)}>
           {label}
         </button>
       )}
     </div>

     <div className="sqYachtGrid homeYachtGrid">
       {data.slice(0,4).map((x,i)=>
         <YachtCard
           key={x.slug+'-'+i}
           item={x}
           type={type}
           seller={sellers[i%sellers.length]}
           year={years[i%years.length]}
           refit={tab==='y'?'—':String(2021+(i%4))}
           index={i}
         />
       )}
     </div>
   </div>
 </section>
}
