import Link from 'next/link';

const sale=[
 ['Superyacht','/satilik?tip=superyacht'],
 ['Motoryat','/satilik?tip=motoryat'],
 ['Yelkenli','/satilik?tip=yelkenli'],
 ['Katamaran','/satilik?tip=katamaran'],
 ['Tekne','/satilik?tip=tekne']
];
const charter=[
 ['Superyacht','/kiralik?tip=superyacht'],
 ['Motoryat','/kiralik?tip=motoryat'],
 ['Yelkenli','/kiralik?tip=yelkenli'],
 ['Katamaran','/kiralik?tip=katamaran'],
 ['Tekne','/kiralik?tip=tekne']
];
const equipment=[
 ['Motor & Mekanik','/urunler?kategori=motor-mekanik'],
 ['Elektrik & Elektronik','/urunler?kategori=elektrik-elektronik'],
 ['Güverte & Donanım','/urunler?kategori=guverte-donanim'],
 ['Seyir & Haberleşme','/urunler?kategori=seyir-haberlesme'],
 ['Güvenlik','/urunler?kategori=guvenlik'],
 ['Bakım & Temizlik','/urunler?kategori=bakim-temizlik'],
 ['Su Sporları','/urunler?kategori=su-sporlari'],
 ['Tüm Ürünler','/urunler']
];

function Drop({label,href,items,cart=false}){
 return <li className="dpNavDrop"><details>
   <summary>{cart&&<span className="dpCart" aria-hidden="true">🛒</span>}{label}<span className="dpChevron">⌄</span></summary>
   <div className="dpDrop">
     <Link className="dpDropAll" href={href}>{label} ana sayfa</Link>
     {items.map(([name,url])=><Link key={name} href={url}>{name}</Link>)}
   </div>
 </details></li>
}

export default function SiteHeader(){return <>
 <div className="dpUtil"><div className="dpWrap"><div><span>TR · EN</span><span>€ · $ · ₺</span></div><span>Bültene katıl</span></div></div>
 <header className="dpNav"><div className="dpWrap">
   <Link className="dpLogo" href="/"><img src="/motoryat-logo-real.png" alt="Motoryat.com"/></Link>
   <nav aria-label="Ana menü"><ul>
     <Drop label="Satılık" href="/satilik" items={sale}/>
     <Drop label="Kiralık" href="/kiralik" items={charter}/>
     <li><Link href="/yeni-insa">Yeni inşa</Link></li>
     <li><Link href="/firmalar">Rehber</Link></li>
     <li><Link href="/marinalar">Marinalar</Link></li>
     <Drop label="Tekne & Yat Malzemeleri" href="/urunler" items={equipment} cart/>
     <li><Link href="/haberler">Haberler</Link></li>
   </ul></nav>
   <button className="dpSearch" type="button">Ara…</button>
 </div></header>
 </>}