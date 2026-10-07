import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import {saleListings,demoListing} from '../../data/content';

export default function Page(){
 const listings=[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)];
 return <><SiteHeader/><main className="luxListingPage">
  <MobileListingFilters type="sale"/>
  <section className="luxPageTop"><div className="syContainer">
   <div className="luxCrumb">Motoryat / Satılık</div>
   <div className="luxTitleRow"><div><span>FOR SALE</span><h1>Satılık Yatlar</h1><p>Motor yat, yelkenli ve yeni inşa projelerini tek listede karşılaştırın.</p></div><div className="luxCount"><strong>{listings.length}</strong><span>ilan</span></div></div>
  </div></section>
  <nav className="luxCategoryChips" aria-label="Satılık tekne kategorileri"><div className="syContainer">
    <a className="active" href="/satilik">Tümü</a>
    <a href="/satilik">Motoryat</a>
    <a href="/satilik">Yelkenli</a>
    <a href="/satilik">Katamaran</a>
    <a href="/satilik">Gulet</a>
    <a href="/satilik">Sürat Teknesi</a>
    <a href="/satilik">Şişme Bot</a>
  </div></nav>
  <section className="luxFilterWrap"><div className="syContainer"><div className="luxFilters">
    <button><small>TÜR</small><b>Tüm yatlar</b></button><button><small>BOY</small><b>0 m — 100 m+</b></button><button><small>FİYAT</small><b>Tüm fiyatlar</b></button><button><small>YIL</small><b>Tüm yıllar</b></button><button><small>TERSANE</small><b>Tümü</b></button><button><small>KONUM</small><b>Tümü</b></button><button className="luxSearchBtn">ARA</button>
  </div></div></section>
  <section className="luxResults"><div className="syContainer">
   <div className="luxResultsBar"><div><b>Satılık yatlar</b><span>Güncel satılık ilan seçkisi</span></div><select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select></div>
   <div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={x.seller} year={x.year||'—'} refit="—" index={i}/>)}</div>
  </div></section>
 </main><Footer/></>
}