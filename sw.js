const CACHE='tinaxe-v1';
const FILES=['./app4.html','./icon.png','./manifest.json','./app3.html/app3.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
