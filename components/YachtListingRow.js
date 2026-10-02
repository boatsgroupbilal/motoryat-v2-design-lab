import Link from 'next/link';

export default function YachtListingRow({item,type='sale',seller='',year='2026',refit='—',index=0}){
  const charter=type==='charter';
  const tone=['toneA','toneB','toneC','toneD'][index%4];
  return <article className={'sqYachtCard '+tone+' '+(charter?'isCharter':'isSale')}>
    <Link href={item.href} className="sqYachtMedia" aria-label={item.title}>
      <img src={item.image} alt={item.title}/>
    </Link>

    <div className="sqYachtInfo">
      <Link href={item.href}><h2>{item.title}</h2></Link>
      <p className="sqYachtMeta">{item.meta}</p>
      <div className="sqYachtFacts">
        <div><small>YIL</small><strong>{year}</strong></div>
        <div><small>YENİLEME</small><strong>{refit}</strong></div>
      </div>
      <div className="sqYachtPrice">
        <small>{charter?'HAFTALIK FİYAT':'FİYATI'}</small>
        <strong>{item.price}</strong>
      </div>
      <Link href={item.href} className="sqYachtStatus">{charter?'KİRALAMA LİSTESİ':'SATIŞ İLANI'} <span>›</span></Link>
    </div>

    <div className="sqYachtBrand">
      <span className="sqBrandName">{seller||'Motoryat.com'}</span>
      <Link href={item.href}>İlanı incele →</Link>
    </div>
  </article>
}
