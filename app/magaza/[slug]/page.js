import {notFound} from 'next/navigation';
import {stores,saleListings,charterListings,products} from '../../../data/content';
import {getStoreProfile} from '../../../data/storeProfiles';
import StoreSiteShell,{styles} from './StoreSiteShell';
export default async function Page({params}){
 const {slug}=await params;const store=stores.find(x=>x.slug===slug);if(!store)notFound();
 const profile=getStoreProfile(store);
 const matching=(x)=>x.store_slug===slug||x.sellerSlug===slug;
 const sale=saleListings.filter(matching),charter=charterListings.filter(matching),stock=products.filter(matching);
 return <StoreSiteShell store={store}>
  <section className={styles.panel}><h2>{store.name}</h2><p>{profile.overview||'Kurumsal mağaza profili.'}</p>
   <div className={styles.facts}>
    {sale.length>0&&<div><small>Satılık</small><strong>{sale.length} ilan</strong></div>}
    {charter.length>0&&<div><small>Kiralık</small><strong>{charter.length} ilan</strong></div>}
    {stock.length>0&&<div><small>Ürünler</small><strong>{stock.length} ürün</strong></div>}
    {store.location&&<div><small>Konum</small><strong>{store.location}</strong></div>}
   </div>
   <div className={styles.links}><a href={'/magaza/'+slug+'/hakkimizda'}>Hakkımızda →</a><a href={'/magaza/'+slug+'/iletisim'}>İletişim →</a></div>
  </section>
  {sale.length>0&&<section style={{marginTop:24}}><h2>Satılık İlanlar</h2><div className={styles.cards}>{sale.slice(0,4).map(x=><a className={styles.card} href={x.href} key={x.slug}>{x.image&&<img src={x.image} alt={x.title}/>}<div className={styles.cardBody}><h3>{x.title}</h3><p>{x.price}</p></div></a>)}</div></section>}
 </StoreSiteShell>;
}
