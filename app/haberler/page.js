import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const news=[
 {slug:'yeni-model-ve-lansman-haberleri',title:'Yeni model ve lansman haberleri',cat:'NEW LAUNCHES',image:'/sale-euro-850.webp'},
 {slug:'turkiye-yat-uretiminden-son-gelismeler',title:'Türkiye yat üretiminden son gelişmeler',cat:'INDUSTRY',image:'/store-mengi.webp'},
 {slug:'charter-sezonu-ve-destinasyon-rehberi',title:'Charter sezonu ve destinasyon rehberi',cat:'CHARTER',image:'/charter-luna-hero.webp'},
 {slug:'ekipman-teknoloji-ve-deniz-elektronigi',title:'Ekipman, teknoloji ve deniz elektroniği',cat:'TECHNOLOGY',image:'/product-genoa.webp'}
];

export default function Page(){return <><SiteHeader/><main>
  <section className="syPageIntro syNewsIntro"><div className="syContainer"><span>NEWS</span><h1>Haberler & Etkinlikler</h1><p>Yeni lansmanlar, tasarım, charter, brokerage, marinalar ve sektör gündemi.</p></div></section>
  <div className="sySubNav"><div className="syContainer">{['Tümü','Yeni Lansmanlar','Yeni Tasarımlar','İç Tasarım','Refit','Charter','Brokerage','Marinalar','Sektör','Etkinlikler','Röportajlar'].map((x,i)=><button className={i===0?'active':''} key={x}>{x}</button>)}</div></div>
  <section className="sySection"><div className="syContainer syNewsFeature"><a className="syNewsLead" href={'/haber/'+news[0].slug}><img src={news[0].image} alt=""/><div><small>{news[0].cat}</small><h3>{news[0].title}</h3><span>Haberi oku →</span></div></a><div className="syNewsSide">{news.slice(1).map(x=><a href={'/haber/'+x.slug} key={x.slug}><img src={x.image} alt=""/><div><small>{x.cat}</small><h3>{x.title}</h3><span>Devamını oku →</span></div></a>)}</div></div></section>
  <section className="sySection syPale"><div className="syContainer"><div className="sySectionHead"><div><span>LATEST</span><h2>Son Haberler</h2></div></div><div className="syNewsGrid">{[...news,...news].map((x,i)=><a href={'/haber/'+x.slug} key={i}><img src={x.image} alt=""/><small>{x.cat}</small><h3>{x.title}</h3><p>Motoryat sektör gündeminden öne çıkan gelişmeler ve detaylar.</p></a>)}</div></div></section>
</main><Footer/></>}