import Link from 'next/link';

const nav=[
  ['/satilik','SATILIK'],
  ['/kiralik','KİRALIK'],
  ['/yeni-insa','YENİ İNŞA'],
  ['/firmalar','REHBER'],
  ['/filo','FİLO'],
  ['/marinalar','MARİNALAR'],
  ['/destinasyonlar','DESTİNASYONLAR'],
  ['/yasam','YAŞAM'],
  ['/haberler','HABERLER'],
  ['/top-100','TOP 100']
];

export default function SiteHeader(){
  return <header className="stdHeader">
    <div className="stdTopbar">
      <div className="stdContainer stdTopbarInner">
        <div><span>TR</span><span>Türkiye</span></div>
        <div><span>₺</span><span>€</span><span>$</span><i></i><span className="active">m</span><span>ft</span></div>
      </div>
    </div>
    <div className="stdNav">
      <div className="stdContainer stdNavInner">
        <Link href="/" className="stdLogo"><img src="/motoryat-header.svg" alt="Motoryat.com"/></Link>
        <nav className="stdDesktopNav">{nav.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</nav>
        <details className="stdMobileMenu">
          <summary aria-label="Menü"><i></i><i></i><i></i></summary>
          <div>{nav.map(([href,label])=><Link href={href} key={href}>{label}<b>›</b></Link>)}</div>
        </details>
      </div>
    </div>
  </header>
}
