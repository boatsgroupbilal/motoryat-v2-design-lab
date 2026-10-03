import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import {saleListings,charterListings} from '../../../data/content';
import YachtDetailGallery from '../../../components/YachtDetailGallery';

const detailMeta={
  'euro-boat-700c-center-console':{seller:'Euro Boat',sellerSlug:'euro-boat',year:'2026'},
  'euro-boat-850ht-hard-top':{seller:'Euro Boat',sellerSlug:'euro-boat',year:'2026'},
  'euro-boat-760':{seller:'Euro Boat',sellerSlug:'euro-boat',year:'2025'},
  'yener-35':{seller:'Yener Tekne',sellerSlug:'yener-tekne',year:'2024'},
  'lady-luna-32m':{seller:'Lady Luna Charter',sellerSlug:'lady-luna',year:'2022'},
  'sunreef-charter':{seller:'Sunreef Yachts Charter',sellerSlug:'sunreef-yachts-charter',year:'2024'},
  'lady-luna-exterior':{seller:'Lady Luna Charter',sellerSlug:'lady-luna',year:'2022'},
  'lady-luna-experience':{seller:'Lady Luna Charter',sellerSlug:'lady-luna',year:'2022'}
};

export default async function Page({params}){
  const {slug}=await params;
  const all=[...saleListings,...charterListings];
  const item=all.find(x=>x.slug===slug)||saleListings[1];
  const isCharter=item.kind==='KİRALIK';
  const info=detailMeta[item.slug]||{seller:'Motoryat Partner',sellerSlug:'magazalar',year:'—'};
  const metaParts=(item.meta||'').split('·').map(x=>x.trim()).filter(Boolean);
  const length=metaParts[0]||'—';
  const status=isCharter?(metaParts[1]||'Charter'):(metaParts[1]||'Satılık');
  const location=!isCharter?(metaParts[2]||'Türkiye'):'Türkiye / Akdeniz';
  const isLadyLuna=item.slug.startsWith('lady-luna');
  const fallbackGallery=isLadyLuna ? ['/charter-luna-hero.webp','/charter-luna-1.webp','/charter-luna-9.webp'] : [item.image];
  const images=[...new Set([item.image,...(item.gallery||[]),...fallbackGallery].filter(Boolean))];
  const related=(isCharter?charterListings:saleListings).filter(x=>x.slug!==item.slug).slice(0,4);
  const listHref=isCharter?'/kiralik':'/satilik';
  const sellerHref=info.sellerSlug==='magazalar'?'/magazalar':'/magaza/'+info.sellerSlug;

  const specs=[
    ['Boy',length],
    ['Yıl',info.year],
    ['Durum',status],
    ['Konum',location],
    ['İlan Türü',isCharter?'Kiralık':'Satılık'],
    ['Yetkili Firma',info.seller]
  ];

  return <><SiteHeader/><main className="syApprovedDetail">
    <div className="syApprovedCrumbBar">
      <div className="syApprovedWrap syApprovedCrumb">
        <a href="/">Motoryat</a><span>›</span>
        <a href={listHref}>{isCharter?'Kiralık':'Satılık'}</a><span>›</span>
        <b>{item.title}</b>
      </div>
    </div>

    <div className="syApprovedGalleryWrap">
      <YachtDetailGallery images={images} title={item.title}/>
    </div>

    <div className="syApprovedWrap syApprovedTopGrid">
      <section className="syApprovedMain">
        <div className="syApprovedTitleRow">
          <div>
            <h1>{item.title}</h1>
            <p>⌖ {location}</p>
          </div>
          <strong>{item.price}</strong>
        </div>

        <div className="syApprovedFacts">
          <div><small>BOY</small><b>{length}</b></div>
          <div><small>YIL</small><b>{info.year}</b></div>
          <div><small>DURUM</small><b>{status}</b></div>
          <div><small>MARKA / MODEL</small><b>{item.title}</b></div>
        </div>

        <section className="syApprovedSection">
          <h2>Açıklama</h2>
          <p>{isCharter
            ? item.title+' charter ilanı. Güncel müsaitlik, rota ve fiyat bilgileri için yetkili firmadan bilgi alabilirsiniz.'
            : item.title+' satılık ilanı. Temel bilgiler, görseller ve yetkili satıcı iletişim bilgileri bu sayfada sunulur.'}</p>
        </section>

        <section className="syApprovedSection">
          <h2>Teknik Özellikler</h2>
          <div className="syApprovedSpecs">
            {specs.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}
          </div>
        </section>
      </section>

      <aside className="syApprovedSide">
        <div className="syApprovedContactCard">
          <h2>İletişim ve Firma</h2>

          <div className="syApprovedContactActions">
            <a className="primary" href="#">✉ Bilgi Al</a>
            <a href="#">☎ Telefon ile Ara</a>
            <a className="whatsapp" href="#">WhatsApp</a>
          </div>

          <div className="syApprovedFirm">
            <div className="syApprovedFirmLogo">
              <img src="/motoryat-logo.svg" alt=""/>
            </div>
            <div>
              <small>SATICI / FİRMA</small>
              <h3>{info.seller}</h3>
              <p>⌖ {location}</p>
              <a href={sellerHref}>Mağaza Profili →</a>
            </div>
          </div>
        </div>

        <a className="syApprovedAd" href="https://laromanacharter.com/" target="_blank" rel="noopener noreferrer" aria-label="La Romana Charters">
          <img src="/ads/la-romana-charters-300x300.gif" alt="La Romana Charters"/>
        </a>
      </aside>
    </div>

    {related.length>0&&<section className="syApprovedRelated">
      <div className="syApprovedWrap">
        <div className="syApprovedRelatedHead">
          <h2>Benzer İlanlar</h2>
          <a href={listHref}>Tümünü Gör →</a>
        </div>
        <div className="sqYachtGrid">
          {related.map((x,i)=><YachtCard key={x.slug} item={x} type={isCharter?'charter':'sale'} seller={info.seller} year={info.year} refit="—" index={i}/>)}
        </div>
      </div>
    </section>}
  </main><Footer/></>
}
