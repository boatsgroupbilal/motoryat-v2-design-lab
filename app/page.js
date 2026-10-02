import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import HomeTabs from '../components/HomeTabs';
import {saleListings,charterListings,stores} from '../data/content';

const news=[
  {cat:'HABERLER',title:'Denizcilikte yeni dönem ve öne çıkan gelişmeler',image:'/sale-euro-850.webp',href:'/haber/yeni-model-ve-lansman-haberleri'},
  {cat:'TERSANELER',title:'Türkiye yat üretiminden son gelişmeler',image:'/store-mengi.webp',href:'/haber/turkiye-yat-uretiminden-son-gelismeler'},
  {cat:'CHARTER',title:'Akdeniz charter sezonu ve yeni rotalar',image:'/charter-luna-hero.webp',href:'/haber/charter-sezonu-ve-destinasyon-rehberi'}
];

export default function Home(){return <>
  <SiteHeader/>
  <main className="stdHome">
    <section className="stdHero stdContainer">
      <img src="/hero-home.webp" alt="Motoryat"/>
      <div className="stdHeroShade"></div>
      <div className="stdHeroCopy">
        <span>ÖNE ÇIKAN</span>
        <h1>MOTORYAT 2026: DENİZCİLİKTE YENİ DÖNEM</h1>
        <p>Satılık ve kiralık yatlar, markalar, marinalar ve sektör gündemi tek platformda.</p>
        <a href="/haberler">HABERİ OKU →</a>
      </div>
      <a className="stdHeroPlay" href="/haberler" aria-label="Videoyu aç"><span></span></a>
    </section>

    <section className="stdNewsSection">
      <div className="stdContainer">
        <div className="stdSectionHead"><div><span>SON HABERLER</span><h2>Denizcilik gündemi</h2></div><a href="/haberler">Tüm haberler →</a></div>
        <div className="stdNewsGrid">
          {news.map(x=><a href={x.href} className="stdNewsCard" key={x.title}><img src={x.image} alt=""/><small>{x.cat}</small><h3>{x.title}</h3><span>Devamını oku →</span></a>)}
        </div>
      </div>
    </section>

    <HomeTabs sale={saleListings} charter={charterListings}/>

    <section className="stdGuideSection">
      <div className="stdContainer">
        <div className="stdSectionHead"><div><span>REHBER</span><h2>Denizcilik profesyonelleri</h2></div><a href="/firmalar">Tüm rehber →</a></div>
        <div className="stdGuideGrid">
          {stores.slice(0,4).map(x=><a href={x.href} key={x.slug}><img src={x.image} alt={x.name}/><div><small>{x.category}</small><h3>{x.name}</h3><p>{x.location}</p></div></a>)}
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</>}