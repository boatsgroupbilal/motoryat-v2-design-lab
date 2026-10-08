import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import styles from './markalar.module.css';
import {brands as exportedBrands} from '../../data/content';

const fallbackBrands = [
  { name: 'Azimut', slug: 'azimut' },{ name: 'Benetti', slug: 'benetti' },{ name: 'Bilgin Yachts', slug: 'bilgin-yachts' },
  { name: 'Mengi Yay', slug: 'mengi-yay' },{ name: 'Numarine', slug: 'numarine' },{ name: 'Princess', slug: 'princess' },
  { name: 'Sunseeker', slug: 'sunseeker' },{ name: 'Sunreef Yachts', slug: 'sunreef-yachts' },{ name: 'Sanlorenzo', slug: 'sanlorenzo' },
  { name: 'Ferretti Yachts', slug: 'ferretti-yachts' },{ name: 'Pershing', slug: 'pershing' },{ name: 'Riva', slug: 'riva' },
  { name: 'Lagoon', slug: 'lagoon' },{ name: 'Jeanneau', slug: 'jeanneau' },{ name: 'Beneteau', slug: 'beneteau' },
  { name: 'Northstar Boats', slug: 'northstar-boats' },{ name: 'Euro Boat', slug: 'euro-boat' },{ name: 'Yener', slug: 'yener' },
];
const brands=(exportedBrands?.length?exportedBrands:fallbackBrands).slice().sort((a,b)=>a.name.localeCompare(b.name,'tr'));

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === 'string' ? params.q.trim() : '';
  const normalizedQuery = query.toLocaleLowerCase('tr-TR');
  const visibleBrands = normalizedQuery ? brands.filter((brand) => brand.name.toLocaleLowerCase('tr-TR').includes(normalizedQuery)) : brands;
  const letters = [...new Set(brands.map((brand) => brand.name.charAt(0).toLocaleUpperCase('tr-TR')))];

  return <><SiteHeader/><main className={styles.page}>
    <section className={styles.hero+' categoryHeroStd'}><img className={styles.heroImage+' categoryHeroStdImage'} src="/sale-yener-35.webp" alt="" aria-hidden="true"/><div className={styles.heroShade+' categoryHeroStdShade'}/><div className={styles.container+' categoryHeroStdInner'}><div className={styles.heroInner}><div className={styles.heroCopy}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Ana Sayfa</a><span>/</span><span>Markalar</span></nav>
      <span className={styles.eyebrow}>MARKALAR &amp; MODELLER</span><h1>Tekne ve yat markalarını keşfedin.</h1><p>Marka profillerinden modellere, ilgili ilanlara ve kurumsal içeriklere hızlıca ulaşın.</p>
      <form className={styles.search} action="/markalar" method="get"><label className={styles.srOnly} htmlFor="brand-search">Marka ara</label><input id="brand-search" name="q" defaultValue={query} placeholder="Marka ara" autoComplete="off"/><button type="submit">Ara</button></form>
    </div></div></div></section>
    <section className={styles.directory}><div className={styles.container}>
      <div className={styles.directoryHead}><div><span className={styles.kicker}>MARKA DİZİNİ</span><h2>{query?'Arama sonuçları':'Tüm markalar'}</h2></div><div className={styles.resultMeta}><strong>{visibleBrands.length}</strong><span>{query?'sonuç':'marka'}</span></div></div>
      <div className={styles.tools}><div className={styles.letters} aria-label="Marka harfleri">{letters.map((letter)=><a key={letter} href={query?'/markalar':`#brand-${letter}`}>{letter}</a>)}</div>{query&&<a className={styles.clear} href="/markalar">Aramayı temizle</a>}</div>
      {visibleBrands.length>0?<div className={styles.grid}>{visibleBrands.map((brand,index)=>{const letter=brand.name.charAt(0).toLocaleUpperCase('tr-TR');const previousLetter=index>0?visibleBrands[index-1].name.charAt(0).toLocaleUpperCase('tr-TR'):null;return <a className={styles.card} href={`/marka/${brand.slug}`} id={!query&&letter!==previousLetter?`brand-${letter}`:undefined} key={brand.id||brand.slug}><span className={styles.cardLabel}>MARKA PROFİLİ</span><h3>{brand.name}</h3><span className={styles.cardAction}>Markayı incele <b aria-hidden="true">→</b></span></a>})}</div>:<div className={styles.empty}><strong>“{query}” için marka bulunamadı.</strong><a href="/markalar">Tüm markaları göster</a></div>}
    </div></section>
  </main><Footer/></>
}