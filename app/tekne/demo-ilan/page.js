import YeniViraBanner from '../../../components/YeniViraBanner';
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

        <section className="v2ListingDescription">
          <h2>İlan Hakkında</h2>
          <div className="syRefCopy">
            <p><b>Bavaria S 36 HT Diesel</b>, sportif gövde yapısı ve açılır hardtop tasarımıyla seyir ve kokpit yaşamını bir araya getiren bir motor yattır. Geniş kokpiti, çift Volvo Penta dizel motoru ve iki kabinli yerleşimiyle konfor ve performansı birlikte sunar.</p>
          </div>
        </section>

        <section className="v2ListingHighlights">
          <h2>Öne Çıkan Özellikler</h2>
          <div className="realVisualFacts">
            <div><small>BOY</small><b>11,66 m</b></div>
            <div><small>GENİŞLİK</small><b>3,59 m</b></div>
            <div><small>SU ÇEKİMİ</small><b>1,05 m</b></div>
            <div><small>KABİN</small><b>2</b></div>
          </div>
        </section>

        <details className="realDetailAccordion v2TechAccordion">
          <summary><span>Genel Tekne Bilgileri</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody"><dl className="realDataList">
            {generalRows.filter(([label])=>!['Tekne kimliği','Tekne türü','Kabin / yataklar'].includes(label)).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl></div>
        </details>

        <details className="realDetailAccordion v2TechAccordion">
          <summary><span>Motor ve Performans</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody"><dl className="realDataList">
            {technicalRows.filter(([label])=>['Motor','Motor gücü','Motor saati','Yakıt','Tahrik','Seyir hızı','Azami hız'].includes(label)).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl></div>
        </details>

        <details className="realDetailAccordion v2TechAccordion">
          <summary><span>Tanklar ve Sistemler</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody"><dl className="realDataList">
            {technicalRows.filter(([label])=>['Yakıt deposu','Temiz su deposu','Jeneratör','Klima','Elektrik'].includes(label)).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl></div>
        </details>

        <details className="realDetailAccordion v2TechAccordion" id="donanim">
          <summary><span>Donanım ve Teçhizat</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody"><div className="realEquipmentList">
            {equipmentItems.map((x,i)=><span key={i}>✓ {x}</span>)}
          </div></div>
        </details>

        <details className="realDetailAccordion v2TechAccordion">
          <summary><span>Bakım ve Servis Geçmişi</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody">
            <p>2025 sezonunda motor bakımları ve impeller değişimleri gerçekleştirilmiş; alt bakım ve zehirli boya uygulaması yapılmıştır. Aküler kontrol edilmiş, navigasyon ve elektrik sistemleri test edilmiştir.</p>
          </div>
        </details>
      </section>

      <aside className="syRefSidebar">
        <div className="syRefSellerCard syRefSellerCardSimple v2SellerClean">
          <div className="v2SellerIdentity"><div><b>Motoryat Demo Partner</b><small>Marina Punat · Hırvatistan</small></div><span>Satılık</span></div>
          <div className="v2SellerPrice"><small>Satış fiyatı</small><strong>€ 159.000</strong></div>
          <a className="v2SellerShopLink" href="/magazalar">Mağazayı Görüntüle <span>→</span></a>
        </div>

        <div className="syDemoSellerInfo">
          <small>İLAN NO</small>
          <b>DEMO-S68211</b>
          <span>Demo sayfada tüm alanlar bilerek dolu tutulur. Gerçek ilanda boş alanlar gösterilmez.</span>
        </div>
      </aside>
    </div>
    <YeniViraBanner/>
  </main></>;
}
