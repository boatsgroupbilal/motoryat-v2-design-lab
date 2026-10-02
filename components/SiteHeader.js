import Link from 'next/link';

const nav=[
 ['/satilik','Satılık'],['/kiralik','Kiralık'],['/yeni-insa','Yeni inşa'],['/firmalar','Rehber'],
 ['/filo','Filo'],['/marinalar','Marinalar'],['/haberler','Haberler'],['/belgeseller','Belgeseller']
];

export default function SiteHeader(){return <>
 <div className="dpUtil"><div className="dpWrap"><div><span>TR · EN</span><span>€ · $ · ₺</span></div><span>Bültene katıl</span></div></div>
 <header className="dpNav"><div className="dpWrap">
   <Link className="dpLogo" href="/"><img src="https://www.motoryat.com/upload/logos/logo.svg" alt="Motoryat.com"/></Link>
   <nav aria-label="Ana menü"><ul>{nav.map(([href,label])=><li key={href}><Link href={href}>{label}</Link></li>)}</ul></nav>
   <button className="dpSearch" type="button">Ara…</button>
 </div></header>
 </>}
