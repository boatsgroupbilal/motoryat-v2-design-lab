import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';

export default async function Page({params}){
  const {slug}=await params;
  return <><SiteHeader/><main>
    <article className="articlePage">
      <header className="articleHeader container"><div className="detailCrumb">Ana sayfa <span>›</span> Haberler <span>›</span> İnceleme</div><span>YAT DÜNYASI · 02 EKİM 2026</span><h1>Yeni yatlar, markalar ve denizcilik dünyasından gelişmeler</h1><p>Motoryat haber şablonu; manşet, çoklu görsel, firma bağlantıları ve ilgili içerikler için tasarlandı.</p></header>
      <div className="articleHero container"><img src="/charter-luna-hero.webp" alt="Yat haberi"/></div>
      <div className="articleBody container"><main><p className="lead">Denizcilik dünyasındaki yeni modeller, tersane gelişmeleri, testler ve incelemeler Motoryat Haberler bölümünde tek yayın akışında sunulur.</p><h2>Yeni model ve proje odağı</h2><p>Haber detay sayfası uzun metin, fotoğraf galerisi, teknik bilgi kutuları ve ilgili marka ya da firma bağlantılarını destekleyecek şekilde hazırlanmıştır.</p><img src="/sale-euro-850.webp" alt="Yeni model"/><h2>Teknik bilgiler ve bağlantılar</h2><p>İlgili modelin satılık ilanı, üretici mağazası ve marka profili aynı haber sayfasından erişilebilir.</p></main><aside><div className="articleSideCard"><span>İLGİLİ MARKA</span><h3>Motoryat Marka Rehberi</h3><a href="/markalar">Markaları Gör →</a></div><div className="articleSideCard"><span>İLGİLİ İLANLAR</span><h3>Satılık Tekneler</h3><a href="/satilik">İlanları Gör →</a></div></aside></div>
    </article>
  </main><Footer/></>
}
