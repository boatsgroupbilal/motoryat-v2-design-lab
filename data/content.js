import recoveredListings01 from './local/listings-01.js';
import recoveredListings02 from './local/listings-02.js';
import recoveredListings03 from './local/listings-03.js';
import recoveredListings04a from './local/listings-04a.js';
import recoveredListings04b from './local/listings-04b.js';
import recoveredListings05a from './local/listings-05a.js';
import recoveredListings05b from './local/listings-05b.js';
import recoveredListings06 from './local/listings-06.js';
import recoveredListings07 from './local/listings-07.js';
import recoveredListings08 from './local/listings-08.js';
import recoveredListings09 from './local/listings-09.js';
import recoveredListings10 from './local/listings-10.js';
import recoveredListings11 from './local/listings-11.js';
import recoveredListings12 from './local/listings-12.js';
import recoveredProducts from './local/products.js';
import recoveredStores01 from './local/stores-01.js';
import recoveredStores02 from './local/stores-02.js';
import recoveredBrands01 from './local/brands-01.js';
import recoveredBrands02 from './local/brands-02.js';
import recoveredBrands03 from './local/brands-03.js';
import recoveredBrands04 from './local/brands-04.js';
import recoveredBrands05 from './local/brands-05.js';
import recoveredBrands06 from './local/brands-06.js';
import localCompanies from './export/companies.json';
import localMarinas from './export/marinas.json';
import generatedImageMap from './local/generated-image-map.json';

const recoveredListings=[
  ...recoveredListings01,...recoveredListings02,...recoveredListings03,
  ...recoveredListings04a,...recoveredListings04b,...recoveredListings05a,...recoveredListings05b,
  ...recoveredListings06,...recoveredListings07,...recoveredListings08,...recoveredListings09,...recoveredListings10,...recoveredListings11,...recoveredListings12
];
const recoveredStores=[...recoveredStores01,...recoveredStores02];
const recoveredBrands=[...recoveredBrands01,...recoveredBrands02,...recoveredBrands03,...recoveredBrands04,...recoveredBrands05,...recoveredBrands06];

const fallbackSaleListings = [
 {slug:'euro-boat-700c-center-console',title:'Euro Boat 700C Center Console',meta:'7.00 m · Yeni · İstanbul',price:'Fiyat Sorunuz',image:'/sale-euro-700.webp',href:'/tekne/euro-boat-700c-center-console'},
 {slug:'euro-boat-850ht-hard-top',title:'Euro Boat 850HT Hard Top',meta:'8.50 m · Yeni · İstanbul',price:'Fiyat Sorunuz',image:'/sale-euro-850.webp',href:'/tekne/euro-boat-850ht-hard-top'},
 {slug:'euro-boat-760',title:'Euro Boat 760',meta:'7.60 m · Yeni · İstanbul',price:'Fiyat Sorunuz',image:'/sale-euro-760.webp',href:'/tekne/euro-boat-760'},
 {slug:'yener-35',title:'Yener 35',meta:'35 ft · İstanbul',price:'Fiyat Sorunuz',image:'/sale-yener-35.webp',href:'/tekne/yener-35'},
];

const fallbackCharterListings = [
 {slug:'lady-luna-32m',title:'Lady Luna',meta:'32 m · Motor Yacht Charter',price:'Haftalık teklif alın',image:'/charter-luna-hero.webp',gallery:['/charter-luna-1.webp','/charter-luna-9.webp'],href:'/tekne/lady-luna-32m',kind:'KİRALIK'},
 {slug:'sunreef-charter',title:'Sunreef Charter',meta:'Luxury Catamaran',price:'Haftalık teklif alın',image:'/charter-sunreef.webp',href:'/tekne/sunreef-charter',kind:'KİRALIK'},
 {slug:'lady-luna-exterior',title:'Lady Luna Exterior',meta:'32 m · Crewed Charter',price:'Haftalık teklif alın',image:'/charter-luna-1.webp',gallery:['/charter-luna-hero.webp','/charter-luna-9.webp'],href:'/tekne/lady-luna-exterior',kind:'KİRALIK'},
 {slug:'lady-luna-experience',title:'Lady Luna Experience',meta:'32 m · Premium Charter',price:'Haftalık teklif alın',image:'/charter-luna-9.webp',gallery:['/charter-luna-hero.webp','/charter-luna-1.webp'],href:'/tekne/lady-luna-experience',kind:'KİRALIK'},
];

const storeImages={
  'admiral-marine-equipment':'/store-admiral.webp',
  'mengi-yay':'/store-mengi.webp',
  'rmk-yachts':'/media/stores/rmk-yachts-cover.webp',
  'yener-tekne':'/sale-yener-35.webp',
  'euro-boat-turkey':'/sale-euro-700.webp'
};

const exactListingImages={
  'euro-boat-700c-center-console':'/sale-euro-700.webp',
  'euro-boat-850ht-hard-top':'/sale-euro-850.webp',
  'euro-boat-760ht-hard-top':'/sale-euro-760.webp',
  'yener-tekne-ynr-35-trawler':'/sale-yener-35.webp'
};

/*
 * MOTORYAT OWNED MEDIA BRIDGE
 * The V31734 production snapshot already contains these assets under public/.
 * On tasarim.motoryat.com we read them from the owner-controlled motoryat.com
 * static origin, so no Supabase Storage calls are needed for the design lab.
 */
const OWNED_MEDIA_ORIGIN='https://motoryat.com';

const euroMediaFolders={
  'euro-boat-850cc-cabin-cruiser':'850cc-cabin-cruiser',
  'euro-boat-850ht-hard-top':'850ht-hard-top',
  'euro-boat-760ht-hard-top':'760ht-hard-top',
  'euro-boat-600cc-cabin-cruiser':'600cc-cabin-cruiser',
  'euro-boat-600wa-walkaround':'600wa-walkaround',
  'euro-boat-600fm-fisherman':'600fm-fisherman',
  'euro-boat-520cc-cabin-cruiser':'520cc-cabin-cruiser',
  'euro-boat-850c-center-console':'850c-center-console',
  'euro-boat-700c-center-console':'700c-center-console',
  'euro-boat-600-center-console-2019':'600-center-console-2019',
  'euro-boat-575g-gezi-teknesi':'575g-leisure-boat',
  'euro-boat-500g-gezi-teknesi':'500g-leisure-boat',
  'euro-boat-475c-center-console':'475c-center-console',
  'euro-boat-420g-gezi-teknesi':'420g-leisure-boat',
  'euro-boat-460b-balikci-teknesi':'460b-fishing-boat',
  'euro-boat-435b-balikci-teknesi':'435b-fishing-boat',
  'euro-boat-420b-balikci-teknesi':'420b-fishing-boat',
  'euro-boat-405b-balikci-teknesi':'405b-fishing-boat',
  'euro-boat-375b-balikci-teknesi':'375b-fishing-boat',
  'euro-boat-335b-balikci-teknesi':'335b-fishing-boat',
  'euro-boat-280f-filika-sandal':'280f-lifeboat-dinghy'
};

const tezmarinLocalSlugs=new Set([
  'tezmarin-xo-dfndr-8',
  'tezmarin-t-tender-ub-270',
  'tezmarin-xo-explr-9',
  'tezmarin-beneteau-antares-8',
  'tezmarin-zen-40s',
  'tezmarin-xo-dfndr-9-motorsuz',
  'tezmarin-t-tender-open-aluminum-360',
  'tezmarin-lagoon-42-millennium',
  'tezmarin-beneteau-antares-12-coupe'
]);
const tezmarinPngSlugs=new Set([
  'tezmarin-t-tender-ub-270',
  'tezmarin-t-tender-open-aluminum-360'
]);

const yenerLocalMedia={
  'yener-tekne-ynr-35-trawler':'/listings/yener-tekne/ynr-35/exterior-01-side.webp',
  'yener-tekne-ynr-42-trawler':'/listings/yener-tekne/ynr-42/official-01.png',
  'yener-tekne-ynr-55-trawler':'/listings/yener-tekne/ynr-55/official-01.png',
  'yener-tekne-ynr-63-aluminyum-trawler':'/listings/yener-tekne/ynr-63/official-01.png',
  'yener-tekne-larimar-24m':'/listings/yener-tekne/larimar/official-01.png',
  'yener-tekne-shiraz-14-20m':'/listings/yener-tekne/shiraz/official-01.png'
};

const ladyLunaGallery=[
  1,2,3,4,6,7,8,10,11,12,14,15,17,18,20,22,23,24,26,28,31,34,36,39,42,43,46,49,52,54
].map(n=>OWNED_MEDIA_ORIGIN+'/media/lady-luna/official-gallery/lady-luna-'+n+'.jpg');

function ownedMediaForSlug(slug){
  if(!slug) return null;

  if(slug==='lady-luna-32-1-m-kiralik-motoryat'){
    return {
      cover:OWNED_MEDIA_ORIGIN+'/media/lady-luna/hero-poster.webp',
      gallery:ladyLunaGallery
    };
  }

  if(slug.startsWith('sunreef-')){
    const folder=slug.replace(/^sunreef-/,'');
    const cover=OWNED_MEDIA_ORIGIN+'/media/sunreef-charter/listings/'+folder+'/001.webp';
    return {cover,gallery:[cover]};
  }

  if(euroMediaFolders[slug]){
    const folder=euroMediaFolders[slug];
    const base=OWNED_MEDIA_ORIGIN+'/media/euro-boat-turkey/listings/'+folder+'/';
    return {
      cover:base+'001.webp',
      gallery:['001.webp','002.webp','003.webp','004.webp'].map(file=>base+file)
    };
  }

  if(tezmarinLocalSlugs.has(slug)){
    const ext=tezmarinPngSlugs.has(slug)?'png':'jpg';
    const cover=OWNED_MEDIA_ORIGIN+'/listing-media/tezmarin/'+slug+'/01.'+ext;
    return {cover,gallery:[cover]};
  }

  if(yenerLocalMedia[slug]){
    const cover=OWNED_MEDIA_ORIGIN+yenerLocalMedia[slug];
    return {cover,gallery:[cover]};
  }

  return null;
}

function prioritizeOwnedMedia(items){
  return [...items].sort((a,b)=>Number(Boolean(ownedMediaForSlug(b.slug)))-Number(Boolean(ownedMediaForSlug(a.slug))));
}

function money(amountMinor,currency){
  if(amountMinor==null || !currency) return 'Fiyat Sorunuz';
  try{return new Intl.NumberFormat('tr-TR',{style:'currency',currency,maximumFractionDigits:0}).format(Number(amountMinor)/100)}
  catch{return `${Number(amountMinor)/100} ${currency}`}
}

function listingToCard(x){
  const type=x.type||x.status||'sale';
  const isCharter=type==='charter';
  const length=x.length!=null?`${x.length} m`:null;
  const numericPrice=isCharter&&x.weekly_rate_minor!=null
    ? money(x.weekly_rate_minor,x.currency||x.price_currency||'EUR')
    : ((x.amount_minor??x.price_minor)!=null
      ? money(x.amount_minor??x.price_minor,x.currency||x.price_currency)
      : null);
  const textPrice=x.price_text && !/^fiyat(?:ı)?\s*sor(?:unuz)?$/i.test(String(x.price_text).trim())
    ? x.price_text
    : null;
  const ownedMedia=ownedMediaForSlug(x.slug);
  return {
    ...x,
    type,
    meta:[length,x.year||null,x.location||null].filter(Boolean).join(' · ') || (isCharter?'Kiralık':'Satılık'),
    price:numericPrice || textPrice || 'Fiyat Sorunuz',
    image:ownedMedia?.cover||x.image_local||generatedImageMap[x.slug]||exactListingImages[x.slug]||(isCharter?'/charter.webp':'/yacht.webp'),
    gallery:ownedMedia?.gallery||x.gallery||[],
    href:'/tekne/'+x.slug,
    kind:isCharter?'KİRALIK':'SATILIK',
    seller:x.seller||x.store_name||'Motoryat Partner',
    sellerSlug:x.seller_slug||x.store_slug||''
  };
}

function productToCard(x,index){
  const productImages=['/product-genoa.webp','/product-boom.webp','/product-codezero.webp','/product-block.webp'];
  return {
    ...x,
    description:x.short_description||x.description||'Tekne ve yat ekipmanı',
    price:x.price_text||money(x.amount_minor??x.price_minor,x.currency),
    image:generatedImageMap[x.slug]||(x.store_slug==='admiral-marine-equipment'?productImages[index%productImages.length]:'/product.webp'),
    storeName:x.store_name||x.brand||'Motoryat Mağazası',
    storeLogo:'',
    storeHref:x.store_slug?'/magaza/'+x.store_slug:'/magazalar',
    href:'/urun/'+x.slug
  };
}

function storeToCard(x){
  return {
    ...x,
    category:'Denizcilik',
    location:x.location||x.country||'Türkiye',
    image:storeImages[x.slug]||(normalizedListings.find(i=>i.store_slug===x.slug && generatedImageMap[i.slug])?.image)||'/store-directory.webp',
    logo:'/motoryat-logo.svg',
    href:'/magaza/'+x.slug
  };
}

const normalizedListings=recoveredListings.map(listingToCard);
export const hasLocalExport=normalizedListings.length>0;
export const dataManifest={
  source:'MOTORYAT_31734_STORE_MOBILE_HORIZONTAL_HEADER_FULL_HOSTINGER.zip',
  snapshot_date:'2026-10-07',
  supabase_runtime_required:false,
  owned_media_origin:OWNED_MEDIA_ORIGIN,
  saray_deniz_excluded:true,
  listings_loaded:normalizedListings.length,
  products_loaded:recoveredProducts.length,
  stores_loaded:recoveredStores.length,
  brands_loaded:recoveredBrands.length
};

export const demoListing={
  slug:'demo-ilan',
  title:'Bavaria S 36 HT Diesel',
  meta:'11,66 m · 2018 · Marina Punat, Hırvatistan',
  price:'€ 159.000',
  image:'/sale-yener-35.webp',
  href:'/tekne/demo-ilan',
  kind:'SATILIK',
  type:'sale',
  seller:'Motoryat Demo Partner',
  sellerSlug:'magazalar',
  year:'2018',
  demo:true
};

const ladyLunaListing=listingToCard({
  slug:'lady-luna-32-1-m-kiralik-motoryat',
  title:'Lady Luna · 32.1M Motor Yacht',
  status:'charter',
  type:'charter',
  vessel_type:'Motor Yacht',
  length:32.1,
  location:'Türkiye / Akdeniz',
  price_text:'Fiyat Sorunuz',
  store_name:'Lady Luna Charter',
  store_slug:'lady-luna'
});

const recoveredSale=normalizedListings.filter(x=>x.type==='sale');
const recoveredCharter=normalizedListings.filter(x=>x.type==='charter');

export const saleListings=recoveredSale.length?prioritizeOwnedMedia(recoveredSale):fallbackSaleListings;
export const charterListings=recoveredCharter.length
  ? [ladyLunaListing,...prioritizeOwnedMedia(recoveredCharter).filter(x=>x.slug!==ladyLunaListing.slug)]
  : fallbackCharterListings;
export const products=recoveredProducts.length?recoveredProducts.map(productToCard):[];
export const stores=recoveredStores.length?recoveredStores.map(storeToCard):[];
export const companies=Array.isArray(localCompanies)?localCompanies:[];
export const brands=recoveredBrands;
export const marinas=Array.isArray(localMarinas)?localMarinas:[];

export const productCategories=['Motor & Mekanik','Elektrik','Elektronik & Navigasyon','Güverte','Çapa & Bağlama','Pompa & Tesisat','Güvenlik','Boya & Bakım','Yelken & Donanım','Halat & Rigging','Kabin & Konfor','Mutfak & Soğutma','Su Sporları','Bot & Tender','Balıkçılık','Yedek Parça'];