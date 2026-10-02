import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {ProductCard} from '../../components/Card';
import {products,productCategories} from '../../data/content';

export default function Page(){
  return <><SiteHeader/><main>
    <section className="commerceHero">
      <div className="container commerceHeroInner">
        <div><span>TEKNE & YAT MALZEMELERİ</span><h1>Parça, ekipman ve markaları hızlı bulun.</h1><p>Ürün adı, marka, OEM veya parça koduyla arayın.</p></div>
        <div className="commerceSearch"><input placeholder="Örn. pervane, vinç, radar, OEM kodu..."/><button className="finderSubmit">Ara</button></div>
      </div>
    </section>

    <div className="container marketplaceLayout">
      <aside className="marketSidebar">
        <div className="marketSideTitle">KATEGORİLER</div>
        {productCategories.map((x,i)=><a className={i===0?'active':''} href="#" key={x}>{x}<span>›</span></a>)}
      </aside>
      <section className="marketResults">
        <div className="marketTools">
          <div><span>PAZARYERİ</span><h2>Tekne & Yat Malzemeleri</h2><p>Marka ve kategori bazında keşfedin.</p></div>
          <select><option>Önerilen</option><option>En yeni</option><option>Marka A-Z</option></select>
        </div>
        <div className="brandStrip"><button>Tüm Markalar</button><button>Admiral</button><button>Raymarine</button><button>Garmin</button><button>Lewmar</button><button>Volvo Penta</button></div>
        <div className="productGrid marketplace">{[...products,...products].map((x,i)=><ProductCard item={x} key={i}/>)}</div>
      </section>
    </div>
  </main><Footer/></>
}
