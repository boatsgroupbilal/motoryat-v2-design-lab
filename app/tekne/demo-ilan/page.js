import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import YachtDetailGallery from '../../../components/YachtDetailGallery';

const photos=['/sale-yener-35.webp','/sale-euro-700.webp','/charter-luna-hero.webp'];

export default function DemoListingPage(){
  return <><SiteHeader/><main className="syRefPage refListingDemo">
    <div className="refListingShell">
      <nav className="refListingBreadcrumb" aria-label="Breadcrumb">
        <a href="/">Ana Sayfa</a><span>›</span><a href="/satilik">Satılık Tekneler</a><span>›</span><b>Bavaria</b>
      </nav>

      <header className="refListingHeading">
        <div className="refListingTitleBlock">
          <span className="refListingStatus">SATILIK · İKİNCİ EL</span>
          <h1>Bavaria S 36 HT Diesel</h1>
          <div className="refListingMeta">
            <span>⌖ Marina Punat, Hırvatistan</span>
            <span>⚓ Motorlu Yat</span>
            <span>İlan No: S68211</span>
          </div>
        </div>

        <div className="refListingPrice">
          <del>€ 173.000</del>
          <strong>€ 159.000</strong>
          <small>KDV hariç · Pazarlığa açık</small>
        </div>
      </header>

      <div className="refListingTopGrid">
        <section className="refListingGallery">
          <YachtDetailGallery
            title="Bavaria S 36 HT Diesel"
            images={[
              photos[0],
              photos[1],
              photos[2],
              '/sale-euro-760.webp',
              '/sale-euro-850.webp'
            ]}
            totalCount={24}
          />
        </section>

        <aside className="refSellerCard">
          <div className="refSellerTopline">
            <span>YETKİLİ SATICI</span>
            <b>✓ DOĞRULANMIŞ</b>
          </div>

          <div className="refSellerIdentity">
            <small>KURUMSAL MAĞAZA</small>
            <h2>Motoryat Partner</h2>
            <p>⌖ Marina Punat · Hırvatistan</p>
          </div>

          <div className="refSellerAgent">
            <small>İLAN YETKİLİSİ</small>
            <strong>Satış Ekibi</strong>
            <span>+90 5XX XXX XX XX</span>
          </div>

          <div className="refSellerActions">
            <a className="refCall" href="#">☎ TELEFONU GÖSTER</a>
            <a className="refWhatsapp" href="#">◉ WHATSAPP İLE YAZ</a>
          </div>

          <a className="refSellerAll" href="/magazalar">Mağazanın Tüm İlanları <b>→</b></a>
          <a className="refSellerProfile" href="/magazalar">Mağaza bilgilerini görüntüle <b>›</b></a>
          <a className="refSellerBrochure" href="#">Broşürü İndir <b>PDF</b></a>
        </aside>
      </div>

      <section className="refQuickFacts" aria-label="Temel tekne bilgileri">
        <div><span>◫</span><small>Yıl</small><b>2018</b></div>
        <div><span>↔</span><small>Uzunluk</small><b>11,66 m</b></div>
        <div><span>▣</span><small>Kabin</small><b>2 Kabin</b></div>
        <div><span>⚙</span><small>Motor</small><b>2 × Volvo Penta D3</b></div>
        <div><span>⛽</span><small>Yakıt Tipi</small><b>Dizel</b></div>
      </section>

      <section className="refListingDetails" id="genel-bakis">
        <section className="refAboutSection">
          <span className="refSectionEyebrow">İLAN AÇIKLAMASI</span>
          <h2>İLAN HAKKINDA</h2>
          <h3>Bavaria S 36 HT Diesel</h3>
          <p><b>Bavaria S 36 HT Diesel</b>, sportif gövde yapısı, hardtop tasarımı ve çift Volvo Penta dizel motoruyla konforlu seyir ve güçlü performansı bir araya getiren bir motoryattır. İki kabinli yerleşimi, geniş kokpiti ve pratik yaşam alanlarıyla aile kullanımı ve uzun hafta sonu seyirleri için uygundur. Tekne Marina Punat, Hırvatistan’da görülebilir.</p>
        </section>

        <section className="refSpecsSection">
          <span className="refSectionEyebrow">İLAN ÖZELLİKLERİ</span>
          <h2>Teknik Özellikler</h2>
          <div className="refSpecsGrid">
            <dl>
              <div><dt>Model Yılı</dt><dd>2018</dd></div>
              <div><dt>Uzunluk</dt><dd>11,66 m</dd></div>
              <div><dt>Genişlik</dt><dd>3,59 m</dd></div>
              <div><dt>Su Çekimi</dt><dd>1,05 m</dd></div>
              <div><dt>Marka</dt><dd>Bavaria</dd></div>
              <div><dt>Model</dt><dd>S 36 HT Diesel</dd></div>
              <div><dt>Tekne Tipi</dt><dd>Motorlu Yat</dd></div>
              <div><dt>Durum</dt><dd>İkinci El · Yeni Gibi</dd></div>
              <div><dt>İlan No</dt><dd>S68211</dd></div>
            </dl>

            <dl>
              <div><dt>Yolcu Kapasitesi</dt><dd>8</dd></div>
              <div><dt>Kabin</dt><dd>2</dd></div>
              <div><dt>Motor</dt><dd>2 × Volvo Penta D3</dd></div>
              <div><dt>Yakıt Tipi</dt><dd>Dizel</dd></div>
              <div><dt>Yakıt Tankı</dt><dd>520 L</dd></div>
              <div><dt>Su Tankı</dt><dd>250 L</dd></div>
              <div><dt>Seyir Hızı</dt><dd>24 kn</dd></div>
              <div><dt>Maksimum Hız</dt><dd>30 kn</dd></div>
              <div><dt>Konum</dt><dd>Marina Punat · Hırvatistan</dd></div>
            </dl>
          </div>
        </section>
      </section>
    </div>

    <div className="refMobileSticky">
      <a href="#">☎ ARA</a>
      <a href="#">◉ WHATSAPP</a>
    </div>
  </main><Footer/></>;
}