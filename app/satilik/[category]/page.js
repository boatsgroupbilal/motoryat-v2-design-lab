import {notFound} from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import MobileListingFilters from '../../../components/MobileListingFilters';
import SaleFilterSidebar from '../../../components/SaleFilterSidebar';
import {saleListings} from '../../../data/content';
import {saleCategories} from '../../../data/category-config';
import {filterSaleListings,queryString} from '../../../data/listing-filters';

const uniq=(values)=>[...new Set(values.filter(v=>v!==undefined&&v!==null&&String(v).trim()!=='').map(v=>String(v).trim()))];

export default async function Page({params,searchParams}){
  const {category}=await params;
  const cfg=saleCategories[category];
  if(!cfg) notFound();

  const query=await searchParams;
  const page=Math.max(1,Number(query?.sayfa)||1);
  const perPage=24;
  const categoryListings=saleListings.filter(cfg.match);
  const filtered=filterSaleListings(categoryListings,query);
  const totalPages=Math.max(1,Math.ceil(filtered.length/perPage));
  const safePage=Math.min(page,totalPages);
  const listings=filtered.slice((safePage-1)*perPage,safePage*perPage);

  const vesselTypes=uniq(categoryListings.map(x=>x.vessel_type||x.boat_type||x.category)).sort((a,b)=>a.localeCompare(b,'tr'));
  const years=uniq(categoryListings.map(x=>x.year)).filter(x=>/^\d{4}$/.test(x)).sort((a,b)=>Number(b)-Number(a));
  const locations=uniq(categoryListings.map(x=>x.location)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,24);
  const makers=uniq(categoryListings.map(x=>x.store_name||x.seller||x.brand_name||x.brand||x.manufacturer)).sort((a,b)=>a.localeCompare(b,'tr')).slice(0,30);

  return <><SiteHeader/><main className="luxListingPage">
    <MobileListingFilters type="sale"/>
    <section className="luxPageTop luxSaleTitleOnly categoryHeroStd">
      <img className="categoryHeroStdImage" src="/sale-euro-850.webp" alt={cfg.label+' satılık tekneler'}/>
      <div className="categoryHeroStdShade"></div>
      <div className="syContainer categoryHeroStdInner"><div className="categoryHeroStdContent">
        <span className="categoryHeroKicker">SATILIK</span><h1>{cfg.label}</h1><p>{cfg.label} kategorisindeki satılık ilanları keşfedin.</p>
      </div></div>
    </section>

    <nav className="luxCategoryChips" aria-label="Satılık tekne kategorileri"><div className="syContainer">
      <a href="/satilik">Tümü</a>
      {Object.entries(saleCategories).map(([slug,c])=><a className={slug===category?'active':''} href={'/satilik/'+slug} key={slug}>{c.label}</a>)}
    </div></nav>

    <section className="luxResults"><div className="syContainer"><div className="saleListingLayout">
      <SaleFilterSidebar vesselTypes={vesselTypes} makers={makers} years={years} locations={locations} statuses={['Yeni','İkinci El','Sipariş Üzerine','Proje']}/>
      <div className="saleListingMain">
        <div className="luxResultsBar"><div><b>{cfg.label}</b><span>{filtered.length} ilan</span></div><select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select></div>
        {listings.length?<div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={x.seller} year={x.year||'—'} index={i}/>)}</div>:<div className="categoryEmptyState">Bu kategoride henüz ilan yok.</div>}
        {totalPages>1&&<nav className="salePagination" aria-label="Sayfalar"><div className="salePaginationPages">
          {Array.from({length:Math.min(totalPages,8)},(_,i)=>i+1).map(n=><a className={n===safePage?'active':''} href={'?'+queryString(query)+'sayfa='+n} key={n}>{n}</a>)}
          {totalPages>8&&<><span>…</span><a className={totalPages===safePage?'active':''} href={'?'+queryString(query)+'sayfa='+totalPages}>{totalPages}</a></>}
        </div><strong>{filtered.length} ilan var</strong></nav>}
      </div>
    </div></div></section>
  </main><Footer/></>;
}
