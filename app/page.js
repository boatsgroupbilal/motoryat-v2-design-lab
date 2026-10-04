import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import HomeTabs from '../components/HomeTabs';
import HomeEventsSlider from '../components/HomeEventsSlider';
import {saleListings,charterListings} from '../data/content';

export default function Home(){return <><SiteHeader/><main className="homePage">
 <section className="dpHero"><video className="dpHeroPhoto" autoPlay muted loop playsInline preload="metadata" poster="/heroes/anasayfa-hero.webp" aria-label="Lady Luna 32M Motor Yacht"><source src="/videos/home/lady-luna-home.mp4" type="video/mp4"/></video><div className="dpHeroShade"></div><div className="dpWrap"><small>LADY LUNA · 32M MOTOR YACHT</small><h1>Denizcilikte keşfet, bağlan ve ticaret yap.</h1><a className="dpBtn" href="/kiralik">Kiralık yatları keşfet</a></div><div className="dpMobileHeroQuote"><b>“</b><p>Denizcilikte keşfet, bağlan ve ticaret yap.</p><span>MOTORYAT.COM</span></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 <HomeEventsSlider/>

 <HomeTabs sale={saleListings} charter={charterListings}/>

 <section id="rehber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Sektör rehberi</h2></div><div className="dpDir"><a className="dpCard" href="/firmalar"><h3>Tersaneler ve inşa firmaları</h3><p className="dpM">Firma profilleri, tamamlanan projeler ve iletişim bilgileri.</p></a><a className="dpCard" href="/firmalar"><h3>Brokerlar ve acenteler</h3><p className="dpM">Satış ve kiralama danışmanlarını ülkeye göre bulun.</p></a></div></div></section>
 </main><Footer/></>}
