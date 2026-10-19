import Link from 'next/link';

const CATEGORIES = {
 sale: [
  ['Motoryat','motoryat','/sale-yener-35.webp'],
  ['Yelkenli','yelkenli','/charter-sunreef.webp'],
  ['Katamaran','katamaran','/charter-sunreef.webp'],
  ['Gulet','gulet','/charter-luna-hero.webp'],
  ['Sürat Teknesi','sürat teknesi','/sale-euro-700.webp'],
  ['Şişme Bot','şişme bot','/sale-euro-760.webp']
 ],
 charter: [
  ['Motor Yat','motoryat','/charter-luna-hero.webp'],
  ['Süperyat','süperyat','/charter-luna-1.webp'],
  ['Gulet','gulet','/charter-luna-9.webp'],
  ['Katamaran','katamaran','/charter-sunreef.webp'],
  ['Yelkenli','yelkenli','/charter-sunreef.webp'],
  ['Günlük Tekne','günlük tekne','/sale-euro-700.webp'],
  ['Etkinlik & Organizasyon','etkinlik','/charter-luna-hero.webp']
 ]
};
const normalize=value=>String(value||'').trim().toLocaleLowerCase('tr-TR');

export default function YachtCategoryTiles({type='charter',listings=[]}){
 const categories=CATEGORIES[type]||CATEGORIES.charter;
 const base=type==='sale'?'/satilik':'/kiralik';
 return <section className="v2CategorySection" aria-label={type==='sale'?'Satılık tekne türleri':'Kiralık tekne türleri'}>
  <div className="syContainer">
   <div className="v2CategoryHead">
    <h2>{type==='sale'?'Tekne Türlerini Keşfet':'Kiralık Yatları Keşfet'}</h2>
    <Link href={base}>{type==='sale'?'Tüm Satılık Yatlar':'Tüm Kiralık Yatlar'} →</Link>
   </div>
   <div className="v2CategoryTileGrid">
    {categories.map(([label,value,image])=>{
      const matches=listings.filter(x=>normalize(x.vessel_type||x.boat_type||x.category)===normalize(value));
      return <Link href={base+'?tip='+encodeURIComponent(value)} className="v2CategoryTile" key={label}>
        <img src={image} alt="" loading="lazy"/>
        <span className="v2CategoryTileShade"/>
        <span className="v2CategoryTileText"><strong>{label}</strong><small>{matches.length ? `${matches.length} ilan` : 'İlanları keşfet'}</small></span>
      </Link>;
    })}
   </div>
  </div>
 </section>;
}
