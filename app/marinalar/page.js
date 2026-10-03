import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const marinas=[
  {slug:'yalikavak-marina',name:'Yalıkavak Marina',loc:'Bodrum · Muğla',tag:'Premium Marina',mark:'YM',country:'TR',fac:['⚓','⚡','◉','⛽','◈','●']},
  {slug:'d-marin-gocek',name:'D-Marin Göcek',loc:'Göcek · Muğla',tag:'Charter Üssü',mark:'DG',country:'TR',fac:['⚓','⚡','◉','⛽','◈','●','✦']},
  {slug:'d-marin-turgutreis',name:'D-Marin Turgutreis',loc:'Bodrum · Muğla',tag:'Ege Rotası',mark:'DT',country:'TR',fac:['⚓','⚡','◉','⛽','◈','●']},
  {slug:'setur-kalamis-fenerbahce-marina',name:'Setur Kalamış & Fenerbahçe Marina',loc:'İstanbul',tag:'Şehir Marinası',mark:'SK',country:'TR',fac:['⚓','⚡','◉','⛽','◈','●','✦']},
  {slug:'netsel-marmaris-marina',name:'Netsel Marmaris Marina',loc:'Marmaris · Muğla',tag:'Akdeniz',mark:'NM',country:'TR',fac:['⚓','⚡','◉','⛽','◈','●']},
  {slug:'cesme-marina',name:'Çeşme Marina',loc:'Çeşme · İzmir',tag:'Ege',mark:'ÇM',country:'TR',fac:['⚓','⚡','◉','⛽','◈']},
  {slug:'ece-saray-marina',name:'Ece Saray Marina',loc:'Fethiye · Muğla',tag:'Charter',mark:'ES',country:'TR',fac:['⚓','⚡','◉','⛽','●']},
  {slug:'viaport-marina-tuzla',name:'Viaport Marina Tuzla',loc:'Tuzla · İstanbul',tag:'Marmara',mark:'VM',country:'TR',fac:['⚓','⚡','◉','⛽','◈','●']}
];

export default function Page(){return <><SiteHeader/><main className="marinaDirectoryPage">
  <section className="marinaDirectoryHero">
    <img className="marinaDirectoryHeroImg" src="/hero-home.webp" alt="Motoryat marina rehberi"/>
    <div className="marinaDirectoryHeroShade"></div>
    <div className="container marinaDirectoryHeroGrid">
      <div className="marinaDirectoryHeroCopy">
        <span>MARİNA REHBERİ</span>
        <h1>Marinanızı bulun.</h1>
        <p>Türkiye ve yakın rotalardaki marinaları; konum, bağlama ve hizmet seçeneklerine göre keşfedin.</p>
        <div className="marinaDirectorySearch">
          <input placeholder="Marina, şehir veya bölge ara"/>
          <button type="button">ARA</button>
        </div>
      </div>

      <a className="marinaFeaturedCard" href="/marina/yalikavak-marina">
        <img src="/charter-luna-1.webp" alt="Öne çıkan marina"/>
        <div className="marinaFeaturedShade"></div>
        <div className="marinaFeaturedCopy">
          <small>ÖNE ÇIKAN MARİNA</small>
          <h2>Yalıkavak Marina</h2>
          <p>Bodrum · Muğla</p>
          <span>Profili görüntüle →</span>
        </div>
      </a>
    </div>
  </section>

  <section className="marinaDirectoryBar">
    <div className="container">
      <b>MARİNA PROFİLLERİ</b>
      <div><a href="#">A–Z</a><a href="#">Ülkeye göre</a><a href="#">Haritada ara ⌕</a></div>
    </div>
  </section>

  <section className="container marinaDirectoryLayout">
    <div className="marinaDirectoryMain">
      <button className="marinaCountryFilter" type="button"><span>▣</span> ÜLKEYE GÖRE FİLTRELE <b>＋</b></button>

      <div className="marinaDirectoryList">
        {marinas.map((m,i)=><a className="marinaDirectoryRow" href={'/marina/'+m.slug} key={m.slug}>
          <div className="marinaDirectoryLogo">{m.mark}</div>
          <div className="marinaDirectoryInfo">
            <small>{m.loc}</small>
            <h3>{m.name}</h3>
            <p>{m.tag}</p>
            <div className="marinaFacilities">{m.fac.map((x,j)=><i key={j}>{x}</i>)}</div>
          </div>
          <div className="marinaDirectoryAction">
            <span>{m.country}</span>
            <b>MARİNAYI GÖRÜNTÜLE ›</b>
          </div>
        </a>)}
      </div>
    </div>

    <aside className="marinaDirectorySide">
      <a className="marinaSideVisual" href="/haberler">
        <img src="/charter-sunreef.webp" alt="Akdeniz rotaları"/>
        <span>AKDENİZ ROTALARI</span>
      </a>

      <div className="marinaSideBlock">
        <div className="marinaSideHead"><b>İLGİLİ HABERLER</b><span>‹ ›</span></div>
        <a className="marinaSideNews" href="/haberler">
          <img src="/store-directory.webp" alt="Marina haberleri"/>
          <small>MARİNA HABERLERİ · 03 EKİM 2026</small>
          <h3>Yeni sezon için marina ve bağlama rehberi</h3>
        </a>
        <a className="marinaSideNews compact" href="/haberler">
          <img src="/sale-euro-760.webp" alt="Ege marinaları"/>
          <div><small>REHBER</small><h3>Ege kıyılarında öne çıkan rotalar</h3></div>
        </a>
      </div>

      <a className="marinaSideAd" href="/magazalar">
        <img src="/store-mengi.webp" alt="Motoryat ticari vitrin"/>
        <div><small>MOTORYAT.COM</small><strong>Ticari Vitrin</strong><span>Mağazaları keşfet →</span></div>
      </a>
    </aside>
  </section>
</main><Footer/></>}