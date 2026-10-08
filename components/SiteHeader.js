'use client';
import Link from 'next/link';
import {useState} from 'react';

const sale=[
 ['Süperyat','/satilik/superyacht'],
 ['Motoryat','/satilik/motoryat'],
 ['Yelkenli','/satilik/yelkenli'],
 ['Katamaran','/satilik/katamaran'],
 ['Gulet','/satilik/gulet'],
 ['Tekne','/satilik/tekne']
];

const charter=[
 ['Süperyat','/kiralik/superyacht'],
 ['Motoryat','/kiralik/motoryat'],
 ['Yelkenli','/kiralik/yelkenli'],
 ['Katamaran','/kiralik/katamaran'],
 ['Gulet','/kiralik/gulet'],
 ['Trawler','/kiralik/trawler']
];

const equipment=[
 ['Motor & Mekanik','/urunler/motor-mekanik'],
 ['Elektrik','/urunler/elektrik'],
 ['Güverte','/urunler/guverte'],
 ['Elektronik & Navigasyon','/urunler/elektronik-navigasyon'],
 ['Güvenlik','/urunler/guvenlik'],
 ['Boya & Bakım','/urunler/boya-bakim'],
 ['Su Sporları','/urunler/su-sporlari']
];

const news=[
 ['SON HABERLER','/haberler'],
 ['SÜPERYAT','/haberler/superyat'],
 ['YENİ İNŞA & LANSMANLAR','/haberler/yeni-insa-lansmanlar'],
 ['TEKNE TESTLERİ & İNCELEMELER','/haberler/tekne-testleri-incelemeler'],
 ['TASARIM & REFIT','/haberler/tasarim-refit'],
 ['CHARTER','/haberler/charter'],
 ['MARKALAR','/haberler/markalar'],
 ['ETKİNLİKLER & FUARLAR','/haberler/etkinlikler-fuarlar']
];

function Mega({label,href,items,cart=false}){
 return <li className="dpMega">
   <Link className="dpMegaMain" href={href}>
     {cart&&<span className="dpCart" aria-hidden="true">🛒</span>}
     {label}<span className="dpChevron">⌄</span>
   </Link>
   <div className="dpMegaPanel" aria-label={label+' alt kategorileri'}>
     <div className="dpMegaRow">
       {items.map(([name,url])=><Link key={name} href={url}>{name}</Link>)}
     </div>
   </div>
 </li>
}

function MobileGroup({id,label,href,items,open,setOpen,onNavigate}){
 const active=open===id;
 return <div className="dpMobileGroup">
   <div className="dpMobileGroupHead">
     <Link href={href} onClick={onNavigate}>{label}</Link>
     <button type="button" aria-expanded={active} onClick={()=>setOpen(active?null:id)}>{active?'−':'+'}</button>
   </div>
   {active&&<div className="dpMobileSub">
     {items.map(([name,url])=><Link key={name} href={url} onClick={onNavigate}>{name}</Link>)}
   </div>}
 </div>
}

function MobileLink({label,href,onNavigate}){
 return <div className="dpMobileGroup">
   <div className="dpMobileGroupHead">
     <Link href={href} onClick={onNavigate}>{label}</Link>
   </div>
 </div>
}

function MenuIcon(){return <span className="dpHambIcon" aria-hidden="true"><i></i><i></i><i></i></span>}
function SearchIcon(){return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="21" r="11"></circle><path d="M29.5 29.5 39 39"></path></svg>}

export default function SiteHeader(){
 const [mobileOpen,setMobileOpen]=useState(false);
 const [mobileGroup,setMobileGroup]=useState(null);
 const closeMobile=()=>{setMobileOpen(false);setMobileGroup(null)};
 return <>
   <div className="dpDesktopHeader">
     <div className="dpUtil"><div className="dpWrap"><div><span>TR · EN</span><span>€ · $ · ₺</span></div><span>Bültene katıl</span></div></div>
     <header className="dpNav"><div className="dpWrap">
       <Link className="dpLogo" href="/"><img src="/motoryat-logo-real.png" alt="Motoryat.com"/></Link>
       <nav aria-label="Ana menü"><ul>
         <Mega label="Satılık" href="/satilik" items={sale}/>
         <Mega label="Kiralık" href="/kiralik" items={charter}/>
         <Mega label="Tekne & Yat Malzemeleri" href="/urunler" items={equipment} cart/>
         <Mega label="Haberler" href="/haberler" items={news}/>
         <li><Link href="/ilan-ver">İlan Ver</Link></li>
       </ul></nav>
       <Link className="dpSearch" href="/arama">Ara...</Link>
     </div></header>
   </div>

   <header className="dpMobileHeader">
     <button className="dpMobileMenuBtn" type="button" aria-label={mobileOpen?'Menüyü kapat':'Menüyü aç'} aria-expanded={mobileOpen} onClick={()=>{setMobileOpen(v=>!v);setMobileGroup(null)}}>
       {mobileOpen?<span className="dpCloseIcon" aria-hidden="true">×</span>:<MenuIcon/>}
     </button>
     <Link className="dpMobileLogo" href="/" onClick={closeMobile}><img src="/motoryat-logo-real.png" alt="Motoryat.com"/></Link>
     <Link className="dpMobileSearchBtn" href="/arama" aria-label="Ara" onClick={closeMobile}><SearchIcon/></Link>
   </header>

   {mobileOpen&&<div className="dpMobileDrawer">
     <nav aria-label="Mobil menü">
       <MobileGroup id="sale" label="Satılık" href="/satilik" items={sale} open={mobileGroup} setOpen={setMobileGroup} onNavigate={closeMobile}/>
       <MobileGroup id="charter" label="Kiralık" href="/kiralik" items={charter} open={mobileGroup} setOpen={setMobileGroup} onNavigate={closeMobile}/>
       <MobileGroup id="equipment" label="Tekne & Yat Malzemeleri" href="/urunler" items={equipment} open={mobileGroup} setOpen={setMobileGroup} onNavigate={closeMobile}/>
       <MobileGroup id="news" label="Haberler" href="/haberler" items={news} open={mobileGroup} setOpen={setMobileGroup} onNavigate={closeMobile}/>
       <MobileLink label="İlan Ver" href="/ilan-ver" onNavigate={closeMobile}/>
     </nav>
     <div className="dpMobileDrawerFoot">
       <Link href="/magazalar" onClick={closeMobile}>Mağazalar</Link>
       <Link href="/firmalar" onClick={closeMobile}>Firmalar</Link>
       <Link href="/marinalar" onClick={closeMobile}>Marinalar</Link>
     </div>
   </div>}
 </>;
}