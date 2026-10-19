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
 const services=Array.isArray(profile.services)?profile.services.filter(x=>x&&x!=='Denizcilik'):[];
 const yachts=[...saleListings,...charterListings].filter(x=>(x.store_slug===slug||x.sellerSlug===slug)&&x.image).slice(0,4);
 const contact=[
  store.website||profile.website?{label:'Web Sitesi',value:store.website||profile.website,href:/^https?:\/\//.test(store.website||profile.website)?store.website||profile.website:'https://'+(store.website||profile.website)}:null,
  store.email||profile.email?{label:'E-posta',value:store.email||profile.email,href:'mailto:'+(store.email||profile.email)}:null,
  store.phone||profile.phone?{label:'Telefon',value:store.phone||profile.phone,href:'tel:'+(store.phone||profile.phone)}:null
 ].filter(Boolean);
 return <StoreSiteShell store={store} active="hakkimizda">
  <nav className={styles.scrollNav} aria-label="Firma profili bölümleri">
   <a href="#hakkinda">Hakkında</a>
   {services.length>0&&<a href="#hizmetler">Hizmetler</a>}
   {yachts.length>0&&<a href="#galeri">Galeri</a>}
   <a href="#iletisim">İletişim</a>
  </nav>
  <section className={styles.scrollSection} id="hakkinda">
   <small className={styles.premiumEyebrow}>KURUMSAL PROFİL</small>
   <h2>Hakkında</h2>
   <p>{overview||store.name+' kurumsal profili ve güncel yat portföyü.'}</p>
  </section>
  {services.length>0&&<section className={styles.scrollSection} id="hizmetler">
   <small className={styles.premiumEyebrow}>FAALİYET ALANLARI</small>
   <h2>Hizmetler</h2>
   <div className={styles.scrollServiceGrid}>{services.map(s=><div key={s}>{s}</div>)}</div>
  </section>}
  {yachts.length>0&&<section className={styles.scrollSection} id="galeri">
   <small className={styles.premiumEyebrow}>PORTFÖY</small>
   <h2>Galeri</h2>
   <div className={styles.scrollGallery}>{yachts.map(x=><a href={x.href} key={x.slug}><img loading="lazy" src={x.image} alt={x.title}/><span>{x.title}</span></a>)}</div>
  </section>}
  <section className={styles.scrollSection} id="iletisim">
   <small className={styles.premiumEyebrow}>İLETİŞİM</small>
   <h2>İletişim ve Konum</h2>
   <div className={styles.scrollContacts}>
    {contact.map(x=><a href={x.href} key={x.label} target={x.label==='Web Sitesi'?'_blank':undefined} rel={x.label==='Web Sitesi'?'noopener noreferrer':undefined}><small>{x.label}</small><strong>{x.value}</strong><span>↗</span></a>)}
    {store.location&&<div><small>Konum</small><strong>{store.location}</strong></div>}
   </div>
   {contact.length===0&&<p>Doğrudan iletişim bilgisi henüz paylaşılmamış.</p>}
   <a className={styles.scrollContactMore} href={'/magaza/'+slug+'/iletisim'}>İletişim sayfası →</a>
  </section>
 </StoreSiteShell>;
}
