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
"index.html": "6fbd0e2f6dbb939c8c0009d1529b2480",
"/": "6fbd0e2f6dbb939c8c0009d1529b2480",
"main.dart.js": "85c433fd58f25e4fb8fa65e844f40bfa",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "64d583ff9f444fccb30fc6eab6e859e1",
".git/config": "eca78c0879b920b4851a7e18f6413b71",
".git/objects/0c/4123ce3e6547a0c866442fe816cb400841213d": "5ef8c9b5968ae1fc5605f899a7f4123b",
".git/objects/57/c5ab81083df6b1df74fe428802e6618eb90a5e": "d9a814ff3c24c3d1ce07c97ffb07b786",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6f/e4c0b81ca8fed8c04014fdd1fe3f088c3fd0fb": "00f07fadff37b6ba5338ef1bae0a273b",
".git/objects/04/9d59ca0f0214c7328514332b58c3dc2060413d": "7392c99f05038e6e7b2fc0ac7b523e2b",
".git/objects/93/e938669c4858e57d2853cd802cc2f7e17514af": "0adb3779f83606224fef98609508b382",
".git/objects/60/14b09b925365a791a552119f05cd4903d5bc07": "92598c1c904cbada5251481606f4beea",
".git/objects/a4/ee179f6615474d17593c9d79de3693466c63c1": "b2793368d6fe7a95f8d394f30d625d07",
".git/objects/a4/27c613a885d2318209b237bf559d0f2c72d1b5": "a551b1b724691800dd6e4814501f077d",
".git/objects/ad/c78711b945ceab95942c4ebed7b38992e389f7": "024a2765f60110346214c37c11f7c029",
".git/objects/df/f857f1927365dccd11b1788d1114776671622a": "4105f08827996198b675041e381adbc1",
".git/objects/b4/f8d12b9b1042a3bee8a03525a30f8fca8a1009": "0144ade20af661f5681fa79d8b0c5d85",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8b374741b380bcb34bb429661210eab2d3a64b": "3f4461a060b357e7a84e9ded7fb3e18f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/244bd4f863bfee2d24b6aa3676346408e623c9": "bfba0253c785be2c66c332c8b56e7f64",
".git/objects/e3/3babff9045cd73bd87a9e99daa7cc3ad061def": "5076559b2abc18b3a319572925e4d8cb",
".git/objects/fe/6168eef3de58065af990389334374f0cc27097": "379c6dbc24359cd8111d078ecbd5e6c9",
".git/objects/4b/1043c6d20f277cad12fa1753bbf230b3b0a8d9": "b56877f682c883a433c69acddc248ae8",
".git/objects/4b/dc619ae4249355d3628f5d8a7ed54d8fc5ca1b": "63e91214716cd8ce67555938100c5dcb",
".git/objects/pack/tmp_pack_eVeGnH": "3b78ee9e5c13995beb58876c2941911e",
".git/objects/11/b8036aebc21496ada9939aeeafdba08552003a": "3745cb1cb3183a5eafa1f40b4acb74c4",
".git/objects/80/c4995ddf480c64db50d694c5d6fc93dc0fe3f5": "aa4ccda74f37ac44d8cd8d8af9e069a3",
".git/objects/74/d43dd3ff7c33a5a136c40fb628451f71e945f4": "e3bf3b2e4e81053a4e84fa79327eae1c",
".git/objects/7b/10ca4b35153c5dfabf21a552668004f6573088": "d16743ad4603d220e0f273d8aae38f6c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/214cb650143dd417eaf40cbb9b8135fe4bfeba": "e67cdcf4e85bf75849022c94f0a8a32e",
".git/objects/21/60eb492653ac870674873b04b7f8cac0eb26fa": "1c7bba79526433bffe0431b0e3cfa286",
".git/objects/21/d3c24553121deb298a2227680de133378b9a78": "378232ce80ee585af0d10c03c933d077",
".git/objects/4d/8708a6a163a805ea45d2d4a86ab87462d1943f": "8309894c8f502914a1481d2869a5f64c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/38a696351c6385d456301f65b46ba8392f8b37": "0c2dbad213668d467bbb27a846c66489",
".git/objects/6b/edc4a0f615c5008cce0436d09e033992cb8e5f": "891c39b5e7f987e8a2eac8b4b27bae3e",
".git/objects/36/ef04148cc667a5207ce612049a388b0b65026a": "f3bbdc3cae850164f92be5787d254acf",
".git/objects/08/f2b51fb17be2dec3aceccb8b34aec5c26f5edd": "009b9c40b79dfa276a5ff444cab83263",
".git/objects/06/b569b2249c7395027878d8628f80783f5ea87c": "9ad72babd2dc925f73206d41d3142303",
".git/objects/99/16b0901f90ad00a142b7afeb7b5e8b3dff1898": "806fe94eab415bd9deaf3709a074736b",
".git/objects/b8/f239bc2862eff26cf2693784c268fb2b8f4c98": "4b637e6390fb60ef077296b515920adf",
".git/objects/b6/15dd253313096aa13ef7b076a2e5dad92b62e0": "847d6771873764abebf3c9729ffa0acd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/3e00896259a28bc3c60e6bfa4876fb4f3b279e": "c7410a0612b8628601553b3a4a3f241a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/c5/4b0a93a482637ca254714a77a42d712dfc73c9": "7221ceabe271efe4e099abf6d48aaff3",
".git/objects/c2/da3a225ce69e8ba34750dd5cd7caafab6a4023": "fd86cf094d377f102d7208b6cde715fb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/9aa298d33832e9acf81d6143e449665d11ebce": "88402ad9a49309c1dd6caf83afd7c283",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/26a300aa5c5d94d37622dd375ab1cfb515a381": "5189dde2b721b4d05451e025009a2c7d",
".git/objects/76/a7a0861316733e5fc7c5c4de0935aef8eb9db1": "67b800264da0888ad0df05a8fb520253",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/22/b28ecbc1828c4e81968279e94e15a241eb818b": "8c4eeedf3c6262e3d3de6c49b4e212a2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1bd07f1d4bfcc9120ca82780a7d3217",
".git/logs/refs/heads/master": "a1bd07f1d4bfcc9120ca82780a7d3217",
".git/logs/refs/remotes/origin/master": "feb66571ccbb2943c20aea2262b2d873",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "0967b6b14a063838366f678ab474d1c5",
".git/refs/remotes/origin/master": "0967b6b14a063838366f678ab474d1c5",
".git/index": "15986e239275336a5919e6ef733c8a01",
".git/COMMIT_EDITMSG": "65db27307aa0cdf0b3c0323431e08a15",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
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
