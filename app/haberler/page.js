import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const news=[
 {slug:'yeni-model-ve-lansman-haberleri',title:'Yeni model ve lansman haberleri',cat:'YENİ MODELLER',image:'/sale-euro-850.webp'},
 {slug:'turkiye-yat-uretiminden-son-gelismeler',title:'Türkiye yat üretiminden son gelişmeler',cat:'TERSANELER',image:'/store-mengi.webp'},
 {slug:'charter-sezonu-ve-destinasyon-rehberi',title:'Charter sezonu ve destinasyon rehberi',cat:'CHARTER',image:'/charter-luna-hero.webp'},
 {slug:'ekipman-teknoloji-ve-deniz-elektronigi',title:'Ekipman, teknoloji ve deniz elektroniği',cat:'EKİPMAN',image:'/product-genoa.webp'}
];

export default function Page(){return <><SiteHeader/><main>
  <section className="newsTop"><div className="container"><span>HABERLER</span><h1>Denizcilik gündemi</h1><p>Yatlar, markalar, firmalar, testler, incelemeler ve sektör gelişmeleri.</p></div></section>
  <section className="section"><div className="container newsLeadGrid"><a className="newsLead" href={'/haber/'+news[0].slug}><img src={news[0].image} alt=""/><div><small>{news[0].cat}</small><h2>{news[0].title}</h2><p>Öne çıkan lansmanları, teknik detayları ve yeni model gelişmelerini takip edin.</p></div></a><div className="newsStack">{news.slice(1).map(x=><a href={'/haber/'+x.slug} key={x.title}><img src={x.image} alt=""/><div><small>{x.cat}</small><h3>{x.title}</h3></div></a>)}</div></div></section>
  <section className="section alt"><div className="container"><div className="sectionHead"><div><span>SON HABERLER</span><h2>Sektörden gelişmeler</h2></div></div><div className="newsCards">{[...news,...news].map((x,i)=><a href={'/haber/'+x.slug} key={i}><img src={x.image} alt=""/><small>{x.cat}</small><h3>{x.title}</h3><p>Haber özeti, marka bağlantıları ve ilgili içeriklerle birlikte.</p></a>)}</div></div></section>
</main><Footer/></>}
