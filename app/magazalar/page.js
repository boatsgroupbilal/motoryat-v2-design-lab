import {choosePageData} from '../../lib/v2-page-data';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {stores} from '../../data/content';

export default async function Page({searchParams}){
 const params=await searchParams;
 const items=await choosePageData('stores',stores);
 const q=String(params?.q||'').trim().toLocaleLowerCase('tr-TR');
 const visible=items.filter(x=>!q||[x.name,x.category,x.location].some(v=>String(v||'').toLocaleLowerCase('tr-TR').includes(q)));
 return <><SiteHeader/><main className="storeDirectoryPage storeDirectoryCompact">
  <section className="storeDirectoryHero categoryHeroStd">
   <img className="categoryHeroStdImage" src="/store-mengi.webp" alt="Motoryat mağazaları"/>
   <div className="categoryHeroStdShade"></div>
   <div className="container categoryHeroStdInner"><div className="categoryHeroStdContent"><span>TİCARİ VİTRİN</span><h1>Mağazalar</h1><p>Denizcilik sektöründeki mağaza, tersane, broker, charter ve ekipman firmalarını keşfedin.</p></div></div>
  </section>
  <section className="storeDirectoryTools"><div className="container storeDirectoryToolsInner"><form className="storeDirectorySearch" action="/magazalar" method="get"><input name="q" defaultValue={params?.q||""} placeholder="Mağaza, firma, marka veya kategori ara"/><button type="submit">Ara</button></form></div></section>
  <section className="storeDirectorySection"><div className="container"><div className="storeDirectoryHead"><div><span>MAĞAZALAR</span><h2>{visible.length} mağaza</h2><p>Denizcilik sektöründeki mağazaları ve firmaları keşfedin.</p></div></div>
    <div className="storeDirectoryList">{visible.map((x)=><a className="storeDirectoryCard" href={x.href} key={x.slug}>
      {x.image?<div className="storeDirectoryCover"><img src={x.image} alt={x.name} loading="lazy"/></div>:null}
      <div className="storeDirectoryBody">{x.logo?<div className="storeDirectoryLogo"><img src={x.logo} alt=""/></div>:null}<div className="storeDirectoryInfo">{x.category?<small>{x.category}</small>:null}<h3>{x.name}</h3>{x.location?<p>{x.location}</p>:null}{(x.listing_count!=null||x.product_count!=null)&&<div className="storeDirectoryStats">{x.listing_count!=null&&<span><b>{x.listing_count}</b> İlan</span>}{x.product_count!=null&&<span><b>{x.product_count}</b> Ürün</span>}</div>}</div><div className="storeDirectoryAction"><span>Mağazayı Gör</span><b>→</b></div></div>
    </a>)}</div>{visible.length===0&&<p>Aramanıza uygun mağaza bulunamadı.</p>}
  </div></section>
 </main><Footer/></>
}