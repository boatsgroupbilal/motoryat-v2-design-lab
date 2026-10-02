import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {stores} from '../../data/content';

export default function Page(){
 const items=[...stores,...stores];
 return <><SiteHeader/><main className="storeDirectoryPage">
  <section className="storeDirectoryHero">
   <div className="container">
    <span>TİCARİ VİTRİN</span>
    <h1>Mağazalar</h1>
    <p>Denizcilik sektöründeki mağaza, tersane, broker, charter ve ekipman firmalarını keşfedin.</p>
   </div>
  </section>

  <section className="storeDirectoryTools">
   <div className="container storeDirectoryToolsInner">
    <div className="storeDirectorySearch">
     <input placeholder="Mağaza, firma, marka veya kategori ara"/>
     <button>Ara</button>
    </div>
    <div className="storeDirectoryTabs">
     <button className="active">Tümü</button>
     <button>Tekne & Yat</button>
     <button>Ekipman</button>
     <button>Charter</button>
     <button>Tersane</button>
     <button>Broker</button>
    </div>
   </div>
  </section>

  <section className="storeDirectorySection">
   <div className="container">
    <div className="storeDirectoryHead">
     <div><span>MAĞAZALAR</span><h2>Öne çıkan mağazalar</h2></div>
     <select defaultValue="all"><option value="all">Tüm konumlar</option><option>İstanbul</option><option>Muğla</option><option>İzmir</option></select>
    </div>

    <div className="storeDirectoryList">
     {items.map((x,i)=><a className="storeDirectoryCard" href={x.href} key={x.slug+'-'+i}>
      <div className="storeDirectoryCover"><img src={x.image} alt={x.name}/></div>
      <div className="storeDirectoryBody">
       <div className="storeDirectoryLogo"><img src={x.logo} alt=""/></div>
       <div className="storeDirectoryInfo">
        <small>{x.category}</small>
        <h3>{x.name}</h3>
        <p>{x.location}</p>
        <div className="storeDirectoryStats">
         <span><b>{i%2===0?'12':'8'}</b> İlan</span>
         <span><b>{i%3===0?'24':'16'}</b> Ürün</span>
         <span><b>{i%2===0?'4':'3'}</b> Haber</span>
        </div>
       </div>
       <div className="storeDirectoryAction"><span>Mağazayı Gör</span><b>→</b></div>
      </div>
     </a>)}
    </div>
   </div>
  </section>
 </main><Footer/></>
}
