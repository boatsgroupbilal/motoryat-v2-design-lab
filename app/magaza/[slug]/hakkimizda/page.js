import {notFound} from 'next/navigation';
import {stores} from '../../../../data/content';
import {getStoreProfile} from '../../../../data/storeProfiles';
import StoreSiteShell,{styles} from '../StoreSiteShell';

export default async function Page({params}){
 const {slug}=await params;
 const store=stores.find(x=>x.slug===slug);
 if(!store)notFound();
 const profile=getStoreProfile(store);
 const overview=profile.overview?.includes('Motoryat üzerindeki kurumsal vitriniyle')?null:profile.overview;
 const services=Array.isArray(profile.services)?profile.services.filter(x=>x&&x!=='Denizcilik'&&x!=='Denizcilik hizmetleri'):[];
 return <StoreSiteShell store={store} active="hakkimizda">
  <article className={styles.standardAbout}>
   <span className={styles.premiumEyebrow}>KURUMSAL</span>
   <h2>Hakkımızda</h2>
   <p>{overview||store.name+' hakkında kurumsal bilgiler henüz eklenmemiştir.'}</p>
   {services.length>0&&<section className={styles.standardAboutServices}>
    <h3>Faaliyet Alanları</h3>
    <ul>{services.map(s=><li key={s}>{s}</li>)}</ul>
   </section>}
   {store.location&&<p className={styles.standardAboutLocation}><strong>Konum:</strong> {store.location}</p>}
   <a className={styles.standardAboutContact} href={'/magaza/'+slug+'/iletisim'}>İletişim bilgileri <span>→</span></a>
  </article>
 </StoreSiteShell>;
}
