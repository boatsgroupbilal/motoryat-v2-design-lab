import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {StoreCard} from '../../components/Card';
import {companies,stores} from '../../data/content';

const fallbackItems=[...stores,...stores];
const companyItems=(companies||[]).map((x)=>({
  slug:x.slug,
  name:x.name,
  category:'Denizcilik firması',
  location:x.location||x.country||'Türkiye',
  image:'/store-directory.webp',
  logo:'/motoryat-logo.svg',
  href:'/firmalar'
}));

export default function Page(){
 const items=companyItems.length?companyItems:fallbackItems;
 return <><SiteHeader/><main>
  <section className="directoryHero"><div className="container directoryHeroInner"><span>FİRMA REHBERİ</span><h1>Denizcilik firmalarını bulun.</h1><p>Üretici, tersane, broker, servis, refit, charter ve ekipman firmalarını tek rehberde keşfedin.</p><div className="directorySearch"><input placeholder="Firma adı, şehir veya hizmet ara"/><button className="navyBtn">Ara</button></div></div></section>
  <div className="container directoryTools"><div className="simpleTabs"><button className="active">Tümü</button><button>Üretici</button><button>Tersane</button><button>Broker</button><button>Servis</button><button>Charter</button></div><select><option>Tüm Türkiye</option><option>İstanbul</option><option>Muğla</option><option>İzmir</option></select></div>
  <section className="section directorySection"><div className="container"><div className="sectionHead"><div><span>FİRMALAR</span><h2>Denizcilik profesyonelleri</h2><p>Kurumsal profil, iletişim ve hizmet alanları.</p></div></div><div className="storeGrid directory">{items.map((x,i)=><StoreCard key={x.id||x.slug||i} item={x}/>)}</div></div></section>
</main><Footer/></>
}