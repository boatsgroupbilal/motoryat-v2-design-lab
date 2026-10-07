import Link from 'next/link';

export default function YachtListingRow({
  item,
  type='sale',
  seller='',
  year='2026',
  refit='—',
  index=0,
  brandLogo=''
}){
  const charter=type==='charter';
  const tone=index%2===0?'toneGold':'toneTurquoise';
  const accent=index%2===0?'#ffb21d':'#00c9b5';

  const brand=item?.sellerName || item?.brandName || item?.brand || seller || 'Motoryat.com';
  const photoCount=[28,24,32,37][index%4];
  const videoCount=[3,5,4,0][index%4];

  return <article className={'sqYachtCard '+(charter?'isCharter ':'isSale ')+tone} style={{background:accent}}>
    <Link href={item.href} className="sqYachtMedia" aria-label={item.title}>
      <img src={item.image} alt={item.title}/>
      <span className="sqYachtFav" aria-hidden="true">♡</span>
      <span className="sqYachtMediaStats" aria-hidden="true">
        <i>▣ {photoCount}</i>
        <i>▷ {videoCount}</i>
      </span>
    </Link>

    <div className="sqYachtInfo">
      <Link href={item.href} className="sqYachtTitle"><h2>{item.title}</h2></Link>
      <p className="sqYachtMeta">{item.meta}</p>

      <div className="sqYachtFacts">
        <div><small>YIL</small><strong>{year}</strong></div>
        <div><small>YENİLEME</small><strong>{refit}</strong></div>
      </div>

      <div className="sqYachtPrice">
        <small>{charter?'HAFTALIK FİYAT':'FİYATI'}</small>
        <strong>{item.price}</strong>
      </div>
    </div>

    <Link
      href={item.href}
      className="sqYachtStatus sqYachtUnifiedFooter"
      style={{background:accent}}
      aria-label={(charter?'Kiralık: ':'Satılık: ')+item.title}
    >
      <span className="sqYachtUnifiedBrand">
        {brandLogo ? <img src={brandLogo} alt={brand}/> : <strong>{brand}</strong>}
      </span>
      <span>{charter?'KİRALIK':'SATILIK'}</span>
    </Link>
  </article>
}
