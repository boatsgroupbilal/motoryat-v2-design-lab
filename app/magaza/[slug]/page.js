import {notFound} from 'next/navigation';
import {stores,saleListings,charterListings,products} from '../../../data/content';
import {getStoreProfile} from '../../../data/storeProfiles';
import StoreSiteShell,{styles} from './StoreSiteShell';

export default async function Page({params}){
 const {slug}=await params;
 const store=stores.find(x=>x.slug===slug);
 if(!store)notFound();
 const profile=getStoreProfile(store);
 const belongs=x=>x.store_slug===slug||x.sellerSlug===slug;
 const sale=saleListings.filter(belongs),charter=charterListings.filter(belongs),stock=products.filter(belongs);
 const featured=[...sale,...charter].filter(x=>x.image).slice(0,4);
 const intro=profile.overview&&!profile.overview.includes('Motoryat üzerindeki kurumsal vitriniyle')
  ? profile.overview
  : store.name+' koleksiyonunu, güncel ilanlarını ve kurumsal bilgilerini keşfedin.';
 const base='/magaza/'+slug;
 return <StoreSiteShell store={store}>
  <section className={styles.premiumIntro}>
   <div className={styles.introCopy}>
    
    <h2>{store.name}</h2>
    <p>{intro}</p>

   </div>

  </section>
  {featured.length>0&&<section className={styles.featuredSection}>
   <div className={styles.featuredHead}>
    <div><small className={styles.premiumEyebrow}>SEÇİLİ PORTFÖY</small><h2>Yat Koleksiyonu</h2></div>
    <a href={sale.length?base+'/satilik':base+'/kiralik'}>Tüm ilanlar <span>→</span></a>
   </div>
   <div className={styles.premiumCards}>{featured.map(x=><a className={styles.premiumCard} href={x.href} key={x.slug}>
    <div className={styles.premiumMedia}><img src={x.image} alt={x.title} loading="lazy"/><span>{x.type==='charter'||x.kind==='KİRALIK'?'KİRALIK':'SATILIK'}</span></div>
    <div className={styles.premiumCardBody}><h3>{x.title}</h3>{x.meta&&<p>{x.meta}</p>}<div><strong>{x.price||'Fiyat Sorunuz'}</strong><span>↗</span></div></div>
   </a>)}</div>
  </section>}
  <section className={styles.premiumFooterCta}>
   <div><small className={styles.premiumEyebrow}>DOĞRUDAN BAĞLANTI</small><h2>{store.name} ile iletişime geçin</h2><p>Firma bilgileri ve iletişim seçenekleri için kurumsal sayfayı ziyaret edin.</p></div>
   <a href={base+'/iletisim'}>İletişim bilgileri <span>↗</span></a>
  </section>
 </StoreSiteShell>;
}
