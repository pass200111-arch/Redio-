const CACHE="radio-v1";
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./index.html"])));
  self.skipWaiting();
});
self.addEventListener("fetch",e=>{
  if(e.request.url.includes(".mp3")||e.request.url.includes(".m3u8")) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
