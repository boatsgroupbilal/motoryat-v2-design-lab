import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

export default function Page(){return <><SiteHeader/><main>
  <section className="utilityHero"><div className="container"><span>İLAN VER</span><h1>İlanınızı doğru alanda yayınlayın.</h1><p>Satılık, kiralık veya ürün içeriğinizi Motoryat üzerinde yayınlamak için içerik türünü seçin.</p></div></section>
  <section className="section"><div className="container"><div className="choiceGrid"><article className="choiceCard"><span>SATILIK</span><h3>Tekne Satış İlanı</h3><p>Yeni, ikinci el, proje veya siparişe özel tekne ilanı oluşturun.</p><a href="/giris">Satılık ilan ver →</a></article><article className="choiceCard"><span>CHARTER</span><h3>Kiralık Yat İlanı</h3><p>Günlük, haftalık veya mürettebatlı charter ilanı oluşturun.</p><a href="/giris">Kiralık ilan ver →</a></article><article className="choiceCard"><span>ÜRÜNLER</span><h3>Ekipman & Parça</h3><p>Mağazanızdaki tekne ve yat ekipmanlarını yayınlayın.</p><a href="/magaza-ac">Mağaza aç →</a></article></div></div></section>
</main><Footer/></>}
