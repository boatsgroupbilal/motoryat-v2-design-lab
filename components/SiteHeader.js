import Link from 'next/link';

export default function SiteHeader(){
  return <>
    <div className="topbar">
      <div className="container topbarInner">
        <span>Türkiye'nin denizcilik platformu</span>
        <div className="topbarLinks">
          <a href="#">TR</a><a href="#">₺</a><a href="#">€</a><a href="#">$</a>
          <Link href="/magazalar">Mağazalar</Link>
          <a href="#">Giriş</a>
        </div>
      </div>
    </div>
    <header className="header">
      <div className="container headerInner">
        <Link href="/" className="brand" aria-label="Motoryat ana sayfa">
          <img src="/motoryat-logo.svg" alt="Motoryat"/>
        </Link>
        <nav className="nav" aria-label="Ana menü">
          <Link href="/satilik">Satılık</Link>
          <Link href="/kiralik">Kiralık</Link>
          <Link href="/urunler">Tekne & Yat Malzemeleri</Link>
          <Link href="/markalar">Markalar</Link>
          <Link href="/marinalar">Marinalar</Link>
          <Link href="/haberler">Haberler</Link>
        </nav>
        <div className="headActions">
          <a className="headerLogin" href="#">Giriş</a>
          <button className="gold">İlan Ver</button>
        </div>
      </div>
    </header>
  </>
}
