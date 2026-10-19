import {notFound} from 'next/navigation';
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
  const item=all.find(x=>x.slug===slug);
  if(!item) notFound();
  const isCharter=item.kind==='KİRALIK';
  const fallbackInfo=detailMeta[item.slug]||{};
  const info={
    seller:item.seller||item.store_name||fallbackInfo.seller||'Motoryat Partner',
    sellerSlug:item.sellerSlug||item.store_slug||fallbackInfo.sellerSlug||'magazalar',
    year:item.year||fallbackInfo.year||'—'
  };
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

  const performanceRows=[
    row('Motor',pick(item,'engine','engine_model','motor')),
    row('Motor gücü',pick(item,'engine_power','motor_power','power')),
    row('Motor saati',pick(item,'engine_hours','motor_hours')),
    row('Yakıt',pick(item,'fuel','fuel_type')),
    row('Tahrik',pick(item,'drive','drive_type','propulsion')),
    row('Seyir hızı',pick(item,'cruising_speed','cruise_speed')),
    row('Maksimum hız',pick(item,'max_speed','maximum_speed')),
    row('Seyir tüketimi',pick(item,'cruise_consumption','cruising_consumption')),
    row('Azami hızda tüketim',pick(item,'max_consumption','maximum_consumption'))
  ].filter(Boolean);
  const tankRows=[
    row('Yolcu kapasitesi',pick(item,'guest_capacity','guests','capacity')),
    row('Yakıt tankı',pick(item,'fuel_tank','fuel_capacity')),
    row('Su tankı',pick(item,'water_tank','fresh_water_capacity')),
    row('Pis su tankı',pick(item,'waste_tank','black_water_capacity'))
  ].filter(Boolean);
  const comfortRows=[
    row('Duş',pick(item,'showers','shower_count')),
    row('Tuvalet sayısı',pick(item,'toilets','wc_count')),
    row('Isıtıcı',pick(item,'heating','heater')),
    row('Jeneratör',pick(item,'generator')),
    row('Klima',pick(item,'air_conditioning','aircon'))
  ].filter(Boolean);
  const technicalGroups=[
    ['Motor ve Performans',performanceRows],
    ['Tanklar ve Kapasite',tankRows],
    ['Konfor ve Sistemler',comfortRows]
  ].filter(([,rows])=>rows.length);

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

    </div>

    <div className="syRefContentWrap" id="genel-bakis">
      <section className="syRefOverview v2ListingEditorial">
        <div className="syRefOverviewTop">
          <div>
            <span className="syRefEyebrow">{isCharter?'KİRALIK':'SATILIK'}</span>
            <h1>{item.title}</h1>
          </div>

        </div>

        <div className="syRefMetaLine">
          <span>⌁ {info.seller}</span>
          {info.year!=='—'&&<span>▣ {info.year}</span>}
          <span>↔ {length}</span>
          <span>♙ {isCharter?'Charter':'Satılık'}</span>
        </div>

        {description ? <section className="v2ListingDescription">
          <h2>İlan Hakkında</h2>
          <div className="syRefCopy"><p>{description}</p></div>
        </section> : null}

        {visualFacts.length ? <section className="v2ListingHighlights">
          <h2>Teknik Özellikler</h2>
          <div className="realVisualFacts">
            {visualFacts.map(([label,value])=><div key={label}><small>{label}</small><b>{value}</b></div>)}
          </div>
        </section> : null}

        {generalRows.length ? <details className="realDetailAccordion v2TechAccordion">
          <summary><span>Genel Tekne Bilgileri</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody">
            <dl className="realDataList">
              {generalRows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </details> : null}

        {technicalGroups.map(([title,rows])=><details className="realDetailAccordion v2TechAccordion" key={title}>
          <summary><span>{title}</span><b>Daha Fazla Gör</b></summary>
          <div className="realDetailAccordionBody">
            <dl className="realDataList">
              {rows.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </details>)}

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
        <div className="syRefSellerCard syRefSellerCardSimple">
          <div className="syRefSellerTop syRefSellerSimpleTop">
            <span>{isCharter?'KİRALIK':'SATILIK'}</span>
            <div className="syRefSellerSimpleName">
              <b>{info.seller}</b>
              <small>{location}</small>
            </div>
          </div>

          <div className="syRefPriceBlock">
            <small>{isCharter?'CHARTER FİYATI':'FİYAT'}</small>
            <strong>{item.price||'Fiyat Sorunuz'}</strong>
          </div>

          <div className="syRefSellerActions">
            <a className="more" href={sellerHref}>SATICI / MAĞAZA BİLGİLERİ</a>
          </div>
        </div>
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
