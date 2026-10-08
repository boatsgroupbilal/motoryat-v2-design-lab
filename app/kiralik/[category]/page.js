import {notFound} from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import MobileListingFilters from '../../../components/MobileListingFilters';
import {charterListings} from '../../../data/content';
import {charterCategories} from '../../../data/category-config';
import {filterCharterListings,queryString} from '../../../data/listing-filters';

export default async function Page({params,searchParams}){
  const {category}=await params;
  const cfg=charterCategories[category];
  if(!cfg) notFound();

  const query=await searchParams;
  const page=Math.max(1,Number(query?.sayfa)||1);
  const perPage=24;
  const categoryListings=charterListings.filter(cfg.match);
  const filtered=filterCharterListings(categoryListings,query);
  const totalPages=Math.max(1,Math.ceil(filtered.length/perPage));
  const safePage=Math.min(page,totalPages);
  const listings=filtered.slice((safePage-1)*perPage,safePage*perPage);

  return <><SiteHeader/><main className="luxListingPage">
    <MobileListingFilters type="charter"/>
    <section className="luxPageTop luxCharterTop categoryHeroStd">
      <img className="categoryHeroStdImage" src="/charter-luna-hero.webp" alt={cfg.label+' kiralık yatlar'}/>
      <div className="categoryHeroStdShade"></div>
      <div className="syContainer categoryHeroStdInner"><div className="categoryHeroStdContent">
        <span className="categoryHeroKicker">KİRALIK</span><h1>{cfg.label}</h1><p>{cfg.label} kategorisindeki charter seçeneklerini keşfedin.</p>
      </div></div>
    </section>

    <nav className="luxCategoryChips" aria-label="Kiralık tekne kategorileri"><div className="syContainer">
      <a href="/kiralik">Tümü</a>
      {Object.entries(charterCategories).map(([slug,c])=><a className={slug===category?'active':''} href={'/kiralik/'+slug} key={slug}>{c.label}</a>)}
    </div></nav>

    <section className="luxResults"><div className="syContainer">
      <div className="luxResultsBar"><div><b>{cfg.label}</b><span>{filtered.length} charter</span></div><select defaultValue="featured"><option value="featured">Öne çıkanlar</option><option>Boy: büyükten küçüğe</option><option>Haftalık fiyat</option></select></div>
      {listings.length?<div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="charter" seller={x.seller} year={x.year||'—'} index={i}/>)}</div>:<div className="categoryEmptyState">Bu kategoride henüz charter ilanı yok.</div>}
      {totalPages>1&&<nav className="salePagination" aria-label="Sayfalar"><div className="salePaginationPages">
        {Array.from({length:Math.min(totalPages,8)},(_,i)=>i+1).map(n=><a className={n===safePage?'active':''} href={'?'+queryString(query)+'sayfa='+n} key={n}>{n}</a>)}
      </div><strong>{filtered.length} ilan var</strong></nav>}
    </div></section>
  </main><Footer/></>;
}
