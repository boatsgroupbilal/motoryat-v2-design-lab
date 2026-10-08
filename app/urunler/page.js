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

const categoryMenu=[
  ['⚙','Motor & Mekanik',482],
  ['🛢','Motor Yağları',346],
  ['◉','Pervaneler',395],
  ['⚡','Elektrik',865],
  ['⌖','Elektronik & Navigasyon',824],
  ['⚓','Güverte',991],
  ['⛓','Çapa & Bağlama',1186],
  ['💧','Pompa & Tesisat',1333],
  ['🛟','Güvenlik',1502],
  ['🖌','Boya & Bakım',1870],
  ['⛵','Yelken & Donanım',1845],
  ['🪢','Halat & Rigging',2011],
  ['▤','Kabin & Konfor',2183],
  ['❄','Mutfak & Soğutma',2358],
  ['🏄','Su Sporları',2521],
  ['🚤','Bot & Tender',2698],
  ['🎣','Balıkçılık',2886],
  ['🔩','Yedek Parça',3038]
];

export default function Page(){
  const items=[...products,...products];

  return <><SiteHeader/><main className="equipmentMarketplace">
    <div className="container equipmentShell">
      <section className="equipmentHero categoryHeroStd">
        <img className="equipmentHeroImage categoryHeroStdImage" src="/product-boom.webp" alt="Tekne ve yat malzemeleri"/>
        <div className="equipmentHeroShade categoryHeroStdShade"></div>
        <div className="equipmentHeroInner categoryHeroStdInner">
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
          <div className="equipmentSideGroup equipmentCategoryGroup">
            <div className="equipmentCategoryHead"><span>☰</span><b>TÜM KATEGORİLER</b></div>
            <a className="active equipmentCategoryRow" href="#">
              <span className="equipmentCategoryIcon">▦</span>
              <span className="equipmentCategoryName">Tüm Ürünler</span>
              <b>{items.length}</b>
            </a>
            {categoryMenu.map(([icon,label,count])=><a className="equipmentCategoryRow" href="#" key={label}>
              <span className="equipmentCategoryIcon" aria-hidden="true">{icon}</span>
              <span className="equipmentCategoryName">{label}</span>
              <b>{count}</b>
            </a>)}
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
