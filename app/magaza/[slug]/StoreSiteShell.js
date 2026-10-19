import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {saleListings,charterListings,products} from '../../../data/content';
import styles from './store-site.module.css';
export default function StoreSiteShell({store,active='',children}){
 const base='/magaza/'+store.slug;
 const candidateVideo=store.hero_video_url||store.cover_video_url||store.heroVideo||null;
 const heroVideo=typeof candidateVideo==='string'&&/\.(mp4|webm)(?:\?|$)/i.test(candidateVideo)?candidateVideo:null;
 const heroPoster=store.cover_image||store.image||null;
 const own=x=>x.store_slug===store.slug||x.sellerSlug===store.slug;
 const tabs=[['Ana Sayfa','']];
 if(saleListings.some(own))tabs.push(['Satılık','satilik']);
 if(charterListings.some(own))tabs.push(['Kiralık','kiralik']);
 if(products.some(own))tabs.push(['Ürünler','urunler']);
 tabs.push(['Hakkımızda','hakkimizda'],['İletişim','iletisim']);
 return <><SiteHeader/><main className={styles.site}>
  <section className={styles.hero}>
   {heroVideo?<video className={styles.heroMedia} autoPlay muted loop playsInline preload="metadata" poster={heroPoster||undefined} aria-label={store.name+' tanıtım videosu'}><source src={heroVideo} type={/\.webm(?:\?|$)/i.test(heroVideo)?"video/webm":"video/mp4"}/></video>:heroPoster?<img className={styles.heroMedia} src={heroPoster} alt=""/>:null}
   <div className={styles.heroShade}/>
   <div className={styles.wrap+' '+styles.heroInner}>
    {store.logo?<img className={styles.logo} src={store.logo} alt=""/>:null}
    <div className={styles.heroText}><small>MAĞAZA / KURUMSAL VİTRİN</small><h1>{store.name}</h1><p>{[store.category,store.location].filter(Boolean).join(' · ')}</p></div>
   </div>
  </section>
  <nav className={styles.nav} aria-label="Mağaza menüsü"><div className={styles.wrap+' '+styles.navInner}>
   {tabs.map(([label,section])=><a key={section} className={active===section?styles.active:''} href={base+(section?'/'+section:'')}>{label}</a>)}
  </div></nav>
  <div className={styles.wrap+' '+styles.content}>{children}</div>
 </main><Footer/></>;
}
export {styles};
