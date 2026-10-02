import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import Section from '../components/Section';
import {YachtCard,StoreCard,ProductCard} from '../components/Card';
import {saleListings,charterListings,stores,products} from '../data/content';

const boatTypes=['Motoryat','Yelkenli','Katamaran','Süper yat','Gulet','Sürat teknesi'];

export default function Home(){
  return <>
    <SiteHeader/>
    <main>
      <section className="homeHero">
        <img src="/hero-home.webp" alt="Motoryat"/>
        <div className="heroShade"></div>
        <div className="container heroContent">
          <span className="heroEyebrow">MOTORYAT.COM</span>
          <h1>Denizcilikte keşfet.<br/>Bağlan. Ticaret yap.</h1>
          <div className="heroSearch">
            <button>Satılık</button>
            <input placeholder="Tür, marka, model veya tekne ara"/>
            <button className="gold">Ara</button>
          </div>
        </div>
      </section>

      <section className="typeSection">
        <div className="container">
          <div className="typeGrid">
            {boatTypes.map(x=><a href="/satilik" key={x}>{x}</a>)}
          </div>
        </div>
      </section>

      <Section eyebrow="SATILIK" title="Öne çıkan ilanlar" action={{href:'/satilik',label:'Tüm satılıklar'}}>
        <div className="cardGrid">{saleListings.map((x,i)=><YachtCard key={x.title} item={x} badge={i===0?'Öne Çıkan':null}/>)}</div>
      </Section>

      <Section eyebrow="CHARTER" title="Kiralık destinasyonlar" action={{href:'/kiralik',label:'Tüm kiralıklar'}}>
        <div className="destinationGrid">
          {charterListings.slice(0,3).map(x=><a className="destinationCard" href="/kiralik" key={x.title}><img src={x.image} alt={x.title}/><span>{x.title}</span></a>)}
        </div>
      </Section>

      <section className="superyachtFeature">
        <img src="/charter-luna-hero.webp" alt="Superyacht"/>
        <div className="superyachtShade"></div>
        <div className="container superyachtCopy">
          <span>SÜPER YAT VİTRİNİ</span>
          <h2>Lady Luna</h2>
          <p>32 m · Motor Yacht</p>
        </div>
      </section>

      <Section eyebrow="MAĞAZALAR" title="Denizcilik profesyonelleri" action={{href:'/magazalar',label:'Tüm mağazalar'}}>
        <div className="storeGrid">{stores.map(x=><StoreCard key={x.name} item={x}/>)}</div>
      </Section>

      <Section eyebrow="TEKNE & YAT MALZEMELERİ" title="Öne çıkan ekipmanlar" action={{href:'/urunler',label:'Tüm ürünler'}}>
        <div className="productGrid">{products.map(x=><ProductCard key={x.name} item={x}/>)}</div>
      </Section>
    </main>
    <Footer/>
  </>
}