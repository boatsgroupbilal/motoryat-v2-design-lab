import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {YachtCard} from '../../components/Card';
import {saleListings} from '../../data/content';

const filterNames=['Tekne tipi','Marka & Model','Durum','Fiyat','Boy','Yıl','Yakıt','Konum / ülke'];

function FilterBody(){
  return <>
    {filterNames.map(x=><details key={x}><summary>{x}<span>+</span></summary><div className="filterDummy">Seçenekleri göster</div></details>)}
    <button className="navyBtn">Filtreleri Uygula</button>
  </>
}

export default function Page(){
  return <>
    <SiteHeader/>
    <main>
      <section className="saleTop">
        <img src="/sale-euro-850.webp" alt="Satılık tekneler"/>
        <div className="saleTopShade"></div>
        <div className="container saleTopContent">
          <span>SATILIK TEKNELER</span>
          <h1>Doğru tekneyi bulun.</h1>
          <p>Marka, model, boy, fiyat ve konuma göre filtreleyin.</p>
          <div className="saleFinder">
            <button><small>TÜR</small><b>Tüm tekneler</b></button>
            <button><small>MARKA</small><b>Tüm markalar</b></button>
            <button><small>BOY</small><b>Tüm boylar</b></button>
            <button><small>FİYAT</small><b>Tüm fiyatlar</b></button>
            <button><small>KONUM</small><b>Türkiye</b></button>
            <button className="finderSubmit">Ara</button>
          </div>
        </div>
      </section>

      <div className="container listingToolbar">
        <div className="breadcrumbs">Ana sayfa <span>›</span> Satılık <span>›</span> Tüm tekneler</div>
        <div className="toolbarActions"><b>1.248 ilan</b><select><option>Önerilen sıralama</option><option>En yeni</option><option>Fiyat: düşükten</option></select></div>
      </div>

      <div className="container mobileFilters">
        <details>
          <summary>Filtreleri Aç <span>+</span></summary>
          <div className="mobileFilterBody"><FilterBody/></div>
        </details>
      </div>

      <div className="container catalogLayout">
        <aside className="filters">
          <div className="filterTitle"><span>FİLTRELER</span><a href="#">Temizle</a></div>
          <FilterBody/>
        </aside>
        <section className="results">
          <div className="resultHeader">
            <div><span>SATILIK</span><h2>Satılık Tekneler</h2></div>
            <div className="viewSwitch"><button className="active">Izgara</button><button>Liste</button></div>
          </div>
          <div className="cardGrid two">
            {[...saleListings,...saleListings].map((x,i)=><YachtCard key={i} item={x} badge={i<2?'ÖNE ÇIKAN':null}/>)}
          </div>
          <nav className="pagination" aria-label="Sayfalama"><button className="active">1</button><button>2</button><button>3</button><button>›</button></nav>
        </section>
      </div>
    </main>
    <Footer/>
  </>
}
