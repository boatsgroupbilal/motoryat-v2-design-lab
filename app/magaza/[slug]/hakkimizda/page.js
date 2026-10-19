import {notFound} from 'next/navigation';
import {stores} from '../../../../data/content';
import {getStoreProfile} from '../../../../data/storeProfiles';
import StoreSiteShell,{styles} from '../StoreSiteShell';

export default async function Page({params}){
 const {slug}=await params;
 const store=stores.find(x=>x.slug===slug);
 if(!store)notFound();
 const profile=getStoreProfile(store);
 return <StoreSiteShell store={store} active="hakkimizda">
  <section className={styles.panel}>
   <h2>Hakkımızda</h2>
   {profile.overview?<p>{profile.overview}</p>:<p>Bu mağaza için henüz kurumsal açıklama eklenmemiştir.</p>}
   {Array.isArray(profile.services)&&profile.services.length>0&&<><h2 style={{marginTop:24}}>Faaliyet Alanları</h2><p>{profile.services.join(' · ')}</p></>}
   {Array.isArray(profile.offices)&&profile.offices.length>0&&<><h2 style={{marginTop:24}}>Ofisler ve Konumlar</h2><p>{profile.offices.join(' · ')}</p></>}
   <div className={styles.links}><a href={'/magaza/'+slug+'/iletisim'}>İletişim →</a></div>
  </section>
 </StoreSiteShell>;
}
