export const realEvents=[
  {slug:'01_Bosphorus_Boat_Show_Kara_2027',name:'Bosphorus Boat Show Kara Fuarı 2027',start:'2027-02-20',end:'2027-02-27',province:'İstanbul',district:'Bakırköy / Yeşilköy',venue:'İstanbul Fuar Merkezi (İFM)',type:'Tekne, yat, ekipman ve aksesuar fuarı',image:'/heroes/haberler-hero.webp'},
  {slug:'02_Exposhipping_Istanbul_2027',name:'Exposhipping İstanbul 2027',start:'2027-02-23',end:'2027-02-26',province:'İstanbul',district:'Bakırköy / Yeşilköy',venue:'İstanbul Fuar Merkezi',type:'Deniz ticareti, gemi inşa ve yan sanayi fuarı',image:'/store-directory.webp'},
  {slug:'03_MAST_Izmir_Boat_Show_2027',name:'MAST 5. İzmir Boat Show 2027',start:'2027-05-05',end:'2027-05-10',province:'İzmir',district:'Gaziemir',venue:'fuarizmir',type:'Tekne, tekne ekipmanları ve deniz aksesuarları fuarı',image:'/sale-euro-850.webp'},
  {slug:'04_TYBA_Yacht_Charter_Show_2027',name:'8. TYBA Yacht Charter Show 2027',start:'2027-05-11',end:'2027-05-14',province:'Muğla',district:'Marmaris',venue:'Marmaris MUTTAŞ Marina',type:'Yat charter ve brokerage fuarı',image:'/charter-luna-hero.webp'},
  {slug:'05_Bodrum_Boat_Show_2027',name:'İMEAK Deniz Ticaret Odası Bodrum Boat Show 2027',start:'2027-10-13',end:'2027-10-17',province:'Muğla',district:'Bodrum',venue:'MUTTAŞ Bodrum Limanı',type:'Tekne, yat, ekipman ve aksesuar fuarı',image:'/charter-sunreef.webp'},
  {slug:'06_Bosphorus_Boat_Show_Deniz_2027',name:'Bosphorus Boat Show Deniz Fuarı 2027',start:'2027-10-16',end:'2027-10-24',province:'İstanbul',district:'Bakırköy / Ataköy',venue:'Ataköy Marina',type:'Deniz üzerinde tekne ve yat fuarı',image:'/hero-home.webp'},
  {slug:'07_Yenikapi_Boat_Show_2027',name:'Yenikapı Boat Show 2027',start:'2027-12-11',end:'2027-12-19',province:'İstanbul',district:'Fatih / Yenikapı',venue:'Dr. Mimar Kadir Topbaş Gösteri ve Sanat Merkezi',type:'Deniz araçları, ekipmanları ve aksesuarları fuarı',image:'/store-mengi.webp'}
];

const MONTHS=['OCAK','ŞUBAT','MART','NİSAN','MAYIS','HAZİRAN','TEMMUZ','AĞUSTOS','EYLÜL','EKİM','KASIM','ARALIK'];
export function eventCard(x){
  const d=new Date(x.start+'T12:00:00');
  return {...x,day:String(d.getDate()).padStart(2,'0'),month:MONTHS[d.getMonth()],year:String(d.getFullYear())};
}
