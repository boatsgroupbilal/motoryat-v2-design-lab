import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {getNewsBySlug,magazineNews,newsCategories} from '../../../data/news-content';

export default async function Page({params}){
  const {slug}=await params;
  const article=getNewsBySlug(slug) || magazineNews[0];
  const related=magazineNews.filter(x=>x.slug!==article.slug).slice(0,4);
  const secondary=related[0] || article;

  return <><SiteHeader/><main className="newsArticlePage">
    <nav className="newsArticleCategoryNav" aria-label="Haber kategorileri">
      <div className="container">
        {newsCategories.map((x)=><a key={x.slug||'all'} className={x.slug===article.catSlug?'active':''} href={x.slug?'/haberler/'+x.slug:'/haberler'}>{x.label}</a>)}
      </div>
    </nav>

    <article>
      <header className="container newsArticleHeader">
        <div className="newsArticleCrumb">
          <a href="/">Ana Sayfa</a><span>›</span><a href="/haberler">Haberler</a><span>›</span><a href={'/haberler/'+article.catSlug}>{article.cat}</a>
        </div>
        <div className="newsArticleKicker">{article.cat} · {article.date}</div>
        <h1>{article.title}</h1>
        <p className="newsArticleDeck">{article.summary}</p>
        <div className="newsArticleMeta">
          <div><b>MOTORYAT HABER MERKEZİ</b><span>Okuma süresi · 4 dk</span></div>
          <div className="newsArticleShare" aria-label="Paylaş">
            <button type="button">f</button><button type="button">𝕏</button><button type="button">in</button><button type="button">↗</button>
          </div>
        </div>
      </header>

      <figure className="container newsArticleHero">
        <img src={article.image} alt={article.title}/>
        <figcaption>{article.cat} · Motoryat arşiv görseli</figcaption>
      </figure>

      <div className="container newsArticleLayout">
        <main className="newsArticleContent">
          <p className="newsArticleLead">{article.summary} Motoryat, gelişmeleri tasarım, kullanım, pazar ve denizcilik kültürü perspektifinden bir araya getiriyor.</p>

          <p>Yat ve tekne dünyasında yeni modeller, proje güncellemeleri ve marka duyuruları artık yalnızca teknik özelliklerle değil; kullanım deneyimi, tasarım yaklaşımı ve pazardaki konumlarıyla birlikte değerlendiriliyor. Bu haber sayfası da konuyu hızlı okunabilen, görsel ağırlıklı bir dergi düzeninde sunmak için tasarlandı.</p>

          <h2>Öne çıkan detaylar</h2>
          <p>Yeni nesil projelerde verimlilik, yaşam alanlarının kullanımı ve kişiselleştirme seçenekleri öne çıkıyor. Tersaneler ve markalar, model ailelerini daha net segmentlere ayırırken kullanıcıların karşılaştırma yapabileceği bilgi yapısı da önem kazanıyor.</p>

          <figure className="newsArticleInlineImage">
            <img src={secondary.image} alt={secondary.title}/>
            <figcaption>{secondary.title}</figcaption>
          </figure>

          <h2>Tasarım ve kullanım odağı</h2>
          <p>İç ve dış mekânlarda daha sade çizgiler, geniş görüş alanları ve denizle daha doğrudan ilişki kuran yerleşimler dikkat çekiyor. Teknik tarafta ise performans, menzil, bakım kolaylığı ve enerji yönetimi gibi başlıklar kullanıcı kararlarında daha görünür hale geliyor.</p>

          <blockquote>Motoryat haber sayfalarında amaç; haberi hızlı okutmak, güçlü görselle desteklemek ve ilgili marka, model veya ilana kolay geçiş sağlamaktır.</blockquote>

          <h2>Motoryat bağlantıları</h2>
          <p>Haberde adı geçen marka veya model Motoryat sisteminde yer alıyorsa, kullanıcı doğrudan marka profiline, mağazaya, satılık veya kiralık ilana geçebilir. Böylece haber içeriği yalnızca editoryal bir sayfa değil, keşif ve bağlantı noktası olarak da çalışır.</p>
        </main>

        <aside className="newsArticleAside">
          <div className="newsArticleSideBox">
            <small>KATEGORİ</small>
            <h3>{article.cat}</h3>
            <a href={'/haberler/'+article.catSlug}>Tüm {article.cat} haberleri →</a>
          </div>

          <div className="newsArticleSideBox">
            <small>İLGİLİ BAĞLANTILAR</small>
            <a className="newsArticleQuickLink" href="/markalar"><b>Markalar</b><span>Marka rehberini aç →</span></a>
            <a className="newsArticleQuickLink" href="/satilik"><b>Satılık</b><span>Güncel ilanları gör →</span></a>
            <a className="newsArticleQuickLink" href="/kiralik"><b>Charter</b><span>Kiralık yatları gör →</span></a>
          </div>

          <div className="newsArticleRelated">
            <div className="newsArticleRelatedHead">İLGİLİ HABERLER</div>
            {related.slice(0,3).map((x)=><a href={'/haber/'+x.slug} key={x.slug}>
              <img src={x.image} alt={x.title}/>
              <div><small>{x.cat}</small><h3>{x.title}</h3><span>{x.date}</span></div>
            </a>)}
          </div>
        </aside>
      </div>

      <section className="newsArticleMore">
        <div className="container">
          <div className="newsArticleMoreHead"><h2>Daha Fazla Haber</h2><a href="/haberler">Tüm haberler →</a></div>
          <div className="newsArticleMoreGrid">
            {related.map((x)=><a href={'/haber/'+x.slug} key={x.slug}>
              <img src={x.image} alt={x.title}/>
              <small>{x.cat}</small>
              <h3>{x.title}</h3>
            </a>)}
          </div>
        </div>
      </section>
    </article>
  </main><Footer/></>
}
