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
  const detailVideo=item.slug==='grande-mare-gm-42-fly-la-notte-gm-40'?'/listings/grande-mare/gm42/walkthrough.mp4':null;
  const fallbackGallery=isLadyLuna ? ['/charter-luna-hero.webp','/charter-luna-1.webp','/charter-luna-9.webp'] : [item.image];
  const images=[...new Set([item.image,...(item.gallery||[]),...fallbackGallery].filter(Boolean))];
  const related=(isCharter?charterListings:saleListings)
    .filter(x=>x.slug!==item.slug)
    .sort((a,b)=>(b.gallery?.length||0)-(a.gallery?.length||0))
    .slice(0,2);
  const listHref=isCharter?'/kiralik':'/satilik';
  const sellerHref=info.sellerSlug==='magazalar'?'/magazalar':'/magaza/'+info.sellerSlug;

  return <><SiteHeader/><main className="syRefPage">
    <div className="syRefGalleryWrap">
      <YachtDetailGallery images={images} title={item.title}/>
      {detailVideo ? <div style={{maxWidth:'1280px',margin:'18px auto 0',padding:'0 24px'}}><video controls playsInline preload="metadata" style={{display:'block',width:'100%',maxHeight:'680px',objectFit:'cover',background:'#0D1B2A'}}><source src={detailVideo} type="video/mp4"/></video></div> : null}

      <a className="syRefBrochure" href="#" aria-label="Broşürü indir">
        <span>BROŞÜRÜ İNDİRİN</span><b>PDF</b>
      </a>

      <div className="syRefTabs">
        <nav aria-label="İlan bölümleri">
          <a className="active" href="#genel-bakis">GENEL BAKIŞ</a>
          <a href="#teknik">TEÇHİZAT</a>
          <a href="#teknik">ÖZELLİKLER</a>
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

        <div className="syRefCopy">
          <p>{item.title}, seçili görselleri, temel teknik bilgileri ve yetkili firma iletişim alanlarını tek sayfada sunan sade bir ilan yapısına sahiptir.</p>
          <p>{isCharter
            ? 'Güncel müsaitlik, rota ve fiyat bilgileri için yetkili firma ile doğrudan iletişime geçebilirsiniz.'
            : 'Fiyat, konum, donanım ve güncel satış durumu için yetkili firma ile doğrudan iletişime geçebilirsiniz.'}</p>
        </div>

        <button type="button" className="syRefExpand">⌄ GENİŞLETMEK</button>

        <section className="syRefTechnical" id="teknik">
          <h2>TEKNİK ÖZELLİKLER</h2>
          <div className="syRefTechGrid">
            <div><span>Boy</span><b>{length}</b></div>
            <div><span>Yıl</span><b>{info.year}</b></div>
            <div><span>Durum</span><b>{status}</b></div>
            <div><span>Konum</span><b>{location}</b></div>
            <div><span>İlan Türü</span><b>{isCharter?'Kiralık':'Satılık'}</b></div>
            <div><span>Yetkili Firma</span><b>{info.seller}</b></div>
          </div>
        </section>
      </section>

      <aside className="syRefSidebar">
        <div className="syRefSellerCard">
          <div className="syRefSellerTop">
            <span>{isCharter?'KİRALIK':'SATILIK'}</span>
            <div className="syRefSellerBrand">
              <img src="/motoryat-logo.svg" alt=""/>
              <b>{info.seller}</b>
            </div>
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
    </section>
  </main><Footer/></>
}
