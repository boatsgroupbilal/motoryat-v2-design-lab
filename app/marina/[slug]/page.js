import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import Ad300 from '../../../components/Ad300';

export default async function Page({params}){const {slug}=await params;const name=slug.split('-').map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(' ');return <><SiteHeader/><main>
  <section className="marinaHero"><img src="/charter-luna-1.webp" alt={name}/><div className="heroShade"></div><div className="container marinaHeroCopy"><span>MARİNA REHBERİ</span><h1>{name}</h1><p>Bağlama, servis, ulaşım ve çevredeki denizcilik hizmetleri.</p></div></section>
  <section className="section"><div className="container marinaDetailGrid"><main><h2>Marina hakkında</h2><p>Marina profilinde kapasite, bağlama tipi, teknik servis, yakıt, elektrik, su, restoran ve ulaşım bilgileri tek sayfada sunulur.</p><div className="facilityGrid">{['Bağlama','Elektrik','Su','Yakıt','Teknik Servis','Güvenlik','Restoran','Otopark'].map(x=><div key={x}>✓ {x}</div>)}</div><div className="detailMap"><div><span>KONUM</span><h2>Türkiye</h2><p>Canlı harita entegrasyonu veri bağlantısı ile aktif olacaktır.</p></div></div></main><aside className="marinaSide"><small>İLETİŞİM</small><h3>{name}</h3><button className="navyBtn">Telefon</button><button className="whatsappBtn">WhatsApp</button><Ad300/></aside></div></section>
</main><Footer/></>}
