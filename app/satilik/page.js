import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import {saleListings} from '../../data/content';

const sellers=['Euro Boat','Euro Boat','Euro Boat','Yener Tekne'];
const years=['2026','2026','2025','2024'];

export default function Page(){
 const listings=[...saleListings,...saleListings];
 return <><SiteHeader/><main className="luxListingPage">
  <section className="luxPageTop"><div className="syContainer">
   <div className="luxCrumb">Motoryat / Satılık</div>
   <div className="luxTitleRow"><div><span>FOR SALE</span><h1>Satılık Yatlar</h1><p>Motor yat, yelkenli ve yeni inşa projelerini tek listede karşılaştırın.</p></div><div className="luxCount"><strong>1.248</strong><span>ilan</span></div></div>
  </div></section>

  <section className="luxFilterWrap"><div className="syContainer">
   <div className="luxFilters">
    <button><small>TÜR</small><b>Tüm yatlar</b></button>
    <button><small>BOY</small><b>0 m — 100 m+</b></button>
    <button><small>FİYAT</small><b>Tüm fiyatlar</b></button>
    <button><small>YIL</small><b>Tüm yıllar</b></button>
    <button><small>TERSANE</small><b>Tümü</b></button>
    <button><small>KONUM</small><b>Tümü</b></button>
    <button className="luxSearchBtn">ARA</button>
   </div>
  </div></section>

  <section className="luxResults"><div className="syContainer">
   <div className="luxResultsBar"><div><b>Satılık yatlar</b><span>Öne çıkan ve güncel ilanlar</span></div><select defaultValue="new"><option value="new">En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select></div>
   <div className="sqYachtGrid">
    {listings.map((x,i)=><YachtCard key={x.slug+'-'+i} item={x} type="sale" seller={sellers[i%sellers.length]} year={years[i%years.length]} refit={String(2021+(i%4))} index={i}/>)}
   </div>
   <div className="syPager luxPager"><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div>
  </div></section>
 </main><Footer/></>
}
