import Link from 'next/link';

export default function YachtListingRow({
  item,
  type='sale',
  seller='',
  year='',
  refit='—',
  index=0,
  brandLogo=''
}){
  const charter=type==='charter';
  const tone=index%2===0?'toneGold':'toneTurquoise';
  const accent=index%2===0?'#ffb21d':'#00c9b5';

  const brand=item?.sellerName || item?.store_name || item?.seller || seller || item?.brandName || item?.brand || '';
  const photoCount=Array.isArray(item?.gallery) ? new Set([item.image,...item.gallery].filter(Boolean)).size : (item?.photo_count ?? item?.photoCount ?? null);
  const videoCount=item?.video_count ?? item?.videoCount ?? (Array.isArray(item?.videos) ? item.videos.length : null);
  const displayYear=item?.year || (year!=='—' ? year : '');
  const priceText=String(item?.price || '').trim();
  const askPrice=!priceText || /^fiyat(?:ı)?\s*sor(?:unuz)?$/i.test(priceText);

  return <article className={'sqYachtCard '+(charter?'isCharter ':'isSale ')+tone} style={{background:accent}}>
    <Link href={item.href} className="sqYachtMedia" aria-label={item.title}>
      <img src={item.image} alt={item.title}/>
      <span className="sqYachtFav" aria-hidden="true">♡</span>
      {(photoCount>0 || videoCount>0) && <span className="sqYachtMediaStats" aria-hidden="true">
        {photoCount>0 && <i>▣ {photoCount}</i>}
        {videoCount>0 && <i>▷ {videoCount}</i>}
      </span>}
    </Link>

    <div className="sqYachtInfo">
      <Link href={item.href} className="sqYachtTitle"><h2>{item.title}</h2></Link>
      <p className="sqYachtMeta">{item.meta}</p>

      {displayYear && <div className="sqYachtFacts">
        <div><small>YIL</small><strong>{displayYear}</strong></div>
      </div>}

      <div className={'sqYachtPrice '+(askPrice?'isAskPrice':'hasRealPrice')}>
        {!askPrice && <small>{charter?'HAFTALIK FİYAT':'FİYATI'}</small>}
        <strong>{askPrice?'Fiyat Sorunuz':priceText}</strong>
      </div>
    </div>

    <Link
      href={item.href}
      className="sqYachtStatus sqYachtUnifiedFooter"
      style={{background:accent}}
      aria-label={(charter?'Kiralık: ':'Satılık: ')+item.title}
    >
      <span className="sqYachtUnifiedBrand">
        {brandLogo ? <img src={brandLogo} alt={brand}/> : (brand ? <strong>{brand}</strong> : null)}
      </span>
      <span>{charter?'KİRALIK':'SATILIK'}</span>
    </Link>
  </article>
}
