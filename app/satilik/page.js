import {choosePageData} from '../../lib/v2-page-data';
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
 const sourceListings=await choosePageData('sale',[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)]);
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
  <section className="luxPageTop luxSaleTitleOnly categoryHeroStd gmSaleBanner gmSaleVideo" aria-label="Satılık tekneler video bannerı">
   <video className="categoryHeroStdImage" autoPlay muted loop playsInline preload="metadata" poster="/sale-euro-850.webp" aria-label="Denizde motoryat video tanıtımı">
    <source src="https://motoryat.com/videos/home/lady-luna-home.mp4" type="video/mp4"/>
   </video>
   <div className="categoryHeroStdShade"></div>
   <div className="syContainer categoryHeroStdInner">
    <div className="luxTitleRow luxTitleRowOnly categoryHeroStdContent">
     <div className="gmSaleBannerCopy">
      <h1>SATILIK <span>TEKNELER</span></h1>
      <p>Türkiye ve dünyadan satılık motoryat, yelkenli, katamaran ve daha fazlası</p>
      <a className="gmSaleBannerCTA" href="#satilik-ilanlar">İlanları İncele <span aria-hidden="true">↗</span></a>
     </div>
    </div>
   </div>
  </section>
  <style>{`
   .gmSaleVideo{position:relative;isolation:isolate;overflow:hidden;min-height:320px}
   .gmSaleVideo video.categoryHeroStdImage{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
   .gmSaleVideo .categoryHeroStdShade{position:absolute;inset:0;z-index:0;background:linear-gradient(90deg,rgba(4,21,38,.90),rgba(4,21,38,.67) 40%,rgba(4,21,38,.12) 100%)}
   .gmSaleVideo .categoryHeroStdInner{position:relative;z-index:1;display:flex;align-items:center;min-height:320px}
   .gmSaleVideo .gmSaleBannerCopy{padding:30px 0;max-width:660px;color:#fff}
   .gmSaleVideo h1{margin:0 0 10px;font-family:Georgia,serif;font-size:clamp(32px,4.8vw,66px);line-height:1.03;color:#fff}
   .gmSaleVideo h1 span{color:#d6b16d}
   .gmSaleVideo p{font-size:clamp(13px,1.4vw,19px);line-height:1.4;color:#fff;max-width:560px}
   .gmSaleVideo .gmSaleBannerCTA{display:inline-flex;gap:17px;align-items:center;margin-top:22px;padding:12px 25px;border-radius:30px;background:#d6b16d;color:#0d1b2a;font-weight:700;font-size:14px;text-decoration:none}
   .gmSaleVideo .gmSaleBannerCTA:hover{background:#edd094}
   @media(max-width:640px){.gmSaleVideo,.gmSaleVideo .categoryHeroStdInner{min-height:245px}.gmSaleVideo .categoryHeroStdShade{background:linear-gradient(90deg,rgba(4,21,38,.9),rgba(4,21,38,.4))}.gmSaleVideo .gmSaleBannerCopy{padding:18px 0}.gmSaleVideo h1{font-size:clamp(27px,8vw,39px)}.gmSaleVideo p{font-size:12px}.gmSaleVideo .gmSaleBannerCTA{margin-top:14px;padding:10px 19px}}
   @media(prefers-reduced-motion:reduce){.gmSaleVideo video.categoryHeroStdImage{display:none}.gmSaleVideo{background:#0d1b2a url('/sale-euro-850.webp') center / cover no-repeat}}
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