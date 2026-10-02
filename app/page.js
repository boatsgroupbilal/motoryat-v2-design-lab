import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import {saleListings,charterListings,stores} from '../data/content';

const events=[
  {day:'28',month:'EKİM',title:'BOSPHORUS BOAT SHOW',image:'/sale-euro-850.webp'},
  {day:'04',month:'KASIM',title:'GÖCEK CHARTER WEEK',image:'/charter-luna-1.webp'},
  {day:'13',month:'KASIM',title:'DENİZCİLİK BULUŞMASI',image:'/store-mengi.webp'}
];

export default function Home(){return <>
  <SiteHeader/>
  <main className="syReplicaHome">
    <section className="syReplicaHero">
      <img className="syReplicaHeroImage" src="/hero-home.webp" alt="Motoryat"/>
      <div className="syReplicaHeroOverlay"></div>

      <div className="syReplicaHeroLeft">
        <div className="syReplicaMonogram">my</div>
        <h1>MOTORYAT 2026: DENİZCİLİKTE YENİ DÖNEM</h1>
        <div className="syReplicaMeta"><span className="clock">◷</span><span>02 EKİM 2026</span><i>•</i><span>HABERLER</span></div>
        <div className="syReplicaAuthor">
          <span className="syReplicaAvatar">MY</span>
          <div><small>Hazırlayan</small><b>Motoryat Editör</b></div>
        </div>
        <a className="syReplicaStoryBtn" href="/haberler">HABERİ OKU <b>›</b></a>
        <div className="syReplicaDots">{[0,1,2,3,4,5,6,7].map(i=><i key={i} className={i===3?'active':''}></i>)}</div>
      </div>

      <a href="/haberler" className="syReplicaPlay" aria-label="Videoyu oynat"><span></span></a>

      <div className="syReplicaQuote">
        <b>“</b>
        <p>Denizcilikte keşif, bağlantı ve ticaret tek platformda buluşuyor.</p>
        <span>Motoryat.com</span>
      </div>

      <div className="syReplicaSideTabs">
        <a className="fast" href="/satilik">HIZLI BUL</a>
        <a className="about" href="/firmalar">HAKKIMIZDA</a>
      </div>
    </section>

    <section className="syReplicaEvents">
      <div className="syReplicaEventsLabel">ETKİNLİKLER</div>
      <div className="syReplicaEventsTrack">
        {events.map((e,i)=><a href="/haberler" className="syReplicaEventCard" key={i}>
          <div className="syReplicaDate"><b>{e.day}</b><small>{e.month}</small></div>
          <img src={e.image} alt=""/>
          <strong>{e.title}</strong>
        </a>)}
      </div>
      <div className="syReplicaEventsLabel right">ETKİNLİKLER</div>
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

    <section className="sySection syPale">
      <div className="syContainer">
        <div className="sySectionHead"><div><span>DIRECTORY</span><h2>Denizcilik Rehberi</h2></div><a href="/firmalar">Tüm rehber →</a></div>
        <div className="syDirectoryGrid">{stores.map(x=><a href={x.href} key={x.slug}><img src={x.image} alt={x.name}/><div><small>{x.category}</small><h3>{x.name}</h3><p>{x.location}</p></div></a>)}</div>
      </div>
    </section>
  </main>
  <Footer/>
</>}