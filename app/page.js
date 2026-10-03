import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import HomeTabs from '../components/HomeTabs';
import HomeEventsSlider from '../components/HomeEventsSlider';
import {saleListings,charterListings} from '../data/content';

export default function Home(){return <><SiteHeader/><main className="homePage">
 <section className="dpHero"><img className="dpHeroPhoto" src="/hero-home.webp" alt="Motoryat"/><div className="dpHeroShade"></div><div className="dpWrap"><small>Etkinlik · 2 Ekim 2026</small><h1>Denizcilikte bu haftanın öne çıkanları</h1><a className="dpBtn" href="/haberler">Haberi oku</a></div><div className="dpMobileHeroQuote"><b>“</b><p>Denizcilikte keşfet, bağlan ve ticaret yap.</p><span>MOTORYAT.COM</span></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 <HomeEventsSlider/>

 <HomeTabs sale={saleListings} charter={charterListings}/>

 <section id="rehber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Sektör rehberi</h2></div><div className="dpDir"><a className="dpCard" href="/firmalar"><h3>Tersaneler ve inşa firmaları</h3><p className="dpM">Firma profilleri, tamamlanan projeler ve iletişim bilgileri.</p></a><a className="dpCard" href="/firmalar"><h3>Brokerlar ve acenteler</h3><p className="dpM">Satış ve kiralama danışmanlarını ülkeye göre bulun.</p></a></div></div></section>
 </main><Footer/></>}
