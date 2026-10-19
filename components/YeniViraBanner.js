export default function YeniViraBanner(){
 return <section className="yeniviraBannerWrap" aria-label="Reklam: Yeni Vira Denizcilik">
  <a className="yeniviraBannerImageLink" href="https://yenivira.com.tr/#egitimler" target="_blank" rel="noopener noreferrer" aria-label="Yeni Vira Denizcilik yat kaptanlığı eğitimleri">
   <picture>
    <source media="(max-width:820px)" srcSet="/reklam/yenivira-mobile.svg"/>
    <img src="/reklam/yenivira-desktop.svg" alt="Yeni Vira Denizcilik — Yat Kaptanlığı Eğitimleri" loading="lazy"/>
   </picture>
  </a>
 </section>;
}
