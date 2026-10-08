import {notFound} from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {EquipmentProductCard} from '../../../components/Card';
import {products} from '../../../data/content';
import {productCategoryLabels} from '../../../data/category-config';

export default async function Page({params}){
  const {category}=await params;
  const label=productCategoryLabels[category];
  if(!label) notFound();
  const items=products.filter(x=>x.category_slug===category);

  return <><SiteHeader/><main className="equipmentMarketplace">
    <section className="equipmentHero categoryHeroStd">
      <img className="equipmentHeroImage categoryHeroStdImage" src="/product-boom.webp" alt={label}/>
      <div className="equipmentHeroShade categoryHeroStdShade"></div>
      <div className="container equipmentHeroInner categoryHeroStdInner"><div className="equipmentHeroCopy categoryHeroStdContent">
        <span>TEKNE &amp; YAT MALZEMELERİ</span><h1>{label}</h1><p>{label} kategorisindeki ürünleri keşfedin.</p>
      </div></div>
    </section>
    <nav className="luxCategoryChips" aria-label="Ürün kategorileri"><div className="container">
      <a href="/urunler">Tümü</a>
      {Object.entries(productCategoryLabels).map(([slug,name])=><a className={slug===category?'active':''} href={'/urunler/'+slug} key={slug}>{name}</a>)}
    </div></nav>
    <section className="section"><div className="container">
      <div className="equipmentResultsBar"><div><b>{items.length} ürün bulundu</b></div></div>
      {items.length?<div className="equipmentProductGrid">{items.map((x)=><EquipmentProductCard item={x} key={x.slug}/>)}</div>:<div className="categoryEmptyState">Bu kategoride henüz ürün yok.</div>}
    </div></section>
  </main><Footer/></>;
}
