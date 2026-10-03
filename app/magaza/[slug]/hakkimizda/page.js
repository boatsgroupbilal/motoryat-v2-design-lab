import SiteHeader from '../../../../components/SiteHeader';
import Footer from '../../../../components/Footer';
import {stores} from '../../../../data/content';
import {getStoreProfile} from '../../../../data/storeProfiles';
import StoreMiniNav from '../../../../components/StoreMiniNav';

export default async function Page({params}){
  const {slug}=await params;
  const store=stores.find(x=>x.slug===slug)||stores[0];
  const profile=getStoreProfile(store);

  return <><SiteHeader/><main className="storeProfilePage">\n    <StoreMiniNav store={store} active="hakkimizda"/>
    <section className="storeProfileCard">
      <div className="storeProfileTop">
        <span className="storeProfileBadge">SATILIK</span>
        <div className="storeProfileBrand storeProfileBrandText">
          <small>KURUMSAL PROFİL</small>
          <strong>{store.name}</strong>
          <span>{store.category} · {store.location}</span>
        </div>
        <div className="storeProfileContactBar">
          <a href="#iletisim" className="storeProfileCircle" aria-label="Telefon">☎</a>
          <div className="storeProfileMore">DAHA FAZLA BİLGİ</div>
          <a href="#iletisim" className="storeProfileCircle" aria-label="E-posta">✉</a>
        </div>
      </div>

      <div className="storeProfileBody">
        <section>
          <h2><span>◉</span> GENEL BAKIŞ</h2>
          <p>{profile.overview}</p>
        </section>

        <section>
          <h2><span>▲</span> HİZMETLER</h2>
          <p>{profile.services.join(', ')}</p>
        </section>

        <section>
          <h2><span>⌂</span> OFİSLER</h2>
          <p>{profile.offices.join(', ')}</p>
        </section>
      </div>

      <div className="storeProfileFooter" id="iletisim">
        <a href={'/magaza/'+store.slug}>PROFİLİ GÖRÜNTÜLE <span>›</span></a>
      </div>
    </section>
  </main><Footer/></>
}
