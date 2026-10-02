import YachtListingRow from './YachtListingRow';

export function YachtCard({item,badge,seller='',year='2026',refit='—',index=0,brandLogo=''}) {
  const type=item?.kind==='KİRALIK' ? 'charter' : 'sale';
  return <YachtListingRow
    item={item}
    type={type}
    seller={seller}
    year={year}
    refit={refit}
    index={index}
    brandLogo={brandLogo}
  />
}

export function StoreCard({item}){return <a className="storeCard" href={item.href||'/magazalar'}><div className="storeVisual"><img src={item.image} alt={item.name}/></div><div className="storeInfo"><div className="storeLogo"><img src={item.logo} alt=""/></div><div><h3>{item.name}</h3><p>{item.category}</p><small>{item.location}</small></div><span className="arrow">→</span></div></a>}

export function ProductCard({item}){return <a className="productCard" href={item.href||'/urunler'}><div className="productMedia"><img src={item.image} alt={item.name}/></div><div className="productBody"><small>{item.brand} · {item.sku}</small><h3>{item.name}</h3><b>{item.price||'Fiyat Sorunuz'}</b></div></a>}
