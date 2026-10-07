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
  <section className="luxFilterWrap motoryatLiveFilters"><div className="syContainer">
   <div className="motoryatFilterHead">
    <div><small>ARAMA FİLTRELERİ</small><h2>Arama Filtreleri</h2></div>
    <button type="button">Kapat ×</button>
   </div>

   <div className="motoryatFilterGrid">
    <label><small>TEKNE TÜRÜ</small><select defaultValue=""><option value="">Tümü</option>{vesselTypes.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
    <label><small>MARKA</small><select defaultValue=""><option value="">Tümü</option>{makers.map(x=><option key={x} value={x}>{x}</option>)}</select></label>

    <label className="motoryatFilterSearch"><small>TEKNE, MARKA VEYA MODEL</small><input type="search" placeholder="Arama yapın"/></label>
    <label className="motoryatFilterLocation"><small>KONUM</small><input type="search" placeholder="Şehir veya ülke"/></label>

    <fieldset className="motoryatFilterRange"><legend>BOY (METRE)</legend><div><input inputMode="decimal" placeholder="En az"/><input inputMode="decimal" placeholder="En çok"/></div></fieldset>
    <fieldset className="motoryatFilterRange"><legend>YIL</legend><div><input inputMode="numeric" placeholder="En az"/><input inputMode="numeric" placeholder="En çok"/></div></fieldset>
    <fieldset className="motoryatFilterRange"><legend>FİYAT (EUR)</legend><div><input inputMode="numeric" placeholder="En az"/><input inputMode="numeric" placeholder="En çok"/></div></fieldset>

    <label><small>DURUM</small><select defaultValue=""><option value="">Tümü</option>{statuses.map(x=><option key={x} value={x}>{x}</option>)}</select></label>
    <label><small>EN AZ KABİN</small><input inputMode="numeric" min="0" placeholder="Örn. 2"/></label>
    <label><small>EN FAZLA MOTOR SAATİ</small><input inputMode="numeric" min="0" placeholder="Örn. 500"/></label>
   </div>

   <div className="motoryatFilterActions">
    <button type="button" className="motoryatFilterApply">İLANLARI GÖSTER</button>
    <button type="reset" className="motoryatFilterClear">Filtreleri Temizle</button>
   </div>
  </div></section>
  <section className="luxResults"><div className="syContainer">
   <div className="luxResultsBar"><div><b>Satılık yatlar</b><span>Güncel satılık ilan seçkisi</span></div><select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select></div>
   <div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={x.seller} year={x.year||'—'} refit="—" index={i}/>)}</div>
  </div></section>
 </main><Footer/></>
}