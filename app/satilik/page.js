import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import SaleFilterSidebar from '../../components/SaleFilterSidebar';
import {saleListings,demoListing} from '../../data/content';

const uniq=(values)=>[...new Set(values.filter(v=>v!==undefined&&v!==null&&String(v).trim()!=='').map(v=>String(v).trim()))];

function prettyStatus(value){
 const map={model:'Model',project:'Proje',new:'Yeni',used:'İkinci El',refit:'Refit',direct_sale:'Doğrudan Satış',build_to_order:'Sipariş Üzerine'};
 return map[value]||value;
}

export default async function Page({searchParams}){
 const params=await searchParams;
 const allListings=[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)];
 const page=Math.max(1,Number(params?.sayfa)||1);
 const perPage=24;
 const totalPages=Math.max(1,Math.ceil(allListings.length/perPage));
 const safePage=Math.min(page,totalPages);
 const listings=allListings.slice((safePage-1)*perPage,safePage*perPage);

 const vesselTypes=uniq(allListings.map(x=>x.vessel_type||x.boat_type||x.category)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
 const years=uniq(allListings.map(x=>x.year)).filter(x=>/^\d{4}$/.test(x)).sort((a,b)=>Number(b)-Number(a)).slice(0,20);
 const locations=uniq(allListings.map(x=>x.location)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
 const makers=uniq(allListings.map(x=>x.store_name||x.seller||x.brand_name||x.brand||x.manufacturer)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,30);
 const statuses=uniq([
   ...allListings.map(x=>x.condition),
   ...allListings.map(x=>x.presentation_type),
   'Yeni','İkinci El','Sipariş Üzerine','Proje'
 ].map(prettyStatus)).sort((a,b)=>a.localeCompare(b,'tr'));

 return <><SiteHeader/><main className="luxListingPage">
  <MobileListingFilters type="sale"/>
  <section className="luxPageTop luxSaleTitleOnly categoryHeroStd">
   <img className="categoryHeroStdImage" src="/sale-euro-850.webp" alt="Satılık yatlar"/>
   <div className="categoryHeroStdShade"></div>
   <div className="syContainer categoryHeroStdInner">
    <div className="luxTitleRow luxTitleRowOnly categoryHeroStdContent"><div><h1>Satılık Yatlar</h1></div></div>
   </div>
  </section>
  <nav className="luxCategoryChips" aria-label="Satılık tekne kategorileri"><div className="syContainer">
    <a className="active" href="/satilik">Tümü</a>
    <a href="/satilik/motoryat">Motoryat</a>
    <a href="/satilik/yelkenli">Yelkenli</a>
    <a href="/satilik/katamaran">Katamaran</a>
    <a href="/satilik/gulet">Gulet</a>
    <a href="/satilik/surat-teknesi">Sürat Teknesi</a>
    <a href="/satilik/sisme-bot">Şişme Bot</a>
  </div></nav>
  <section className="luxResults"><div className="syContainer">
   <div className="saleListingLayout">
    <SaleFilterSidebar
      vesselTypes={vesselTypes}
      makers={makers}
      years={years}
      locations={locations}
      statuses={statuses}
    />

    <div className="saleListingMain">
     <div className="luxResultsBar">
      <div><b>Satılık Yatlar</b><span>{allListings.length} ilan</span></div>
      <select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select>
     </div>
     <div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={x.seller} year={x.year||'—'} refit="—" index={(safePage-1)*perPage+i}/>)}</div>

     {totalPages>1&&<nav className="salePagination" aria-label="Satılık ilan sayfaları">
      <div className="salePaginationPages">
       {Array.from({length:Math.min(totalPages,7)},(_,i)=>i+1).map(n=><a className={n===safePage?'active':''} href={'/satilik?sayfa='+n} key={n}>{n}</a>)}
       {totalPages>7&&<><span>…</span><a className={totalPages===safePage?'active':''} href={'/satilik?sayfa='+totalPages}>{totalPages}</a></>}
      </div>
      <strong>{allListings.length} ilan var</strong>
     </nav>}
    </div>
   </div>
  </div></section>
 </main><Footer/></>
}