import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
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

function pick(item,...keys){
  for(const key of keys){
    const value=item?.[key];
    if(value!==undefined && value!==null && value!=='') return value;
  }
  return null;
}
function textValue(value,suffix=''){
  if(value===undefined || value===null || value==='') return null;
  return String(value)+(suffix||'');
}
function row(label,value){
  return value===undefined || value===null || value==='' ? null : [label,String(value)];
}

export default async function Page({params}){
  const {slug}=await params;
  const all=[...saleListings,...charterListings];
  const item=all.find(x=>x.slug===slug)||saleListings[1];
  const isCharter=item.kind==='KİRALIK';
  const info=detailMeta[item.slug]||{seller:item.seller||item.store_name||'Motoryat Partner',sellerSlug:item.sellerSlug||item.store_slug||'magazalar',year:item.year||'—'};
  const metaParts=(item.meta||'').split('·').map(x=>x.trim()).filter(Boolean);
  const length=metaParts[0]||'—';
  const status=isCharter?(metaParts[1]||'Charter'):(metaParts[1]||'Satılık');
  const location=!isCharter?(metaParts[2]||'Türkiye'):'Türkiye / Akdeniz';
  const isLadyLuna=item.slug.startsWith('lady-luna');
  const detailVideo=item.slug==='grande-mare-gm-42-fly-la-notte-gm-40'?'/listings/grande-mare/gm42/walkthrough.mp4':null;
  const fallbackGallery=isLadyLuna ? ['/charter-luna-hero.webp','/charter-luna-1.webp','/charter-luna-9.webp'] : [item.image];
  const images=[...new Set([item.image,...(item.gallery||[]),...fallbackGallery].filter(Boolean))];
  const related=(isCharter?charterListings:saleListings)
    .filter(x=>x.slug!==item.slug)
    .sort((a,b)=>(b.gallery?.length||0)-(a.gallery?.length||0))
    .slice(0,2);
  const listHref=isCharter?'/kiralik':'/satilik';
  const relatedAds=isCharter
    ? ['/ads/motoryat-house-ad-300-png.webp']
    : ['/ads/motoryat-firma-magaza-300.webp'];
  const sellerHref=info.sellerSlug==='magazalar'?'/magazalar':'/magaza/'+info.sellerSlug;

  const generalRows=[
    row('Tekne kimliği',pick(item,'listing_id','boat_id','id')),
    row('Tekne modeli',pick(item,'model','model_name')),
    row('Tekne adı',pick(item,'boat_name','vessel_name','name')),
    row('Üretici',pick(item,'manufacturer','brand_name','brand')),
    row('Tekne türü',pick(item,'vessel_type','boat_type')),
    row('Kategori',pick(item,'category','condition')),
    row('Üretim yılı',pick(item,'year')),
    row('Durum',pick(item,'condition','status_text')),
    row('Konum',pick(item,'location')),
    row('Bayrak',pick(item,'flag','flag_country')),
    row('Kişi',pick(item,'guest_capacity','guests','capacity')),
    row('Kabin / yataklar',pick(item,'cabins_beds','cabins_and_beds')),
    row('Gövde malzemesi',pick(item,'hull_material')),
    row('Gövde türü',pick(item,'hull_type'))
  ].filter(Boolean);

  const technicalRows=[
    row('Motor',pick(item,'engine','engine_model','motor')),
    row('Motor gücü',pick(item,'engine_power','motor_power','power')),
    row('Motor saati',pick(item,'engine_hours','motor_hours')),
    row('Yakıt',pick(item,'fuel','fuel_type')),
    row('Tahrik',pick(item,'drive','drive_type','propulsion')),
    row('Seyir hızı',pick(item,'cruising_speed','cruise_speed')),
    row('Azami hız',pick(item,'max_speed','maximum_speed')),
    row('Seyir hızında tüketim',pick(item,'cruise_consumption','cruising_consumption')),
    row('Azami hızda tüketim',pick(item,'max_consumption','maximum_consumption')),
    row('Yakıt deposu',pick(item,'fuel_tank','fuel_capacity')),
    row('Temiz su deposu',pick(item,'water_tank','fresh_water_capacity')),
    row('Pis su tankı',pick(item,'waste_tank','black_water_capacity')),
    row('Duş',pick(item,'showers','shower_count')),
    row('Tuvalet sayısı',pick(item,'toilets','wc_count')),
    row('Isıtıcı',pick(item,'heating','heater')),
    row('Jeneratör',pick(item,'generator')),
    row('Klima',pick(item,'air_conditioning','aircon'))
  ].filter(Boolean);

  const visualFacts=[
    row('BOY',pick(item,'length') ? textValue(pick(item,'length'),' m') : length),
    row('GENİŞLİK',pick(item,'beam','width') ? textValue(pick(item,'beam','width'),' m') : null),
    row('SU ÇEKİMİ',pick(item,'draft') ? textValue(pick(item,'draft'),' m') : null),
    row('AĞIRLIK',pick(item,'weight','displacement')),
    row('MOTOR',pick(item,'engine_power','motor_power','power')),
    row('KABİN',pick(item,'cabins'))
  ].filter(Boolean).slice(0,6);

  const description=pick(item,'description','long_description','short_description');
  const equipmentRaw=pick(item,'equipment','equipment_list','features');
  const equipmentItems=Array.isArray(equipmentRaw)
    ? equipmentRaw.filter(Boolean)
    : typeof equipmentRaw==='string'
      ? equipmentRaw.split(/\n|,|;/).map(x=>x.trim()).filter(Boolean)
      : [];
  const maintenance=pick(item,'maintenance','maintenance_history','service_history','refit_notes');

  return <><SiteHeader/><main className="syRefPage">
    <div className="syRefGalleryWrap">
      <YachtDetailGallery images={images} title={item.title}/>
      {detailVideo ? <div style={{maxWidth:'1280px',margin:'18px auto 0',padding:'0 24px'}}><video controls playsInline preload="metadata" style={{display:'block',width:'100%',maxHeight:'680px',objectFit:'cover',background:'#0D1B2A'}}><source src={detailVideo} type="video/mp4"/></video></div> : null}

      <div className="syRefTabs">
        <nav aria-label="İlan bölümleri">
          <a className="active" href="#genel-bakis">İLAN DETAYLARI</a>
        </nav>
        <div className="syRefTabsActions">
          <button type="button" aria-label="Paylaş">↗</button>
          <a href={listHref}>{isCharter?'KİRALAMA ARAMA':'SATIŞ ARAMA'}⌕</a>
        </div>
      </div>
    </div>

    <div className="syRefContentWrap" id="genel-bakis">
      <section className="syRefOverview">
        <div className="syRefOverviewTop">
          <div>
            <span className="syRefEyebrow">{isCharter?'KİRALIK':'SATILIK'}</span>
            <h1>{item.title}</h1>
          </div>
          <button type="button" className="syRefInfoDot" aria-label="İlan bilgisi">i</button>
        </div>

        <div className="syRefMetaLine">
          <span>⌁ {info.seller}</span>
          <span>▣ {info.year}</span>
          <span>↔ {length}</span>
          <span>♙ {isCharter?'Charter':'Satılık'}</span>
        </div>

        {description ? <div className="syRefCopy">
          <p>{description}</p>
        </div> : null}

        {visualFacts.length ? <div className="realVisualFacts">
          {visualFacts.map(([label,value])=><div key={label}><small>{label}</small><b>{value}</b></div>)}
        </div> : null}

        {generalRows.length ? <section className="realDataSection">
          <h2>Tekne Bilgileri</h2>
          <dl className="realDataList">
            {generalRows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section> : null}

        {technicalRows.length ? <section className="realDataSection">
          <h2>Teknik Bilgiler</h2>
          <dl className="realDataList">
            {technicalRows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section> : null}

        {equipmentItems.length ? <details className="realDetailAccordion">
          <summary><span>Donanım & Teçhizat</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody">
            <div className="realEquipmentList">
              {equipmentItems.map((x,i)=><span key={i}>✓ {x}</span>)}
            </div>
          </div>
        </details> : null}

        {maintenance ? <details className="realDetailAccordion">
          <summary><span>Bakım & Servis Geçmişi</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody"><p>{maintenance}</p></div>
        </details> : null}
      </section>

      <aside className="syRefSidebar">
        <div className="syRefSellerCard">
          <div className="syRefSellerTop premiumDetailSellerTop">
            <span>{isCharter?'KİRALIK':'SATILIK'}</span>
            <div className="premiumDetailSellerName">
              <small>YETKİLİ SATICI</small>
              <b>{info.seller}</b>
            </div>
            <i aria-label="Doğrulanmış firma">✓</i>
          </div>

          <div className="syRefSellerActions">
            <a href="#">☎</a>
            <a className="more" href={sellerHref}>DAHA FAZLA BİLGİ</a>
            <a href="#">✉</a>
          </div>

          <div className="syRefPriceBlock">
            <small>{isCharter?'CHARTER FİYATI':'LİSTELENMİŞ FİYAT'}</small>
            <strong>{item.price}</strong>
            <p>MEVCUT KONUM: <b>{location}</b></p>
          </div>

          <a className="syRefSellerBrochure" href="#">BROŞÜRÜ İNDİRİN <b>PDF</b></a>
        </div>

        <a className="syRefAd" href="https://laromanacharter.com/" target="_blank" rel="noopener noreferrer" aria-label="La Romana Charters">
          <img src="/ads/la-romana-charters-300x300.gif" alt="La Romana Charters"/>
        </a>
      </aside>
    </div>

    <section className="syRefBottom">
      <div className="syRefBottomGrid">
      <div className="syRefBottomLeft">
        <div className="syRefSectionHead syRefRelatedHead">
          <div>
            <small>SİZİN İÇİN SEÇTİKLERİMİZ</small>
            <h2>Benzer İlanlar</h2>
          </div>
          <a href={listHref}>Tüm İlanları Gör ›</a>
        </div>

        <div className="syRefShowcaseList">
          {related.map((x,i)=>{
            const xMeta=detailMeta[x.slug]||{seller:'Motoryat Partner',year:'—'};
            const xGallery=[...new Set([x.image,...(x.gallery||[])].filter(Boolean))];
            const photoCount=xGallery.length;
            const smallOne=xGallery[1]||null;
            const xParts=(x.meta||'').split('·').map(v=>v.trim()).filter(Boolean);
            const xLength=xParts[0]||'—';
            return <a className={"syRefShowcaseCard "+(isCharter?'charter':'sale')} href={'/tekne/'+x.slug} key={x.slug}>
              <div className="syRefShowcaseMain">
                <img src={x.image} alt={x.title}/>
                <div className="syRefShowcaseMedia">
                  <span>▣ {photoCount}</span>
                  <span>▶ 0</span>
                </div>
              </div>

              <div className="syRefShowcaseSmall">
                {smallOne
                  ? <img src={smallOne} alt={x.title+' görünüm 2'}/>
                  : <div className="syRefShowcaseEmpty"><span>EK FOTOĞRAF YOK</span></div>}
                <div className="syRefShowcaseSeller">
                  <strong>{isCharter?'KİRALIK':'SATILIK'}</strong>
                  <span>{xMeta.seller}</span>
                  <small>YETKİLİ SATICI</small>
                </div>
              </div>

              <div className="syRefShowcaseInfo">
                <h3>{x.title}</h3>
                <p>UZUNLUK: {xLength}</p>
                <div className="syRefShowcaseFacts">
                  <div><small>YIL</small><b>{xMeta.year}</b></div>
                  <div><small>{isCharter?'TÜR':'DURUM'}</small><b>{isCharter?'KİRALIK':'SATILIK'}</b></div>
                </div>
                <div className="syRefShowcasePrice">
                  <small>{isCharter?'HAFTALIK FİYAT':'FİYATI'}</small>
                  <strong>{x.price}</strong>
                </div>
              </div>

              <div className="syRefShowcaseBand">
                <span>›</span>
                <b>{isCharter?'KİRALAMA LİSTESİ':'SATIŞ İLANI'}</b>
              </div>
            </a>
          })}
        </div>
      </div>
      <aside className="syRefBottomAds" aria-label="İlan reklamları">
        {relatedAds.slice(0,related.length>3?2:1).map((src,i)=><a className="syRefBottomAd" href="/magazalar" key={src+i}><img src={src} alt="Motoryat reklam"/></a>)}
      </aside>
      </div>
    </section>
  </main><Footer/></>
}
