export default function StoreMiniNav({store,active='home'}){
  const items=[
    ['home','Ana Sayfa','/magaza/'+store.slug],
    ['satilik','Satılık','/magaza/'+store.slug+'/satilik'],
    ['kiralik','Kiralık','/magaza/'+store.slug+'/kiralik'],
    ['modeller','Modeller','/magaza/'+store.slug+'/modeller'],
    ['projeler','Projeler','/magaza/'+store.slug+'/projeler'],
    ['urunler','Ürünler','/magaza/'+store.slug+'/urunler'],
    ['hizmetler','Hizmetler','/magaza/'+store.slug+'/hizmetler'],
    ['hakkimizda','Hakkımızda','/magaza/'+store.slug+'/hakkimizda'],
    ['videolar','Videolar','/magaza/'+store.slug+'/videolar'],
    ['haberler','Haberler','/magaza/'+store.slug+'/haberler'],
    ['iletisim','İletişim','/magaza/'+store.slug+'/iletisim']
  ];
  return <nav className="storeMiniNav"><div className="container">
    {items.map(([key,label,href])=><a key={key} className={active===key?'active':''} href={href}>{label}</a>)}
  </div></nav>
}
