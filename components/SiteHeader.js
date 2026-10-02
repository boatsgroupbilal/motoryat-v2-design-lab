import Link from 'next/link';

export default function SiteHeader(){
  return <>
    <div className="topbar">
      <div className="container topbarInner">
        <span>Türkiye'nin denizcilik platformu</span>
        <span>Dil · Para Birimi · Giriş</span>
      </div>
    </div>
    <header className="header">
      <div className="container headerInner">
        <Link href="/" className="brand"><img src="/motoryat-logo.svg" alt="Motoryat"/></Link>
        <nav className="nav">
          <Link href="/satilik">Satılık</Link>
          <Link href="/kiralik">Kiralık</Link>
          <a href="#">Haberler</a>
          <a href="#">Fiyat Rehberi</a>
          <a href="#">Marinalar</a>
        </nav>
        <div className="headActions">
          <button className="ghost">Giriş</button>
          <button className="gold">İlan Ver</button>
        </div>
      </div>
    </header>
  </>
}