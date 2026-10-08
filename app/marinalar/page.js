import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {marinas as exportedMarinas} from '../../data/content';

const countries=[
  {code:'ALL',name:'Tümü'},{code:'TR',flag:'/flags/tr.svg',name:'Türkiye'},{code:'GR',flag:'/flags/gr.svg',name:'Yunanistan'},
  {code:'IT',flag:'/flags/it.svg',name:'İtalya'},{code:'ES',flag:'/flags/es.svg',name:'İspanya'},{code:'HR',flag:'/flags/hr.svg',name:'Hırvatistan'},
  {code:'ME',flag:'/flags/me.svg',name:'Karadağ'},{code:'AE',flag:'/flags/ae.svg',name:'BAE'},{code:'BS',flag:'/flags/bs.svg',name:'Bahamalar'},{code:'AU',flag:'/flags/au.svg',name:'Avustralya'}
];

const fallbackMarinas=[
  {slug:'d-marin-gocek',name:'D-Marin Göcek',province:'Muğla',district:'Göcek'},
  {slug:'setur-kalamis-fenerbahce-marina',name:'Setur Kalamış & Fenerbahçe Marina',province:'İstanbul'},
  {slug:'cairns-marlin-marina',name:'Cairns Marlin Marina',province:'Queensland',district:'Cairns'}
];

const marinas=(exportedMarinas?.length?exportedMarinas:fallbackMarinas).map((m)=>({
 ...m,
 loc:[m.district,m.province,m.region].filter(Boolean).join(', ')||'Marina',
 mark:(m.name||'MARINA').split(' ').slice(0,2).join(' ').toUpperCase(),
 flag:m.country?('/flags/'+String(m.country).toLowerCase()+'.svg'):null,
 accent:'#167aa8',
 fac:['⚓ Bağlama','⚡ Elektrik','◉ Su','◔ Wi-Fi','⛽ Yakıt','♜ Restoran','⚙ Teknik Servis']
}));

export default function Page(){return <><SiteHeader/><main className="marinaDirectoryPage marinaProfilesV2">
  <section className="marinaDirectoryHero categoryHeroStd"><img className="marinaDirectoryHeroImg categoryHeroStdImage" src="/marinas/cairns/cairns-marlin-marina-01.jpg" alt="Motoryat marina rehberi"/><div className="marinaDirectoryHeroShade categoryHeroStdShade"></div><div className="container marinaProfilesHeroInner categoryHeroStdInner"><span>MARİNA REHBERİ</span><h1>Marina Profilleri</h1><p>Dünyanın seçkin marinalarını keşfedin. Rotanızı planlayın, doğru limanı bulun.</p></div></section>
  <section className="container marinaProfilesFilter"><div className="marinaProfilesFilterTitle"><span>🌐</span><b>ÜLKEYE GÖRE FİLTRELE</b></div><div className="marinaProfilesCountries">{countries.map((c,i)=><button className={i===0?'active':''} type="button" key={c.code}>{c.flag&&<img src={c.flag} alt=""/>}{c.name}</button>)}</div><div className="marinaProfilesSort"><span>Toplam {marinas.length} marina</span><button type="button">A–Z ↕</button></div></section>
  <section className="container marinaProfilesLayout"><div className="marinaProfilesMain"><div className="marinaProfilesList">
    {marinas.map((m)=><a className="marinaProfileRow" href={'/marina/'+m.slug} key={m.id||m.slug} style={{'--marina-accent':m.accent}}><span className="marinaProfileStripe" aria-hidden="true"></span><div className="marinaProfileLogo"><b>{m.mark}</b></div><div className="marinaProfileBody"><div className="marinaProfileTitle"><div><h3>{m.name}</h3><p>⌖ {m.loc}</p></div>{m.flag&&<div className="marinaProfileFlag"><img src={m.flag} alt=""/></div>}</div><div className="marinaProfileFacilities">{m.fac.map((x,j)=>{const parts=x.split(' ');return <span key={j}><i>{parts[0]}</i><small>{parts.slice(1).join(' ')}</small></span>})}</div></div><div className="marinaProfileAction"><b>MARİNAYI GÖRÜNTÜLE</b><span>›</span></div></a>)}
  </div></div><aside className="marinaProfilesSide"><a className="marinaSideVisual" href="/haberler"><img src="/charter-sunreef.webp" alt="Akdeniz rotaları"/><div><small>MARİNA REHBERİ</small><strong>Hayalinizdeki Marina Sizi Bekliyor</strong><span>Rotaları keşfet →</span></div></a><a className="marinaSideAd" href="/magazalar"><img src="/store-mengi.webp" alt="Motoryat ticari vitrin"/><div><small>MOTORYAT.COM</small><strong>Global Marina Rehberi</strong><span>Keşfet · Planla · Rotanı Oluştur</span></div></a></aside></section>
</main><Footer/></>}