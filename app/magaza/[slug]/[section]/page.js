import {notFound} from 'next/navigation';
import {stores,saleListings,charterListings,products} from '../../../../data/content';
import StoreSiteShell,{styles} from '../StoreSiteShell';

const allowed=['satilik','kiralik','urunler','iletisim'];
export default async function Page({params}){
 const {slug,section}=await params;
 const store=stores.find(x=>x.slug===slug);
 if(!store||!allowed.includes(section))notFound();
 const own=x=>x.store_slug===slug||x.sellerSlug===slug;
 const source=section==='satilik'?saleListings:section==='kiralik'?charterListings:section==='urunler'?products:[];
 const items=source.filter(own);
 const title={satilik:'Satılık Tekneler',kiralik:'Kiralık Tekneler',urunler:'Ürünler',iletisim:'İletişim'}[section];
 return <StoreSiteShell store={store} active={section}>
  <h2>{title}</h2>
  {section==='iletisim'?<section className={styles.panel}>
   <h2>{store.name}</h2>
   {store.location?<p>Konum: {store.location}</p>:null}
   {store.phone?<p>Telefon: <a href={'tel:'+store.phone}>{store.phone}</a></p>:null}
   {store.email?<p>E-posta: <a href={'mailto:'+store.email}>{store.email}</a></p>:null}
   {!store.phone&&!store.email&&<p>Bu mağaza için iletişim bilgileri henüz eklenmemiştir.</p>}
  </section>:items.length?<div className={styles.cards}>
   {items.map((x,i)=><a className={styles.card} key={x.slug||i} href={x.href||'/magaza/'+slug}>
     {x.image?<img src={x.image} alt={x.title||x.name} loading="lazy"/>:null}
     <div className={styles.cardBody}><h3>{x.title||x.name}</h3>{x.price?<p>{x.price}</p>:null}</div>
   </a>)}
  </div>:<p className={styles.empty}>Bu mağazada bu kategoride henüz içerik bulunmuyor.</p>}
 </StoreSiteShell>;
}
