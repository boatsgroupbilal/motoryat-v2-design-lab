import Link from 'next/link';

const sale=[
 ['Superyacht','/satilik?tip=superyacht'],
 ['Motoryat','/satilik?tip=motoryat'],
 ['Yelkenli','/satilik?tip=yelkenli'],
 ['Katamaran','/satilik?tip=katamaran'],
 ['Gulet','/satilik?tip=gulet'],
 ['Tekne','/satilik?tip=tekne'],
 ['Yeni İnşa','/yeni-insa']
];

const charter=[
 ['Superyacht','/kiralik?tip=superyacht'],
 ['Motoryat','/kiralik?tip=motoryat'],
 ['Yelkenli','/kiralik?tip=yelkenli'],
 ['Katamaran','/kiralik?tip=katamaran'],
 ['Gulet','/kiralik?tip=gulet'],
 ['Tekne','/kiralik?tip=tekne']
];

const equipment=[
 ['Motor & Mekanik','/urunler?kategori=motor-mekanik'],
 ['Elektrik & Elektronik','/urunler?kategori=elektrik-elektronik'],
 ['Güverte & Donanım','/urunler?kategori=guverte-donanim'],
 ['Seyir & Haberleşme','/urunler?kategori=seyir-haberlesme'],
 ['Güvenlik','/urunler?kategori=guvenlik'],
 ['Bakım & Temizlik','/urunler?kategori=bakim-temizlik'],
 ['Su Sporları','/urunler?kategori=su-sporlari']
];

const news=[
 ['SON HABERLER','/haberler'],
 ['SÜPERYAT','/haberler/superyat'],
 ['YENİ İNŞA','/haberler/yeni-insa'],
 ['TEKNE TESTLERİ & İNCELEMELER','/haberler/tekne-testleri-incelemeler'],
 ['MARKALAR & FİRMALAR','/haberler/markalar-firmalar'],
 ['CHARTER','/haberler/charter'],
 ['EKİPMAN & TEKNOLOJİ','/haberler/ekipman-teknoloji'],
 ['MARİNALAR','/haberler/marinalar'],
 ['SEKTÖR','/haberler/sektor'],
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

export default function SiteHeader(){return <>
 <div className="dpUtil"><div className="dpWrap"><div><span>TR · EN</span><span>€ · $ · ₺</span></div><span>Bültene katıl</span></div></div>
 <header className="dpNav"><div className="dpWrap">
   <Link className="dpLogo" href="/"><img src="/motoryat-logo-real.png" alt="Motoryat.com"/></Link>
   <nav aria-label="Ana menü"><ul>
     <Mega label="Satılık" href="/satilik" items={sale}/>
     <Mega label="Kiralık" href="/kiralik" items={charter}/>
     <Mega label="Tekne & Yat Malzemeleri" href="/urunler" items={equipment} cart/>
     <Mega label="Haberler" href="/haberler" items={news}/>
   </ul></nav>
   <button className="dpSearch" type="button">Ara…</button>
 </div></header>
 </>}