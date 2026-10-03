import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {getNewsByCategory,getCategoryLabel,newsCategories} from '../../../data/news-content';

export default async function Page({params}){
  const {category}=await params;
  const items=getNewsByCategory(category);
  const title=getCategoryLabel(category);

  return <><SiteHeader/><main className="newsMagazinePage">
    <section className="newsMagazineCategoryHero">
      <div className="container">
        <span>HABER KATEGORİSİ</span>
        <h1>{title}</h1>
        <p>{items.length ? title+' kategorisindeki güncel Motoryat haberleri.' : 'Bu kategoride henüz yayınlanmış haber bulunmuyor.'}</p>
      </div>
    </section>

    <nav className="newsMagazineNav" aria-label="Haber kategorileri">
      <div className="container">
        {newsCategories.map((x)=><a key={x.slug||'all'} className={x.slug===category?'active':''} href={x.slug?'/haberler/'+x.slug:'/haberler'}>{x.label}</a>)}
      </div>
    </nav>

    <section className="container newsMagazineCategoryGrid">
      {items.map((x)=><a className="newsMagazineCategoryCard" href={'/haber/'+x.slug} key={x.slug}>
        <img src={x.image} alt={x.title}/>
        <div>
          <small>{x.cat} · {x.date}</small>
          <h2>{x.title}</h2>
          <p>{x.summary}</p>
          <span>Haberi oku →</span>
        </div>
      </a>)}
    </section>
  </main><Footer/></>
}
