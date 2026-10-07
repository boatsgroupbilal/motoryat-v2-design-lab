import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import MobileListingFilters from '../../components/MobileListingFilters';
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
    <label className="luxFilterField"><small>TEKNE TİPİ</small><select defaultValue=""><option value="">Tüm tekneler</option>{vesselTypes.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
    <label className="luxFilterField"><small>BOY</small><select defaultValue=""><option value="">Tüm boylar</option><option>0–5 m</option><option>5–10 m</option><option>10–15 m</option><option>15–20 m</option><option>20–30 m</option><option>30–40 m</option><option>40–50 m</option><option>50–70 m</option><option>70 m+</option></select></label>
    <label className="luxFilterField"><small>FİYAT</small><select defaultValue=""><option value="">Tüm fiyatlar</option><option>Fiyatı açık ilanlar</option><option>Fiyat sorunuz / teklif</option><option>€0–250K</option><option>€250K–500K</option><option>€500K–1M</option><option>€1M–5M</option><option>€5M+</option><option>TL fiyatlı ilanlar</option></select></label>
    <label className="luxFilterField"><small>YIL</small><select defaultValue=""><option value="">Tüm yıllar</option>{years.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
    <label className="luxFilterField"><small>KONUM</small><select defaultValue=""><option value="">Tüm konumlar</option>{locations.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
    <details className="luxMoreFilter">
      <summary><small>DAHA FAZLA</small><b>Diğer filtreler</b></summary>
      <div className="luxMoreFilterPanel">
        <label><span>Tersane / Marka</span><select defaultValue=""><option value="">Tümü</option>{makers.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
        <label><span>Durum</span><select defaultValue=""><option value="">Tümü</option>{statuses.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
        <label><span>Yakıt</span><select defaultValue=""><option value="">Tümü</option><option>Dizel</option><option>Benzin</option><option>Elektrik</option><option>Hibrit</option></select></label>
        <label><span>Kabin</span><select defaultValue=""><option value="">Tümü</option><option>Kabinsiz</option><option>1 Kabin</option><option>2 Kabin</option><option>3 Kabin</option><option>4 Kabin</option><option>5+ Kabin</option></select></label>
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