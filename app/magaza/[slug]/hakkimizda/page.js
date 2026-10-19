import {notFound} from 'next/navigation';
import {stores,saleListings,charterListings} from '../../../../data/content';
import {getStoreProfile} from '../../../../data/storeProfiles';
import StoreSiteShell,{styles} from '../StoreSiteShell';

export default async function Page({params}){
 const {slug}=await params;
 const store=stores.find(x=>x.slug===slug);
 if(!store)notFound();
 const profile=getStoreProfile(store);
 const overview=profile.overview?.includes('Motoryat üzerindeki kurumsal vitriniyle')?null:profile.overview;
 const yachts=[...saleListings,...charterListings].filter(x=>(x.store_slug===slug||x.sellerSlug===slug)&&x.image).slice(0,2);
 const services=Array.isArray(profile.services)?profile.services.filter(x=>x&&x!=='Denizcilik'):[],
       offices=Array.isArray(profile.offices)?profile.offices.filter(Boolean):[];
 return <StoreSiteShell store={store} active="hakkimizda">
  <section className={styles.aboutIntro}>
   <div className={styles.aboutCopy}>
    <small className={styles.premiumEyebrow}>KURUMSAL PROFİL</small>
    <h2>{store.name} Hakkında</h2>
    <p>{overview||store.name+' hakkında kurumsal bilgiler ve güncel yat portföyü.'}</p>
    {services.length>0&&<div className={styles.aboutServices}>
     <h3>Faaliyet Alanları</h3>
     <div>{services.map(s=><span key={s}>{s}</span>)}</div>
    </div>}
   </div>
   <aside className={styles.aboutSide}>
    <span className={styles.premiumEyebrow}>FİRMA BİLGİLERİ</span>
    <h3>{store.name}</h3>
    {store.location&&<div><small>Konum</small><strong>{store.location}</strong></div>}
    {offices.length>0&&<div><small>Ofis / Çalışma bölgesi</small><strong>{offices.join(' · ')}</strong></div>}
    <a href={'/magaza/'+slug+'/iletisim'}>İletişim bilgileri <span>↗</span></a>
   </aside>
  </section>
  {yachts.length>0&&<section className={styles.aboutCollection}>
   <div className={styles.featuredHead}><div><small className={styles.premiumEyebrow}>PORTFÖYDEN</small><h2>Yatları Keşfedin</h2></div><a href={'/magaza/'+slug+'/satilik'}>Portföy →</a></div>
   <div className={styles.aboutImages}>{yachts.map(x=><a href={x.href} key={x.slug}><img src={x.image} alt={x.title} loading="lazy"/><span>{x.title}</span></a>)}</div>
  </section>}
  <section className={styles.aboutContact}>
   <div><small className={styles.premiumEyebrow}>BİRLİKTE ÇALIŞALIM</small><h2>{store.name} ile bağlantı kurun</h2></div>
   <a href={'/magaza/'+slug+'/iletisim'}>İletişime geçin ↗</a>
  </section>
 </StoreSiteShell>;
}
