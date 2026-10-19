import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
import {saleListings,charterListings,products} from '../data/content';
import {YachtCard,ProductCard} from '../components/Card';

export default function Home(){return <><SiteHeader/><main className="homePage">
 <section className="dpHero"><video className="dpHeroPhoto" autoPlay muted loop playsInline preload="metadata" poster="https://motoryat.com/media/lady-luna/hero-poster.webp" aria-label="Lady Luna 32M Motor Yacht"><source src="https://motoryat.com/videos/home/lady-luna-home.mp4" type="video/mp4"/></video><div className="dpHeroShade"></div><div className="dpWrap"><small>LADY LUNA · 32M MOTOR YACHT</small><h1>Denizcilikte keşfet, bağlan ve ticaret yap.</h1><a className="dpBtn" href="/kiralik">Kiralık yatları keşfet</a></div><div className="dpMobileHeroQuote"><b>“</b><p>Denizcilikte keşfet, bağlan ve ticaret yap.</p><span>MOTORYAT.COM</span></div><div className="dpDots" aria-hidden="true"><i className="on"></i><i></i><i></i><i></i></div></section>

 {[
   {id:'satilik',title:'Satılık Yatlar',eyebrow:'SATILIK YATLAR',href:'/satilik',list:saleListings,type:'sale'},
   {id:'kiralik',title:'Kiralık Yatlar',eyebrow:'KİRALIK YATLAR',href:'/kiralik',list:charterListings,type:'charter'}
  ].map(group=><section className="dpSection dpListingsSection" id={group.id} key={group.id}><div className="dpWrap">
   <div className="dpHead"><div className="homeSectionHeading"><small>{group.eyebrow}</small><h2>{group.title}</h2></div><a href={group.href}>Tümünü Gör →</a></div>
   <div className="sqYachtGrid homeYachtGrid homeEightGrid">{group.list.slice(0,16).map((x,i)=><YachtCard key={x.slug||i} item={x} type={group.type} seller={x.seller||x.store_name||''} year={x.year||''} index={i}/>)}</div>
  </div></section>)}

 <section id="pazaryeri" className="dpSection homeMarketplaceSection"><div className="dpWrap">
  <div className="dpHead"><div className="homeSectionHeading"><small>TEKNE & YAT MALZEMELERİ</small><h2>Tekne & Yat Malzemeleri</h2></div><a href="/urunler">Tümünü Gör →</a></div>
  {products.some(x=>x.image)?<div className="productGrid homeMarketProductGrid homeEightGrid">{products.filter(x=>x.image).slice(0,16).map((x,i)=><ProductCard key={x.slug||i} item={x}/>)}</div>:<p>Henüz yayınlanmış ürün bulunmuyor.</p>}
 </div></section>

 <section id="hizmetler" className="dpSection homeDiscovery"><div className="dpWrap">
  <div className="dpHead"><div className="homeSectionHeading"><small>YATÇILIK HİZMETLERİ</small><h2>Profesyonel Hizmetler</h2></div><a href="/hizmetler">Tümünü Gör →</a></div>
  <div className="homeDiscoveryGrid">{[
   {title:'Teknik Servis',desc:'Motor, elektrik ve elektronik',image:'/store-admiral.webp'},
   {title:'Bakım & Refit',desc:'Bakım, boya ve yenileme',image:'/media/stores/rmk-yachts-cover.webp'},
   {title:'Broker & Satış',desc:'Satış ve danışmanlık',image:'/sale-yener-35.webp'},
   {title:'Charter Hizmetleri',desc:'Kiralama ve operasyon',image:'/charter-luna-hero.webp'}
  ].map(item=><a href="/hizmetler" className="homeDiscoveryCard" key={item.title}>
   <div className="homeDiscoveryMedia"><img src={item.image} alt={item.title+' için temsili denizcilik görseli'} loading="lazy"/></div>
   <div className="homeDiscoveryBody"><h3>{item.title}</h3><p>{item.desc}</p><span>Keşfet →</span></div>
  </a>)}</div>
 </div></section>
 <section id="destinasyonlar" className="dpSection homeDiscovery"><div className="dpWrap">
  <div className="dpHead"><div className="homeSectionHeading"><small>DENİZCİLİK ROTALARI</small><h2>Destinasyonlar</h2></div></div>
  <div className="homeDiscoveryGrid">{[
   {title:'Bodrum',desc:'Ege kıyıları',image:'/charter-luna-1.webp'},
   {title:'Göcek',desc:'Koylar ve adalar',image:'/charter-sunreef.webp'},
   {title:'Marmaris',desc:'Güney Ege',image:'/charter-luna-9.webp'},
   {title:'Antalya',desc:'Akdeniz kıyıları',image:'/hero-home.webp'}
  ].map(item=><div className="homeDiscoveryCard" key={item.title}>
   <div className="homeDiscoveryMedia"><img src={item.image} alt={item.title+' rotası için temsili yat görseli'} loading="lazy"/></div>
   <div className="homeDiscoveryBody"><h3>{item.title}</h3><p>{item.desc}</p></div>
  </div>)}</div>
 </div></section>
 </main><Footer/></>}
