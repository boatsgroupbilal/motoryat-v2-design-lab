import Link from 'next/link';

export default function YachtListingRow({item,type='sale',images=[],seller='',year='2026',refit='—',photoCount=12,videoCount=1}){
  const charter=type==='charter';
  const gallery=(images.length?images:[item.image,item.image,item.image]).slice(0,3);
  while(gallery.length<3) gallery.push(item.image);
  return <article className={'luxListingRow '+(charter?'isCharter':'isSale')}>
    <div className="luxListingMain">
      <Link href={item.href} className="luxGallery" aria-label={item.title}>
        <div className="luxGalleryHero"><img src={gallery[0]} alt={item.title}/></div>
        <div className="luxGallerySide">
          <img src={gallery[1]} alt=""/>
          <img src={gallery[2]} alt=""/>
        </div>
        <div className="luxMediaCount">
          <span>▧ {photoCount}</span>
          {videoCount>0&&<span>▶ {videoCount}</span>}
        </div>
      </Link>

      <div className="luxInfo">
        <div className="luxInfoTop">
          <p className="luxEyebrow">{charter?'KİRALIK YAT':'SATILIK YAT'}</p>
          <Link href={item.href}><h2>{item.title}</h2></Link>
          <p className="luxMeta">{item.meta}</p>
        </div>
        <div className="luxFacts">
          <div><small>YIL</small><strong>{year}</strong></div>
          {!charter&&<div><small>YENİLEME</small><strong>{refit}</strong></div>}
          <div className="luxPriceFact"><small>{charter?'HAFTALIK FİYAT':'FİYAT'}</small><strong>{item.price}</strong></div>
        </div>
      </div>

      <div className="luxStatus"><span>{charter?'KİRALAMA LİSTESİ':'SATIŞ İLANI'}</span></div>
    </div>
    <div className="luxSeller">
      <span className="luxSellerMark">{seller? seller.charAt(0):'M'}</span>
      <div><small>{charter?'CHARTER OPERATÖRÜ':'SATIŞ FİRMASI'}</small><strong>{seller||'Motoryat.com'}</strong></div>
      <Link href={item.href}>İlanı incele →</Link>
    </div>
  </article>
}
