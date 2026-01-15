const CACHE_NAME = "my-radio-category";
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(["./index.html","./manifest.json"])));
});
self.addEventListener("fetch", e => {
  if(e.request.url.includes(".mp3")||e.request.url.includes(".m3u8")) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
