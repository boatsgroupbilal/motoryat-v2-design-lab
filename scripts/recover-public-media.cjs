const fs=require('fs');
const path=require('path');
const manifest=require('../data/local/media-recovery-manifest.json');

const ROOT=path.join(__dirname,'..');
const PUBLIC=path.join(ROOT,'public');
const ORIGIN=(process.env.MOTORYAT_MEDIA_ORIGIN||'https://motoryat.com').replace(/\/$/,'');
const CONCURRENCY=10;
const TIMEOUT=15000;

async function download(rel){
  const target=path.join(PUBLIC,rel);
  if(fs.existsSync(target) && fs.statSync(target).size>1000) return {rel,status:'exists'};
  fs.mkdirSync(path.dirname(target),{recursive:true});
  const ctl=new AbortController();
  const timer=setTimeout(()=>ctl.abort(),TIMEOUT);
  try{
    const res=await fetch(ORIGIN+'/'+rel,{signal:ctl.signal,redirect:'follow',headers:{'user-agent':'Mozilla/5.0 MotoryatRecovery/1.0'}});
    if(!res.ok) return {rel,status:'http-'+res.status};
    const buf=Buffer.from(await res.arrayBuffer());
    if(buf.length<500) return {rel,status:'too-small'};
    fs.writeFileSync(target,buf);
    return {rel,status:'ok',bytes:buf.length};
  }catch(err){
    return {rel,status:'error',error:String(err?.message||err)};
  }finally{
    clearTimeout(timer);
  }
}

(async()=>{
  let ok=0,exists=0,fail=0,bytes=0;
  for(let i=0;i<manifest.length;i+=CONCURRENCY){
    const batch=await Promise.all(manifest.slice(i,i+CONCURRENCY).map(download));
    for(const x of batch){
      if(x.status==='ok'){ok++;bytes+=x.bytes||0}
      else if(x.status==='exists')exists++;
      else fail++;
    }
  }
  console.log(`Recovered media: ${ok} downloaded, ${exists} existing, ${fail} failed, ${(bytes/1024/1024).toFixed(1)} MB`);
  process.exit(0);
})().catch(err=>{console.error('Media recovery warning:',err);process.exit(0)});