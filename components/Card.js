import YachtListingRow from './YachtListingRow';

export function YachtCard({item,type,seller='',year='2026',refit='—',index=0,brandLogo=''}) {
  const resolvedType=type || (item?.kind==='KİRALIK' ? 'charter' : 'sale');
  return <YachtListingRow
    item={item}
    type={resolvedType}
    seller={seller}
    year={year}
    refit={refit}
    index={index}
    brandLogo={brandLogo}
  />
}

export function StoreCard({item}){return <a className="storeCard" href={item.href||'/magazalar'}><div className="storeVisual"><img src={item.image} alt={item.name}/></div><div className="storeInfo"><div className="storeLogo"><img src={item.logo} alt=""/></div><div><h3>{item.name}</h3><p>{item.category}</p><small>{item.location}</small></div><span className="arrow">→</span></div></a>}

export function ProductCard({item}){return <a className="productCard" href={item.href||'/urunler'}><div className="productMedia"><img src={item.image} alt={item.name}/></div><div className="productBody"><small>{item.brand} · {item.sku}</small><h3>{item.name}</h3><b>{item.price||'Fiyat Sorunuz'}</b></div></a>}


export function EquipmentProductCard({item}) {
  const hasPrice=Boolean(item?.price);
  return <article className="eqCommerceCard">
    <div className="eqCommerceMedia">
      <a href={item.href||'/urunler'} aria-label={item.name}>
        <img src={item.image} alt={item.name}/>
      </a>
      <span className="eqCommerceBrand">{item.brand}</span>
      <button className="eqCommerceFav" aria-label="Favoriye ekle">♡</button>
    </div>

    <div className="eqCommerceBody">
      <div className="eqCommerceCode">ÜRÜN KODU · {item.sku}</div>
      <a className="eqCommerceTitle" href={item.href||'/urunler'}>
        <h3>{item.name}</h3>
      </a>

      <div className="eqCommercePrice">
        <small>FİYAT</small>
        <strong>{item.price||'Fiyat Sorunuz'}</strong>
      </div>

      <div className="eqCommerceActions">
        <a className="eqCommercePrimary" href={item.href||'/urunler'}>
          {hasPrice?'Sepete Ekle':'Ürünü İncele'}
        </a>
        <button className="eqCommerceCart" aria-label={hasPrice?'Sepete ekle':'Ürün detayına git'}>＋</button>
      </div>
    </div>
  </article>
}
