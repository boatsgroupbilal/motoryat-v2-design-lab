import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {StoreCard} from '../../components/Card';
import {stores} from '../../data/content';

export default function Page(){
  return <><SiteHeader/><main>
    <section className="directoryHero">
      <div className="container directoryHeroInner">
        <span>TİCARİ VİTRİN</span>
        <h1>Denizcilik firmaları ve mağazaları</h1>
        <p>Tersane, broker, charter, ekipman ve teknik hizmet sağlayıcılarını keşfedin.</p>
        <div className="directorySearch"><input placeholder="Firma, mağaza, marka veya uzmanlık alanı ara"/><button className="navyBtn">Ara</button></div>
      </div>
    </section>
    <div className="container directoryTools">
      <div className="simpleTabs"><button className="active">Tümü</button><button>Tekne & Yat</button><button>Ekipman</button><button>Charter</button><button>Tersane</button><button>Broker</button></div>
      <select><option>Tüm konumlar</option><option>İstanbul</option><option>Muğla</option><option>İzmir</option></select>
    </div>
    <section className="section directorySection">
      <div className="container">
        <div className="sectionHead"><div><span>MAĞAZALAR</span><h2>Öne çıkan profesyoneller</h2><p>Kurumsal vitrin, ilan, model, proje ve ürün içeriklerini tek profilde inceleyin.</p></div></div>
        <div className="storeGrid directory">{[...stores,...stores].map((x,i)=><StoreCard key={i} item={x}/>)}</div>
      </div>
    </section>
  </main><Footer/></>
}
