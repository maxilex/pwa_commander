'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "6c90f930c5f7a53d5e5fb10d6342d91e",
"icons/icon-128x128.png": "b83a580de872a253045b6b8650436448",
"icons/icon-144x144.png": "23bef2815d084f182366d3c60ab929f3",
"icons/icon-152x152.png": "6cb405d9fc2bb0dfa04576d58742914e",
"icons/icon-192x192.png": "06f908da65aa59c5353ec77664742c3c",
"icons/icon-384x384.png": "92fea9df825f65f175eba685db46e463",
"icons/icon-512x512.png": "5ec377165efef06158f8303488f9fd64",
"icons/icon-72x72.png": "6c90f930c5f7a53d5e5fb10d6342d91e",
"icons/icon-96x96.png": "287ccb42df4246e0f0c0fd170b863369",
"index.html": "83629f1cd1d9defca74a9354d6745ee2",
"main.dart.js": "52960f2168a8657c30e6d18914ec80d6",
"manifest.json": "6278e3a0235abe2ac8d48a97d9108803"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
