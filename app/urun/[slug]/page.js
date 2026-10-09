import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {ProductCard} from '../../../components/Card';
import {products} from '../../../data/content';
import Ad300 from '../../../components/Ad300';

export default async function Page({params}){
  const {slug}=await params;
  const item=products.find(x=>x.slug===slug)||products[0];
  return <><SiteHeader/><main>
    <div className="container detailCrumb">Ana sayfa <span>›</span> Ürünler <span>›</span> {item.name}</div>
    <section className="container productDetail">
      <div className="productDetailMedia"><img src={item.image} alt={item.name}/><div className="productThumb"><img src={item.image} alt=""/><img src="/product-block.webp" alt=""/></div></div>
      <div className="productDetailInfo"><span>TEKNE & YAT MALZEMELERİ</span><h1>{item.name}</h1><p>{item.brand} · {item.sku}</p><div className="productPrice">Fiyat Sorunuz</div><div className="productMeta"><div><small>MARKA</small><b>{item.brand}</b></div><div><small>ÜRÜN KODU</small><b>{item.sku}</b></div><div><small>DURUM</small><b>Yeni</b></div></div><button className="offerBtn">Teklif İste</button><button className="whatsappBtn">WhatsApp ile Sor</button><a className="sellerMini" href="/magaza/admiral-marine-equipment"><img src="/motoryat-logo.svg" alt=""/><div><small>SATICI</small><b>Admiral Marine Equipment</b></div><span>→</span></a><Ad300/></div>
    </section>
    <section className="section alt"><div className="container detailText narrow"><h2>Ürün açıklaması</h2><p>Teknik özellik, uyumluluk, kullanım alanı ve stok bilgileri bu bölümde yer alır. Canlı mağaza verisi bağlandığında ürün özellikleri ve fiyat bilgileri doğrudan kaynaktan gösterilir.</p></div></section>
    <section className="section relatedProductCards"><div className="container"><div className="sectionHead"><div><span>BENZER ÜRÜNLER</span><h2>Aynı mağazadan</h2></div></div><div className="productGrid">{products.map(x=><ProductCard key={x.slug} item={x}/>)}</div></div></section>
  </main><Footer/></>
}
