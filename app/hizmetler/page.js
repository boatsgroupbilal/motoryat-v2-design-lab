import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const services=[
 ['01','Teknik Servis','Motor, mekanik, elektrik ve elektronik servis sağlayıcıları.'],
 ['02','Bakım & Refit','Tadilat, boya, marangozluk, kompozit ve kapsamlı refit ekipleri.'],
 ['03','Broker & Satış','Tekne satışı, satın alma danışmanlığı ve ekspertiz hizmetleri.'],
 ['04','Charter Hizmetleri','Kiralama yönetimi, operasyon ve rota planlama.'],
 ['05','Marina & Bağlama','Marina, çekek, kara parkı ve bağlama çözümleri.'],
 ['06','Tasarım & Mühendislik','Naval architecture, iç tasarım ve proje mühendisliği.'],
 ['07','Sigorta & Finans','Deniz sigortası, finansman ve ödeme çözümleri.'],
 ['08','Lojistik & Nakliye','Tekne taşıma, yat transferi ve uluslararası lojistik.'],
 ['09','Profesyonel Ekipler','Kaptan, mürettebat ve uzman denizcilik profesyonelleri.']
];

export default function Page(){return <><SiteHeader/><main>
  <section className="utilityHero"><div className="container"><span>PROFESYONEL HİZMETLER</span><h1>Tekneniz için doğru uzmanı bulun.</h1><p>Bakım, servis, refit, broker, marina, sigorta ve profesyonel ekipleri kategori bazında keşfedin.</p></div></section>
  <section className="section"><div className="container"><div className="sectionHead"><div><span>HİZMET DİZİNİ</span><h2>Denizcilik hizmetleri</h2></div></div><div className="serviceGrid">{services.map(([n,t,d])=><a className="serviceCard" href="/firmalar" key={t}><small>{n}</small><h3>{t}</h3><p>{d}</p></a>)}</div></div></section>
</main><Footer/></>}
