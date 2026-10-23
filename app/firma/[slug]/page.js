import {notFound} from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import Footer from '../../../components/Footer';
import {YachtCard} from '../../../components/Card';
import {companies,stores,saleListings,charterListings} from '../../../data/content';

// A firm's presence in the directory does not mean its profile is activated.
// Explicit activation data takes precedence; Euro Boat's approved page stays active.
const APPROVED_ACTIVE_SLUGS=new Set(['euro-boat-turkey']);
function isActivated(company,slug){
  const status=String(company.profile_status||company.activation_status||'').toLowerCase();
  if(['inactive','passive','pending','draft','unclaimed'].includes(status)) return false;
  if(['active','activated','published'].includes(status)) return true;
  if(company.is_active===false||company.is_activated===false||company.profile_active===false) return false;
  if(company.is_active===true||company.is_activated===true||company.profile_active===true) return true;
  return APPROVED_ACTIVE_SLUGS.has(slug);
}

function PassiveCompanyProfile({company,location}){
  // No title, overlay, or misleading stock "Mağazalar" lettering over the banner.
  const banner=company.cover_image||company.image||'/store-directory.webp';
  return <><SiteHeader/><main className="companyProfilePage">
    <section aria-label={company.name+' firma kapak görseli'} style={{width:'100%',height:'clamp(190px,30vw,350px)',overflow:'hidden',background:'#0D1B2A'}}>
      <img src={banner} alt="" style={{width:'100%',height:'100%',display:'block',objectFit:'cover',objectPosition:'center'}}/>
    </section>
    <section className="container" style={{maxWidth:1120,paddingTop:38,paddingBottom:76}}>
      <div style={{maxWidth:760}}>
        <span style={{fontSize:12,letterSpacing:2,color:'#66758a',fontWeight:700}}>FİRMA REHBERİ</span>
        <h1 style={{fontSize:'clamp(28px,4vw,42px)',margin:'12px 0 10px',color:'#0D1B2A'}}>{company.name}</h1>
        <p style={{margin:'0 0 28px',color:'#66758a'}}>{location}{company.category?' · '+company.category:''}</p>
        <h2 style={{fontSize:'clamp(20px,3vw,26px)',color:'#0D1B2A'}}>Bu firma profili henüz aktifleştirilmemiştir.</h2>
        <p style={{lineHeight:1.85,color:'#46556a',margin:'12px 0 26px'}}>Firmanıza özel kurumsal sayfa, ürünler, ilanlar ve iletişim alanlarını aktifleştirmek için Motoryat.com üzerinden kurumsal başvuru yapabilirsiniz.</p>
        <a href="/satici/magazam" style={{display:'inline-block',background:'#0D1B2A',color:'#fff',padding:'14px 24px',textDecoration:'none',fontWeight:600,borderRadius:4}}>Firma Profilini Aktifleştir →</a>
      </div>
    </section>
  </main><Footer/></>;
}

function ActiveCompanyProfile({company,slug}){
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

export default async function Page({params}){
  const {slug}=await params;
  const company=(companies||[]).find(x=>x.slug===slug)||(stores||[]).find(x=>x.slug===slug);
  if(!company) notFound();
  if(isActivated(company,slug)) return <ActiveCompanyProfile company={company} slug={slug}/>;
  return <PassiveCompanyProfile company={company} location={company.location||company.country||'Türkiye'}/>;
}
