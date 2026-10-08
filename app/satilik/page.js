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

export default function Page(){
 const listings=[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)];
 const vesselTypes=uniq(listings.map(x=>x.vessel_type||x.boat_type||x.category)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
 const years=uniq(listings.map(x=>x.year)).filter(x=>/^\d{4}$/.test(x)).sort((a,b)=>Number(b)-Number(a)).slice(0,20);
 const locations=uniq(listings.map(x=>x.location)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
 const makers=uniq(listings.map(x=>x.store_name||x.seller||x.brand_name||x.brand||x.manufacturer)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,30);
 const statuses=uniq([
   ...listings.map(x=>x.condition),
   ...listings.map(x=>x.presentation_type),
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
      <div><b>Satılık Yatlar</b></div>
      <select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select>
     </div>
     <div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={x.seller} year={x.year||'—'} refit="—" index={i}/>)}</div>

     <nav className="salePagination" aria-label="Satılık ilan sayfaları">
      <div className="salePaginationPages">
       <button className="active" type="button">1</button>
       <button type="button">2</button>
       <button type="button">3</button>
       <button type="button">4</button>
       <button type="button">5</button>
       <span>…</span>
       <button type="button">56</button>
       <button type="button">57</button>
      </div>
      <strong>500 ilan var</strong>
     </nav>
    </div>
   </div>
  </div></section>
 </main><Footer/></>
}