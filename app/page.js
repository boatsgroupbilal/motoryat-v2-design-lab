import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import Section from '../components/Section';
import {YachtCard,StoreCard,ProductCard} from '../components/Card';
import {saleListings,charterListings,stores,products} from '../data/content';

const boatTypes=[
  ['Motoryat','Modern motor yatlar'],
  ['Yelkenli','Cruiser ve performance'],
  ['Katamaran','Geniş yaşam alanı'],
  ['Süper yat','30 metre ve üzeri'],
  ['Gulet','Klasik Akdeniz'],
  ['Sürat teknesi','Sportif ve hızlı']
];

export default function Home(){
  return <>
    <SiteHeader/>
    <main>
      <section className="homeHero">
        <img src="/hero-home.webp" alt="Denizde lüks motor yat"/>
        <div className="heroShade"></div>
        <div className="container heroContent">
          <span className="heroEyebrow">MOTORYAT.COM</span>
          <h1>Denizcilikte keşfet.<br/>Bağlan. Ticaret yap.</h1>
          <p className="heroLead">Satılık ve kiralık teknelerden denizcilik firmalarına kadar tek merkez.</p>
          <div className="heroFinder">
            <button className="finderMode">Satılık <span>⌄</span></button>
            <button><small>TEKNE TÜRÜ</small><b>Tümü</b></button>
            <button><small>BOY</small><b>Tüm boylar</b></button>
            <button><small>BÜTÇE</small><b>Tüm fiyatlar</b></button>
            <button><small>KONUM</small><b>Türkiye</b></button>
            <a className="finderSubmit" href="/satilik">Ara</a>
          </div>
        </div>
      </section>

      <section className="quickLinks">
        <div className="container quickLinkGrid">
          <a href="/satilik"><small>TEKNE KEŞFET</small><b>Satılık</b><span>→</span></a>
          <a href="/kiralik"><small>CHARTER</small><b>Kiralık</b><span>→</span></a>
          <a href="/urunler"><small>EKİPMAN & PARÇA</small><b>Tekne Malzemeleri</b><span>→</span></a>
          <a href="/magazalar"><small>TİCARİ VİTRİN</small><b>Mağazalar</b><span>→</span></a>
        </div>
      </section>

      <section className="typeSection">
        <div className="container">
          <div className="sectionHead compactHead">
            <div><span>TEKNE TİPLERİ</span><h2>Aradığınız tekneye daha hızlı ulaşın</h2></div>
          </div>
          <div className="typeGrid">
            {boatTypes.map(([name,desc])=><a href="/satilik" key={name}><span>{name}</span><small>{desc}</small><i>→</i></a>)}
          </div>
        </div>
      </section>

      <Section eyebrow="SATILIK" title="Öne çıkan tekneler" desc="Seçilmiş ilanlar, net teknik bilgi ve doğrudan bağlantı." action={{href:'/satilik',label:'Tüm satılıklar'}}>
        <div className="cardGrid">{saleListings.map((x,i)=><YachtCard key={x.title} item={x} badge={i===0?'ÖNE ÇIKAN':null}/>)}</div>
      </Section>

      <section className="editorialFeature">
        <img src="/charter-luna-hero.webp" alt="Lady Luna motor yacht"/>
        <div className="editorialShade"></div>
        <div className="container editorialCopy">
          <span>CHARTER SEÇKİSİ</span>
          <h2>Lady Luna</h2>
          <p>32 m motor yacht · İstanbul ve Ege rotaları</p>
          <a className="outlineLight" href="/kiralik">Kiralık yatları keşfet</a>
        </div>
      </section>

      <Section eyebrow="CHARTER" title="Destinasyonlar" desc="Rotaya göre keşfedin; yat seçimini sonra yapın." action={{href:'/kiralik',label:'Tüm destinasyonlar'}}>
        <div className="destinationGrid">
          {charterListings.slice(0,3).map((x,i)=><a className="destinationCard" href="/kiralik" key={x.title}><img src={x.image} alt={x.title}/><div><small>{i===0?'İSTANBUL & BOĞAZ':'AKDENİZ'}</small><span>{x.title}</span></div></a>)}
        </div>
      </Section>

      <section className="section alt">
        <div className="container splitHeading">
          <div><span>DENİZCİLİK AĞI</span><h2>Firma, mağaza ve uzmanları keşfedin</h2></div>
          <p>Motoryat yalnızca ilan listesi değil; tekne, ekipman ve hizmet sağlayıcılarını aynı ticari ağda buluşturan bir denizcilik platformudur.</p>
        </div>
        <div className="container storeGrid">{stores.map(x=><StoreCard key={x.name} item={x}/>)}</div>
      </section>

      <Section eyebrow="TEKNE & YAT MALZEMELERİ" title="Ekipman ve parça" action={{href:'/urunler',label:'Tüm ürünler'}}>
        <div className="productGrid">{products.map(x=><ProductCard key={x.name} item={x}/>)}</div>
      </Section>
    </main>
    <Footer/>
  </>
}
