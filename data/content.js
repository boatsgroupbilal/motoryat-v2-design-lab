import localListings from './export/listings.json';
import localProducts from './export/products.json';
import localStores from './export/stores.json';
import localCompanies from './export/companies.json';
import localBrands from './export/brands.json';
import localMarinas from './export/marinas.json';
import exportManifest from './export/manifest.json';

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

const fallbackStores = [
 {slug:'admiral-marine-equipment',name:'Admiral Marine Equipment',category:'Tekne ekipmanları',location:'İstanbul',image:'/store-admiral.webp',logo:'/motoryat-logo.svg',href:'/magaza/admiral-marine-equipment'},
 {slug:'mengi-yay',name:'Mengi Yay',category:'Yat üretimi & projeler',location:'Tuzla, İstanbul',image:'/store-mengi.webp',logo:'/motoryat-logo.svg',href:'/magaza/mengi-yay'},
 {slug:'rmk-marine',name:'RMK Marine',category:'Superyacht & refit',location:'Tuzla, İstanbul',image:'/store-rmk.webp',logo:'/motoryat-logo.svg',href:'/magaza/rmk-marine'},
 {slug:'sunreef-yachts-charter',name:'Sunreef Yachts Charter',category:'Luxury charter',location:'Global',image:'/store-directory.webp',logo:'/motoryat-logo.svg',href:'/magaza/sunreef-yachts-charter'},
];

const fallbackProducts = [
 {slug:'admiral-cenova-sarma-sistemi',name:'Admiral Cenova Sarma Sistemi',brand:'Admiral',sku:'Genoa',image:'/product-genoa.webp',cardImagePosition:'left center',singleView:true,storeName:'Admiral Marine Equipment',storeLogo:'',storeHref:'/magaza/admiral-marine-equipment',href:'/urun/admiral-cenova-sarma-sistemi'},
 {slug:'admiral-boom-donanimi',name:'Admiral Boom Donanımı',brand:'Admiral',sku:'Boom',image:'/product-boom.webp',cardImagePosition:'left center',singleView:true,storeName:'Admiral Marine Equipment',storeLogo:'',storeHref:'/magaza/admiral-marine-equipment',href:'/urun/admiral-boom-donanimi'},
 {slug:'admiral-code-zero-sistemi',name:'Admiral Code Zero Sistemi',brand:'Admiral',sku:'Code Zero',image:'/product-codezero.webp',cardImagePosition:'left center',singleView:true,storeName:'Admiral Marine Equipment',storeLogo:'',storeHref:'/magaza/admiral-marine-equipment',href:'/urun/admiral-code-zero-sistemi'},
 {slug:'admiral-guverte-blogu',name:'Admiral Güverte Bloğu',brand:'Admiral',sku:'Deck Block',image:'/product-block.webp',cardImagePosition:'left center',singleView:true,storeName:'Admiral Marine Equipment',storeLogo:'',storeHref:'/magaza/admiral-marine-equipment',href:'/urun/admiral-guverte-blogu'},
];

function money(amountMinor,currency){
  if(amountMinor==null || !currency) return 'Fiyat Sorunuz';
  try{
    return new Intl.NumberFormat('tr-TR',{style:'currency',currency,maximumFractionDigits:0}).format(Number(amountMinor)/100);
  }catch{
    return `${Number(amountMinor)/100} ${currency}`;
  }
}

function listingToCard(x){
  const isCharter=x.type==='charter';
  return {
    ...x,
    slug:x.slug,
    title:x.title,
    meta:[x.year||null,x.location||null].filter(Boolean).join(' · ') || (isCharter?'Kiralık':'Satılık'),
    price:isCharter && x.weekly_rate_minor ? money(x.weekly_rate_minor,x.currency||'EUR') : money(x.amount_minor,x.currency),
    image:isCharter?'/charter.webp':'/yacht.webp',
    href:'/tekne/'+x.slug,
    kind:isCharter?'KİRALIK':'SATILIK',
    seller:x.seller||'Motoryat Partner'
  };
}

function productToCard(x){
  return {
    ...x,
    slug:x.slug,
    name:x.name,
    brand:x.brand||'Motoryat',
    sku:x.sku||'—',
    description:x.short_description||x.description||'Tekne ve yat ekipmanı',
    price:money(x.amount_minor,x.currency),
    image:'/product.webp',
    storeName:x.store_name||x.brand||'Motoryat Mağazası',
    storeLogo:'',
    storeHref:x.store_slug?'/magaza/'+x.store_slug:'/magazalar',
    href:'/urun/'+x.slug
  };
}

function storeToCard(x){
  return {
    ...x,
    slug:x.slug,
    name:x.name,
    category:'Denizcilik',
    location:x.location||x.country||'Türkiye',
    image:'/store.webp',
    logo:'/motoryat-logo.svg',
    href:'/magaza/'+x.slug
  };
}

export const hasLocalExport = Array.isArray(localListings) && localListings.length>0;
export const dataManifest = exportManifest;

const normalizedListings = hasLocalExport ? localListings.map(listingToCard) : [];
export const saleListings = normalizedListings.length ? normalizedListings.filter(x=>x.type==='sale') : fallbackSaleListings;
export const charterListings = normalizedListings.length ? normalizedListings.filter(x=>x.type==='charter') : fallbackCharterListings;
export const products = Array.isArray(localProducts) && localProducts.length ? localProducts.map(productToCard) : fallbackProducts;
export const stores = Array.isArray(localStores) && localStores.length ? localStores.map(storeToCard) : fallbackStores;
export const companies = Array.isArray(localCompanies) ? localCompanies : [];
export const brands = Array.isArray(localBrands) ? localBrands : [];
export const marinas = Array.isArray(localMarinas) ? localMarinas : [];

export const productCategories=['Motor & Mekanik','Elektrik','Elektronik & Navigasyon','Güverte','Çapa & Bağlama','Pompa & Tesisat','Güvenlik','Boya & Bakım','Yelken & Donanım','Halat & Rigging','Kabin & Konfor','Mutfak & Soğutma','Su Sporları','Bot & Tender','Balıkçılık','Yedek Parça'];
