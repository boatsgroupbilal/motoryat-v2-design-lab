import Link from 'next/link';

export default function Footer(){
  return <footer>
    <div className="container footerGrid">
      <div className="footerBrand">
        <img className="footerLogo" src="/motoryat-logo.svg" alt="Motoryat"/>
        <p>Denizcilikte keşfet. Bağlan. Ticaret yap.</p>
        <small>Satılık, kiralık, ekipman, marka, marina ve denizcilik profesyonelleri tek platformda.</small>
      </div>
      <div><b>Keşfet</b><Link href="/satilik">Satılık</Link><Link href="/kiralik">Kiralık</Link><Link href="/urunler">Ürünler</Link><Link href="/markalar">Markalar</Link></div>
      <div><b>Kurumsal Ağ</b><Link href="/magazalar">Mağazalar</Link><a href="#">Firmalar</a><Link href="/marinalar">Marinalar</Link><a href="#">Hizmetler</a></div>
      <div><b>Medya & Satıcı</b><Link href="/haberler">Haberler</Link><a href="#">Mağaza Aç</a><a href="#">İlan Ver</a><a href="#">Satıcı Paneli</a></div>
    </div>
    <div className="container footerBottom"><span>© Motoryat.com</span><span>Digital Press Group</span></div>
  </footer>
}
