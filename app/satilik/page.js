import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import SaleFilterSidebar from '../../components/SaleFilterSidebar';
import {saleListings,demoListing} from '../../data/content';
import {filterSaleListings,queryString} from '../../data/listing-filters';

const uniq=(values)=>[...new Set(values.filter(v=>v!==undefined&&v!==null&&String(v).trim()!=='').map(v=>String(v).trim()))];

function prettyStatus(value){
 const map={model:'Model',project:'Proje',new:'Yeni',used:'İkinci El',refit:'Refit',direct_sale:'Doğrudan Satış',build_to_order:'Sipariş Üzerine'};
 return map[value]||value;
}

export default async function Page({searchParams}){
 const params=await searchParams;
 const sourceListings=[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)];
 const allListings=filterSaleListings(sourceListings,params);
 const page=Math.max(1,Number(params?.sayfa)||1);
 const perPage=24;
 const totalPages=Math.max(1,Math.ceil(allListings.length/perPage));
 const safePage=Math.min(page,totalPages);
 const listings=allListings.slice((safePage-1)*perPage,safePage*perPage);

 const vesselTypes=uniq(sourceListings.map(x=>x.vessel_type||x.boat_type||x.category)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
 const years=uniq(sourceListings.map(x=>x.year)).filter(x=>/^\d{4}$/.test(x)).sort((a,b)=>Number(b)-Number(a)).slice(0,20);
 const locations=uniq(sourceListings.map(x=>x.location)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
 const makers=uniq(sourceListings.map(x=>x.store_name||x.seller||x.brand_name||x.brand||x.manufacturer)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,30);
 const statuses=uniq([
   ...sourceListings.map(x=>x.condition),
   ...sourceListings.map(x=>x.presentation_type),
   'Yeni','İkinci El','Sipariş Üzerine','Proje'
 ].map(prettyStatus)).sort((a,b)=>a.localeCompare(b,'tr'));

 return <><SiteHeader/><main className="luxListingPage">
  <MobileListingFilters type="sale"/>
  <section className="luxPageTop luxSaleTitleOnly categoryHeroStd gmSaleBanner" aria-label="Satılık tekneler bannerı">
   <img className="categoryHeroStdImage" src="/sale-euro-850.webp" alt="Denizde seyreden motoryat"/>
   <div className="categoryHeroStdShade"></div>
   <div className="syContainer categoryHeroStdInner">
    <div className="luxTitleRow luxTitleRowOnly categoryHeroStdContent">
     <div className="gmSaleBannerCopy">
      <span className="gmSaleEyebrow">MOTORYAT.COM</span>
      <h1>SATILIK <span>TEKNELER</span></h1>
      <p>LA MATTINA GM 29 <i>·</i> LA SERA GM 38 <i>·</i> LA NOTTE GM 40</p>
      <a className="gmSaleBannerCTA" href="#satilik-ilanlar">İlanları İncele <span aria-hidden="true">↗</span></a>
     </div>
    </div>
   </div>
  </section>
  <style>{`
   .gmSaleBanner{position:relative;isolation:isolate;overflow:hidden;min-height:280px}
   .gmSaleBanner .categoryHeroStdShade{background:linear-gradient(90deg,rgba(4,21,38,.93) 0%,rgba(4,21,38,.81) 36%,rgba(4,21,38,.06) 100%)}
   .gmSaleBanner .categoryHeroStdInner{position:relative;z-index:1;display:flex;align-items:center;min-height:280px}
   .gmSaleBanner .gmSaleBannerCopy{padding:26px 0;max-width:770px;color:#fff}
   .gmSaleEyebrow{display:block;color:#e7bf79;font-size:12px;font-weight:700;letter-spacing:.23em}
   .gmSaleBanner h1{margin:9px 0;font-family:Georgia,serif;font-size:clamp(30px,4.1vw,58px);font-weight:700;line-height:1.06;letter-spacing:.02em;color:#fff}
   .gmSaleBanner h1 span{color:#d6b16d}
   .gmSaleBanner p{font-size:clamp(11px,1.3vw,16px);font-weight:600;letter-spacing:.055em;color:#f1f3f5}
   .gmSaleBanner p i{font-style:normal;color:#d6b16d;padding:0 5px}
   .gmSaleBannerCTA{display:inline-flex;gap:18px;align-items:center;margin-top:20px;padding:10px 23px;border-radius:30px;background:#d6b16d;color:#0d1b2a;font-weight:700;font-size:14px;text-decoration:none}
   .gmSaleBannerCTA:hover{background:#edd094}
   @media(max-width:640px){.gmSaleBanner,.gmSaleBanner .categoryHeroStdInner{min-height:225px}.gmSaleBanner .categoryHeroStdShade{background:linear-gradient(90deg,rgba(4,21,38,.92),rgba(4,21,38,.55))}.gmSaleBanner h1{font-size:clamp(26px,8vw,38px)}.gmSaleBanner p{line-height:1.8;font-size:11px}.gmSaleBannerCTA{margin-top:13px}}
  `}</style>
  <nav className="luxCategoryChips" aria-label="Satılık tekne kategorileri"><div className="syContainer">
    <a className="active" href="/satilik">Tümü</a>
    <a href="/satilik/motoryat">Motoryat</a>
    <a href="/satilik/yelkenli">Yelkenli</a>
    <a href="/satilik/katamaran">Katamaran</a>
    <a href="/satilik/gulet">Gulet</a>
    <a href="/satilik/surat-teknesi">Sürat Teknesi</a>
    <a href="/satilik/sisme-bot">Şişme Bot</a>
  </div></nav>
  <section id="satilik-ilanlar" className="luxResults"><div className="syContainer">
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
       {Array.from({length:Math.min(totalPages,7)},(_,i)=>i+1).map(n=><a className={n===safePage?'active':''} href={'/satilik?'+queryString(params)+'sayfa='+n} key={n}>{n}</a>)}
       {totalPages>7&&<><span>…</span><a className={totalPages===safePage?'active':''} href={'/satilik?'+queryString(params)+'sayfa='+totalPages}>{totalPages}</a></>}
      </div>
      <strong>{allListings.length} ilan var</strong>
     </nav>}
    </div>
   </div>
  </div></section>
 </main><Footer/></>
}