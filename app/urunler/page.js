import YeniViraBanner from '../../components/YeniViraBanner';
import {choosePageData} from '../../lib/v2-page-data';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {products} from '../../data/content';
import {EquipmentProductCard} from '../../components/Card';

const quickCategories=[
  ['▦','Tüm Ürünler','/urunler'],
  ['▣','Elektronik','/urunler/elektronik-navigasyon'],
  ['⚓','Güverte Donanımı','/urunler/guverte'],
  ['◇','Güvenlik','/urunler/guvenlik'],
  ['⌁','Bakım','/urunler/boya-bakim']
];

const categoryMenu=[
  ['⚙','Motor & Mekanik','motor-mekanik'],
  ['⚡','Elektrik','elektrik'],
  ['⌖','Elektronik & Navigasyon','elektronik-navigasyon'],
  ['⚓','Güverte','guverte'],
  ['⛓','Çapa & Bağlama','capa-baglama'],
  ['💧','Pompa & Tesisat','pompa-tesisat'],
  ['🛟','Güvenlik','guvenlik'],
  ['🖌','Boya & Bakım','boya-bakim'],
  ['⛵','Yelken & Donanım','yelken-donanimi'],
  ['🪢','Halat & Rigging','halat-rigging'],
  ['▤','Kabin & Konfor','kabin-konfor'],
  ['❄','Mutfak & Soğutma','mutfak-sogutma'],
  ['🏄','Su Sporları','su-sporlari'],
  ['🚤','Bot & Tender','bot-tender'],
  ['🎣','Balıkçılık','balikcilik'],
  ['🔩','Yedek Parça','yedek-parca']
];

export default async function Page(){
  const items=await choosePageData('products',products);
  const brands=[...new Set(items.map(x=>x.brand).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'tr'));
  const countFor=(slug)=>items.filter(x=>x.category_slug===slug).length;

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
        <form className="equipmentSearch" action="/arama">
          <span>⌕</span>
          <input name="q" placeholder="Ürün, marka veya kategori ara..."/>
          <button>Ara</button>
        </form>
        <div className="equipmentQuickCats">
          {quickCategories.map(([icon,label,href],i)=><a className={i===0?'active':''} href={href} key={label}><b>{icon}</b>{label}</a>)}
        </div>
      </section>

      <section className="equipmentLayout">
        <aside className="equipmentSidebar">
          <div className="equipmentSideGroup equipmentCategoryGroup">
            <div className="equipmentCategoryHead"><span>☰</span><b>TÜM KATEGORİLER</b></div>
            <a className="active equipmentCategoryRow" href="/urunler">
              <span className="equipmentCategoryIcon">▦</span>
              <span className="equipmentCategoryName">Tüm Ürünler</span>
              <b>{items.length}</b>
            </a>
            {categoryMenu.map(([icon,label,slug])=><a className="equipmentCategoryRow" href={'/urunler/'+slug} key={label}>
              <span className="equipmentCategoryIcon" aria-hidden="true">{icon}</span>
              <span className="equipmentCategoryName">{label}</span>
              <b>{countFor(slug)}</b>
            </a>)}
          </div>
          <div className="equipmentSideGroup equipmentBrands">
            <div className="equipmentSideTitle">MARKA</div>
            {brands.map((x)=><label key={x}><input type="checkbox"/><span>{x}</span><b>{items.filter(p=>p.brand===x).length}</b></label>)}
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
            {items.map((x)=><EquipmentProductCard item={x} key={x.slug}/>)}
          </div>
        </div>
      </section>
    </div>
  <YeniViraBanner/>
 </main><Footer/></>
}