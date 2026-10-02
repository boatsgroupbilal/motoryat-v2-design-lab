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
      <div><b>Kurumsal Ağ</b><Link href="/magazalar">Mağazalar</Link><Link href="/firmalar">Firmalar</Link><Link href="/marinalar">Marinalar</Link><Link href="/hizmetler">Hizmetler</Link></div>
      <div><b>Medya & Satıcı</b><Link href="/haberler">Haberler</Link><Link href="/magaza-ac">Mağaza Aç</Link><Link href="/ilan-ver">İlan Ver</Link><Link href="/satici/magazam">Satıcı Paneli</Link></div>
    </div>
    <div className="container footerBottom"><span>© Motoryat.com</span><span>Digital Press Group</span></div>
  </footer>
}
