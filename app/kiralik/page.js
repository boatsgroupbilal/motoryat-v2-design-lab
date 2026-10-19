import YeniViraBanner from '../../components/YeniViraBanner';
import CharterFilterSidebar from '../../components/CharterFilterSidebar';
import YachtCategoryTiles from '../../components/YachtCategoryTiles';
import {choosePageData} from '../../lib/v2-page-data';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import {charterListings} from '../../data/content';
import {filterCharterListings,queryString} from '../../data/listing-filters';

export default async function Page({searchParams}){
 const params=await searchParams;
 const pageSource=await choosePageData('charter',charterListings);
 const filteredListings=filterCharterListings(pageSource,params);
 const page=Math.max(1,Number(params?.sayfa)||1);
 const perPage=24;
 const totalPages=Math.max(1,Math.ceil(filteredListings.length/perPage));
 const safePage=Math.min(page,totalPages);
 const listings=filteredListings.slice((safePage-1)*perPage,safePage*perPage);

 return <><SiteHeader/><main className="luxListingPage">
  <MobileListingFilters type="charter"/>
  <section className="luxPageTop luxCharterTop categoryHeroStd">
   <img className="categoryHeroStdImage" src="/charter-luna-hero.webp" alt="Kiralık yatlar"/>
   <div className="categoryHeroStdShade"></div>
   <div className="syContainer categoryHeroStdInner">
    <div className="categoryHeroStdContent">
     <div className="luxCrumb">Motoryat / Kiralık</div>
     <div className="luxTitleRow"><div><span>FOR CHARTER</span><h1>Kiralık Yatlar</h1><p>Türkiye ve Akdeniz'in öne çıkan charter yatlarını keşfedin.</p></div><div className="luxCount"><strong>{filteredListings.length}</strong><span>charter</span></div></div>
    </div>
   </div>
  </section>

  <YachtCategoryTiles type="charter" listings={pageSource}/>
  <nav className="luxCategoryChips" aria-label="Kiralık tekne kategorileri"><div className="syContainer">
    <a className="active" href="/kiralik">Tümü</a>
    <a href="/kiralik/motoryat">Motoryat</a>
    <a href="/kiralik/gulet">Gulet</a>
    <a href="/kiralik/katamaran">Katamaran</a>
    <a href="/kiralik/yelkenli">Yelkenli</a>
    <a href="/kiralik/trawler">Trawler</a>
  </div></nav>

  <section className="luxResults"><div className="syContainer"><div className="charterResultsLayout"><CharterFilterSidebar types={[...new Set(pageSource.map(x=>x.vessel_type||x.boat_type||x.category).filter(Boolean))]} destinations={[...new Set(pageSource.map(x=>x.location).filter(Boolean))]} years={[...new Set(pageSource.map(x=>x.year).filter(Boolean))].sort((a,b)=>Number(b)-Number(a))}/><div className="charterResultsMain">
   <div className="luxResultsBar"><div><b>Kiralık yatlar</b><span>{filteredListings.length} charter</span></div><select defaultValue="featured"><option value="featured">Öne çıkanlar</option><option>Boy: büyükten küçüğe</option><option>Haftalık fiyat</option></select></div>
   <div className="sqYachtGrid">
    {listings.map((x,i)=><YachtCard key={x.slug} item={x} type="charter" seller={x.seller||x.store_name||''} year={x.year||'—'} refit="—" index={(safePage-1)*perPage+i}/>)}
   </div>
   {totalPages>1&&<nav className="salePagination" aria-label="Kiralık ilan sayfaları"><div className="salePaginationPages">
    {Array.from({length:totalPages},(_,i)=>i+1).map(n=><a className={n===safePage?'active':''} href={'/kiralik?'+queryString(params)+'sayfa='+n} key={n}>{n}</a>)}
   </div><strong>{filteredListings.length} ilan var</strong></nav>}
  </div></div></div></section>
 <YeniViraBanner/>
 </main><Footer/></>
}