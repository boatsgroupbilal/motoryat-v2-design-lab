import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import DemoMosaicGallery from '../../../components/DemoMosaicGallery';

const photos=['/sale-yener-35.webp','/sale-euro-700.webp','/charter-luna-hero.webp'];

const highlights=[
  '2026 model · sıfır kondisyon',
  'Çift dizel motor · toplam 880 HP',
  '2 kabin · 1 banyo · 8 kişi gündüz kapasitesi',
  'Jeneratör, klima ve tam navigasyon paketi',
  'Teak güverte · elektrikli ırgat · kıç duş',
  'Teslime hazır · ekspertize açık'
];

const equipmentGroups=[
  {title:'Motor & Mekanik',items:['2 × Volvo Penta D6 440 HP','Joystick manevra sistemi','Bow thruster','Otomatik trim sistemi','Elektrikli sintine pompaları','Motor bölmesi yangın algılama']},
  {title:'Navigasyon & Elektronik',items:['2 × 12 inç çok fonksiyonlu ekran','GPS / Chartplotter','Radar','AIS Class B','VHF DSC telsiz','Derinlik ve hız göstergesi']},
  {title:'Elektrik & Enerji',items:['9 kW jeneratör','220V kıyı bağlantısı','Akü şarj sistemi','İnverter','Servis ve marş akü grupları','LED iç / dış aydınlatma']},
  {title:'Güverte & Demirleme',items:['Teak kokpit ve platform','Elektrikli çapa ırgatı','Paslanmaz çapa ve zincir','Kıç oturma grubu','Yüzme platformu','Dış duş ve güverte aydınlatması']},
  {title:'İç Mekan & Konfor',items:['2 kabin','1 elektrikli WC / duş','Salon oturma grubu','Buzdolabı ve ocak','Klima sistemi','Bluetooth ses sistemi']},
  {title:'Güvenlik',items:['Can yelekleri','Yangın söndürücüler','Duman dedektörü','Acil durum sintine pompası','İlk yardım seti','Navigasyon fenerleri']}
];

const specs=[
 ['Marka / Model','Demo Yachts 42'],
 ['Model Yılı','2026'],
 ['Kondisyon','Yeni'],
 ['Boy','12.80 m'],
 ['Genişlik','4.10 m'],
 ['Su Çekimi','1.05 m'],
 ['Gövde','GRP / Fiberglass'],
 ['Yakıt','Dizel'],
 ['Motor','2 × Volvo Penta D6'],
 ['Toplam Güç','880 HP'],
 ['Seyir Hızı','24 knot'],
 ['Maksimum Hız','31 knot'],
 ['Yakıt Kapasitesi','1.100 L'],
 ['Temiz Su','350 L'],
 ['Kabin','2'],
 ['Banyo / WC','1'],
 ['Yatak Kapasitesi','4'],
 ['Gündüz Kapasitesi','8 kişi'],
 ['Bayrak','Türkiye'],
 ['Konum','İstanbul, Türkiye']
];

export default function DemoListingPage(){
  return <><SiteHeader/><main className="syRefPage demoListingPage">
    <div className="syRefGalleryWrap">
      <DemoMosaicGallery
        title="Demo Yacht 42"
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
        <nav aria-label="Demo ilan bölümü">
          <a className="active" href="#genel-bakis">GENEL ÖZELLİKLER</a>
        </nav>
        <div className="syRefTabsActions"><button type="button">↗</button><a href="/satilik">SATIŞ ARAMA⌕</a></div>
      </div>
    </div>

    <div className="syRefContentWrap" id="genel-bakis">
      <section className="syRefOverview">
        <div className="demoLabel">İLAN BİLGİLERİ</div>
        <div className="syRefOverviewTop">
          <div><span className="syRefEyebrow">SATILIK · YENİ</span><h1>DEMO YACHT 42</h1></div>
          <button type="button" className="syRefInfoDot">i</button>
        </div>

        <div className="syRefMetaLine">
          <span>⌁ Demo Yachts</span><span>▣ 2026</span><span>↔ 12.80 m</span><span>♙ İstanbul</span><span>✓ Doğrulanmış Firma</span>
        </div>

        <div className="demoListingIntro">
          <strong>€ 1.250.000</strong>
          <span>Vergi durumu ve teslim koşulları için satıcıdan teyit alın.</span>
        </div>

        <div className="demoLabel">İLAN AÇIKLAMASI</div>
        <div className="syRefCopy demoFullCopy">
          <p><b>Demo Yacht 42</b>, günlük seyir konforunu yüksek performans ve modern iç yaşam alanlarıyla birleştiren 12,80 metrelik yeni nesil bir motoryat örneğidir. Bu demo ilan; Motoryat.com’daki gerçek ilanların hangi bilgi yapısıyla yayınlanacağını göstermek amacıyla hazırlanmıştır.</p>
          <details className="demoMore">
            <summary>Daha Fazla Gör <span>⌄</span></summary>
            <div className="demoMoreBody">
              <p>Geniş kıç kokpit, hidrolik yüzme platformu, iki kabinli konaklama planı ve aydınlık salonuyla hem hafta sonu kullanımı hem de uzun kıyı seyirleri için dengeli bir yerleşim sunar. Çift Volvo Penta dizel motor, joystick manevra sistemi ve bow thruster özellikle marina manevralarında kullanım kolaylığı sağlar.</p>
              <p>Teknede jeneratör, klima, tam navigasyon paketi, AIS, radar, VHF, elektrikli çapa ırgatı, teak güverte ve gelişmiş ses sistemi bulunmaktadır. Gövde ve mekanik sistemler ekspertize açıktır. Teslim öncesi son kontroller, servis kayıtları ve ekipman listesi yetkili firma tarafından alıcıya sunulur.</p>
            </div>
          </details>
        </div>

        <div className="demoLabel">ÖNE ÇIKAN ÖZELLİKLER</div>
        <div className="demoHighlights">
          {highlights.map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}
        </div>

        <section className="syRefTechnical" id="ozellikler">
          <div className="demoLabel">TEKNİK ÖZELLİKLER</div>
          <h2>TEKNİK ÖZELLİKLER</h2>
          <div className="syRefTechGrid demoSpecGrid">
            {specs.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}
          </div>
        </section>

        <section id="techizat" className="demoEquipmentSection">
          <div className="demoLabel">TEÇHİZAT & DONANIM</div>
          <h2>TEÇHİZAT & DONANIM</h2>
          <div className="demoEquipmentGrid">
            {equipmentGroups.map(g=><article key={g.title}>
              <h3>{g.title}</h3>
              <ul>{g.items.map(i=><li key={i}>{i}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <section className="demoNarrativeSection">
          <div className="demoLabel">MOTOR & PERFORMANS</div>
          <details className="demoAccordion">
            <summary><span>MOTOR & PERFORMANS</span><b>Daha Fazla Gör</b></summary>
            <div className="demoAccordionBody">
              <p>Çift Volvo Penta D6 dizel motor toplam 880 HP güç üretir. Normal seyir hızı yaklaşık 24 knot, uygun deniz ve yük koşullarında maksimum hız yaklaşık 31 knot seviyesindedir. Joystick kontrolü, bow thruster ve elektronik gaz kolları düşük hız manevralarında kolaylık sağlar.</p>
              <div className="demoInlineFacts">
            <span><small>MOTOR SAATİ</small><b>35 saat</b></span>
            <span><small>SEYİR HIZI</small><b>24 knot</b></span>
            <span><small>MAKS. HIZ</small><b>31 knot</b></span>
            <span><small>MENZİL</small><b>~320 nm</b></span>
              </div>
            </div>
          </details>
        </section>

        <section className="demoNarrativeSection">
          <div className="demoLabel">İÇ MEKAN & KONAKLAMA</div>
          <details className="demoAccordion">
            <summary><span>İÇ MEKAN & KONAKLAMA</span><b>Daha Fazla Gör</b></summary>
            <div className="demoAccordionBody">
              <p>Alt güvertede baş tarafta çift kişilik ana kabin, sancak tarafta misafir kabini ve ayrı duş bölmeli banyo bulunur. Salon alanında geniş oturma grubu, açılır masa, tam donanımlı mutfak ve doğal ışığı artıran geniş cam yüzeyler yer alır.</p>
              <p>Kokpit; güneşlenme alanı, dış yemek masası ve denize kolay erişim sağlayan yüzme platformuyla sosyal kullanıma göre düzenlenmiştir.</p>
            </div>
          </details>
        </section>

        <section className="demoNarrativeSection">
          <div className="demoLabel">GÜVERTE & DIŞ DONANIM</div>
          <details className="demoAccordion">
            <summary><span>GÜVERTE & DIŞ DONANIM</span><b>Daha Fazla Gör</b></summary>
            <div className="demoAccordionBody">
              <div className="demoBulletColumns">
            <ul>
              <li>Teak kaplı kıç kokpit</li>
              <li>Paslanmaz korkuluklar</li>
              <li>Elektrikli çapa ırgatı</li>
              <li>Kıç duş sistemi</li>
            </ul>
            <ul>
              <li>Yüzme platformu</li>
              <li>Güverte LED aydınlatma</li>
              <li>Güneşlenme minderleri</li>
              <li>Fender ve bağlama halatları</li>
            </ul>
              </div>
            </div>
          </details>
        </section>

        <section className="demoNarrativeSection" id="bakim">
          <div className="demoLabel">BAKIM & TESLİM</div>
          <details className="demoAccordion">
            <summary><span>BAKIM & TESLİM BİLGİLERİ</span><b>Daha Fazla Gör</b></summary>
            <div className="demoAccordionBody">
              <div className="demoTimeline">
            <div><b>2026</b><span>Tekne üretimden çıktı ve ilk devreye alma kontrolleri tamamlandı.</span></div>
            <div><b>35 saat</b><span>Motor çalışma süresi. İlk servis kontrolü kayıtlı.</span></div>
            <div><b>Ekspertiz</b><span>Alıcı tarafından bağımsız survey / ekspertiz yapılabilir.</span></div>
            <div><b>Teslim</b><span>İstanbul’da görülmeye ve kısa sürede teslimata hazır.</span></div>
              </div>
            </div>
          </details>
        </section>

        <section className="demoNarrativeSection">
          <div className="demoLabel">SATIŞ BİLGİLERİ</div>
          <details className="demoAccordion">
            <summary><span>SATIŞA DAHİL OLANLAR</span><b>Daha Fazla Gör</b></summary>
            <div className="demoAccordionBody">
              <div className="demoIncluded">
            <span>✓ Standart güvenlik ekipmanları</span>
            <span>✓ Bağlama halatları ve usturmaçalar</span>
            <span>✓ Navigasyon cihazları</span>
            <span>✓ Klima ve jeneratör</span>
            <span>✓ Mutfak ekipmanları</span>
            <span>✓ Orijinal kullanıcı kitapçıkları</span>
              </div>
              <p className="demoLegalNote">Bu demo ilandaki fiyat ve teknik bilgiler örnek amaçlıdır. Gerçek ilanlarda nihai fiyat, donanım, vergi, garanti ve teslim kapsamı satıcı firma tarafından doğrulanır.</p>
            </div>
          </details>
        </section>
      </section>

      <aside className="syRefSidebar demoProSidebar">
        <div className="demoLabel">YETKİLİ SATICI</div>

        <section className="demoSellerPro">
          <div className="demoSellerProTop">
            <span className="demoSalePill">SATILIK</span>
            <span className="demoVerified">✓ DOĞRULANMIŞ FİRMA</span>
          </div>

          <div className="demoCompanyHead">
            <div className="demoCompanyLogo"><img src="/motoryat-logo.svg" alt="Demo Yachts"/></div>
            <div className="demoCompanyTitle">
              <small>YETKİLİ SATICI</small>
              <h3>Demo Yachts</h3>
              <p>İstanbul, Türkiye</p>
            </div>
          </div>

          <div className="demoCompanyMeta">
            <span><b>24</b><small>Aktif İlan</small></span>
            <span><b>12+</b><small>Yıl Deneyim</small></span>
            <span><b>Hızlı</b><small>Yanıt</small></span>
          </div>

          <div className="demoPricePro">
            <small>LİSTELENMİŞ FİYAT</small>
            <strong>€ 1.250.000</strong>
            <p>Vergiler ve teslim koşulları için satıcıdan teyit alın.</p>
          </div>

          <div className="demoContactGrid">
            <a href="#">☎ <span>Ara</span></a>
            <a href="#">◉ <span>WhatsApp</span></a>
            <a href="#">✉ <span>E-posta</span></a>
          </div>

          <a className="demoPrimaryCta" href="#">FİYAT VE DETAYLI BİLGİ AL</a>

          <div className="demoSellerLinks">
            <a href="/magazalar">Firma Profilini Gör <b>→</b></a>
            <a href="#">Broşürü İndir <b>PDF</b></a>
          </div>

          <div className="demoTrustLine">Motoryat doğrulanmış ticari profil · İletişim bilgileri firma tarafından sağlanır.</div>
        </section>

        <div className="demoAdSlot">
          <a className="syRefAd demoAdCard" href="/magazalar" aria-label="Sponsorlu reklam">
            <span className="demoAdBadge">SPONSORLU</span>
            <img src="/ads/motoryat-firma-magaza-300.webp" alt="Motoryat kurumsal reklam"/>
          </a>
        </div>

        <section className="demoListingSummary">
          <small>İLAN ÖZETİ</small>
          <dl>
            <div><dt>İlan No</dt><dd>MY-DEMO-0042</dd></div>
            <div><dt>Yayın Tarihi</dt><dd>04.10.2026</dd></div>
            <div><dt>Son Güncelleme</dt><dd>Bugün</dd></div>
            <div><dt>Görüntülenme</dt><dd>1.284</dd></div>
            <div><dt>Durum</dt><dd>Satışta</dd></div>
            <div><dt>Ekspertiz</dt><dd>Uygun</dd></div>
          </dl>
        </section>

        <div className="demoAdSlot">
          <a className="syRefAd demoAdCard" href="/magazalar" aria-label="Sponsorlu reklam">
            <span className="demoAdBadge">SPONSORLU</span>
            <img src="/ads/motoryat-house-ad-300-png.webp" alt="Motoryat reklam alanı"/>
          </a>
        </div>

        <section className="demoHelpBox">
          <b>Bu ilan hakkında yardıma mı ihtiyacınız var?</b>
          <p>Satıcıya ulaşamıyorsanız veya ilan bilgileri hakkında destek istiyorsanız Motoryat ekibine bildirin.</p>
          <a href="#">İlanı Bildir / Destek Al →</a>
        </section>
      </aside>
    </div>

    <section className="syRefBottom">
      <div className="syRefBottomGrid">
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

        <aside className="syRefBottomAds demoTripleAds" aria-label="Sponsorlu reklam">
          <a className="syRefBottomAd demoAdCard" href="/magazalar" aria-label="Sponsorlu reklam">
            <span className="demoAdBadge">SPONSORLU</span>
            <img src="/ads/motoryat-house-ad-300-png.webp" alt="Sponsorlu reklam"/>
          </a>
        </aside>
      </div>
    </section>
  </main><Footer/></>
}