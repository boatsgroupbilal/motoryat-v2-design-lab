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
  ['/belgeseller','BELGESELLER'],
  ['/top-100','TOP 100']
];

export default function SiteHeader(){
  return <header className="syReplicaHeader">
    <div className="syReplicaBrandBand">
      <div className="syReplicaHeaderInner">
        <Link href="/" className="syReplicaWordmark" aria-label="Motoryat ana sayfa">
          <img src="/motoryat-header.svg" alt="Motoryat.com"/>
        </Link>
      </div>
    </div>
    <nav className="syReplicaNav">
      <div className="syReplicaNavInner">
        <Link href="/" className="syReplicaHome" aria-label="Ana sayfa"><span></span></Link>
        {nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}
        <details className="syReplicaMobile">
          <summary aria-label="Menü"><i></i><i></i><i></i></summary>
          <div className="syReplicaMobilePanel">
            {nav.map(([href,label])=><Link key={href} href={href}>{label}<b>›</b></Link>)}
          </div>
        </details>
      </div>
    </nav>
  </header>
}
