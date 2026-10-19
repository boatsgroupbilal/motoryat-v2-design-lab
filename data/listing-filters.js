const text=(v)=>String(v??'').trim();
const norm=(v)=>text(v).toLocaleLowerCase('tr-TR');

function numberValue(v){
  if(v===undefined||v===null||String(v).trim()==='') return null;
  const n=Number(String(v).trim().replace(',','.'));
  return Number.isFinite(n)?n:null;
}

function listingPrice(item){
  const minor=item.amount_minor??item.price_minor??item.weekly_rate_minor;
  if(minor===undefined||minor===null) return null;
  const n=Number(minor);
  return Number.isFinite(n)?n/100:null;
}

function includesText(item,query){
  const q=norm(query);
  if(!q) return true;
  return [
    item.title,item.meta,item.slug,item.store_name,item.seller,item.brand_name,item.brand,
    item.manufacturer,item.model,item.model_name,item.vessel_type,item.boat_type,item.location
  ].some(v=>norm(v).includes(q));
}

function baseFilter(item,params={}){
  const q=params.q;
  const type=params.tip;
  const maker=params.marka;
  const location=params.konum;
  const minLength=numberValue(params.min_boy);
  const maxLength=numberValue(params.max_boy);
  const minYear=numberValue(params.min_yil);
  const maxYear=numberValue(params.max_yil);
  const minPrice=numberValue(params.min_fiyat);
  const maxPrice=numberValue(params.max_fiyat);
  const minCabins=numberValue(params.min_kabin);
  const maxHours=numberValue(params.max_saat);

  if(q&&!includesText(item,q)) return false;
  if(type&&norm(item.vessel_type||item.boat_type||item.category)!==norm(type)) return false;
  if(maker){
    const candidate=item.store_name||item.seller||item.brand_name||item.brand||item.manufacturer;
    if(norm(candidate)!==norm(maker)) return false;
  }
  if(location&&!norm(item.location).includes(norm(location))) return false;

  const len=numberValue(item.length);
  if(minLength!==null&&(len===null||len<minLength)) return false;
  if(maxLength!==null&&(len===null||len>maxLength)) return false;

  const year=numberValue(item.year);
  if(minYear!==null&&(year===null||year<minYear)) return false;
  if(maxYear!==null&&(year===null||year>maxYear)) return false;

  const price=listingPrice(item);
  if(minPrice!==null&&(price===null||price<minPrice)) return false;
  if(maxPrice!==null&&(price===null||price>maxPrice)) return false;

  const cabins=numberValue(item.cabins);
  if(minCabins!==null&&(cabins===null||cabins<minCabins)) return false;

  const hours=numberValue(item.engine_hours??item.motor_hours);
  if(maxHours!==null&&(hours===null||hours>maxHours)) return false;

  return true;
}

export function filterSaleListings(items,params={}){
  const status=norm(params.durum);
  return items.filter(item=>{
    if(!baseFilter(item,params)) return false;
    if(!status) return true;
    const hay=[item.condition,item.presentation_type,item.status_text,item.sale_model].map(norm);
    const map={
      'yeni':['new','yeni'],
      'ikinci el':['used','ikinci el'],
      'sipariş üzerine':['build_to_order','sipariş üzerine'],
      'proje':['project','proje'],
      'refit':['refit']
    };
    const allowed=map[status]||[status];
    return hay.some(v=>allowed.includes(v));
  });
}

export function filterCharterListings(items,params={}){
  const destination=params.destinasyon||params.konum;
  return items.filter(item=>{
    const forwarded={...params,konum:destination};
    return baseFilter(item,forwarded);
  });
}

export function cleanParams(params={}){
  const out={};
  for(const [k,v] of Object.entries(params||{})){
    if(v!==undefined&&v!==null&&String(v).trim()!=='') out[k]=String(v);
  }
  delete out.sayfa;
  return out;
}

export function queryString(params={}){
  const q=new URLSearchParams(cleanParams(params));
  const s=q.toString();
  return s?s+'&':'';
}
