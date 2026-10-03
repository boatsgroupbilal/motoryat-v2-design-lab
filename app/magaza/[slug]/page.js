import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {ProductCard,YachtCard} from '../../../components/Card';
import {products,saleListings,charterListings,stores} from '../../../data/content';
import {getStoreProfile} from '../../../data/storeProfiles';

function matchesStore(item,store){
  const hay=(item.title+' '+item.meta+' '+item.slug).toLowerCase();
  const key=store.name.toLowerCase().split(' ')[0];
  return hay.includes(key);
}

export default async function Page({params}){
  const {slug}=await params;
  const store=stores.find(x=>x.slug===slug)||stores[0];
  const profile=getStoreProfile(store);

  const saleItems=saleListings.filter(x=>matchesStore(x,store));
  const charterItems=charterListings.filter(x=>matchesStore(x,store));
  const productItems=products.filter(x=>x.brand && store.name.toLowerCase().includes(x.brand.toLowerCase()));

  const hasSale=saleItems.length>0;
  const hasCharter=charterItems.length>0;
  const hasProducts=productItems.length>0;

  return <><SiteHeader/><main className="storeMiniSite">
    <section className="storeMiniHero">
      <img className="storeMiniCover" src={store.image} alt={store.name}/>
      <div className="storeMiniShade"></div>
      <div className="container storeMiniHeroInner">
        <div className="storeMiniLogo"><img src={store.logo} alt={store.name}/></div>
        <div className="storeMiniHeroText">
          <span>{hasSale?'SATILIK':''}{hasSale&&hasCharter?' · ':''}{hasCharter?'KİRALIK':''}</span>
          <h1>{store.name}</h1>
          <p>{store.category} · {store.location}</p>
        </div>
        <div className="storeMiniContact">
          <a href="#iletisim" aria-label="Telefon">☎</a>
          <a href="#iletisim" aria-label="E-posta">✉</a>
        </div>
      </div>
      <a className="storeMiniMore" href={'/magaza/'+store.slug+'/hakkimizda'}>
        <span>DAHA FAZLA BİLGİ</span><b>›</b>
      </a>
    </section>

    <nav className="storeMiniNav">
      <div className="container">
        <a className="active" href={'/magaza/'+store.slug}>Ana Sayfa</a>
        {hasSale&&<a href="#satilik">Satılık</a>}
        {hasCharter&&<a href="#kiralik">Kiralık</a>}
        {hasProducts&&<a href="#urunler">Ürünler</a>}
        <a href={'/magaza/'+store.slug+'/hakkimizda'}>Hakkımızda</a>
        <a href="#iletisim">İletişim</a>
      </div>
    </nav>

    <section className="storeMiniIntro">
      <div className="container storeMiniIntroGrid">
        <div>
          <span>MAĞAZA ANA SAYFASI</span>
          <h2>{store.name}</h2>
          <p>{profile.overview}</p>
        </div>
        <aside id="iletisim">
          <small>KONUM</small><b>{store.location}</b>
          <small>PROFİL</small><b>Kurumsal Mağaza</b>
          <a href={'/magaza/'+store.slug+'/hakkimizda'}>Kurumsal profili görüntüle →</a>
        </aside>
      </div>
    </section>

    {hasSale&&<section className="section alt" id="satilik"><div className="container">
      <div className="sectionHead"><div><span>SATILIK</span><h2>{store.name} satılık ilanları</h2></div></div>
      <div className="sqYachtGrid">{saleItems.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={store.name} brandLogo={store.logo} year={String(2026-(i%3))} refit={String(2021+(i%4))} index={i}/>)}</div>
    </div></section>}

    {hasCharter&&<section className="section alt" id="kiralik"><div className="container">
      <div className="sectionHead"><div><span>KİRALIK</span><h2>{store.name} charter ilanları</h2></div></div>
      <div className="sqYachtGrid">{charterItems.map((x,i)=><YachtCard key={x.slug} item={x} type="charter" seller={store.name} brandLogo={store.logo} year={String(2024-(i%2))} refit="—" index={i}/>)}</div>
    </div></section>}

    {hasProducts&&<section className="section" id="urunler"><div className="container">
      <div className="sectionHead"><div><span>ÜRÜNLER</span><h2>{store.name} ürünleri</h2></div></div>
      <div className="productGrid">{productItems.map(x=><ProductCard key={x.slug} item={x}/>)}</div>
    </div></section>}
  </main><Footer/></>
}
