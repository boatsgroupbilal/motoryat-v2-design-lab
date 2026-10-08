import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {ProductCard,YachtCard} from '../../../components/Card';
import {products,saleListings,charterListings,stores} from '../../../data/content';
import {getStoreProfile} from '../../../data/storeProfiles';
import StoreMiniNav from '../../../components/StoreMiniNav';

function matchesStore(item,store){
  if((item.store_slug||item.sellerSlug)===store.slug) return true;
  const hay=(String(item.title||'')+' '+String(item.meta||'')+' '+String(item.slug||'')).toLocaleLowerCase('tr-TR');
  const key=String(store.name||'').toLocaleLowerCase('tr-TR').split(' ')[0];
  return key?hay.includes(key):false;
}

export default async function Page({params}){
  const {slug}=await params;
  const store=stores.find(x=>x.slug===slug)||stores[0];
  const profile=getStoreProfile(store);

  const saleItems=saleListings.filter(x=>matchesStore(x,store));
  const charterItems=charterListings.filter(x=>matchesStore(x,store));
  const productItems=products.filter(x=>x.store_slug===store.slug || (x.brand && store.name.toLocaleLowerCase('tr-TR').includes(x.brand.toLocaleLowerCase('tr-TR'))));

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

    <StoreMiniNav store={store} active="home"/>


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
