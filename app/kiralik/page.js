import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {charterListings} from '../../data/content';

export default function Page(){return <><SiteHeader/><main className="syListingPage">
  <section className="syCharterHero"><img src="/charter-luna-hero.webp" alt="Charter"/><div></div><div className="syContainer"><span>FOR CHARTER</span><h1>Unutulmaz bir rota seçin.</h1><p>Akdeniz ve Türkiye'nin öne çıkan charter yatlarını keşfedin.</p></div></section>
  <section className="sySearchPanel sySearchOverlay"><div className="syContainer sySearchFields"><button><small>DESTİNASYON</small><b>Akdeniz</b></button><button><small>TARİH</small><b>Tarih seçin</b></button><button><small>MİSAFİR</small><b>2+</b></button><button><small>YAT TÜRÜ</small><b>Tümü</b></button><button><small>BOY</small><b>Tümü</b></button><button><small>FİYAT</small><b>Tümü</b></button><a href="/kiralik">Ara</a></div></section>
  <section className="sySection"><div className="syContainer">
    <div className="sySectionHead"><div><span>CHARTER SEARCH</span><h2>Kiralık Yatlar</h2></div><a href="/destinasyonlar">Destinasyonları gör →</a></div>
    <div className="syYachtGrid syListingGrid">{[...charterListings,...charterListings].map((x,i)=><a className="syYachtCard" href={x.href} key={i}><div className="syYachtImage"><img src={x.image} alt={x.title}/>{i===0&&<span>ÖNE ÇIKAN</span>}</div><div className="syYachtMeta"><small>{x.meta}</small><h3>{x.title}</h3><b>{x.price}</b><div className="syCardFacts"><span>12 Misafir</span><span>6 Kabin</span></div></div></a>)}</div>
  </div></section>
</main><Footer/></>}