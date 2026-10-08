import {notFound} from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import {companies,stores,saleListings,charterListings} from '../../../data/content';

export default async function Page({params}){
  const {slug}=await params;
  const company=(companies||[]).find(x=>x.slug===slug)||(stores||[]).find(x=>x.slug===slug);
  if(!company) notFound();

  const listings=[...saleListings,...charterListings].filter(x=>(x.store_slug||x.sellerSlug)===slug).slice(0,12);
  const location=company.location||company.country||'Türkiye';
  const cover=company.image||listings[0]?.image||'/store-directory.webp';
  const logo=company.logo||'/motoryat-logo.svg';

  return <><SiteHeader/><main className="companyProfilePage">
    <section className="categoryHeroStd">
      <img className="categoryHeroStdImage" src={cover} alt={company.name}/>
      <div className="categoryHeroStdShade"></div>
      <div className="container categoryHeroStdInner"><div className="categoryHeroStdContent">
        <span className="categoryHeroKicker">FİRMA PROFİLİ</span><h1>{company.name}</h1><p>{location}</p>
      </div></div>
    </section>

    <section className="container companyProfileIntro">
      <div className="companyProfileLogo"><img src={logo} alt={company.name+' logo'}/></div>
      <div><h2>{company.name}</h2><p>Denizcilik sektöründeki kurumsal firma profili, ilanları ve iletişim bilgileri.</p><div className="companyProfileMeta"><span>⌖ {location}</span><span>{company.category||'Denizcilik firması'}</span></div></div>
    </section>

    <section className="container companyProfileListings">
      <div className="sectionHead"><div><span>İLANLAR</span><h2>Firma portföyü</h2><p>{listings.length} kayıt</p></div></div>
      {listings.length?<div className="sqYachtGrid">{listings.map((x,i)=><YachtCard key={x.slug} item={x} type={x.kind==='KİRALIK'?'charter':'sale'} seller={company.name} year={x.year||'—'} index={i}/>)}</div>:<div className="categoryEmptyState">Bu firmanın henüz yayında ilanı yok.</div>}
    </section>
  </main><Footer/></>;
}
