export const saleCategories={
  superyacht:{label:'Süperyat',match:(x)=>['Süperyat','Superyacht'].includes(x.vessel_type)},
  motoryat:{label:'Motoryat',match:(x)=>x.vessel_type==='Motoryat'},
  yelkenli:{label:'Yelkenli',match:(x)=>x.vessel_type==='Yelkenli'},
  katamaran:{label:'Katamaran',match:(x)=>x.vessel_type==='Katamaran'},
  gulet:{label:'Gulet',match:(x)=>String(x.vessel_type||'').includes('Gulet')},
  explorer:{label:'Explorer',match:(x)=>x.vessel_type==='Explorer'},
  'surat-teknesi':{label:'Sürat Teknesi',match:(x)=>x.vessel_type==='Sürat Teknesi'},
  'sisme-bot':{label:'Şişme Bot',match:(x)=>x.vessel_type==='Şişme Bot'},
  tekne:{label:'Tekne',match:(x)=>x.vessel_type==='Tekne'},
  bot:{label:'Bot',match:(x)=>x.vessel_type==='Bot'}
};

export const charterCategories={
  superyacht:{label:'Süperyat',match:(x)=>['Süperyat','Superyacht'].includes(x.vessel_type)},
  motoryat:{label:'Motoryat',match:(x)=>String(x.vessel_type||'').includes('Motoryat')},
  yelkenli:{label:'Yelkenli',match:(x)=>x.vessel_type==='Yelkenli'},
  katamaran:{label:'Katamaran',match:(x)=>x.vessel_type==='Katamaran'},
  gulet:{label:'Gulet',match:(x)=>String(x.vessel_type||'').includes('Gulet')},
  trawler:{label:'Trawler',match:(x)=>x.vessel_type==='Trawler'}
};

export const productCategoryLabels={
  'motor-mekanik':'Motor & Mekanik',
  'elektrik':'Elektrik',
  'elektronik-navigasyon':'Elektronik & Navigasyon',
  'guverte':'Güverte',
  'capa-baglama':'Çapa & Bağlama',
  'pompa-tesisat':'Pompa & Tesisat',
  'guvenlik':'Güvenlik',
  'boya-bakim':'Boya & Bakım',
  'yelken-donanimi':'Yelken & Donanım',
  'halat-rigging':'Halat & Rigging',
  'kabin-konfor':'Kabin & Konfor',
  'mutfak-sogutma':'Mutfak & Soğutma',
  'su-sporlari':'Su Sporları',
  'bot-tender':'Bot & Tender',
  'balikcilik':'Balıkçılık',
  'yedek-parca':'Yedek Parça'
};
