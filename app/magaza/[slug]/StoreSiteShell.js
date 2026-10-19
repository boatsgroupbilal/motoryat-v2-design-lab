import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {saleListings,charterListings,products} from '../../../data/content';
import styles from './store-site.module.css';
export default function StoreSiteShell({store,active='',children}){
 const base='/magaza/'+store.slug;
 const own=x=>x.store_slug===store.slug||x.sellerSlug===store.slug;
 const tabs=[['Ana Sayfa','']];
 if(saleListings.some(own))tabs.push(['Satılık','satilik']);
 if(charterListings.some(own))tabs.push(['Kiralık','kiralik']);
 if(products.some(own))tabs.push(['Ürünler','urunler']);
 tabs.push(['Hakkımızda','hakkimizda'],['İletişim','iletisim']);
 return <><SiteHeader/><main className={styles.site}>
  <section className={styles.hero}>
   {store.image?<img src={store.image} alt=""/>:null}
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
