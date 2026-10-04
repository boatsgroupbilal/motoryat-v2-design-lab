import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import DemoMosaicGallery from '../../../components/DemoMosaicGallery';

const photos=['/sale-yener-35.webp','/sale-euro-700.webp','/charter-luna-hero.webp'];

const generalRows=[
  ['Tekne kimliği','S68211'],
  ['Üretici','Bavaria'],
  ['Tekne türü','Motorlu tekne'],
  ['Kategori','Motorlu yat · İkinci el'],
  ['Üretim yılı','2018'],
  ['Durum','Yeni gibi · Kiraya verildi'],
  ['Bayrak','Hırvatistan'],
  ['Kişi','8'],
  ['Yatak kapasitesi','4+2'],
  ['Gövde malzemesi','Fiber'],
  ['Gövde türü','Planya teknesi']
];

const technicalRows=[
  ['Motor','Volvo Penta D3'],
  ['Yakıt','Dizel'],
  ['Tahrik','Z tahriki'],
  ['Seyir hızı','24 kn'],
  ['Azami hız','30 kn'],
  ['Seyir hızında tüketim','45 l/saat'],
  ['Azami hızda tüketim','50 l/saat'],
  ['Yakıt deposu','520 l'],
  ['Temiz su deposu','250 l'],
  ['Pis su tankı','50 l'],
  ['Duş','2'],
  ['Tuvalet sayısı','1'],
  ['Isıtıcı','Klimalı ısıtma']
];

const equipment=[
  'GPS / Chartplotter',
  'Radar ve VHF telsiz',
  'Elektrikli çapa ırgatı',
  'Bow thruster',
  'Klima ve ısıtma',
  'Buzdolabı ve ocak',
  'Teak kokpit',
  'Kıç duş',
  'Yüzme platformu',
  'Bluetooth ses sistemi',
  'Yangın söndürme ekipmanları',
  'Can yelekleri'
];

export default function DemoListingPage(){
  return <><SiteHeader/><main className="syRefPage demoListingPage simpleListingDemo">
    <div className="syRefGalleryWrap">
      <DemoMosaicGallery
        title="Bavaria S 36 HT Diesel"
        images={[
          photos[0],
          photos[1],
          photos[2],
          '/sale-euro-760.webp',
          '/sale-euro-850.webp'
        ]}
        photoCount={24}
        videoCount={2}
      />

      <div className="syRefTabs demoGeneralTab">
        <nav aria-label="İlan bölümü">
          <a className="active" href="#genel-bakis">İLAN DETAYLARI</a>
        </nav>
        <div className="syRefTabsActions">
          <button type="button" aria-label="Paylaş">↗</button>
          <a href="/satilik">SATIŞ ARAMA ⌕</a>
        </div>
      </div>
    </div>

    <div className="syRefContentWrap" id="genel-bakis">
      <section className="syRefOverview simpleListingMain">
        <header className="simpleListingTitle">
          <div>
            <span>SATILIK · İKİNCİ EL</span>
            <h1>Bavaria S 36 HT Diesel</h1>
            <p>Nightlife · Marina Punat, Hırvatistan</p>
          </div>
          <div className="simpleListingPrice">
            <small>FİYAT</small>
            <del>€ 173.000</del>
            <strong>€ 159.000</strong>
            <em>KDV hariç · Pazarlığa açık</em>
          </div>
        </header>

        <div className="simpleListingDescription">
          <p><b>Bavaria S 36 HT Diesel</b>, sportif gövde yapısı, hardtop tasarımı ve çift Volvo Penta dizel motoruyla konforlu seyir ve güçlü performansı bir araya getiren bir motoryattır.</p>
          <p>İki kabinli yerleşimi, geniş kokpiti ve pratik yaşam alanlarıyla aile kullanımı ve uzun hafta sonu seyirleri için uygundur. Tekne Marina Punat, Hırvatistan’da görülebilir.</p>
        </div>

        <section className="simpleVisualFacts" aria-label="Temel tekne ölçüleri">
          <div><span className="simpleFactIcon">↔</span><small>BOY</small><b>11,66 m</b></div>
          <div><span className="simpleFactIcon">⇆</span><small>GENİŞLİK</small><b>3,59 m</b></div>
          <div><span className="simpleFactIcon">↧</span><small>SU ÇEKİMİ</small><b>1,05 m</b></div>
          <div><span className="simpleFactIcon">⚓</span><small>AĞIRLIK</small><b>6.800 kg</b></div>
          <div><span className="simpleFactIcon">⚙</span><small>MOTOR</small><b>2 × 220 BG</b></div>
          <div><span className="simpleFactIcon">▣</span><small>KABİN</small><b>2</b></div>
        </section>

        <section className="simpleDataSection" id="ozellikler">
          <h2>Tekne Bilgileri</h2>
          <dl className="simpleDataList">
            {generalRows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>

        <section className="simpleDataSection">
          <h2>Teknik Bilgiler</h2>
          <dl className="simpleDataList">
            {technicalRows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>

        <section className="simpleAccordionGroup">
          <details className="simpleAccordion" id="techizat">
            <summary><span>Donanım & Teçhizat</span><b>Daha Fazla Gör</b></summary>
            <div className="simpleAccordionBody">
              <div className="simpleEquipmentList">
                {equipment.map(x=><span key={x}>✓ {x}</span>)}
              </div>
            </div>
          </details>


          <details className="simpleAccordion">
            <summary><span>Bakım & Servis Geçmişi</span><b>Daha Fazla Gör</b></summary>
            <div className="simpleAccordionBody">
              <p>Motor ve periyodik bakım kayıtları satıcıdan talep edilebilir. Tekne ekspertize açıktır. Güncel servis durumu, teslim kapsamı ve envanter listesi satış öncesinde doğrulanır.</p>
            </div>
          </details>
        </section>
      </section>

      <aside className="syRefSidebar demoProSidebar">
        <section className="demoSellerPro">
          <div className="demoSellerProTop">
            <span className="demoSalePill">SATILIK</span>
            <span className="demoVerified">✓ DOĞRULANMIŞ FİRMA</span>
          </div>

          <div className="demoCompanyHead premiumCompanyHead">
            <div className="demoCompanyTitle">
              <small>YETKİLİ SATICI</small>
              <h3>Motoryat Partner</h3>
              <p>Marina Punat · Hırvatistan</p>
            </div>
            <span className="premiumCompanyCheck" aria-label="Doğrulanmış firma">✓</span>
          </div>


          <div className="demoContactGrid">
            <a href="#">☎ <span>Ara</span></a>
            <a href="#">◉ <span>WhatsApp</span></a>
            <a href="#">✉ <span>E-posta</span></a>
          </div>

          <a className="demoPrimaryCta" href="#">DETAYLI BİLGİ AL</a>

          <div className="demoSellerLinks">
            <a href="/magazalar">Firma Profilini Gör <b>→</b></a>
            <a href="#">Broşürü İndir <b>PDF</b></a>
          </div>
        </section>


      </aside>
    </div>

    <section className="syRefBottom">
      <div className="syRefBottomGrid demoBottomNoAds">
        <div className="syRefBottomLeft">
          <div className="syRefSectionHead syRefRelatedHead">
            <div><small>SİZİN İÇİN SEÇTİKLERİMİZ</small><h2>Benzer İlanlar</h2></div>
            <a href="/satilik">Tüm İlanları Gör ›</a>
          </div>

          <div className="demoRelatedReference">
            {[
              {title:'Demo Sport 38',length:'11.60 m',year:'2026',cabins:'2',guests:'8',price:'€ 790.000',main:photos[1],small:photos[0]},
              {title:'Demo Fly 50',length:'15.35 m',year:'2024',cabins:'3',guests:'10',price:'€ 1.950.000',main:photos[2],small:photos[1]},
              {title:'Demo Explorer 46',length:'14.20 m',year:'2025',cabins:'3',guests:'9',price:'€ 1.420.000',main:photos[0],small:photos[2]},
              {title:'Demo Cruiser 44',length:'13.40 m',year:'2023',cabins:'2',guests:'8',price:'€ 980.000',main:photos[1],small:photos[2]}
            ].map((x,i)=>
              <a href="#" className="demoRefRelatedCard" key={i}>
                <div className="demoRefMainMedia">
                  <img src={x.main} alt={x.title}/>
                  <div className="demoRefMediaCount"><span>▣ {24+i*3}</span><span>▷ 0</span></div>
                </div>
                <div className="demoRefSideMedia">
                  <img src={x.small} alt=""/>
                  <div className="demoRefBroker"><b>SATILIK</b><span>Motoryat Partner</span></div>
                </div>
                <div className="demoRefInfo">
                  <h3>{x.title}</h3>
                  <p>UZUNLUK: {x.length}</p>
                  <div className="demoRefFacts">
                    <span><small>YIL</small><b>{x.year}</b></span>
                    <span><small>KABİNLER</small><b>{x.cabins}</b></span>
                    <span><small>MİSAFİRLER</small><b>{x.guests}</b></span>
                  </div>
                  <div className="demoRefPrice"><small>FİYATI</small><strong>{x.price}</strong></div>
                </div>
                <div className="demoRefSaleBand"><b>›</b><span>SATIŞ İLANI</span></div>
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  </main><Footer/></>;
}