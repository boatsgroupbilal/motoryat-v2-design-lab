import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import HomeTabs from '../components/HomeTabs';
import {saleListings,charterListings} from '../data/content';

const news=[
 {meta:'Yeni suya inişler · 1 Ekim',title:'Denizcilikte yeni dönem ve öne çıkan gelişmeler',image:'/sale-euro-850.webp',href:'/haber/yeni-model-ve-lansman-haberleri'},
 {meta:'Tersane · 30 Eylül',title:'Türkiye yat üretiminden son gelişmeler',image:'/store-mengi.webp',href:'/haber/turkiye-yat-uretiminden-son-gelismeler'},
 {meta:'Röportaj · 28 Eylül',title:'Akdeniz charter sezonu ve yeni rotalar',image:'/charter-luna-hero.webp',href:'/haber/charter-sezonu-ve-destinasyon-rehberi'}
];

export default function Home(){return <><SiteHeader/><main>
 <section className="dpHero"><img className="dpHeroPhoto" src="/hero-home.webp" alt="Motoryat"/><div className="dpHeroShade"></div><div className="dpWrap"><small>Etkinlik · 2 Ekim 2026</small><h1>Denizcilikte bu haftanın öne çıkanları</h1><a className="dpBtn" href="/haberler">Haberi oku</a></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 <section id="haber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Son haberler</h2><a href="/haberler">Tüm haberler</a></div><div className="dpNews">{news.map((x,i)=><a className="dpCard" href={x.href} key={x.title}><div className={'dpImg n'+i}><img src={x.image} alt=""/></div><div className="dpT"><div className="dpM">{x.meta}</div><h3>{x.title}</h3></div></a>)}</div></div></section>

 <HomeTabs sale={saleListings} charter={charterListings}/>

 <section id="rehber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Sektör rehberi</h2></div><div className="dpDir"><a className="dpCard" href="/firmalar"><h3>Tersaneler ve inşa firmaları</h3><p className="dpM">Firma profilleri, tamamlanan projeler ve iletişim bilgileri.</p></a><a className="dpCard" href="/firmalar"><h3>Brokerlar ve acenteler</h3><p className="dpM">Satış ve kiralama danışmanlarını ülkeye göre bulun.</p></a></div></div></section>
 </main><Footer/></>}
