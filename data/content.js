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
import localCompanies from './export/companies.json';
import localMarinas from './export/marinas.json';
import generatedImageMap from './local/generated-image-map.json';

const recoveredListings=[
  ...recoveredListings01,...recoveredListings02,...recoveredListings03,
  ...recoveredListings04a,...recoveredListings04b,...recoveredListings05a,...recoveredListings05b,
  ...recoveredListings06,...recoveredListings07,...recoveredListings08,...recoveredListings09,...recoveredListings10,...recoveredListings11,...recoveredListings12
];
const recoveredStores=[...recoveredStores01,...recoveredStores02];

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

const listingImages={
  'yener-tekne':'/sale-yener-35.webp',
  'mengi-yay':'/store-mengi.webp',
  'euro-boat-turkey':'/sale-euro-700.webp',
  'rmk-yachts':'/media/stores/rmk-yachts-cover.webp'
};

function money(amountMinor,currency){
  if(amountMinor==null || !currency) return 'Fiyat Sorunuz';
  try{return new Intl.NumberFormat('tr-TR',{style:'currency',currency,maximumFractionDigits:0}).format(Number(amountMinor)/100)}
  catch{return `${Number(amountMinor)/100} ${currency}`}
}

function listingToCard(x){
  const type=x.type||x.status||'sale';
  const isCharter=type==='charter';
  const length=x.length!=null?`${x.length} m`:null;
  return {
    ...x,
    type,
    meta:[length,x.year||null,x.location||null].filter(Boolean).join(' · ') || (isCharter?'Kiralık':'Satılık'),
    price:x.price_text || (isCharter&&x.weekly_rate_minor?money(x.weekly_rate_minor,x.currency||x.price_currency||'EUR'):money(x.amount_minor??x.price_minor,x.currency||x.price_currency)),
    image:x.image_local||generatedImageMap[x.slug]||listingImages[x.store_slug]||(isCharter?'/charter.webp':'/yacht.webp'),
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
    image:x.store_slug==='admiral-marine-equipment'?productImages[index%productImages.length]:'/product.webp',
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
    image:storeImages[x.slug]||'/store-directory.webp',
    logo:'/motoryat-logo.svg',
    href:'/magaza/'+x.slug
  };
}

const normalizedListings=recoveredListings.map(listingToCard);
export const hasLocalExport=normalizedListings.length>0;
export const dataManifest={
  source:'MOTORYAT_V4.8.40.319.9_RECOVERY_FULL_SINGLE_HOSTINGER.zip',
  snapshot_date:'2026-10-01',
  saray_deniz_excluded:true,
  listings_loaded:normalizedListings.length,
  products_loaded:recoveredProducts.length,
  stores_loaded:recoveredStores.length,
  brands_loaded:recoveredBrands01.length
};

export const saleListings=normalizedListings.filter(x=>x.type==='sale').length?normalizedListings.filter(x=>x.type==='sale'):fallbackSaleListings;
export const charterListings=normalizedListings.filter(x=>x.type==='charter').length?normalizedListings.filter(x=>x.type==='charter'):fallbackCharterListings;
export const products=recoveredProducts.length?recoveredProducts.map(productToCard):[];
export const stores=recoveredStores.length?recoveredStores.map(storeToCard):[];
export const companies=Array.isArray(localCompanies)?localCompanies:[];
export const brands=recoveredBrands01;
export const marinas=Array.isArray(localMarinas)?localMarinas:[];

export const productCategories=['Motor & Mekanik','Elektrik','Elektronik & Navigasyon','Güverte','Çapa & Bağlama','Pompa & Tesisat','Güvenlik','Boya & Bakım','Yelken & Donanım','Halat & Rigging','Kabin & Konfor','Mutfak & Soğutma','Su Sporları','Bot & Tender','Balıkçılık','Yedek Parça'];