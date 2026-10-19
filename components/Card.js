import YachtListingRow from './YachtListingRow';

export function YachtCard({item,type,seller='',year='',refit='—',index=0,brandLogo=''}) {
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

export function StoreCard({item}){return <a className="storeCard" href={item.href||'/magazalar'}>{item.image?<div className="storeVisual"><img src={item.image} alt={item.name}/></div>:null}<div className="storeInfo">{item.logo?<div className="storeLogo"><img src={item.logo} alt=""/></div>:null}<div><h3>{item.name}</h3>{item.category?<p>{item.category}</p>:null}{item.location?<small>{item.location}</small>:null}</div><span className="arrow">→</span></div></a>}

export function ProductCard({item}){return <a className="productCard" href={item.href||'/urunler'}><div className="productMedia"><img src={item.image} alt={item.name}/></div><div className="productBody"><small>{item.brand} · {item.sku}</small><h3>{item.name}</h3><b>{item.price||'Fiyat Sorunuz'}</b></div></a>}


export function EquipmentProductCard({item}) {
  const shortText=item?.description || item?.sku || 'Tekne ve yat ekipmanı';
  const storeName=item?.storeName || item?.seller || item?.brand || 'Motoryat Mağazası';
  const storeLogo=item?.storeLogo || '';
  const storeHref=item?.storeHref || '/magazalar';

  return <article className="eqCommerceCard">
    <div className={"eqCommerceMedia"+(item.singleView?" singleView":"")}>
      <a className="eqCommerceImageLink" href={item.href||'/urunler'} aria-label={item.name}>
        <img
          src={item.image}
          alt={item.name}
          style={item.cardImagePosition?{objectPosition:item.cardImagePosition}:undefined}
        />
      </a>
      <button className="eqCommerceFav" aria-label="Favoriye ekle">♡</button>
    </div>

    <div className="eqCommerceBody">
      <span className="eqCommerceBrand">{item.brand}</span>

      <a className="eqCommerceTitle" href={item.href||'/urunler'}>
        <h3>{item.name}</h3>
      </a>

      <p className="eqCommerceDesc">{shortText}</p>

      <div className={'eqCommercePrice '+(item.price?'hasPrice':'askPrice')}>
        <span aria-hidden="true">◇</span>
        <strong>{item.price||'Fiyat Sorunuz'}</strong>
      </div>

      <div className="eqCommerceActions">
        <button className="eqCommerceCart" aria-label="Sepete ekle">
          <span aria-hidden="true">🛒</span><b>＋</b>
        </button>
      </div>
    </div>

    <a className="eqCommerceStore" href={storeHref}>
      <span className={"eqCommerceStoreLogo"+(!storeLogo?" wordmark":"")}>
        {storeLogo?<img src={storeLogo} alt=""/>:<b>{item.brand||storeName}</b>}
      </span>
      <span className="eqCommerceStoreText"><small>MAĞAZA</small><b>{storeName}</b></span>
      <span className="eqCommerceStoreArrow">›</span>
    </a>
  </article>
}
