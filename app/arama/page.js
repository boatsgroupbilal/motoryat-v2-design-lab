import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard,EquipmentProductCard,StoreCard} from '../../components/Card';
import {saleListings,charterListings,products,stores,brands} from '../../data/content';

const norm=(v)=>String(v||'').toLocaleLowerCase('tr-TR');

export default async function Page({searchParams}){
  const params=await searchParams;
  const q=String(params?.q||'').trim();
  const needle=norm(q);
  const includes=(...values)=>values.some(v=>norm(v).includes(needle));

  const yachts=q?[...saleListings,...charterListings].filter(x=>includes(x.title,x.meta,x.seller,x.store_name,x.vessel_type)).slice(0,24):[];
  const productHits=q?products.filter(x=>includes(x.name,x.brand,x.category,x.short_description)).slice(0,24):[];
  const storeHits=q?stores.filter(x=>includes(x.name,x.category,x.location)).slice(0,16):[];
  const brandHits=q?brands.filter(x=>includes(x.name)).slice(0,30):[];

  return <><SiteHeader/><main className="globalSearchPage">
    <section className="categoryHeroStd"><img className="categoryHeroStdImage" src="/hero-home.webp" alt="Motoryat arama"/><div className="categoryHeroStdShade"></div><div className="container categoryHeroStdInner"><div className="categoryHeroStdContent"><span className="categoryHeroKicker">ARAMA</span><h1>Motoryat.com'da ara</h1><form className="globalSearchForm" action="/arama"><input name="q" defaultValue={q} placeholder="Tekne, ürün, marka veya mağaza ara"/><button>Ara</button></form></div></div></section>
    <div className="container globalSearchResults">
      {!q?<div className="categoryEmptyState">Aramak istediğiniz kelimeyi yazın.</div>:<>
        <section><div className="sectionHead"><div><h2>Tekne &amp; Yatlar</h2><p>{yachts.length} sonuç</p></div></div>{yachts.length?<div className="sqYachtGrid">{yachts.map((x,i)=><YachtCard key={x.slug} item={x} type={x.kind==='KİRALIK'?'charter':'sale'} seller={x.seller} year={x.year||'—'} index={i}/>)}</div>:<div className="categoryEmptyState">Tekne ilanı bulunamadı.</div>}</section>
        <section><div className="sectionHead"><div><h2>Ürünler</h2><p>{productHits.length} sonuç</p></div></div>{productHits.length?<div className="equipmentProductGrid">{productHits.map(x=><EquipmentProductCard item={x} key={x.slug}/>)}</div>:null}</section>
        <section><div className="sectionHead"><div><h2>Mağazalar</h2><p>{storeHits.length} sonuç</p></div></div>{storeHits.length?<div className="storeGrid directory">{storeHits.map(x=><StoreCard item={x} key={x.slug}/>)}</div>:null}</section>
        {brandHits.length?<section><div className="sectionHead"><div><h2>Markalar</h2><p>{brandHits.length} sonuç</p></div></div><div className="globalBrandResults">{brandHits.map(x=><a href={'/marka/'+x.slug} key={x.slug}>{x.name}</a>)}</div></section>:null}
      </>}
    </div>
  </main><Footer/></>;
}
