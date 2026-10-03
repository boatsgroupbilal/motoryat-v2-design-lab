import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import {saleListings,charterListings} from '../../../data/content';

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
  const images=isLadyLuna ? [item.image,'/charter-luna-1.webp','/charter-luna-9.webp'] : [item.image,item.image,item.image];
  const related=(isCharter?charterListings:saleListings).filter(x=>x.slug!==item.slug).slice(0,4);
  const listHref=isCharter?'/kiralik':'/satilik';
  const sellerHref=info.sellerSlug==='magazalar'?'/magazalar':'/magaza/'+info.sellerSlug;
  const listingNo='MY-'+item.slug.slice(0,4).toUpperCase()+'-26';
  const specs=[
    ['İlan Türü',isCharter?'Kiralık':'Satılık'],
    ['Boy',length],
    ['Yıl',info.year],
    ['Durum',status],
    ['Konum',location],
    ['Yetkili Firma',info.seller]
  ];

  return <><SiteHeader/><main className="syYachtDetail syYachtDetailV2">
    <div className="syDetailCrumbBar">
      <div className="syContainer syDetailCrumb">
        <a href="/">Motoryat</a><span>›</span>
        <a href={listHref}>{isCharter?'Kiralık':'Satılık'}</a><span>›</span>
        <b>{item.title}</b>
      </div>
    </div>

    <section className="syDetailGallery" aria-label={item.title+' görsel galerisi'}>
      <div className="syDetailHeroImg">
        <img src={images[0]} alt={item.title}/>
        <span className="syDetailGalleryBadge">{isCharter?'KİRALIK':'SATILIK'}</span>
        <button className="syDetailGalleryButton" type="button">Tüm fotoğraflar</button>
      </div>
      <div className="syDetailThumbs">
        <div className="syDetailThumb"><img src={images[1]} alt={item.title+' görünüm 2'}/></div>
        <div className="syDetailThumb"><img src={images[2]} alt={item.title+' görünüm 3'}/><span>GALERİ</span></div>
      </div>
    </section>

    <section className="syDetailSummary">
      <div className="syContainer syDetailSummaryGrid">
        <div className="syDetailTitleBlock">
          <div className="syDetailEyebrow"><i></i>{isCharter?'FOR CHARTER':'FOR SALE'}</div>
          <h1>{item.title}</h1>
          <p>{item.meta} · İlan No: {listingNo}</p>
          <div className="syDetailTitleActions">
            <button type="button">♡ Favoriye Ekle</button>
            <button type="button">↗ Paylaş</button>
            <button type="button">İlanı Bildir</button>
          </div>
        </div>
        <div className="syDetailHeadlinePrice">
          <small>{isCharter?'CHARTER FİYATI':'SATIŞ FİYATI'}</small>
          <strong>{item.price}</strong>
          <span>Satıcıdan güncel bilgi alın</span>
        </div>
      </div>
    </section>

    <section className="syDetailQuickWrap">
      <div className="syContainer syDetailQuick">
        <div><small>BOY</small><b>{length}</b></div>
        <div><small>YIL</small><b>{info.year}</b></div>
        <div><small>DURUM</small><b>{status}</b></div>
        <div><small>KONUM</small><b>{location}</b></div>
        <div><small>FİRMA</small><b>{info.seller}</b></div>
      </div>
    </section>

    <div className="syContainer syDetailBody">
      <article className="syDetailArticle">
        <nav className="syDetailTabs" aria-label="İlan detay bölümleri">
          <a className="active" href="#genel-bakis">Genel Bakış</a>
          <a href="#teknik">Teknik Özellikler</a>
          <a href="#galeri">Galeri</a>
          <a href="#konum">Konum</a>
        </nav>

        <section className="syDetailSection" id="genel-bakis">
          <div className="syDetailSectionHead"><div><span>İLAN DETAYI</span><h2>{item.title}</h2></div></div>
          <p className="syDetailLead">{isCharter ? item.title+' charter ilanı; görselleri, temel bilgileri ve doğrudan bilgi talebi akışını tek sayfada sunar.' : item.title+' satılık ilanı; görselleri, temel teknik bilgileri ve satıcı iletişim alanlarını tek sayfada sunar.'}</p>
          <p>İlanda doğrulanmış üretici, model, motor, donanım, bakım ve kullanım bilgileri bulunduğunda bu bölüm genişletilebilir. Fiyat ve müsaitlik bilgileri için yetkili firmadan güncel teyit alınmalıdır.</p>
        </section>

        <section className="syDetailSection" id="teknik">
          <div className="syDetailSectionHead"><div><span>ÖZELLİKLER</span><h2>Teknik Bilgiler</h2></div></div>
          <div className="sySpecs">{specs.map(([k,v])=><div key={k}><small>{k}</small><b>{v}</b></div>)}</div>
        </section>

        <section className="syDetailSection">
          <div className="syDetailSectionHead"><div><span>İLAN HİZMETLERİ</span><h2>Hızlı Bilgi ve Teklif</h2></div></div>
          <div className="syDetailFeatureList">
            <div>Yetkili firma iletişim alanı</div>
            <div>Teklif / bilgi talep formu</div>
            <div>Telefon ve WhatsApp erişimi</div>
            <div>Görsel galeri ve ilan özeti</div>
          </div>
        </section>

        <section className="syDetailSection" id="galeri">
          <div className="syDetailSectionHead"><div><span>GALERİ</span><h2>{item.title} görselleri</h2></div></div>
          <div className="syDetailWideImage"><img src={images[1]} alt={item.title+' detay görünümü'}/></div>
        </section>

        <section className="syDetailSection" id="konum">
          <div className="syDetailSectionHead"><div><span>KONUM</span><h2>İlan Konumu</h2></div></div>
          <div className="syDetailLocationBox"><div><small>KONUM BİLGİSİ</small><b>{location}</b></div></div>
        </section>
      </article>

      <aside className="syDetailAside">
        <div className="syInquiry">
          <div className="syInquiryPrice">
            <small>{isCharter?'CHARTER / HAFTALIK':'SATIŞ FİYATI'}</small>
            <strong>{item.price}</strong>
            <span>Güncel fiyat ve koşullar için bilgi isteyin.</span>
          </div>
          <div className="syInquiryForm syInquiryFormCompact" id="bilgi-formu">
            <h3>Bu ilan hakkında bilgi alın</h3>
            <div className="syInquiryTwoCol">
              <input type="text" aria-label="Ad soyad" placeholder="Ad Soyad"/>
              <input type="tel" aria-label="Telefon" placeholder="Telefon"/>
            </div>
            <input type="email" aria-label="E-posta" placeholder="E-posta"/>
            <textarea aria-label="Mesaj" defaultValue={item.title+' hakkında bilgi almak istiyorum.'}></textarea>
            <button type="button">BİLGİ / TEKLİF İSTE</button>
          </div>
          <div className="syContactButtons">
            <a href="#bilgi-formu">☎ Telefon</a>
            <a href="#bilgi-formu">WhatsApp</a>
          </div>
        </div>

        <div className="syStoreProfileCard">
          <div className="syStoreProfileHead">
            <div className="syStoreProfileLogo"><img src="/motoryat-logo.svg" alt=""/></div>
            <div><small>YETKİLİ MAĞAZA</small><h3>{info.seller}</h3><p>{location}</p></div>
          </div>
          <div className="syStoreProfileMeta">
            <span>Mağaza Profili</span>
            <span>{isCharter?'Charter':'Satış'}</span>
          </div>
          <a href={sellerHref}>MAĞAZAYI GÖR <span>→</span></a>
        </div>

        <div className="syAd">300 × 300<small>REKLAM ALANI</small></div>
      </aside>
    </div>

    {related.length>0 && <section className="syDetailRelated">
      <div className="syContainer">
        <div className="syDetailRelatedHead">
          <div><span>{isCharter?'DİĞER CHARTER İLANLARI':'BENZER İLANLAR'}</span><h2>Bunlar da ilginizi çekebilir</h2></div>
          <a href={listHref}>Tüm ilanları gör →</a>
        </div>
        <div className="sqYachtGrid syDetailRelatedGrid">
          {related.map((x,i)=><YachtCard key={x.slug} item={x} type={isCharter?'charter':'sale'} seller={isCharter?'Charter Partner':'Yetkili Satıcı'} year={info.year} refit="—" index={i}/>)}
        </div>
      </div>
    </section>}
  </main><Footer/></>
}