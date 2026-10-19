import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import {saleListings,charterListings,products} from '../data/content';
import {YachtCard,ProductCard} from '../components/Card';

export default function Home(){return <><SiteHeader/><main className="homePage">
 <section className="dpHero"><video className="dpHeroPhoto" autoPlay muted loop playsInline preload="metadata" poster="https://motoryat.com/media/lady-luna/hero-poster.webp" aria-label="Lady Luna 32M Motor Yacht"><source src="https://motoryat.com/videos/home/lady-luna-home.mp4" type="video/mp4"/></video><div className="dpHeroShade"></div><div className="dpWrap"><small>LADY LUNA · 32M MOTOR YACHT</small><h1>Denizcilikte keşfet, bağlan ve ticaret yap.</h1><a className="dpBtn" href="/kiralik">Kiralık yatları keşfet</a></div><div className="dpMobileHeroQuote"><b>“</b><p>Denizcilikte keşfet, bağlan ve ticaret yap.</p><span>MOTORYAT.COM</span></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 {[
   {id:'satilik',title:'Öne Çıkan Satılık Yatlar',href:'/satilik',list:saleListings,type:'sale'},
   {id:'kiralik',title:'Öne Çıkan Kiralık Yatlar',href:'/kiralik',list:charterListings,type:'charter'}
  ].map(group=><section className="dpSection dpListingsSection" id={group.id} key={group.id}><div className="dpWrap">
   <div className="dpHead"><h2>{group.title}</h2><a href={group.href}>Tüm ilanlar →</a></div>
   <div className="sqYachtGrid homeYachtGrid homeEightGrid">{group.list.slice(0,16).map((x,i)=><YachtCard key={x.slug||i} item={x} type={group.type} seller={x.seller||x.store_name||''} year={x.year||''} index={i}/>)}</div>
  </div></section>)}

 <section id="pazaryeri" className="dpSection homeMarketplaceSection"><div className="dpWrap">
  <div className="dpHead"><h2>Malzeme Pazaryeri Ürünleri</h2><a href="/urunler">Tüm ürünler →</a></div>
  {products.some(x=>x.image)?<div className="productGrid homeMarketProductGrid homeEightGrid">{products.filter(x=>x.image).slice(0,16).map((x,i)=><ProductCard key={x.slug||i} item={x}/>)}</div>:<p>Henüz yayınlanmış ürün bulunmuyor.</p>}
 </div></section>

 <section id="rehber" className="dpSection"><div className="dpWrap"><div className="dpHead"><h2>Sektör rehberi</h2></div><div className="dpDir"><a className="dpCard" href="/firmalar"><h3>Tersaneler ve inşa firmaları</h3><p className="dpM">Firma profilleri, tamamlanan projeler ve iletişim bilgileri.</p></a><a className="dpCard" href="/firmalar"><h3>Brokerlar ve acenteler</h3><p className="dpM">Satış ve kiralama danışmanlarını ülkeye göre bulun.</p></a></div></div></section>
 </main><Footer/></>}
