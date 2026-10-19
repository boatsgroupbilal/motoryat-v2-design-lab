/**
 * Motoryat V2 — database row to existing card-shape mappers.
 * Pure transformations: no queries, writes, runtime secrets or remote media.
 * Call only with pre-joined records whose ownership and publication state have
 * already been checked by the server-side repository.
 */
const clean = (value) => typeof value === 'string' ? value.trim() : '';
const publicSlug = (value) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(clean(value)) ? clean(value) : '';
const localMedia = (value) => {
  const path = clean(value);
  return path.startsWith('/') && !path.startsWith('//') && !path.includes('..') ? path : '';
};
const translation = (rows, lang = 'tr') =>
  (Array.isArray(rows) ? rows : []).find(row => row.locale_code === lang && row.translation_status === 'published') ||
  (Array.isArray(rows) ? rows : []).find(row => row.translation_status === 'published') || null;

export function mapListingCard({listing, translations = [], prices = [], mediaPath = ''}) {
  if (!listing || listing.deleted_at || listing.status !== 'published') return null;
  const tr = translation(translations);
  const slug = publicSlug(tr?.slug);
  if (!slug || !tr?.title) return null;
  const validPrices = prices.filter(p => p.listing_id === listing.id && p.price_status === 'published' && p.amount_minor != null);
  const price = validPrices[0];
  const amount = price && Number.isFinite(Number(price.amount_minor)) && Number(price.amount_minor) >= 0
    ? new Intl.NumberFormat('tr-TR',{style:'currency',currency:price.currency_code || 'EUR',maximumFractionDigits:0}).format(Number(price.amount_minor) / 100)
    : '';
  return {
    slug, title: tr.title, description: clean(tr.description),
    price: amount || 'Fiyat Sorunuz', image: localMedia(mediaPath),
    href: '/tekne/' + slug,
    kind: listing.listing_type === 'charter' ? 'KİRALIK' : 'SATILIK',
    sellerCompanyId: listing.seller_company_id || null,
    sellerStoreId: listing.seller_store_id || null,
    locationId: listing.location_id || null
  };
}

export function mapCompanyCard({company, translations = [], mediaPath = ''}) {
  if (!company || company.deleted_at || company.status !== 'active') return null;
  const tr = translation(translations);
  const slug = publicSlug(tr?.slug);
  if (!slug) return null;
  return {
    slug, name: clean(tr.display_name) || clean(company.display_name) || clean(company.legal_name),
    category:'Denizcilik firması', location:company.registration_country || '',
    image:localMedia(mediaPath), logo:'',
    href:'/firma/' + slug
  };
}

export function mapStoreCard({store, translations = [], mediaPath = ''}) {
  if (!store || store.deleted_at || store.status !== 'active') return null;
  const tr = translation(translations);
  const slug = publicSlug(tr?.slug);
  if (!slug) return null;
  return {
    slug, name:clean(tr.display_name) || clean(store.canonical_name),
    category:'Denizcilik mağazası', location:'',
    image:localMedia(mediaPath), logo:'', href:'/magaza/' + slug
  };
}

export function mapProductCard({product, translations = [], mediaPath = '', storeName = '', offer = null}) {
  if (!product || product.deleted_at || product.status !== 'active') return null;
  const tr = translation(translations);
  const slug = publicSlug(tr?.slug);
  if (!slug) return null;
  return {
    slug, name:clean(tr.name), description:clean(tr.short_description),
    sku:clean(product.manufacturer_sku), brand:'',
    image:localMedia(mediaPath), price:'',
    storeName:clean(storeName), storeHref:'/magazalar',
    href:'/urun/' + slug, productId:product.id, offerId:offer?.id || null
  };
}

export function mapBrandCard({brand, translations = []}) {
  if (!brand || brand.deleted_at || brand.status !== 'active') return null;
  const tr = translation(translations);
  const slug = publicSlug(tr?.slug);
  if (!slug) return null;
  return {slug,name:clean(tr.display_name) || clean(brand.canonical_name),href:'/marka/' + slug};
}
