import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';

const marinas=[
 ['İstanbul Marinaları','Marmara · Türkiye','Şehir içi bağlama, servis ve ulaşım ağı'],
 ['Bodrum Marinaları','Muğla · Türkiye','Ege charter rotalarının merkezlerinden biri'],
 ['Göcek Marinaları','Muğla · Türkiye','Koylar ve charter rotalarına doğrudan erişim'],
 ['Çeşme Marinaları','İzmir · Türkiye','Ege geçişleri ve yaz sezonu için güçlü üs'],
 ['Antalya Marinaları','Antalya · Türkiye','Akdeniz kıyısında uzun sezon avantajı'],
 ['Yunan Adaları','Ege · Yunanistan','Ada rotaları için marina ve liman rehberi']
];

export default function Page(){return <><SiteHeader/><main>
  <section className="indexHero marinaIndexHero"><div className="container"><span>MARİNALAR</span><h1>Marina ve bağlama noktalarını keşfedin.</h1><p>Bölge, hizmet ve rota bağlantısına göre marina rehberi.</p><div className="indexSearch"><input placeholder="Marina, şehir veya bölge ara"/><button className="navyBtn">Ara</button></div></div></section>
  <section className="section"><div className="container"><div className="sectionHead"><div><span>MARİNA REHBERİ</span><h2>Bölgelere göre keşfet</h2></div></div><div className="marinaGrid">{marinas.map(([name,loc,desc],i)=><a href={'/marina/'+name.toLowerCase().replaceAll(' ','-').replaceAll('ı','i').replaceAll('ş','s').replaceAll('ç','c').replaceAll('ö','o').replaceAll('ü','u').replaceAll('ğ','g')} className="marinaCard" key={name}><div className="marinaNo">{String(i+1).padStart(2,'0')}</div><small>{loc}</small><h3>{name}</h3><p>{desc}</p><span>Rehberi aç →</span></a>)}</div></div></section>
</main><Footer/></>}
