export const storeProfiles = {
  'admiral-marine-equipment': {
    overview: 'Denizcilik ekipmanları ve tekne donanımları alanında ürün ve çözüm sunan kurumsal mağaza.',
    services: ['Tekne ekipmanları','Güverte donanımları','Rigging ve yelken sistemleri'],
    offices: ['İstanbul'],
    phone: '',
    email: '',
    website: ''
  },
  'mengi-yay': {
    overview: 'Yat üretimi, yeni inşa projeleri ve özel yat çözümleri sunan tersane ve üretici.',
    services: ['Yeni inşa','Yat projeleri','Refit ve teknik destek'],
    offices: ['Tuzla, İstanbul'],
    phone: '',
    email: '',
    website: ''
  },
  'rmk-marine': {
    overview: 'Superyacht üretimi, refit ve bakım hizmetleri alanında faaliyet gösteren denizcilik kuruluşu.',
    services: ['Superyacht','Refit','Bakım ve teknik hizmetler'],
    offices: ['Tuzla, İstanbul'],
    phone: '',
    email: '',
    website: ''
  },
  'sunreef-yachts-charter': {
    overview: 'Lüks katamaran ve yacht charter seçeneklerini global destinasyonlarda sunan charter mağazası.',
    services: ['Luxury charter','Katamaran charter','Destinasyon planlama'],
    offices: ['Global'],
    phone: '',
    email: '',
    website: ''
  }
};

export function getStoreProfile(store){
  const base=storeProfiles[store?.slug]||{};
  return {
    overview: base.overview || (store?.name+'; Motoryat üzerindeki kurumsal vitriniyle ilan, ürün ve hizmetlerini tek merkezde sunar.'),
    services: base.services || [store?.category||'Denizcilik hizmetleri'],
    offices: base.offices || [store?.location||'Türkiye'],
    phone: base.phone || '',
    email: base.email || '',
    website: base.website || ''
  };
}
