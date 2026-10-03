import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import HomeTabs from '../components/HomeTabs';
import {saleListings,charterListings} from '../data/content';

const news=[
 {meta:'Yeni suya inişler · 1 Ekim',title:'Denizcilikte yeni dönem ve öne çıkan gelişmeler',image:'/sale-euro-850.webp',href:'/haber/yeni-model-ve-lansman-haberleri'},
 {meta:'Tersane · 30 Eylül',title:'Türkiye yat üretiminden son gelişmeler',image:'/store-mengi.webp',href:'/haber/turkiye-yat-uretiminden-son-gelismeler'},
 {meta:'Röportaj · 28 Eylül',title:'Akdeniz charter sezonu ve yeni rotalar',image:'/charter-luna-hero.webp',href:'/haber/charter-sezonu-ve-destinasyon-rehberi'}
];

export default function Home(){return <><SiteHeader/><main className="homePage">
 <section className="dpHero"><img className="dpHeroPhoto" src="/hero-home.webp" alt="Motoryat"/><div className="dpHeroShade"></div><div className="dpWrap"><small>Etkinlik · 2 Ekim 2026</small><h1>Denizcilikte bu haftanın öne çıkanları</h1><a className="dpBtn" href="/haberler">Haberi oku</a></div><div className="dpMobileHeroQuote"><b>“</b><p>Denizcilikte keşfet, bağlan ve ticaret yap.</p><span>MOTORYAT.COM</span></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 <section className="homeWideEvents" aria-label="Yaklaşan etkinlikler">
  <div className="homeWideEventsShell">
   <div className="homeWideEdge homeWideEdgeLeft"><span>ÖNCEKİ ETKİNLİKLER</span><b>‹</b></div>
   <div className="homeWideEventsRail">
    <a className="homeWideEventCard" href="/haberler/etkinlikler-fuarlar">
     <div className="homeWideEventDate"><b>08</b><small>EKİM</small></div>
     <div className="homeWideEventImage"><img src="/hero-home.webp" alt="Monaco Yat Fuarı 2026"/></div>
     <div className="homeWideEventBody"><h3>Monaco Yat Fuarı</h3><p>2026</p><span>Etkinliği görüntüle <b>›</b></span></div>
    </a>
    <a className="homeWideEventCard" href="/haberler/etkinlikler-fuarlar">
     <div className="homeWideEventDate"><b>28</b><small>EKİM</small></div>
     <div className="homeWideEventImage"><img src="/store-directory.webp" alt="Fort Lauderdale Uluslararası Tekne Fuarı 2026"/></div>
     <div className="homeWideEventBody"><h3>Fort Lauderdale Uluslararası Tekne Fuarı</h3><p>2026</p><span>Etkinliği görüntüle <b>›</b></span></div>
    </a>
    <a className="homeWideEventCard" href="/haberler/etkinlikler-fuarlar">
     <div className="homeWideEventDate"><b>13</b><small>KASIM</small></div>
     <div className="homeWideEventImage"><img src="/charter-sunreef.webp" alt="Sydney Tekne Fuarı 2026"/></div>
     <div className="homeWideEventBody"><h3>Sydney Tekne Fuarı</h3><p>2026</p><span>Etkinliği görüntüle <b>›</b></span></div>
    </a>
   </div>
   <div className="homeWideEdge homeWideEdgeRight"><span>YAKLAŞAN ETKİNLİKLER</span><b>›</b></div>
  </div>
 </section>

 <section id="haber" className="dpSection homeNewsSection"><div className="dpWrap">
  <div className="dpHead"><h2>Son haberler</h2><a href="/haberler">Tüm haberler</a></div>
  <div className="homeNewsGrid">
   {news.map((x,i)=><a className="homeNewsCard" href={x.href} key={x.title}>
    <div className="homeNewsMedia"><img src={x.image} alt={x.title}/><span className="homeNewsIndex">0{i+1}</span></div>
    <div className="homeNewsBody">
     <div className="homeNewsMeta">{x.meta}</div>
     <h3>{x.title}</h3>
     <div className="homeNewsRead"><span>Haberi oku</span><b>→</b></div>
    </div>
   </a>)}
  </div>
 </div></section>

 <HomeTabs sale={saleListings} charter={charterListings}/>

 <section id="rehber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Sektör rehberi</h2></div><div className="dpDir"><a className="dpCard" href="/firmalar"><h3>Tersaneler ve inşa firmaları</h3><p className="dpM">Firma profilleri, tamamlanan projeler ve iletişim bilgileri.</p></a><a className="dpCard" href="/firmalar"><h3>Brokerlar ve acenteler</h3><p className="dpM">Satış ve kiralama danışmanlarını ülkeye göre bulun.</p></a></div></div></section>
 </main><Footer/></>}
