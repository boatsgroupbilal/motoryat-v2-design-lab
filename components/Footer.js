import Link from 'next/link';

const groups=[
 {title:'YAT SATIN AL',links:[['Satılık Yatlar','/satilik'],['Markalar','/markalar'],['Haritada Ara','/haritada-ara'],['Favoriler','/favoriler']]},
 {title:'YAT KİRALA',links:[['Kiralık Yatlar','/kiralik'],['Destinasyonlar','/destinasyonlar'],['Marinalar','/marinalar'],['Yatçılık Hizmetleri','/hizmetler']]},
 {title:'PROFESYONELLER',links:[['Firmalar','/firmalar'],['Mağazalar','/magazalar'],['Markalar','/markalar'],['Tekne & Yat Malzemeleri','/urunler'],['Reklam & PR','/reklam']]},
 {title:'MOTORYAT',links:[['Tekne Tipleri','/tekne-tipleri'],['Haber & Rehber','/haberler'],['Videolar','/videolar'],['Hakkımızda','/hakkimizda'],['İletişim','/iletisim']]}
];
export default function Footer(){return <footer className="dpFooter v2MainFooter">
 <div className="dpWrap v2FooterInner">
  <div className="v2FooterBrand">
   <Link href="/" aria-label="Motoryat.com ana sayfa"><img src="/motoryat-logo-real.png" alt="MOTORYAT.COM"/></Link>
   <p>Denizcilikte keşfet, bağlan ve ticaret yap.</p>
  </div>
  <div className="v2FooterColumns">
   {groups.map(group=><div className="v2FooterGroup" key={group.title}>
    <h3>{group.title}</h3>
    <nav aria-label={group.title}>{group.links.map(([label,href])=><Link key={href+label} href={href}>{label}</Link>)}</nav>
   </div>)}
  </div>
  <div className="v2FooterBottom"><small>© Motoryat.com 2026 · Tüm hakları saklıdır.</small></div>
 </div>
</footer>}
