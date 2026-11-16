/* Flashcard Fireworks offline support.
   When you change any file, bump VERSION so phones pick up the new copy. */
const VERSION = "ff-2026-11-16a";
const ASSETS = [
  "./", "index.html", "lists.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png",
  "fonts/andika-latin-400-normal.woff2", "fonts/andika-latin-700-normal.woff2",
  "fonts/lexend-latin-400-normal.woff2", "fonts/lexend-latin-500-normal.woff2", "fonts/lexend-latin-600-normal.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

function save(req, res) {
  if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // Page and word lists: try the network first so updates show up, fall back to the saved copy offline.
  if (req.mode === "navigate" || /\/(index\.html|lists\.js)$/.test(url.pathname)) {
    e.respondWith(fetch(req).then((res) => save(req, res)).catch(() => caches.match(req).then((r) => r || caches.match("index.html"))));
    return;
  }
  // Everything else (fonts, icons): saved copy first.
  e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => save(req, res))));
});
