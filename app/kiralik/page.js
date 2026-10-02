import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {charterListings} from '../../data/content';

const destinations=[
  {name:'Bodrum',sub:'Türkiye · Ege',image:'/charter-luna-1.webp'},
  {name:'Göcek',sub:'Türkiye · Akdeniz',image:'/charter-sunreef.webp'},
  {name:'İstanbul',sub:'Boğaz & Marmara',image:'/charter-luna-9.webp'}
];

export default function Page(){
  return <><SiteHeader/><main>
    <section className="charterHero">
      <img src="/charter-luna-hero.webp" alt="Kiralık yatlar"/>
      <div className="heroShade"></div>
      <div className="container charterContent">
        <span>CHARTER</span>
        <h1>Rotanızı seçin.<br/>Yatınızı bulun.</h1>
        <p>Türkiye ve Akdeniz'de mürettebatlı yat kiralama seçeneklerini keşfedin.</p>
        <div className="charterSearch">
          <button><small>NEREYE?</small><b>Türkiye & Akdeniz</b></button>
          <button><small>NE ZAMAN?</small><b>Tarih seçin</b></button>
          <button><small>KAÇ KİŞİ?</small><b>2+ misafir</b></button>
          <button><small>YAT TÜRÜ</small><b>Tümü</b></button>
          <button className="finderSubmit">Müsaitlik Gör</button>
        </div>
      </div>
    </section>

    <section className="section compactSection">
      <div className="container">
        <div className="sectionHead"><div><span>DESTİNASYONLAR</span><h2>Öne çıkan rotalar</h2><p>Önce bölgeyi seçin, ardından uygun yatları karşılaştırın.</p></div></div>
        <div className="destinationGrid">
          {destinations.map(x=><a className="destinationCard" href="#" key={x.name}><img src={x.image} alt={x.name}/><div><small>{x.sub}</small><span>{x.name}</span></div></a>)}
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <div className="listingSectionHead"><div><span>CHARTER FİLOSU</span><h2>Kiralık yatlar</h2></div><select><option>Önerilen sıralama</option><option>Boy: büyükten</option><option>Fiyat: düşükten</option></select></div>
        <div className="charterList">
          {[...charterListings,...charterListings].map((x,i)=><article className="charterRow" key={i}>
            <div className="charterRowMedia"><img src={x.image} alt={x.title}/>{i<2&&<span>ÖNE ÇIKAN</span>}</div>
            <div className="charterRowInfo"><small>MÜRETTEBATLI CHARTER</small><h3>{x.title}</h3><p>{x.meta}</p><div className="charterFacts"><span>6 Kabin</span><span>12 Misafir</span><span>5 Mürettebat</span><span>Türkiye</span></div></div>
            <div className="charterRowPrice"><small>HAFTALIK</small><strong>{x.price}</strong><button className="navyBtn">Fiyat İste</button></div>
          </article>)}
        </div>
      </div>
    </section>
  </main><Footer/></>
}
