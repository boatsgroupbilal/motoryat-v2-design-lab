import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import {saleListings} from '../../data/content';

export default function Page(){return <><SiteHeader/><main className="syListingPage">
  <section className="syPageIntro"><div className="syContainer"><span>FOR SALE</span><h1>Satılık Yatlar</h1><p>Satılık motor yatları, yelkenlileri ve yeni inşa projelerini keşfedin.</p></div></section>
  <section className="sySearchPanel"><div className="syContainer sySearchFields"><button><small>TÜR</small><b>Tüm yatlar</b></button><button><small>BOY</small><b>0m — 100m+</b></button><button><small>FİYAT</small><b>Tüm fiyatlar</b></button><button><small>YIL</small><b>Tüm yıllar</b></button><button><small>TERSANE</small><b>Tümü</b></button><button><small>KONUM</small><b>Tümü</b></button><a href="/satilik">Ara</a></div></section>
  <section className="sySection"><div className="syContainer">
    <div className="syResultsBar"><div><b>Satılık yatlar</b><span>1.248 sonuç</span></div><select><option>En yeni</option><option>Boy: büyükten küçüğe</option><option>Fiyat: yüksekten düşüğe</option></select></div>
    <div className="syYachtGrid syListingGrid">{[...saleListings,...saleListings,...saleListings].map((x,i)=><a className="syYachtCard" href={x.href} key={i}><div className="syYachtImage"><img src={x.image} alt={x.title}/>{i<2&&<span>ÖNE ÇIKAN</span>}</div><div className="syYachtMeta"><small>{x.meta}</small><h3>{x.title}</h3><b>{x.price}</b><div className="syCardFacts"><span>Motor Yacht</span><span>Türkiye</span></div></div></a>)}</div>
    <div className="syPager"><button>‹</button><button className="active">1</button><button>2</button><button>3</button><button>›</button></div>
  </div></section>
</main><Footer/></>}