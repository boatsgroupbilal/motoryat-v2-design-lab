import Link from 'next/link';

export default function Footer(){
  return <footer className="syFooter" id="newsletter">
    <div className="syContainer syNewsletter">
      <div><span>MOTORYAT.COM</span><h2>Denizcilik gündemi doğrudan e-postanıza gelsin.</h2></div>
      <form><input type="email" placeholder="E-posta adresiniz"/><button type="button">Kaydol</button></form>
    </div>
    <div className="syContainer syFooterGrid">
      <div className="syFooterBrand"><img src="/motoryat-logo.svg" alt="Motoryat"/><p>Denizcilikte keşfet. Bağlan. Ticaret yap.</p></div>
      <div><b>Faydalı Bağlantılar</b><Link href="/">Ana Sayfa</Link><Link href="/satilik">Satılık</Link><Link href="/kiralik">Kiralık</Link><Link href="/top-100">Top 100</Link></div>
      <div><b>Rehber</b><Link href="/firmalar">Firmalar</Link><Link href="/markalar">Markalar</Link><Link href="/marinalar">Marinalar</Link><Link href="/magazalar">Mağazalar</Link></div>
      <div><b>İçerik</b><Link href="/haberler">Haberler</Link><Link href="/destinasyonlar">Destinasyonlar</Link><Link href="/yasam">Yaşam</Link><Link href="/urunler">Ekipman</Link></div>
      <div><b>Satıcı</b><Link href="/magaza-ac">Mağaza Aç</Link><Link href="/ilan-ver">İlan Ver</Link><Link href="/satici/magazam">Satıcı Paneli</Link><Link href="/giris">Giriş</Link></div>
    </div>
    <div className="syContainer syFooterBottom"><span>© MOTORYAT.COM 2026. Tüm hakları saklıdır.</span><div><a>Gizlilik</a><a>Çerezler</a><a>Kullanım Şartları</a></div></div>
  </footer>
}
