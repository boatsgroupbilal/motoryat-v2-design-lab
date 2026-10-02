import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {saleListings,charterListings} from '../../../data/content';

export default async function Page({params}){
  const {slug}=await params;
  const all=[...saleListings,...charterListings];
  const item=all.find(x=>x.slug===slug)||saleListings[1];
  const isCharter=item.kind==='KİRALIK';
  const images=[item.image,isCharter?'/charter-luna-1.webp':'/sale-euro-700.webp',isCharter?'/charter-luna-9.webp':'/sale-euro-760.webp'];
  return <><SiteHeader/><main className="syYachtDetail">
    <section className="syDetailGallery"><div className="syDetailHeroImg"><img src={images[0]} alt={item.title}/><button>Fotoğrafları Gör</button></div><div className="syDetailThumbs"><img src={images[1]} alt=""/><img src={images[2]} alt=""/></div></section>
    <section className="syDetailSummary"><div className="syContainer syDetailSummaryGrid"><div><span>{isCharter?'FOR CHARTER':'FOR SALE'}</span><h1>{item.title}</h1><p>{item.meta}</p></div><div className="syDetailQuick"><div><small>BOY</small><b>{isCharter?'32.0m':'8.50m'}</b></div><div><small>YIL</small><b>2026</b></div><div><small>TERSANE</small><b>{isCharter?'Custom':'Euro Boat'}</b></div><div><small>FİYAT</small><b>{item.price}</b></div></div></div></section>
    <div className="syContainer syDetailBody">
      <article>
        <nav className="syDetailTabs"><a className="active">Genel Bakış</a><a>Özellikler</a><a>Galeri</a><a>Konum</a></nav>
        <h2>{item.title}</h2><p className="syLead">Motoryat ilan detay şablonu, SuperYachts tarzındaki geniş görsel alan, net teknik bilgiler ve sade içerik hiyerarşisiyle hazırlanmıştır.</p>
        <p>Teknenin üretici, model, motor, kabin, menzil ve donanım bilgileri canlı veri bağlantısı eklendiğinde burada gösterilecektir. Satıcıyla doğrudan iletişim ve teklif akışı sağ tarafta sabit tutulur.</p>
        <div className="sySpecs">{[['Yat Tipi','Motor Yacht'],['Genişlik','2.75m'],['Yakıt','Dizel'],['Kabin',isCharter?'6':'1'],['Misafir',isCharter?'12':'4'],['Konum','Türkiye']].map(([k,v])=><div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
        <div className="syDetailImage"><img src={images[1]} alt=""/></div>
        <h2>Teknik Bilgiler</h2><p>Bu alan açıklama, ekipman, tasarım ve üretici bilgileri için uzun format içerik yapısını destekler.</p>
      </article>
      <aside>
        <div className="syInquiry"><small>{isCharter?'HAFTALIK':'SATIŞ'}</small><strong>{item.price}</strong><button>Bilgi İste</button><button className="outline">WhatsApp</button><div className="syBroker"><img src="/motoryat-logo.svg" alt=""/><div><small>YETKİLİ FİRMA</small><b>Motoryat Partner</b><span>İstanbul, Türkiye</span></div></div></div>
        <div className="syAd">300 × 300<small>REKLAM</small></div>
      </aside>
    </div>
  </main><Footer/></>
}