const fs=require('fs');
const path=require('path');

const root=path.join(__dirname,'..');
const sources=[
  ...require(path.join(root,'data/local/image-sources-01.json')),
  ...require(path.join(root,'data/local/image-sources-02.json')),
  ...require(path.join(root,'data/local/image-sources-03.json')),
];
const outDir=path.join(root,'public/listing-covers');
const mapPath=path.join(root,'data/local/generated-image-map.json');
fs.mkdirSync(outDir,{recursive:true});

function extFor(type,url){
  const t=(type||'').toLowerCase();
  if(t.includes('webp')) return 'webp';
  if(t.includes('png')) return 'png';
  if(t.includes('jpeg')||t.includes('jpg')) return 'jpg';
  const p=new URL(url).pathname.toLowerCase();
  if(p.endsWith('.webp')) return 'webp';
  if(p.endsWith('.png')) return 'png';
  if(p.endsWith('.jpeg')) return 'jpg';
  return 'jpg';
}
async function one(item){
  const ctl=new AbortController();
  const timer=setTimeout(()=>ctl.abort(),7000);
  try{
    const res=await fetch(item.url,{signal:ctl.signal,headers:{'user-agent':'Mozilla/5.0 MotoryatMediaCache/1.0'}});
    if(!res.ok) return null;
    const type=res.headers.get('content-type')||'';
    if(!type.startsWith('image/')) return null;
    const buf=Buffer.from(await res.arrayBuffer());
    if(buf.length<1000 || buf.length>8*1024*1024) return null;
    const ext=extFor(type,item.url);
    const file=item.slug+'.'+ext;
    fs.writeFileSync(path.join(outDir,file),buf);
    return [item.slug,'/listing-covers/'+file];
  }catch{return null}finally{clearTimeout(timer)}
}
(async()=>{
  const map={};
  for(let i=0;i<sources.length;i+=24){
    const batch=await Promise.all(sources.slice(i,i+24).map(one));
    for(const row of batch) if(row) map[row[0]]=row[1];
  }
  fs.writeFileSync(mapPath,JSON.stringify(map,null,2)+'\n');
  console.log('Cached listing images:',Object.keys(map).length,'/',sources.length);
})().catch(err=>{
  console.error('Image cache warning:',err.message);
  fs.writeFileSync(mapPath,'{}\n');
});