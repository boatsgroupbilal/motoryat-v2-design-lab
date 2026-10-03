import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {products,productCategories} from '../../data/content';
import {EquipmentProductCard} from '../../components/Card';

const quickCategories=[
  ['▦','Tüm Ürünler'],
  ['▣','Elektronik'],
  ['⚓','Güverte Donanımı'],
  ['◇','Güvenlik'],
  ['⌁','Bakım']
];

const brands=['Admiral','Raymarine','Garmin','Lewmar','Volvo Penta'];

export default function Page(){
  const items=[...products,...products];

  return <><SiteHeader/><main className="equipmentMarketplace">
    <div className="container equipmentShell">
      <section className="equipmentHero">
        <img className="equipmentHeroImage" src="/hero-home.webp" alt="Tekne ve yat malzemeleri"/>
        <div className="equipmentHeroShade"></div>
        <div className="equipmentHeroInner">
          <div className="equipmentHeroCopy">
            <span>ORİJİNAL ÜRÜNLER · GÜVENİLİR MARKALAR</span>
            <h1>Tekne &amp; Yat Malzemeleri</h1>
            <p>Denizde ihtiyacınız olan her şey, tek bir adreste.</p>
          </div>
          <div className="equipmentTrust">
            <div><b>◇</b><span>Lüks deniz yaşamı<small>için seçilmiş markalar</small></span></div>
            <div><b>✓</b><span>Güvenilir satıcılar<small>ve orijinal ürünler</small></span></div>
            <div><b>⚓</b><span>Tekne bakımından<small>güvenli seyire kadar</small></span></div>
          </div>
        </div>
      </section>

      <section className="equipmentDiscovery">
        <div className="equipmentSearch">
          <span>⌕</span>
          <input placeholder="Ürün, marka veya kategori ara..."/>
          <button>Ara</button>
        </div>
        <div className="equipmentQuickCats">
          {quickCategories.map(([icon,label],i)=><button className={i===0?'active':''} key={label}><b>{icon}</b>{label}</button>)}
        </div>
      </section>

      <section className="equipmentLayout">
        <aside className="equipmentSidebar">
          <div className="equipmentSideGroup">
            <div className="equipmentSideTitle">KATEGORİLER</div>
            <a className="active" href="#"><span>Tüm Ürünler</span><b>{items.length}</b></a>
            {productCategories.map((x,i)=><a href="#" key={x}><span>{x}</span><b>{String(48+(i*17))}</b></a>)}
          </div>
          <div className="equipmentSideGroup equipmentBrands">
            <div className="equipmentSideTitle">MARKA</div>
            {brands.map((x,i)=><label key={x}><input type="checkbox"/><span>{x}</span><b>{124-(i*18)}</b></label>)}
            <button>Daha fazla marka⌄</button>
          </div>
        </aside>

        <div className="equipmentResults">
          <div className="equipmentResultsBar">
            <div><b>{items.length} ürün bulundu</b></div>
            <div className="equipmentSort">
              <select defaultValue="featured"><option value="featured">Sıralama: Önerilenler</option><option>En yeni</option><option>Marka A–Z</option></select>
              <button aria-label="Grid görünümü">▦</button>
              <button aria-label="Liste görünümü">☷</button>
            </div>
          </div>

          <div className="equipmentProductGrid">
            {items.map((x,i)=><EquipmentProductCard item={x} key={x.slug+'-'+i}/>)}
          </div>
        </div>
      </section>
    </div>
  </main><Footer/></>
}
