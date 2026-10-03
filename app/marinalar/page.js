import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const countries=[
  {code:'ALL',name:'Tümü'},
  {code:'TR',flag:'/flags/tr.svg',name:'Türkiye'},
  {code:'GR',flag:'/flags/gr.svg',name:'Yunanistan'},
  {code:'IT',flag:'/flags/it.svg',name:'İtalya'},
  {code:'ES',flag:'/flags/es.svg',name:'İspanya'},
  {code:'HR',flag:'/flags/hr.svg',name:'Hırvatistan'},
  {code:'ME',flag:'/flags/me.svg',name:'Karadağ'},
  {code:'AE',flag:'/flags/ae.svg',name:'BAE'},
  {code:'BS',flag:'/flags/bs.svg',name:'Bahamalar'},
  {code:'AU',flag:'/flags/au.svg',name:'Avustralya'}
];

const marinas=[
  {slug:'d-marin-gocek',name:'D-Marin Göcek',loc:'Göcek, Muğla, Türkiye',mark:'D-MARIN',flag:'/flags/tr.svg',country:'TR',accent:'#b9924a',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'setur-kalamis-fenerbahce-marina',name:'Setur Kalamış & Fenerbahçe Marina',loc:'İstanbul, Türkiye',mark:'SETUR',flag:'/flags/tr.svg',country:'TR',accent:'#0f9fb7',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'marina-di-porto-cervo',name:'Marina di Porto Cervo',loc:'Sardinya, İtalya',mark:'PORTO CERVO',flag:'/flags/it.svg',country:'IT',accent:'#16885a',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'marina-port-vell',name:'Marina Port Vell',loc:'Barselona, İspanya',mark:'PORT VELL',flag:'/flags/es.svg',country:'ES',accent:'#d19c24',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'alimos-marina',name:'Alimos Marina',loc:'Atina, Yunanistan',mark:'ALIMOS',flag:'/flags/gr.svg',country:'GR',accent:'#1d6bb5',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'aci-marina-dubrovnik',name:'ACI Marina Dubrovnik',loc:'Dubrovnik, Hırvatistan',mark:'ACI',flag:'/flags/hr.svg',country:'HR',accent:'#d8483e',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'porto-montenegro',name:'Porto Montenegro Marina',loc:'Tivat, Karadağ',mark:'PORTO M',flag:'/flags/me.svg',country:'ME',accent:'#c9343c',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'dubai-harbour-marina',name:'Dubai Harbour Marina',loc:'Dubai, Birleşik Arap Emirlikleri',mark:'DUBAI',flag:'/flags/ae.svg',country:'AE',accent:'#d8982e',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'nassau-yacht-haven',name:'Nassau Yacht Haven',loc:'Nassau, Bahamalar',mark:'NASSAU',flag:'/flags/bs.svg',country:'BS',accent:'#23a9c6',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']},
  {slug:'sydney-superyacht-marina',name:'Sydney Superyacht Marina',loc:'Sydney, Avustralya',mark:'SYDNEY',flag:'/flags/au.svg',country:'AU',accent:'#2855a6',fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']}
];

export default function Page(){return <><SiteHeader/><main className="marinaDirectoryPage marinaProfilesV2">
  <section className="marinaDirectoryHero">
    <img className="marinaDirectoryHeroImg" src="/hero-home.webp" alt="Motoryat marina rehberi"/>
    <div className="marinaDirectoryHeroShade"></div>
    <div className="container marinaProfilesHeroInner">
      <span>MARİNA REHBERİ</span>
      <h1>Marina Profilleri</h1>
      <p>Dünyanın seçkin marinalarını keşfedin. Rotanızı planlayın, doğru limanı bulun.</p>
    </div>
  </section>

  <section className="container marinaProfilesFilter">
    <div className="marinaProfilesFilterTitle"><span>🌐</span><b>ÜLKEYE GÖRE FİLTRELE</b></div>
    <div className="marinaProfilesCountries">
      {countries.map((c,i)=><button className={i===0?'active':''} type="button" key={c.code}>{c.flag&&<img src={c.flag} alt=""/>}{c.name}</button>)}
    </div>
    <div className="marinaProfilesSort"><span>Toplam {marinas.length} marina</span><button type="button">A–Z ↕</button></div>
  </section>

  <section className="container marinaProfilesLayout">
    <div className="marinaProfilesMain">
      <div className="marinaProfilesList">
        {marinas.map((m)=><a
          className="marinaProfileRow"
          href={'/marina/'+m.slug}
          key={m.slug}
          style={{'--marina-accent':m.accent}}
        >
          <span className="marinaProfileStripe" aria-hidden="true"></span>
          <div className="marinaProfileLogo"><b>{m.mark}</b></div>

          <div className="marinaProfileBody">
            <div className="marinaProfileTitle">
              <div>
                <h3>{m.name}</h3>
                <p>⌖ {m.loc}</p>
              </div>
              <div className="marinaProfileFlag"><img src={m.flag} alt=""/></div>
            </div>

            <div className="marinaProfileFacilities">
              {m.fac.map((x,j)=>{
                const parts=x.split(' ');
                return <span key={j}><i>{parts[0]}</i><small>{parts.slice(1).join(' ')}</small></span>
              })}
            </div>
          </div>

          <div className="marinaProfileAction">
            <b>MARİNAYI GÖRÜNTÜLE</b><span>›</span>
          </div>
        </a>)}
      </div>
    </div>

    <aside className="marinaProfilesSide">
      <a className="marinaSideVisual" href="/haberler">
        <img src="/charter-sunreef.webp" alt="Akdeniz rotaları"/>
        <div><small>MARİNA REHBERİ</small><strong>Hayalinizdeki Marina Sizi Bekliyor</strong><span>Rotaları keşfet →</span></div>
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
          <div><small>REHBER</small><h3>Akdeniz ve Ege’de öne çıkan marinalar</h3></div>
        </a>
      </div>

      <a className="marinaSideAd" href="/magazalar">
        <img src="/store-mengi.webp" alt="Motoryat ticari vitrin"/>
        <div><small>MOTORYAT.COM</small><strong>Global Marina Rehberi</strong><span>Keşfet · Planla · Rotanı Oluştur</span></div>
      </a>
    </aside>
  </section>
</main><Footer/></>}