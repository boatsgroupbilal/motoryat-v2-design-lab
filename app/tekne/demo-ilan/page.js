import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import YachtDetailGallery from '../../../components/YachtDetailGallery';

const demoImages=[
  '/sale-yener-35.webp',
  '/sale-euro-700.webp',
  '/sale-euro-760.webp',
  '/sale-euro-850.webp',
  '/charter-luna-hero.webp',
  '/charter-luna-1.webp',
  '/charter-luna-9.webp',
  '/store-mengi.webp',
  '/yacht.webp'
];

const generalRows=[
  ['Tekne kimliği','DEMO-S68211'],
  ['Marka','Bavaria'],
  ['Model','S 36 HT Diesel'],
  ['Tekne türü','Motorlu Yat'],
  ['Durum','İkinci El · Yeni Gibi'],
  ['Üretim yılı','2018'],
  ['Konum','Marina Punat · Hırvatistan'],
  ['Bayrak','Hırvatistan'],
  ['Kişi','8'],
  ['Kabin / yataklar','2 Kabin · 4 Yatak'],
  ['Gövde malzemesi','Fiberglas'],
  ['Gövde türü','Planing']
];

const technicalRows=[
  ['Motor','2 × Volvo Penta D3'],
  ['Motor gücü','2 × 220 HP'],
  ['Motor saati','420 saat'],
  ['Yakıt','Dizel'],
  ['Tahrik','Stern Drive'],
  ['Seyir hızı','24 kn'],
  ['Azami hız','30 kn'],
  ['Yakıt deposu','520 L'],
  ['Temiz su deposu','250 L'],
  ['Jeneratör','Fischer Panda'],
  ['Klima','Var'],
  ['Elektrik','12V / 220V']
];

const equipmentItems=[
  'Hardtop açılır tavan',
  'GPS / Chartplotter',
  'Radar',
  'VHF',
  'Otopilot',
  'Baş pervane',
  'Elektrikli ırgat',
  'Teak kokpit',
  'Kokpit buzdolabı',
  'Ocak ve lavabo',
  'Sıcak su sistemi',
  'Kıyı elektriği',
  'Akü şarj cihazı',
  'Bluetooth ses sistemi',
  'Güneşlenme minderleri',
  'Duş ve tuvalet'
];

export default function DemoListingPage(){
  return <><SiteHeader/><main className="syRefPage syDemoDetailPage">
    <div className="syRefGalleryWrap">
      <div className="syDemoNotice">
        <b>DEMO İLAN</b>
        <span>Bu sayfa tasarım ve düzen kontrolü içindir. Görseller, video ve içerikler demo amaçlıdır.</span>
      </div>

      <YachtDetailGallery
        title="Bavaria S 36 HT Diesel"
        images={demoImages}
        totalCount={30}
      />

      <section className="syDemoVideo" aria-label="İlan videosu">
        <div className="syDemoSectionHead">
          <small>VİDEO</small>
          <h2>Tekne Walkaround Videosu</h2>
        </div>
        <div className="syDemoVideoFrame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/5pOWhNFSHc8"
            title="Bavaria S36 HT Walkaround"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>

    <div className="syRefContentWrap" id="genel-bakis">
      <section className="syRefOverview">
        <div className="syRefOverviewTop">
          <div>
            <span className="syRefEyebrow">SATILIK · DEMO İLAN</span>
            <h1>Bavaria S 36 HT Diesel</h1>
          </div>
        </div>

        <div className="syRefMetaLine">
          <span>⌁ Motoryat Demo Partner</span>
          <span>♙ Motorlu Yat</span>
        </div>

        <div className="syRefCopy">
          <p><b>Bavaria S 36 HT Diesel</b>, sportif gövde yapısı, geniş kokpiti, hardtop tasarımı ve çift Volvo Penta dizel motoruyla konforlu seyir ile performansı bir araya getiren bir motor yattır.</p>
        </div>

        <div className="realVisualFacts">
          <div><small>BOY</small><b>11,66 m</b></div>
          <div><small>GENİŞLİK</small><b>3,59 m</b></div>
          <div><small>SU ÇEKİMİ</small><b>1,05 m</b></div>
          <div><small>KABİN</small><b>2</b></div>
        </div>

        <section className="realDataSection">
          <h2>Tekne Bilgileri</h2>
          <dl className="realDataList">
            {generalRows.filter(([label])=>!['Tekne kimliği','Tekne türü'].includes(label)).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>

        <section className="realDataSection" id="teknik" aria-label="Ayrıntılı motor ve performans bilgileri">
          <dl className="realDataList">
            {technicalRows.filter(([label])=>label!=='Motor gücü').map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>

        <section className="syDemoEquipment" id="donanim">
          <h2>Donanım & Teçhizat</h2>
          <div className="realEquipmentList">
            {equipmentItems.map((x,i)=><span key={i}>✓ {x}</span>)}
          </div>
        </section>

        <section className="syDemoMaintenance">
          <h2>Bakım & Servis Geçmişi</h2>
          <p>2025 sezonunda motor bakımları, impeller değişimleri, alt bakım ve zehirli boya uygulaması yapılmıştır. Aküler kontrol edilmiş, navigasyon ve elektrik sistemleri test edilmiştir.</p>
        </section>
      </section>

      <aside className="syRefSidebar">
        <div className="syRefSellerCard syRefSellerCardSimple">
          <div className="syRefSellerTop syRefSellerSimpleTop">
            <span>SATILIK</span>
            <div className="syRefSellerSimpleName">
              <b>Motoryat Demo Partner</b>
              <small>Marina Punat · Hırvatistan</small>
            </div>
          </div>

          <div className="syRefPriceBlock">
            <small>FİYAT</small>
            <strong>€ 159.000</strong>
          </div>

          <div className="syRefSellerActions">
            <a className="more" href="/magazalar">FİRMA / MAĞAZA</a>
          </div>
        </div>

        <div className="syDemoSellerInfo">
          <small>İLAN NO</small>
          <b>DEMO-S68211</b>
          <span>Demo sayfada tüm alanlar bilerek dolu tutulur. Gerçek ilanda boş alanlar gösterilmez.</span>
        </div>
      </aside>
    </div>
  </main><Footer/></>;
}
