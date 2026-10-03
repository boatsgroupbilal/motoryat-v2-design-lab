export const newsCategories=[
  {slug:'',label:'Son Haberler'},
  {slug:'superyat',label:'Süperyat'},
  {slug:'yeni-insa-lansmanlar',label:'Yeni İnşa & Lansmanlar'},
  {slug:'tekne-testleri-incelemeler',label:'Tekne Testleri & İncelemeler'},
  {slug:'tasarim-refit',label:'Tasarım & Refit'},
  {slug:'charter',label:'Charter'},
  {slug:'markalar',label:'Markalar'},
  {slug:'etkinlikler-fuarlar',label:'Etkinlikler & Fuarlar'}
];

export const magazineNews=[
  {slug:'yeni-model-ve-lansman-haberleri',title:'Yeni sezona damga vuracak yat lansmanları',cat:'Yeni İnşa & Lansmanlar',catSlug:'yeni-insa-lansmanlar',image:'/sale-euro-850.webp',summary:'Yeni modeller, ilk gösterimler ve tersanelerden gelen son proje haberleri.',date:'03 Ekim 2026'},
  {slug:'superyat-dunyasindan-son-gelismeler',title:'Süperyat dünyasında haftanın öne çıkan gelişmeleri',cat:'Süperyat',catSlug:'superyat',image:'/store-mengi.webp',summary:'Yeni teslimatlar, büyük projeler ve küresel süperyat pazarından seçmeler.',date:'03 Ekim 2026'},
  {slug:'charter-sezonu-ve-destinasyon-rehberi',title:'Charter sezonunda öne çıkan yatlar ve rotalar',cat:'Charter',catSlug:'charter',image:'/charter-luna-hero.webp',summary:'Akdeniz charter sezonu, seçili yatlar ve destinasyon gündemi.',date:'02 Ekim 2026'},
  {slug:'tekne-testleri-ve-incelemeler',title:'Yeni modeller: deniz testleri ve detaylı incelemeler',cat:'Tekne Testleri & İncelemeler',catSlug:'tekne-testleri-incelemeler',image:'/sale-euro-760.webp',summary:'Performans, kullanım, donanım ve tasarım odağında model incelemeleri.',date:'02 Ekim 2026'},
  {slug:'tasarim-ve-refit-gundemi',title:'Tasarım ve refit projelerinde yeni dönem',cat:'Tasarım & Refit',catSlug:'tasarim-refit',image:'/sale-yener-35.webp',summary:'Dış tasarım, iç mekân ve kapsamlı refit projelerinden gelişmeler.',date:'01 Ekim 2026'},
  {slug:'markalarin-yeni-sezon-hamleleri',title:'Yat markalarının yeni sezon hamleleri',cat:'Markalar',catSlug:'markalar',image:'/store-directory.webp',summary:'Markaların yeni modelleri, stratejik duyuruları ve ürün aileleri.',date:'01 Ekim 2026'},
  {slug:'uluslararasi-yat-fuarlari-takvimi',title:'Uluslararası yat fuarları ve etkinlik takvimi',cat:'Etkinlikler & Fuarlar',catSlug:'etkinlikler-fuarlar',image:'/hero-home.webp',summary:'Sektörün önemli buluşmaları, fuarlar ve özel gösterimler.',date:'30 Eylül 2026'},
  {slug:'yeni-insa-projelerinde-son-durum',title:'Yeni inşa projelerinde son durum',cat:'Yeni İnşa & Lansmanlar',catSlug:'yeni-insa-lansmanlar',image:'/charter-sunreef.webp',summary:'Tersanelerde yapımı süren projeler ve teslimata yaklaşan yeni yatlar.',date:'30 Eylül 2026'}
];

export function getNewsByCategory(slug){
  if(!slug) return magazineNews;
  return magazineNews.filter(x=>x.catSlug===slug);
}

export function getCategoryLabel(slug){
  return newsCategories.find(x=>x.slug===slug)?.label || 'Son Haberler';
}
