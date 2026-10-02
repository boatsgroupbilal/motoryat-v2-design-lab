import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {ProductCard,YachtCard} from '../../../components/Card';
import {products,saleListings,stores} from '../../../data/content';

export default function Page(){
  const store=stores[0];
  return <><SiteHeader/><main>
    <section className="storeHero">
      <img src={store.image} alt={store.name}/>
      <div className="storeHeroShade"></div>
      <div className="container storeHeroInfo">
        <div className="storeHeroLogo"><img src={store.logo} alt=""/></div>
        <div><span>DOĞRULANMIŞ MAĞAZA</span><h1>{store.name}</h1><p>{store.category} · {store.location}</p></div>
        <div className="storeContact"><button className="ghostWhite">Telefon</button><button className="gold">WhatsApp</button></div>
      </div>
    </section>
    <nav className="storeNav"><div className="container"><a className="active">Ana Sayfa</a><a>Satılık</a><a>Modeller</a><a>Projeler</a><a>Ürünler</a><a>Hakkımızda</a><a>Haberler</a><a>İletişim</a></div></nav>
    <section className="section compact"><div className="container storeIntro"><div><span>{store.name.toUpperCase()}</span><h2>{store.category}</h2><p>{store.name}, Motoryat üzerindeki kurumsal vitrininde ürün, ilan, model, proje ve haber içeriklerini tek merkezde sunar.</p></div><aside><b>{store.location}</b><small>Konum</small><b>Doğrulanmış</b><small>Kurumsal profil</small></aside></div></section>
    <section className="section alt"><div className="container"><div className="sectionHead"><div><span>SATILIK</span><h2>Mağaza ilanları</h2></div></div><div className="sqYachtGrid">{saleListings.map((x,i)=><YachtCard key={x.slug} item={x} seller={store.name} brandLogo={store.logo} year={String(2026-(i%3))} refit={String(2021+(i%4))} index={i}/>)}</div></div></section>
    <section className="section"><div className="container"><div className="sectionHead"><div><span>ÜRÜNLER</span><h2>Mağaza ürünleri</h2></div></div><div className="productGrid">{products.map(x=><ProductCard key={x.slug} item={x}/>)}</div></div></section>
  </main><Footer/></>
}
