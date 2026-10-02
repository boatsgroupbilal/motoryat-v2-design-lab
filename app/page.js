import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import Section from '../components/Section';
import {YachtCard,StoreCard,ProductCard} from '../components/Card';
import {saleListings,charterListings,stores,products} from '../data/content';

export default function Home(){
  return <>
    <SiteHeader/>
    <main>
      <section className="homeTop">
        <div className="container homeTopInner">
          <span className="eyebrow">MOTORYAT.COM</span>
          <h1>Denizcilikte keşfet.<br/>Bağlan. Ticaret yap.</h1>
          <p>Tekne, charter, ekipman ve profesyonel denizcilik ağı tek platformda.</p>
          <div className="homeSearch">
            <button className="searchType">Satılık</button>
            <input placeholder="Marka, model veya tekne ara"/>
            <button className="gold">Ara</button>
          </div>
        </div>
      </section>

      <div className="container quickGrid">
        <a href="/satilik"><b>TEKNE KEŞFET</b><span>Satılık →</span></a>
        <a href="/kiralik"><b>CHARTER</b><span>Kiralık →</span></a>
        <a href="/urunler"><b>EKİPMAN & PARÇA</b><span>Tekne Malzemeleri →</span></a>
        <a href="/magazalar"><b>TİCARİ VİTRİN</b><span>Mağazalar →</span></a>
      </div>

      <Section eyebrow="SATILIK" title="Öne çıkan tekneler" desc="Seçilmiş satılık tekne ve yatlar." action={{href:'/satilik',label:'Tüm satılıklar'}}>
        <div className="cardGrid">{saleListings.map((x,i)=><YachtCard key={x.title} item={x} badge={i===0?'Öne Çıkan':null}/>)}</div>
      </Section>

      <Section eyebrow="CHARTER" title="Kiralık yatlar" desc="Destinasyon ve deneyim odaklı charter seçenekleri." action={{href:'/kiralik',label:'Tüm kiralıklar'}}>
        <div className="cardGrid">{charterListings.map((x,i)=><YachtCard key={x.title} item={x} badge={i===1?'Luxury Charter':null}/>)}</div>
      </Section>

      <Section eyebrow="MAĞAZALAR" title="Denizcilik profesyonelleri" desc="Marka, tersane, broker, charter ve ekipman mağazaları." action={{href:'/magazalar',label:'Tüm mağazalar'}}>
        <div className="storeGrid">{stores.map(x=><StoreCard key={x.name} item={x}/>)}</div>
      </Section>

      <Section eyebrow="TEKNE & YAT MALZEMELERİ" title="Öne çıkan ekipmanlar" action={{href:'/urunler',label:'Tüm ürünler'}}>
        <div className="productGrid">{products.map(x=><ProductCard key={x.name} item={x}/>)}</div>
      </Section>
    </main>
    <Footer/>
  </>
}