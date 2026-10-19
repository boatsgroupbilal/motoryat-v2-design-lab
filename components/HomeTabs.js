'use client';
import {useState} from 'react';
import {YachtCard} from './Card';

export default function HomeTabs({sale=[],charter=[]}){
 const [tab,setTab]=useState('s');
 const tabs=[['s','Satılık'],['k','Kiralık']];
 const listings=tab==='k'?charter:sale;
 return <section id="ilan" className="dpSection dpListingsSection">
   <div className="dpWrap">
     <div className="dpHead">
       <h2>Öne çıkan yatlar</h2>
       <a href={tab==='k'?'/kiralik':'/satilik'}>Tüm ilanlar</a>
     </div>
     <div className="dpTabs" role="tablist" aria-label="Öne çıkan yat türü">
       {tabs.map(([id,label])=><button key={id} role="tab" aria-selected={tab===id} onClick={()=>setTab(id)}>{label}</button>)}
     </div>
     <div className="sqYachtGrid homeYachtGrid">
       {listings.slice(0,4).map((x,i)=><YachtCard
         key={(x.slug||x.href||x.title)+'-'+i}
         item={x}
         type={tab==='k'?'charter':'sale'}
         seller={x.seller||x.store_name||x.sellerName||''}
         year={x.year||''}
         index={i}
       />)}
     </div>
     {listings.length===0&&<p>Bu kategoride henüz yayınlanmış ilan bulunmuyor.</p>}
   </div>
 </section>;
}
