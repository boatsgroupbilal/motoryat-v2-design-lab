export function YachtCard({item,badge}){
  return <a className="yachtCard" href="#">
    <div className="cardMedia">
      <img src={item.image} alt={item.title}/>
      {badge&&<span className="badge">{badge}</span>}
      <span className="heart" aria-label="Favorilere ekle">♡</span>
    </div>
    <div className="cardBody">
      <div className="cardKicker">SATILIK</div>
      <h3>{item.title}</h3>
      <p>{item.meta}</p>
      <strong>{item.price}</strong>
    </div>
  </a>
}
export function StoreCard({item}){return <a className="storeCard" href={item.href}><div className="storeVisual"><img src={item.image} alt={item.name}/></div><div className="storeInfo"><div className="storeLogo"><img src={item.logo} alt=""/></div><div><h3>{item.name}</h3><p>{item.category}</p><small>{item.location}</small></div><span className="arrow">→</span></div></a>}
export function ProductCard({item}){return <article className="productCard"><div className="productMedia"><img src={item.image} alt={item.name}/></div><div className="productBody"><small>{item.brand} · {item.sku}</small><h3>{item.name}</h3><b>Fiyat Sorunuz</b></div></article>}
