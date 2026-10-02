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

  const brand=seller||'Motoryat.com';
  const initials=brand.split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  const photoCount=[28,24,32,37][index%4];
  const videoCount=[3,5,4,0][index%4];

  return <article className={'sqYachtCard '+(charter?'isCharter':'isSale')}>
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

    <Link href={item.href} className="sqYachtStatus" aria-label={(charter?'Kiralama listesi: ':'Satış ilanı: ')+item.title}>
      <span>{charter?'KİRALAMA LİSTESİ':'SATIŞ İLANI'}</span>
      <b>→</b>
    </Link>

    <div className="sqYachtBrand">
      <div className="sqYachtBrandMark">
        {brandLogo ? <img src={brandLogo} alt=""/> : <span>{initials||'MY'}</span>}
      </div>
      <div className="sqYachtBrandText">
        <strong>{brand}</strong>
        <small>Yetkili Satıcı <i>✓</i></small>
      </div>
    </div>
  </article>
}
