import 'server-only';
import {isSupabaseDataEnabled,readSupabasePage} from './supabase-readonly';
import {mapListingCard,mapCompanyCard,mapStoreCard,mapProductCard} from './v2-data-mappers';

/**
 * Non-destructive opt-in to real read-only records.
 * No request occurs while MOTORYAT_DATA_SOURCE is unset.
 * Fail closed to existing snapshot data while REST is restricted.
 * Records without owned/local media are excluded to prevent broken card images.
 */
async function rows(schema,table,limit=500) {
  return readSupabasePage({schema,table,limit});
}
async function batch(schema,table,ids,key) {
  if(!ids.length)return [];
  const out=[];
  for(let i=0;i<ids.length;i+=80) {
    out.push(...await readSupabasePage({schema,table,limit:500,filters:{[key]:'in.('+ids.slice(i,i+80).join(',')+')'}}));
  }
  return out;
}
function group(items,key) {
  const map=new Map();
  for(const item of items){const k=item[key];if(!map.has(k))map.set(k,[]);map.get(k).push(item);}
  return map;
}
async function getLive(kind){
  if(kind==='sale'||kind==='charter'){
    const originals=await rows('marketplace','listings');
    const matching=originals.filter(x=>!x.deleted_at&&x.status==='published'&&
      (kind==='charter'?x.listing_type==='charter':x.listing_type!=='charter'));
    const ids=matching.map(x=>x.id);
    const translations=group(await batch('marketplace','listing_translations',ids,'listing_id'),'listing_id');
    const prices=group(await batch('marketplace','listing_prices',ids,'listing_id'),'listing_id');
    return matching.map(listing=>mapListingCard({listing,translations:translations.get(listing.id),prices:prices.get(listing.id)||[]})).filter(x=>x?.image);
  }
  const config={
    companies:['companies','companies','company_translations','company_id',mapCompanyCard,'company'],
    stores:['stores','stores','store_translations','store_id',mapStoreCard,'store'],
    products:['products','products','product_translations','product_id',mapProductCard,'product']
  }[kind];
  if(!config)return [];
  const [schema,table,transTable,foreign,mapper,field]=config;
  const originals=(await rows(schema,table)).filter(x=>x.status==='active'&&!x.deleted_at);
  const translations=group(await batch(schema,transTable,originals.map(x=>x.id),foreign),foreign);
  return originals.map(item=>mapper({[field]:item,translations:translations.get(item.id)})).filter(x=>x?.image);
}
/** Returns unchanged snapshot when disabled, API fails or safe images are unavailable. */
export async function choosePageData(kind,snapshot){
  if(!isSupabaseDataEnabled())return snapshot;
  try{
    const live=await getLive(kind);
    return live.length ? live : snapshot;
  }catch(error){
    console.error('[motoryat-v2] read-only data not available:',error?.status||error?.name||'error');
    return snapshot;
  }
}
