import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import {saleListings} from '../../../data/content';

export default async function Page({params}){const {slug}=await params;const name=slug.split('-').map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(' ');return <><SiteHeader/><main>
  <section className="entityHero"><div className="container"><span>MARKA</span><h1>{name}</h1><p>Modeller, teknik bilgiler, haberler ve mevcut ilanlar.</p></div></section>
  <section className="section"><div className="container entitySplit"><div><span className="eyebrow">MARKA PROFİLİ</span><h2>{name} modellerini keşfedin</h2><p>Marka profilinde üretici bilgileri, model aileleri, teknik veriler ve Motoryat üzerindeki ilgili ilanlar birlikte gösterilir.</p></div><div className="entityStats"><div><small>MODELLER</small><b>24</b></div><div><small>İLANLAR</small><b>18</b></div><div><small>HABERLER</small><b>12</b></div></div></div></section>
  <section className="section alt"><div className="container"><div className="sectionHead"><div><span>SATILIK</span><h2>{name} ilanları</h2></div></div><div className="cardGrid">{saleListings.map(x=><YachtCard key={x.slug} item={x}/>)}</div></div></section>
</main><Footer/></>}
