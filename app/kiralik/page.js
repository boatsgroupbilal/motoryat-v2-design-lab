import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import {charterListings} from '../../data/content';

const sellers=['Lady Luna Charter','Sunreef Yachts Charter','Lady Luna Charter','Lady Luna Charter'];
const years=['2022','2024','2022','2022'];

export default function Page(){
 const listings=[...charterListings,...charterListings];
 return <><SiteHeader/><main className="luxListingPage">
  <MobileListingFilters type="charter"/>
  <section className="luxPageTop luxCharterTop categoryHeroStd">
   <img className="categoryHeroStdImage" src="/charter-luna-hero.webp" alt="Kiralık yatlar"/>
   <div className="categoryHeroStdShade"></div>
   <div className="syContainer categoryHeroStdInner">
    <div className="categoryHeroStdContent">
     <div className="luxCrumb">Motoryat / Kiralık</div>
     <div className="luxTitleRow"><div><span>FOR CHARTER</span><h1>Kiralık Yatlar</h1><p>Türkiye ve Akdeniz'in öne çıkan charter yatlarını keşfedin.</p></div><div className="luxCount"><strong>200+</strong><span>charter</span></div></div>
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
   <div className="luxResultsBar"><div><b>Kiralık yatlar</b><span>Charter seçkisi</span></div><select defaultValue="featured"><option value="featured">Öne çıkanlar</option><option>Boy: büyükten küçüğe</option><option>Haftalık fiyat</option></select></div>
   <div className="sqYachtGrid">
    {listings.map((x,i)=><YachtCard key={x.slug+'-'+i} item={x} type="charter" seller={sellers[i%sellers.length]} year={years[i%years.length]} refit={String(2021+(i%4))} index={i}/>)}
   </div>
   <div className="syPager luxPager"><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div>
  </div></section>
 </main><Footer/></>
}
