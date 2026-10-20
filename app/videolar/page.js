'use client';
import {useMemo,useState} from 'react';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const videos=[
 {id:'lady-luna',title:'Lady Luna · 32M Motor Yacht',brand:'Lady Luna',category:'Kiralık Yatlar',src:'https://motoryat.com/videos/home/lady-luna-home.mp4',poster:'https://motoryat.com/media/lady-luna/hero-poster.webp'},
 {id:'grande-mare',title:'Grande Mare GM 42 Fly · Walkthrough',brand:'Grande Mare',category:'Tekne Tanıtımları',src:'/listings/grande-mare/gm42/walkthrough.mp4',poster:'/hero-home.webp'}
];
const categories=['Tümü','Kiralık Yatlar','Tekne Tanıtımları'];
export default function VideosPage(){
 const [category,setCategory]=useState('Tümü');
 const [query,setQuery]=useState('');
 const [playing,setPlaying]=useState(null);
 const results=useMemo(()=>videos.filter(v=>(category==='Tümü'||v.category===category)&&[v.title,v.brand,v.category].join(' ').toLocaleLowerCase('tr').includes(query.trim().toLocaleLowerCase('tr'))),[category,query]);
 return <><SiteHeader/><main className="v2VideoPage">
  <div className="v2VideoIntro"><div className="dpWrap"><small>VİDEOLAR · MOTORYAT.COM</small><h1>Denizcilik Video Arşivi</h1><p>Yat tanıtımlarını, tekne videolarını ve denizcilik projelerini keşfedin.</p><a href="https://motoryat.com/videolar" target="_blank" rel="noopener noreferrer">Canlı video arşivinin tamamı →</a></div></div>
  <div className="dpWrap v2VideoContent">
   <div className="v2VideoControls"><label><span>Video veya marka ara</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Marka veya video ara..." /></label><div className="v2VideoTabs" aria-label="Video kategorileri">{categories.map(c=><button type="button" aria-pressed={category===c} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div></div>
   <div className="v2VideoSectionHead"><h2>Seçili Videolar</h2><p>V2 için oynatma kaynağı tanımlanan videolar</p></div>
   {results.length?<div className="v2VideoGrid">{results.map(v=><article className="v2VideoCard" key={v.id}><div className="v2VideoMedia">{playing===v.id?<video src={v.src} poster={v.poster} controls autoPlay playsInline preload="none" />:<button onClick={()=>setPlaying(v.id)} type="button" aria-label={v.title+' videosunu oynat'}><img src={v.poster} alt={v.title} loading="lazy"/><span className="v2VideoPlay" aria-hidden="true">▶</span></button>}</div><div className="v2VideoInfo"><span>{v.category} · {v.brand}</span><h3>{v.title}</h3></div></article>)}</div>:<p className="v2VideoEmpty">Bu aramada eşleşen video bulunamadı.</p>}
   <section className="v2VideoArchiveCallout"><div><small>VİDEO ARŞİVİ</small><h2>Motoryat video koleksiyonu</h2><p>Bilgin Yachts, Numarine, Mengi Yay, Euro Boat ve daha fazla markanın arşivdeki videolarını keşfedin. V2'ye aktarılmayan kayıtlar için mevcut video sayfasını açabilirsiniz.</p></div><a href="https://motoryat.com/videolar" target="_blank" rel="noopener noreferrer">Tüm videoları görüntüle →</a></section>
  </div></main><Footer/></>
}