import Link from 'next/link';

const nav = [
  {label:'Satılık',href:'/satilik',sub:[['Yat Arama','/satilik'],['Öne Çıkan İlanlar','/satilik']]},
  {label:'Kiralık',href:'/kiralik',sub:[['Charter Arama','/kiralik'],['Destinasyonlar','/destinasyonlar']]},
  {label:'Yeni İnşa',href:'/yeni-insa',sub:[['Yat Konseptleri','/yeni-insa'],['Yat Modelleri','/markalar'],['Özel Projeler','/yeni-insa']]},
  {label:'Rehber',href:'/firmalar',sub:[['Brokerlar','/firmalar'],['Üreticiler','/markalar'],['Tersaneler','/firmalar'],['Tasarımcılar','/firmalar']]},
  {label:'Filo',href:'/filo'},
  {label:'Marinalar',href:'/marinalar'},
  {label:'Destinasyonlar',href:'/destinasyonlar'},
  {label:'Yaşam',href:'/yasam'},
  {label:'Haberler',href:'/haberler'},
  {label:'Top 100',href:'/top-100'}
];

export default function SiteHeader(){
  return <>
    <div className="syUtility">
      <div className="syContainer syUtilityInner">
        <div className="syUtilityLinks"><a href="#newsletter">Bültene Kaydol</a><Link href="/haberler">Detaylı Yayınları Oku</Link></div>
        <div className="syUnits"><span>₺</span><span>€</span><span>$</span><i></i><span className="active">m</span><span>ft</span></div>
      </div>
    </div>

    <header className="syHeader">
      <div className="syContainer syMasthead">
        <Link href="/" className="syBrand"><img src="/motoryat-logo.svg" alt="Motoryat"/></Link>

        <form className="syFastfind">
          <label>Hızlı Bul</label>
          <div><input placeholder="Her şeyi hızlıca bulun..."/><button type="button" aria-label="Ara">⌕</button></div>
        </form>

        <div className="syHeaderActions">
          <Link href="/giris">Giriş</Link>
          <Link className="syListCta" href="/ilan-ver">İlan Ver</Link>
          <details className="syMobileMenu">
            <summary aria-label="Menü"><span></span><span></span><span></span></summary>
            <div className="syMobilePanel">
              {nav.map(item=><Link key={item.label} href={item.href}>{item.label}<b>›</b></Link>)}
              <Link href="/urunler">Tekne & Yat Malzemeleri<b>›</b></Link>
              <Link href="/magazalar">Mağazalar<b>›</b></Link>
            </div>
          </details>
        </div>
      </div>

      <nav className="syNav">
        <div className="syContainer syNavInner">
          {nav.map(item=>item.sub?
            <details className="syNavDrop" key={item.label}>
              <summary>{item.label}</summary>
              <div className="syDropPanel">{item.sub.map(([label,href])=><Link href={href} key={label}>{label}</Link>)}</div>
            </details>
            :<Link key={item.label} href={item.href}>{item.label}</Link>
          )}
        </div>
      </nav>
    </header>
  </>
}
