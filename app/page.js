import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import HomeTabs from '../components/HomeTabs';
import HomeEventsSlider from '../components/HomeEventsSlider';
import {saleListings,charterListings,demoListing} from '../data/content';

export default function Home(){return <><SiteHeader/><main className="homePage">
 <section className="dpHero"><video className="dpHeroPhoto" autoPlay muted loop playsInline preload="metadata" poster="https://motoryat.com/media/lady-luna/hero-poster.webp" aria-label="Lady Luna 32M Motor Yacht"><source src="https://motoryat.com/videos/home/lady-luna-home.mp4" type="video/mp4"/></video><div className="dpHeroShade"></div><div className="dpWrap"><small>LADY LUNA · 32M MOTOR YACHT</small><h1>Denizcilikte keşfet, bağlan ve ticaret yap.</h1><a className="dpBtn" href="/kiralik">Kiralık yatları keşfet</a></div><div className="dpMobileHeroQuote"><b>“</b><p>Denizcilikte keşfet, bağlan ve ticaret yap.</p><span>MOTORYAT.COM</span></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 <HomeEventsSlider/>

 <section className="homePromoSection" aria-label="Reklam ve tanıtım alanı">
  <div className="dpWrap homePromoGrid">
   <a className="homePromoCard" href="/magazalar">
    <img src="/ads/motoryat-firma-magaza-300.webp" alt="Motoryat firma ve mağaza tanıtımı" loading="lazy"/>
    <div className="homePromoInfo"><small>REKLAM · MAĞAZALAR</small><h2>Denizcilikte ticari vitrininiz</h2><span>Mağazaları keşfet →</span></div>
   </a>
   <a className="homePromoCard" href="/firmalar">
    <img src="/ads/motoryat-house-ad-300-png.webp" alt="Motoryat denizcilik firmaları" loading="lazy"/>
    <div className="homePromoInfo"><small>REKLAM · FİRMALAR</small><h2>Denizcilik sektöründeki firmalar</h2><span>Firmaları incele →</span></div>
   </a>
  </div>
 </section>

 <HomeTabs sale={[demoListing,...saleListings.filter(x=>x.slug!==demoListing.slug)]} charter={charterListings}/>

 <section className="homePromoSection homePromoSectionBottom" aria-label="Öne çıkan reklam">
  <div className="dpWrap"><a className="homePromoWide" href="/magazalar">
   <img src="/ads/motoryat-firma-magaza-300.webp" alt="Motoryat mağaza reklamı" loading="lazy"/>
   <div><small>REKLAM</small><h2>Tekne ve yat dünyasında yeni bağlantılar</h2><p>Mağazaları, firmaları ve ekipmanları keşfedin.</p><span>Keşfet →</span></div>
  </a></div>
 </section>

 <section id="rehber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Sektör rehberi</h2></div><div className="dpDir"><a className="dpCard" href="/firmalar"><h3>Tersaneler ve inşa firmaları</h3><p className="dpM">Firma profilleri, tamamlanan projeler ve iletişim bilgileri.</p></a><a className="dpCard" href="/firmalar"><h3>Brokerlar ve acenteler</h3><p className="dpM">Satış ve kiralama danışmanlarını ülkeye göre bulun.</p></a></div></div></section>
 </main><Footer/></>}
