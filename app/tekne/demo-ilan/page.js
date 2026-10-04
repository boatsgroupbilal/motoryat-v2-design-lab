import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';

const photos=['/sale-yener-35.webp','/sale-euro-700.webp','/charter-luna-hero.webp'];

export default function DemoListingPage(){
  return <><SiteHeader/><main className="syRefPage demoListingPage">
    <div className="syRefGalleryWrap">
      <div className="demoLabel">1 · GALERİ / ANA FOTOĞRAF</div>
      <div className="demoGallery">
        <img className="demoGalleryMain" src={photos[0]} alt="Demo ilan ana görsel"/>
        <div className="demoGallerySide">
          <img src={photos[1]} alt="Demo ikinci görsel"/>
          <img src={photos[2]} alt="Demo üçüncü görsel"/>
        </div>
        <span className="demoCount">3 FOTOĞRAF</span>
      </div>

      <div className="demoLabel">2 · BROŞÜR ALANI</div>
      <div className="syRefBrochure"><span>BROŞÜRÜ İNDİRİN</span><b>PDF</b></div>

      <div className="demoLabel">3 · İLAN İÇİ SEKME MENÜSÜ</div>
      <div className="syRefTabs">
        <nav aria-label="Demo ilan bölümleri">
          <a className="active" href="#genel-bakis">GENEL BAKIŞ</a>
          <a href="#techizat">TEÇHİZAT</a>
          <a href="#ozellikler">ÖZELLİKLER</a>
        </nav>
        <div className="syRefTabsActions"><button type="button">↗</button><a href="/satilik">SATIŞ ARAMA⌕</a></div>
      </div>
    </div>

    <div className="syRefContentWrap" id="genel-bakis">
      <section className="syRefOverview">
        <div className="demoLabel">4 · ANA İLAN BİLGİSİ</div>
        <div className="syRefOverviewTop">
          <div><span className="syRefEyebrow">SATILIK</span><h1>DEMO YACHT 42</h1></div>
          <button type="button" className="syRefInfoDot">i</button>
        </div>

        <div className="syRefMetaLine">
          <span>⌁ Demo Yachts</span><span>▣ 2026</span><span>↔ 12.80 m</span><span>♙ Satılık</span>
        </div>

        <div className="demoLabel">5 · AÇIKLAMA</div>
        <div className="syRefCopy">
          <p>Bu alan ilan açıklaması içindir. Teknenin öne çıkan özellikleri, kullanım amacı, bakım durumu ve kısa satış bilgileri burada görünür.</p>
          <p>Bu demo sayfa gerçek veri içermez; sadece sayfa düzeninin hangi bölümde ne göstereceğini anlatır.</p>
        </div>

        <section className="syRefTechnical" id="teknik">
          <div id="techizat" className="syRefAnchorSection">
            <div className="demoLabel">6 · TEÇHİZAT</div>
            <h2>TEÇHİZAT</h2>
            <div className="syRefTechGrid">
              <div><span>Motor</span><b>2 × 440 HP</b></div>
              <div><span>Jeneratör</span><b>9 kW</b></div>
              <div><span>Navigasyon</span><b>GPS + Radar</b></div>
              <div><span>Klima</span><b>Var</b></div>
            </div>
          </div>

          <div id="ozellikler" className="syRefAnchorSection">
            <div className="demoLabel">7 · ÖZELLİKLER</div>
            <h2>ÖZELLİKLER</h2>
            <div className="syRefTechGrid">
              <div><span>Boy</span><b>12.80 m</b></div>
              <div><span>Yıl</span><b>2026</b></div>
              <div><span>Genişlik</span><b>4.10 m</b></div>
              <div><span>Konum</span><b>İstanbul, Türkiye</b></div>
              <div><span>Kabin</span><b>2</b></div>
              <div><span>Yakıt</span><b>Dizel</b></div>
            </div>
          </div>
        </section>
      </section>

      <aside className="syRefSidebar demoProSidebar">
        <div className="demoLabel">8 · FİYAT / SATICI / İLETİŞİM</div>

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
          <span>REKLAM · 300 × 300</span>
          <a className="syRefAd" href="/magazalar"><img src="/ads/motoryat-firma-magaza-300.webp" alt="300x300 demo reklam"/></a>
        </div>
      </aside>
    </div>

    <section className="syRefBottom">
      <div className="syRefBottomGrid">
        <div className="syRefBottomLeft">
          <div className="demoLabel">10 · BENZER İLANLAR</div>
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
        <aside className="syRefBottomAds demoTripleAds">
          <div className="demoLabel">11 · 3 ADET 300 × 300 REKLAM</div>
          {[
            '/ads/motoryat-house-ad-300-png.webp',
            '/ads/motoryat-firma-magaza-300.webp',
            '/ads/la-romana-charters-300x300.gif'
          ].map((src,i)=>
            <a className="syRefBottomAd" href="/magazalar" key={src}>
              <img src={src} alt={`300x300 reklam ${i+1}`}/>
            </a>
          )}
        </aside>
      </div>
    </section>
  </main><Footer/></>
}