import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
import {saleListings,demoListing} from '../../data/content';

export default function Page(){
 const listings=[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)];
 return <><SiteHeader/><main className="luxListingPage">
  <MobileListingFilters type="sale"/>
  <section className="luxPageTop luxSaleTitleOnly"><div className="syContainer">
   <div className="luxTitleRow luxTitleRowOnly"><div><h1>Satılık Yatlar</h1></div></div>
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
  <section className="luxFilterWrap"><div className="syContainer">
   <div className="luxFilters luxFiltersCompact">
    <label className="luxFilterField"><small>TEKNE TİPİ</small><select defaultValue=""><option value="">Tüm tekneler</option><option>Motoryat</option><option>Yelkenli</option><option>Katamaran</option><option>Gulet</option><option>Sürat Teknesi</option><option>Şişme Bot</option></select></label>
    <label className="luxFilterField"><small>BOY</small><select defaultValue=""><option value="">Tüm boylar</option><option>0–10 m</option><option>10–20 m</option><option>20–30 m</option><option>30–50 m</option><option>50 m+</option></select></label>
    <label className="luxFilterField"><small>FİYAT</small><select defaultValue=""><option value="">Tüm fiyatlar</option><option>€0–100K</option><option>€100K–500K</option><option>€500K–1M</option><option>€1M+</option></select></label>
    <label className="luxFilterField"><small>YIL</small><select defaultValue=""><option value="">Tüm yıllar</option><option>2026</option><option>2020–2025</option><option>2010–2019</option><option>2000–2009</option></select></label>
    <label className="luxFilterField"><small>KONUM</small><select defaultValue=""><option value="">Tüm konumlar</option><option>Türkiye</option><option>Akdeniz</option><option>Avrupa</option></select></label>
    <details className="luxMoreFilter">
      <summary><small>DAHA FAZLA</small><b>Diğer filtreler</b></summary>
      <div className="luxMoreFilterPanel">
        <label><span>Tersane</span><select defaultValue=""><option value="">Tümü</option><option>Numarine</option><option>Mengi Yay</option><option>Aiata</option></select></label>
        <label><span>Durum</span><select defaultValue=""><option value="">Tümü</option><option>Yeni</option><option>İkinci El</option><option>Sipariş Üzerine</option></select></label>
        <label><span>Yakıt</span><select defaultValue=""><option value="">Tümü</option><option>Dizel</option><option>Benzin</option><option>Elektrik / Hibrit</option></select></label>
        <label><span>Kabin</span><select defaultValue=""><option value="">Tümü</option><option>1–2</option><option>3–4</option><option>5+</option></select></label>
      </div>
    </details>
    <button className="luxSearchBtn">ARA</button>
   </div>
  </div></section>
  <section className="luxResults"><div className="syContainer">
   <div className="luxResultsBar"><div><b>Satılık yatlar</b><span>Güncel satılık ilan seçkisi</span></div><select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select></div>
   <div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={x.seller} year={x.year||'—'} refit="—" index={i}/>)}</div>
  </div></section>
 </main><Footer/></>
}