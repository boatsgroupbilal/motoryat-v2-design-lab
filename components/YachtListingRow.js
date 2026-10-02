import Link from 'next/link';

export default function YachtListingRow({item,type='sale',seller='',year='2026',refit='—',index=0}){
  const charter=type==='charter';
  const tone=charter
    ? ['charterA','charterB','charterC','charterD'][index%4]
    : ['saleA','saleB','saleC','saleD'][index%4];

  return <article className={'sqYachtCard '+(charter?'isCharter':'isSale')+' '+tone}>
    <Link href={item.href} className="sqYachtMedia" aria-label={item.title}>
      <img src={item.image} alt={item.title}/>
    </Link>

    <div className="sqYachtInfo">
      <Link href={item.href} className="sqYachtTitle"><h2>{item.title}</h2></Link>
      <p className="sqYachtMeta">{item.meta}</p>

      <div className="sqYachtFacts">
        <div><small>YIL</small><strong>{year}</strong></div>
        <div><small>YENİLEME</small><strong>{refit}</strong></div>
      </div>

      <div className="sqYachtPrice">
        <small>{charter?'HAFTALIK FİYAT':'FİYAT'}</small>
        <strong>{item.price}</strong>
      </div>

      <div className="sqYachtBrandLine">
        <span>{seller||'Motoryat.com'}</span>
        <Link href={item.href}>İlanı incele →</Link>
      </div>
    </div>

    <Link href={item.href} className="sqYachtStatus" aria-label={(charter?'Kiralama listesi: ':'Satış ilanı: ')+item.title}>
      <span>{charter?'KİRALAMA LİSTESİ':'SATIŞ İLANI'}</span>
      <b>›</b>
    </Link>
  </article>
}
