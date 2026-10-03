import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {magazineNews,newsCategories} from '../../data/news-content';

export default function Page(){
 const lead=magazineNews[0];
 const side=magazineNews.slice(1,3);
 const editors=magazineNews.slice(3,6);
 const latest=magazineNews.slice(1);

 return <><SiteHeader/><main className="newsMagazinePage">
  <section className="newsMagazineMasthead">
    <div className="container">
      <span>MOTORYAT HABER</span>
      <h1>Denizcilik dünyasının gündemi</h1>
      <p>Süperyat, yeni inşa, testler, tasarım, charter, markalar ve etkinliklerden seçilmiş haberler.</p>
    </div>
  </section>

  <nav className="newsMagazineNav" aria-label="Haber kategorileri">
    <div className="container">
      {newsCategories.map((x)=><a key={x.slug||'all'} className={!x.slug?'active':''} href={x.slug?'/haberler/'+x.slug:'/haberler'}>{x.label}</a>)}
    </div>
  </nav>

  <section className="container newsMagazineLeadGrid">
    <a className="newsMagazineLead" href={'/haber/'+lead.slug}>
      <img src={lead.image} alt={lead.title}/>
      <div className="newsMagazineLeadShade"></div>
      <div className="newsMagazineLeadCopy">
        <small>{lead.cat} · {lead.date}</small>
        <h2>{lead.title}</h2>
        <p>{lead.summary}</p>
        <span>Haberi oku →</span>
      </div>
    </a>

    <div className="newsMagazineSide">
      {side.map((x)=><a className="newsMagazineSideCard" href={'/haber/'+x.slug} key={x.slug}>
        <img src={x.image} alt={x.title}/>
        <div>
          <small>{x.cat}</small>
          <h3>{x.title}</h3>
          <span>{x.date}</span>
        </div>
      </a>)}
    </div>
  </section>

  <section className="container newsMagazineStrip">
    {editors.map((x)=><a href={'/haber/'+x.slug} key={x.slug}>
      <img src={x.image} alt={x.title}/>
      <div>
        <small>{x.cat}</small>
        <h3>{x.title}</h3>
        <span>{x.date}</span>
      </div>
    </a>)}
  </section>

  <section className="newsMagazineLatest">
    <div className="container">
      <div className="newsMagazineSectionHead">
        <div><small>GÜNCEL</small><h2>Son Haberler</h2></div>
        <a href="/haberler">Tümünü gör</a>
      </div>
      <div className="newsMagazineLatestGrid">
        {latest.map((x)=><a className="newsMagazineLatestCard" href={'/haber/'+x.slug} key={x.slug}>
          <img src={x.image} alt={x.title}/>
          <div>
            <small>{x.cat} · {x.date}</small>
            <h3>{x.title}</h3>
            <p>{x.summary}</p>
            <span>Devamını oku →</span>
          </div>
        </a>)}
      </div>
    </div>
  </section>
 </main><Footer/></>
}
