import Link from 'next/link';

export default function SiteHeader(){
  const nav=[
    ['/satilik','Satılık'],
    ['/kiralik','Kiralık'],
    ['/urunler','Tekne & Yat Malzemeleri'],
    ['/markalar','Markalar'],
    ['/marinalar','Marinalar'],
    ['/haberler','Haberler']
  ];
  return <>
    <div className="topbar">
      <div className="container topbarInner">
        <span>Türkiye'nin denizcilik platformu</span>
        <div className="topbarLinks">
          <span>TR</span><span>₺</span><span>€</span><span>$</span>
          <Link href="/magazalar">Mağazalar</Link>
          <Link href="/giris">Giriş</Link>
        </div>
      </div>
    </div>
    <header className="header">
      <div className="container headerInner">
        <Link href="/" className="brand" aria-label="Motoryat ana sayfa">
          <img src="/motoryat-logo.svg" alt="Motoryat"/>
        </Link>
        <nav className="nav" aria-label="Ana menü">
          {nav.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}
        </nav>
        <div className="headActions">
          <Link className="headerLogin" href="/giris">Giriş</Link>
          <Link className="gold headerCta" href="/ilan-ver">İlan Ver</Link>
          <details className="mobileMenu">
            <summary aria-label="Menüyü aç"><i></i><i></i><i></i></summary>
            <div className="mobileMenuPanel">
              <div className="mobileMenuTop"><img src="/motoryat-logo.svg" alt="Motoryat"/><span>MENÜ</span></div>
              {nav.map(([href,label])=><Link href={href} key={href}>{label}<span>→</span></Link>)}
              <Link href="/magazalar">Mağazalar<span>→</span></Link>
              <Link href="/firmalar">Firmalar<span>→</span></Link>
              <Link href="/hizmetler">Hizmetler<span>→</span></Link>
              <div className="mobileMenuActions"><Link href="/giris">Giriş</Link><Link href="/ilan-ver">İlan Ver</Link></div>
            </div>
          </details>
        </div>
      </div>
    </header>
  </>
}
