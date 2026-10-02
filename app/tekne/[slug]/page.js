import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import {saleListings,charterListings} from '../../../data/content';

export default async function Page({params}){
  const {slug}=await params;
  const all=[...saleListings,...charterListings];
  const item=all.find(x=>x.slug===slug)||saleListings[1];
  const isCharter=item.kind==='KİRALIK';
  const gallery=[item.image,isCharter?'/charter-luna-1.webp':'/sale-euro-700.webp',isCharter?'/charter-luna-9.webp':'/sale-euro-760.webp'];
  return <><SiteHeader/><main>
    <div className="container detailCrumb">Ana sayfa <span>›</span> {isCharter?'Kiralık':'Satılık'} <span>›</span> {item.title}</div>
    <section className="detailGallery container">
      <div className="detailMainImage"><img src={gallery[0]} alt={item.title}/><button>48 foto</button></div>
      <div className="detailSideImages"><img src={gallery[1]} alt=""/><img src={gallery[2]} alt=""/></div>
    </section>

    <div className="container detailLayout">
      <article className="detailContent">
        <div className="detailTitle">
          <div><span>{isCharter?'KİRALIK YAT':'SATILIK TEKNE'}</span><h1>{item.title}</h1><p>{item.meta} · İlan No MY-2026-1842</p></div>
          <button className="detailFav">♡ Favori</button>
        </div>
        <div className="specGrid">
          <div><small>YIL</small><b>2026</b></div><div><small>BOY</small><b>{isCharter?'32.0 m':'8.50 m'}</b></div><div><small>GENİŞLİK</small><b>{isCharter?'7.2 m':'2.75 m'}</b></div><div><small>MOTOR</small><b>{isCharter?'2 × MTU':'2 × 250 HP'}</b></div><div><small>YAKIT</small><b>Dizel</b></div><div><small>KABİN</small><b>{isCharter?'6':'1'}</b></div>
        </div>
        <div className="detailTabs"><a className="active">Genel Bakış</a><a>Teknik Özellikler</a><a>Ekipman</a><a>Konum</a></div>
        <section className="detailText"><h2>{item.title} hakkında</h2><p>Bu sayfa Motoryat V2'nin ilan detay şablonudur. Büyük galeri, teknik özellikler, satıcı bilgisi ve doğrudan iletişim alanları tek akışta sunulur. İçerik alanı uzun açıklamalar, ekipman listeleri ve model bilgileri için hazırlanmıştır.</p><p>Tekneyle ilgili doğrulanmış ölçüler, üretici bilgileri, konum, durum ve satış veya charter detayları canlı veri bağlantısı eklendiğinde bu bölümlerde gösterilir.</p></section>
        <section className="detailMap"><div><span>KONUM</span><h2>{isCharter?'İstanbul / Türkiye':'İstanbul / Türkiye'}</h2><p>Harita entegrasyonu canlı veri aşamasında bağlanacaktır.</p></div></section>
      </article>

      <aside className="detailSidebar">
        <div className="offerCard"><small>{isCharter?'HAFTALIK FİYAT':'SATIŞ FİYATI'}</small><strong>{item.price}</strong><button className="offerBtn">Teklif İste</button><div className="contactPair"><button>Ara</button><button>Mesaj</button></div><button className="whatsappBtn">WhatsApp</button></div>
        <div className="brokerCard"><img src="/motoryat-logo.svg" alt=""/><div><small>YETKİLİ SATICI</small><h3>{isCharter?'Lady Luna Charter':'Euro Boat'}</h3><p>İstanbul, Türkiye</p></div><a href="/magazalar">Mağazayı Gör →</a></div>
        <div className="adSlot">300 × 300<br/><small>REKLAM ALANI</small></div>
      </aside>
    </div>

    <section className="section alt"><div className="container"><div className="sectionHead"><div><span>BENZER İLANLAR</span><h2>Bunlar da ilginizi çekebilir</h2></div></div><div className="cardGrid">{saleListings.map((x,i)=><YachtCard key={i} item={x}/>)}</div></div></section>
  </main><Footer/></>
}
