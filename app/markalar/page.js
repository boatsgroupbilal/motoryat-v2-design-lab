import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const brands=['Azimut','Benetti','Bilgin Yachts','Mengi Yay','Numarine','Princess','Sunseeker','Sunreef Yachts','Sanlorenzo','Ferretti Yachts','Pershing','Riva','Lagoon','Jeanneau','Beneteau','Northstar Boats','Euro Boat','Yener'];

export default function Page(){return <><SiteHeader/><main>
  <section className="indexHero"><div className="container"><span>MARKALAR & MODELLER</span><h1>Tekne markalarını keşfedin.</h1><p>Marka sayfalarından modellere, teknik bilgilere ve ilgili ilanlara ulaşın.</p><div className="indexSearch"><input placeholder="Marka veya model ara"/><button className="navyBtn">Ara</button></div></div></section>
  <section className="section"><div className="container"><div className="sectionHead"><div><span>MARKA DİZİNİ</span><h2>Popüler markalar</h2></div></div><div className="brandIndex">{brands.map((x,i)=><a href="#" key={x}><small>{String(i+1).padStart(2,'0')}</small><b>{x}</b><span>Modelleri gör →</span></a>)}</div></div></section>
</main><Footer/></>}
