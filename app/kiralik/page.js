import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import {charterListings} from '../../data/content';
import {filterCharterListings,queryString} from '../../data/listing-filters';

export default async function Page({searchParams}){
 const params=await searchParams;
 const filteredListings=filterCharterListings(charterListings,params);
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

  <nav className="luxCategoryChips" aria-label="Kiralık tekne kategorileri"><div className="syContainer">
    <a className="active" href="/kiralik">Tümü</a>
    <a href="/kiralik/motoryat">Motoryat</a>
    <a href="/kiralik/gulet">Gulet</a>
    <a href="/kiralik/katamaran">Katamaran</a>
    <a href="/kiralik/yelkenli">Yelkenli</a>
    <a href="/kiralik/trawler">Trawler</a>
  </div></nav>

  <section className="luxFilterWrap"><div className="syContainer">
   <div className="luxFilters">
    <button><small>DESTİNASYON</small><b>Akdeniz</b></button>
    <button><small>TARİH</small><b>Tarih seçin</b></button>
    <button><small>MİSAFİR</small><b>2+</b></button>
    <button><small>YAT TÜRÜ</small><b>Tümü</b></button>
    <button><small>BOY</small><b>Tümü</b></button>
    <button><small>FİYAT</small><b>Tümü</b></button>
    <button className="luxSearchBtn">ARA</button>
   </div>
  </div></section>

  <section className="luxResults"><div className="syContainer">
   <div className="luxResultsBar"><div><b>Kiralık yatlar</b><span>{filteredListings.length} charter</span></div><select defaultValue="featured"><option value="featured">Öne çıkanlar</option><option>Boy: büyükten küçüğe</option><option>Haftalık fiyat</option></select></div>
   <div className="sqYachtGrid">
    {listings.map((x,i)=><YachtCard key={x.slug} item={x} type="charter" seller={x.seller||x.store_name||''} year={x.year||'—'} refit="—" index={(safePage-1)*perPage+i}/>)}
   </div>
   {totalPages>1&&<nav className="salePagination" aria-label="Kiralık ilan sayfaları"><div className="salePaginationPages">
    {Array.from({length:totalPages},(_,i)=>i+1).map(n=><a className={n===safePage?'active':''} href={'/kiralik?'+queryString(params)+'sayfa='+n} key={n}>{n}</a>)}
   </div><strong>{filteredListings.length} ilan var</strong></nav>}
  </div></section>
 </main><Footer/></>
}