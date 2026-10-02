import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import {saleListings,charterListings,stores} from '../data/content';

const news=[
  {cat:'YENİ MODELLER',title:'Yeni nesil yat tasarımları ve lansmanlar',image:'/sale-euro-850.webp',href:'/haber/yeni-model-ve-lansman-haberleri'},
  {cat:'TERSANELER',title:'Türkiye yat üretiminden son gelişmeler',image:'/store-mengi.webp',href:'/haber/turkiye-yat-uretiminden-son-gelismeler'},
  {cat:'CHARTER',title:'Akdeniz charter sezonu ve yeni rotalar',image:'/charter-luna-hero.webp',href:'/haber/charter-sezonu-ve-destinasyon-rehberi'}
];

export default function Home(){return <>
  <SiteHeader/>
  <main className="syHome">
    <section className="syHero">
      <img src="/hero-home.webp" alt="Motoryat"/>
      <div className="syHeroShade"></div>
      <div className="syContainer syHeroCopy">
        <span>ÖNE ÇIKAN</span>
        <h1>Denizcilikte yeni nesil keşif ve ticaret platformu.</h1>
        <p>Satılık ve kiralık yatlar, üreticiler, marinalar, destinasyonlar ve sektör haberleri.</p>
        <div className="syHeroActions"><a href="/satilik">Satılık Yatları Keşfet</a><a href="/kiralik">Charter Yatları Gör</a></div>
      </div>
    </section>

    <section className="syFastSearchStrip">
      <div className="syContainer syFastSearchGrid">
        <div><small>HIZLI ARAMA</small><b>Yatınızı bulun</b></div>
        <button><small>TÜR</small><b>Motor Yacht</b></button>
        <button><small>BOY</small><b>Tüm boylar</b></button>
        <button><small>FİYAT</small><b>Tüm fiyatlar</b></button>
        <button><small>KONUM</small><b>Tüm bölgeler</b></button>
        <a href="/satilik">Ara</a>
      </div>
    </section>

    <section className="sySection">
      <div className="syContainer">
        <div className="sySectionHead"><div><span>SON HABERLER</span><h2>Denizcilik gündemi</h2></div><a href="/haberler">Tüm haberler →</a></div>
        <div className="syNewsFeature">
          <a className="syNewsLead" href={news[0].href}><img src={news[0].image} alt=""/><div><small>{news[0].cat}</small><h3>{news[0].title}</h3><span>Haberi oku →</span></div></a>
          <div className="syNewsSide">
            {news.slice(1).map(x=><a href={x.href} key={x.title}><img src={x.image} alt=""/><div><small>{x.cat}</small><h3>{x.title}</h3><span>Devamını oku →</span></div></a>)}
          </div>
        </div>
      </div>
    </section>

    <section className="sySection syPale">
      <div className="syContainer">
        <div className="sySectionHead"><div><span>FOR SALE</span><h2>Satılık Yatlar</h2></div><a href="/satilik">Tümünü gör →</a></div>
        <div className="syYachtGrid">{saleListings.slice(0,4).map((x,i)=><a className="syYachtCard" href={x.href} key={x.slug}><div className="syYachtImage"><img src={x.image} alt={x.title}/>{i===0&&<span>ÖNE ÇIKAN</span>}</div><div className="syYachtMeta"><small>{x.meta}</small><h3>{x.title}</h3><b>{x.price}</b></div></a>)}</div>
      </div>
    </section>

    <section className="sySplitFeature">
      <div className="sySplitMedia"><img src="/charter-luna-hero.webp" alt="Lady Luna"/></div>
      <div className="sySplitCopy"><span>FOR CHARTER</span><h2>Lady Luna</h2><p>32 metre motor yacht. İstanbul, Ege ve Akdeniz rotaları için seçkin charter deneyimi.</p><a href="/kiralik">Charter seçeneklerini keşfet →</a></div>
    </section>

    <section className="sySection">
      <div className="syContainer">
        <div className="sySectionHead"><div><span>FOR CHARTER</span><h2>Kiralık Yatlar</h2></div><a href="/kiralik">Tüm charter yatları →</a></div>
        <div className="syYachtGrid">{charterListings.map(x=><a className="syYachtCard" href={x.href} key={x.slug}><div className="syYachtImage"><img src={x.image} alt={x.title}/></div><div className="syYachtMeta"><small>{x.meta}</small><h3>{x.title}</h3><b>{x.price}</b></div></a>)}</div>
      </div>
    </section>

    <section className="syDarkFeature">
      <div className="syContainer syDarkGrid">
        <div><span>NEW BUILD</span><h2>Yeni inşa, model ve özel projeler.</h2><p>Tersaneleri, yeni model serilerini ve geliştirilmekte olan yat projelerini tek yerde inceleyin.</p><a href="/yeni-insa">Yeni İnşa bölümüne git →</a></div>
        <div className="syStatGrid"><div><b>100+</b><small>Marka</small></div><div><b>30m+</b><small>Superyacht</small></div><div><b>Global</b><small>Tersane ağı</small></div><div><b>24/7</b><small>Keşif</small></div></div>
      </div>
    </section>

    <section className="sySection">
      <div className="syContainer">
        <div className="sySectionHead"><div><span>DIRECTORY</span><h2>Denizcilik Rehberi</h2></div><a href="/firmalar">Tüm rehber →</a></div>
        <div className="syDirectoryGrid">
          {stores.map(x=><a href={x.href} key={x.slug}><img src={x.image} alt={x.name}/><div><small>{x.category}</small><h3>{x.name}</h3><p>{x.location}</p></div></a>)}
        </div>
      </div>
    </section>

    <section className="syTop100">
      <div className="syContainer syTop100Inner"><div><span>TOP 100</span><h2>Motoryat Top 100</h2><p>Boy, üretici, yıl ve segment bazında öne çıkan yatları keşfedin.</p></div><a href="/top-100">Listeyi görüntüle →</a></div>
    </section>
  </main>
  <Footer/>
</>}