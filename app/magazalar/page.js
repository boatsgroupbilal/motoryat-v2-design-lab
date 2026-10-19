import {choosePageData} from '../../lib/v2-page-data';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {stores} from '../../data/content';
import styles from './magazalar.module.css';

export default async function Page({searchParams}){
 const params=await searchParams;
 const items=await choosePageData('stores',stores);
 const query=String(params?.q||'').trim();
 const q=query.toLocaleLowerCase('tr-TR');
 const visible=items.filter(x=>!q||[x.name,x.category,x.location].some(v=>String(v||'').toLocaleLowerCase('tr-TR').includes(q)));
 return <><SiteHeader/><main className={styles.page}>
  <section className={styles.hero}>
   <img className={styles.heroImage} src="/store-mengi.webp" alt=""/>
   <div className={styles.heroShade}/>
   <div className={styles.wrap+' '+styles.heroInner}>
    <span className={styles.eyebrow}>TİCARİ VİTRİN</span>
    <h1>Mağazalar</h1>
    <p>Denizcilik sektöründeki mağaza ve firmaları keşfedin.</p>
   </div>
  </section>
  <div className={styles.wrap+' '+styles.tools}>
   <form className={styles.search} action="/magazalar" method="get">
    <input name="q" defaultValue={query} placeholder="Mağaza, firma veya kategori ara" aria-label="Mağaza ara"/>
    <button type="submit">Ara</button>
   </form>
  </div>
  <section className={styles.wrap}>
   <div className={styles.resultHead}><h2>Mağazalar</h2><span>{visible.length} mağaza</span></div>
   <div className={styles.grid}>
    {visible.map(x=><a className={styles.card} href={x.href||'/magazalar'} key={x.slug||x.name}>
      {x.image?<img className={styles.cover} src={x.image} alt={x.name} loading="lazy"/>:null}
      <div className={styles.cardBody}>
       {x.logo?<img className={styles.logo} src={x.logo} alt="" loading="lazy"/>:null}
       <div className={styles.info}>
        <h3>{x.name}</h3>
        {x.location?<p>{x.location}</p>:null}
        {(x.listing_count!=null||x.product_count!=null)&&<div className={styles.counts}>
          {x.listing_count!=null&&<span>{x.listing_count} ilan</span>}
          {x.product_count!=null&&<span>{x.product_count} ürün</span>}
        </div>}
       </div><span className={styles.arrow} aria-hidden="true">→</span>
      </div>
     </a>)}
   </div>
   {visible.length===0&&<p className={styles.empty}>Aramanıza uygun mağaza bulunamadı.</p>}
  </section>
 </main><Footer/></>
}
