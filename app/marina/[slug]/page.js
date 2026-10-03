import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import Ad300 from '../../../components/Ad300';

const profiles={
  'cairns-marlin-marina':{
    name:'Cairns Marlin Marina',
    country:'Avustralya',
    flag:'/flags/au.svg',
    location:'Cairns, Queensland, Avustralya',
    address:'1 Spence Street, Cairns City QLD 4870, Australia',
    phone:'+61 7 4052 3866',
    email:'marina@portsnorth.com.au',
    vhf:'VHF Kanal 16 · “Marlin Marina”',
    berths:'261',
    superyachtBerths:'12',
    maxYacht:'140 m',
    maxDraft:'6,5 m',
    channelDepth:'9,2 m',
    officeHours:'Pazartesi–Cuma 08:00–16:00',
    intro:'Cairns Marlin Marina, Cairns şehir merkezindeki konumu ve Great Barrier Reef’e doğrudan erişimiyle Kuzey Avustralya’nın öne çıkan süperyat ve cruising marina merkezlerinden biridir.',
    overview:'Modern yüzer ponton sistemi; cruising yatları, turizm tekneleri, sportif balıkçılık filosu ve büyük süperyatlara hizmet verir. Şehir merkezi, oteller, restoranlar, alışveriş ve Cairns Esplanade yürüme mesafesindedir. Cairns International Airport yaklaşık 10 dakika, marina ve süperyat refit bölgesi yaklaşık 5 dakika uzaklıktadır.',
    superyacht:'Marinada 12 özel süperyat bağlama alanı bulunur. 60 metreye kadar tekneler yüzer pontonlarda; 60–140 metre arasındaki büyük yatlar Sailfish Quay sabit rıhtımında ağırlanabilir. Yan yana bağlamada 6,5 metreye kadar draft desteklenir.',
    facilities:[
      ['⚓','Bağlama'],
      ['⚡','Elektrik'],
      ['◉','Tatlı Su'],
      ['◔','Wi‑Fi'],
      ['⛽','Yakıt / Bunkering'],
      ['◈','24 Saat Güvenlik'],
      ['♜','Duş / Çamaşırhane'],
      ['⚙','Teknik Servis Erişimi'],
      ['▣','Atık / Geri Dönüşüm'],
      ['●','Crew Araç Parkı']
    ]
  }
};

export default async function Page({params}){
  const {slug}=await params;
  const p=profiles[slug];
  const fallbackName=slug.split('-').map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(' ');

  if(!p){
    return <><SiteHeader/><main>
      <section className="marinaHero"><div className="heroShade"></div><div className="container marinaHeroCopy"><span>MARİNA REHBERİ</span><h1>{fallbackName}</h1><p>Bağlama, servis, ulaşım ve çevredeki denizcilik hizmetleri.</p></div></section>
      <section className="section"><div className="container marinaDetailGrid"><main><h2>Marina hakkında</h2><p>Marina profilinde kapasite, bağlama tipi, teknik servis, yakıt, elektrik, su, restoran ve ulaşım bilgileri tek sayfada sunulur.</p></main><aside className="marinaSide"><Ad300/></aside></div></section>
    </main><Footer/></>
  }

  return <><SiteHeader/><main className="marinaPremiumDetail">
    <section className="marinaPremiumHero">
      <div className="container marinaPremiumHeroInner">
        <div>
          <span>GLOBAL MARİNA REHBERİ</span>
          <h1>{p.name}</h1>
          <p>⌖ {p.location}</p>
        </div>
        <img src={p.flag} alt="Avustralya bayrağı"/>
      </div>
    </section>

    <nav className="marinaPremiumTabs">
      <div className="container">
        <a href="#genel">GENEL BAKIŞ</a>
        <a href="#tesisler">TESİSLER</a>
        <a href="#superyacht">SÜPERYAT</a>
        <a href="#iletisim">İLETİŞİM</a>
      </div>
    </nav>

    <section className="container marinaPremiumStats">
      <div><small>TOPLAM BAĞLAMA</small><b>{p.berths}</b></div>
      <div><small>SÜPERYAT BAĞLAMA</small><b>{p.superyachtBerths}</b></div>
      <div><small>MAKS. YAT</small><b>{p.maxYacht}</b></div>
      <div><small>MAKS. DRAFT</small><b>{p.maxDraft}</b></div>
      <div><small>VHF</small><b>16</b></div>
    </section>

    <section className="container marinaPremiumLayout" id="genel">
      <main className="marinaPremiumMain">
        <section className="marinaPremiumSection">
          <span className="marinaPremiumEyebrow">CAIRNS · QUEENSLAND</span>
          <h2>{p.name}</h2>
          <p className="lead">{p.intro}</p>
          <p>{p.overview}</p>
        </section>

        <section className="marinaPremiumSection" id="tesisler">
          <h2>Marina Tesisleri</h2>
          <div className="marinaPremiumFacilities">
            {p.facilities.map(([icon,label])=><div key={label}><i>{icon}</i><span>{label}</span></div>)}
          </div>
        </section>

        <section className="marinaPremiumSection" id="superyacht">
          <h2>Süperyat Kapasitesi</h2>
          <p>{p.superyacht}</p>
          <div className="marinaPremiumSpecs">
            <div><span>Özel süperyat alanı</span><b>{p.superyachtBerths} bağlama</b></div>
            <div><span>Maksimum yat uzunluğu</span><b>{p.maxYacht}</b></div>
            <div><span>Yan yana maksimum draft</span><b>{p.maxDraft}</b></div>
            <div><span>Minimum kanal derinliği</span><b>{p.channelDepth}</b></div>
          </div>
        </section>

        <section className="marinaPremiumSection marinaPremiumSource">
          <h2>Kaynak ve Güncellik</h2>
          <p>Teknik bilgiler Ports North’un resmi Cairns Marlin Marina sayfası ve marina teknik dokümanları temel alınarak MOTORYAT için yeniden düzenlenmiştir.</p>
          <div>
            <a href="https://www.portsnorth.com.au/cairns-marlin-marina/" target="_blank" rel="noopener noreferrer">Resmi marina sitesi ↗</a>
            <a href="https://commons.wikimedia.org/wiki/File:Cairns_Marlin_Marina,_2025.jpg" target="_blank" rel="noopener noreferrer">CC BY-SA görsel kaynağı ↗</a>
          </div>
        </section>
      </main>

      <aside className="marinaPremiumAside" id="iletisim">
        <div className="marinaPremiumContact">
          <small>MARİNA İLETİŞİM</small>
          <h3>{p.name}</h3>
          <p>{p.address}</p>
          <dl>
            <div><dt>Telefon</dt><dd>{p.phone}</dd></div>
            <div><dt>E-posta</dt><dd>{p.email}</dd></div>
            <div><dt>VHF</dt><dd>{p.vhf}</dd></div>
            <div><dt>Ofis</dt><dd>{p.officeHours}</dd></div>
          </dl>
          <a href="https://www.portsnorth.com.au/cmm/make-a-booking-cmm/" target="_blank" rel="noopener noreferrer">BAĞLAMA TALEBİ ↗</a>
        </div>
        <Ad300/>
      </aside>
    </section>
  </main><Footer/></>
}