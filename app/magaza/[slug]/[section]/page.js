import SiteHeader from '../../../../components/SiteHeader';
import Footer from '../../../../components/Footer';
import StoreMiniNav from '../../../../components/StoreMiniNav';
import {YachtCard,ProductCard} from '../../../../components/Card';
import {stores,saleListings,charterListings,products} from '../../../../data/content';
import {getStoreProfile} from '../../../../data/storeProfiles';

function matchesStore(item,store){
  const hay=((item.title||item.name||'')+' '+(item.meta||'')+' '+(item.slug||'')+' '+(item.brand||'')).toLowerCase();
  const words=store.name.toLowerCase().split(' ').filter(x=>x.length>2);
  return words.some(w=>hay.includes(w));
}

const labels={
  satilik:['SATILIK','Satılık İlanlar'],
  kiralik:['KİRALIK','Kiralık İlanlar'],
  modeller:['MODELLER','Modeller'],
  projeler:['PROJELER','Projeler'],
  urunler:['ÜRÜNLER','Ürünler'],
  hizmetler:['HİZMETLER','Hizmetler'],
  videolar:['VİDEOLAR','Videolar'],
  haberler:['HABERLER','Haberler'],
  iletisim:['İLETİŞİM','İletişim']
};

export default async function Page({params}){
  const {slug,section}=await params;
  const store=stores.find(x=>x.slug===slug)||stores[0];
  const profile=getStoreProfile(store);
  const saleItems=saleListings.filter(x=>matchesStore(x,store));
  const charterItems=charterListings.filter(x=>matchesStore(x,store));
  const productItems=products.filter(x=>matchesStore(x,store));
  const [eyebrow,title]=labels[section]||['MAĞAZA',store.name];

  let body=null;
  if(section==='satilik') body=<div className="sqYachtGrid">{saleItems.length?saleItems.map((x,i)=><YachtCard key={x.slug} item={x} type="sale" seller={store.name} brandLogo={store.logo} year={String(2026-(i%3))} refit="—" index={i}/>):<div className="storeMiniEmpty">Bu mağazada şu anda yayınlanan satılık ilan bulunmuyor.</div>}</div>;
  else if(section==='kiralik') body=<div className="sqYachtGrid">{charterItems.length?charterItems.map((x,i)=><YachtCard key={x.slug} item={x} type="charter" seller={store.name} brandLogo={store.logo} year={String(2024-(i%2))} refit="—" index={i}/>):<div className="storeMiniEmpty">Bu mağazada şu anda yayınlanan kiralık ilan bulunmuyor.</div>}</div>;
  else if(section==='urunler') body=<div className="productGrid">{productItems.length?productItems.map(x=><ProductCard key={x.slug} item={x}/>):<div className="storeMiniEmpty">Bu mağazada şu anda yayınlanan ürün bulunmuyor.</div>}</div>;
  else if(section==='hizmetler') body=<div className="storeMiniServiceGrid">{profile.services.map(x=><article key={x}><small>HİZMET</small><h3>{x}</h3><p>{store.name} tarafından sunulan kurumsal hizmet.</p></article>)}</div>;
  else if(section==='iletisim') body=<div className="storeMiniContactPage"><div><small>MAĞAZA</small><h2>{store.name}</h2><p>{store.location}</p></div><div className="storeMiniContactCards"><a href="#">Telefon</a><a href="#">WhatsApp</a><a href="#">E-posta</a></div></div>;
  else body=<div className="storeMiniEmpty">{title} içerikleri mağaza tarafından eklendiğinde burada yayınlanacak.</div>;

  return <><SiteHeader/><main className="storeMiniSite storeMiniSectionPage">
    <section className="storeMiniSectionHero">
      <img src={store.image} alt={store.name}/><div></div>
      <div className="container"><span>{eyebrow}</span><h1>{store.name}</h1><p>{title}</p></div>
    </section>
    <StoreMiniNav store={store} active={section}/>
    <section className="storeMiniSectionContent"><div className="container">
      <div className="storeMiniSectionHead"><span>{eyebrow}</span><h2>{title}</h2></div>
      {body}
    </div></section>
  </main><Footer/></>
}