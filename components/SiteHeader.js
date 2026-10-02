import Link from 'next/link';
export default function SiteHeader(){return <>
<div className="topbar"><div className="container topbarInner"><span>Türkiye'nin denizcilik platformu</span><span>Firmalar · Marinalar · Haberler</span></div></div>
<header className="header"><div className="container headerInner">
<Link href="/" className="brand"><img src="/motoryat-logo.webp" alt="Motoryat"/></Link>
<nav className="nav"><Link href="/satilik">Satılık</Link><Link href="/kiralik">Kiralık</Link><Link href="/urunler">Tekne & Yat Malzemeleri</Link><Link href="/magazalar">Mağazalar</Link><a href="#">Markalar</a><a href="#">Haberler</a></nav>
<div className="headActions"><button className="ghost">Giriş</button><button className="gold">İlan Ver</button></div>
</div></header></>}
