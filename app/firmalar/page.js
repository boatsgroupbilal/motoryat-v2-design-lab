import {choosePageData} from '../../lib/v2-page-data';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {StoreCard} from '../../components/Card';
import {companies,stores} from '../../data/content';

const fallbackItems=stores;
const companyItems=(companies||[]).map((x)=>({
  slug:x.slug,
  name:x.name,
  category:'Denizcilik firması',
  location:x.location||x.country||'Türkiye',
  image:x.image||x.cover_image||null,
  logo:x.logo||null,
  href:'/firma/'+x.slug
}));

export default async function Page({searchParams}){
 const params=await searchParams;
 const items=await choosePageData('companies',companyItems.length?companyItems:fallbackItems);
 const q=String(params?.q||'').trim().toLocaleLowerCase('tr-TR');
 const visible=items.filter(x=>!q||[x.name,x.category,x.location].some(v=>String(v||'').toLocaleLowerCase('tr-TR').includes(q)));
 return <><SiteHeader/><main>
  <section className="directoryHero categoryHeroStd">
   <img className="categoryHeroStdImage" src="/store-directory.webp" alt="Denizcilik firmaları"/>
   <div className="categoryHeroStdShade"></div>
   <div className="container directoryHeroInner categoryHeroStdInner"><div className="categoryHeroStdContent"><span>FİRMA REHBERİ</span><h1>Denizcilik firmalarını bulun.</h1><p>Üretici, tersane, broker, servis, refit, charter ve ekipman firmalarını tek rehberde keşfedin.</p><form className="directorySearch" action="/firmalar" method="get"><input name="q" defaultValue={params?.q||""} placeholder="Firma adı, şehir veya hizmet ara"/><button type="submit" className="navyBtn">Ara</button></form></div></div>
  </section>

  <section className="section directorySection"><div className="container"><div className="sectionHead"><div><span>FİRMALAR</span><h2>Denizcilik profesyonelleri</h2><p>Kurumsal profil, iletişim ve hizmet alanları.</p></div></div><div className="storeGrid directory">{visible.map((x,i)=><StoreCard key={x.id||x.slug||i} item={x}/>)}</div>{visible.length===0&&<p>Aramanıza uygun firma bulunamadı.</p>}</div></section>
</main><Footer/></>
}