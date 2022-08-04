'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "691ba79dc3e46f6fb0ba29e290bcd2a7",
"splash/img/light-2x.png": "09bb1e690d2664ad10647e0b7dfd1551",
"splash/img/dark-4x.png": "4c518e61b736ee1ebe31b52c87d99344",
"splash/img/light-3x.png": "696527e8b3cbf41e2c77f545accf68c4",
"splash/img/dark-3x.png": "696527e8b3cbf41e2c77f545accf68c4",
"splash/img/light-4x.png": "4c518e61b736ee1ebe31b52c87d99344",
"splash/img/dark-2x.png": "09bb1e690d2664ad10647e0b7dfd1551",
"splash/img/dark-1x.png": "1c25d0a1dc59a448c799f5826b324290",
"splash/img/light-1x.png": "1c25d0a1dc59a448c799f5826b324290",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c669de841a19c348d91f1a2707d368fb",
"index.html": "95d803040b750ac5a8acb3f1b693227b",
"/": "95d803040b750ac5a8acb3f1b693227b",
"main.dart.js": "32a7dc22daeb9e5be240ba1b95340fc2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "64d583ff9f444fccb30fc6eab6e859e1",
"assets/AssetManifest.json": "fff6d14239d681fd08e70d254234121c",
"assets/NOTICES": "0fe55578612b3aa83f369c738e7f75ae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2be161c5541adb525464781830a7a171",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/phantomProductsScreen/placeMark.svg": "ced850812607bfc67e5d81638823a344",
"assets/assets/phantomProductsScreen/smallLogo.png": "b338509b4a77f79ba1dddc8d7ec0fffc",
"assets/assets/phantomProductsScreen/smallLogo.svg": "3df2aacce7a59c58c0da0b1e8d537792",
"assets/assets/logo.png": "11700810f1bdc98e4b77053978315497",
"assets/assets/loginScreen/desktopbg.png": "8aec1d2d5ce93ad596c83a10cb340c46",
"assets/assets/loginScreen/mobilebg.png": "740028dfa7c4835988a4c531a975c171",
"assets/assets/loginScreen/loginImage.svg": "ffc85864d9d41f75081b9543bbb44963",
"assets/assets/loginScreen/loginBG.png": "99468e565caf743704c9911c11a6ad76",
"assets/assets/loginScreen/loginBG.svg": "7a0671dc185b941358c20163ebd8811c",
"assets/assets/loginScreen/Logo.svg": "135ec9c0ccaa7f499df3684c1cc6fc57",
"assets/assets/placeholderimage.png": "2abc664a91d8cd028e978672e5972e2c",
"canvaskit/canvaskit.js": "9d49083c3442cfc15366562eb578b5f3",
"canvaskit/profiling/canvaskit.js": "dfb57a8542220c772374503baaf2632c",
"canvaskit/profiling/canvaskit.wasm": "2c16ab2af3d4fbad52da379264e260e8",
"canvaskit/canvaskit.wasm": "e58017ff67dd1419dbd7b720458fb1af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
