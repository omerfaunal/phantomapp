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
"index.html": "7c9f1add63ad000dbdf7154c4f5b25a5",
"/": "7c9f1add63ad000dbdf7154c4f5b25a5",
"main.dart.js": "f8ce312c24af807dd646634469457538",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "64d583ff9f444fccb30fc6eab6e859e1",
".git/config": "eca78c0879b920b4851a7e18f6413b71",
".git/objects/59/18b71556e1d976cb33f9a640de48bfb1887dea": "d1e794dd98a76941ae1fb6d32e603c4d",
".git/objects/92/ccc04187c52f1b9fdc3089db414ade8e924bc3": "db9cadab02e4104378f3cc5a81535793",
".git/objects/0c/4123ce3e6547a0c866442fe816cb400841213d": "5ef8c9b5968ae1fc5605f899a7f4123b",
".git/objects/57/c5ab81083df6b1df74fe428802e6618eb90a5e": "d9a814ff3c24c3d1ce07c97ffb07b786",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6f/e4c0b81ca8fed8c04014fdd1fe3f088c3fd0fb": "00f07fadff37b6ba5338ef1bae0a273b",
".git/objects/03/666b80f114ccc4d7d032c1147cf510b4b9d922": "f12952eda58ef2f9514902cc58c9950b",
".git/objects/9b/d95b33bd30bc17d2b15bb2fb2aeef54a2a480e": "2241ee57baa723cf613fa404875d5c22",
".git/objects/04/9d59ca0f0214c7328514332b58c3dc2060413d": "7392c99f05038e6e7b2fc0ac7b523e2b",
".git/objects/69/e85b67965bb1ca35c99fea0aa9c19d627761c4": "b4d5ed2c730bd7e4c0b6921317db0b2d",
".git/objects/0b/f338b6f3c8bf1a249569f83e832ec219bc527a": "143453f6686ce0aa36684fb09506635c",
".git/objects/93/e938669c4858e57d2853cd802cc2f7e17514af": "0adb3779f83606224fef98609508b382",
".git/objects/94/09b4284ede681783282aa8133b021caca36442": "56ed33b02adfdd2765c9398f2097e2c2",
".git/objects/0e/64a6fe27a94e62391cd2af8814a892d39a9280": "47afc7cb43afc74afe45606086f21131",
".git/objects/0e/1ceb752450f706ce0b550fc366f24eef37673d": "c1f93d18faf57e347208d2cb6bb5d3cb",
".git/objects/60/14b09b925365a791a552119f05cd4903d5bc07": "92598c1c904cbada5251481606f4beea",
".git/objects/05/219ae0c07aef512a53432ddf883e5a45472dc7": "c2e93a4219e2aad97265cee733f0a3a2",
".git/objects/9d/36e049a77ae6d8a826977d7d20241fd5adecb2": "076c4a6c522f4bfb35f2f9d9f90ad496",
".git/objects/02/016f908ebf1c561ffa37941e6a33bd285c3705": "abb26cc692024ecd81f714a5a56ed35f",
".git/objects/a4/e8cef3c5d05a6a72577814f62a8f5a19c80bb0": "edbf7b2c99cbdd0399499807e26e8281",
".git/objects/a4/ee179f6615474d17593c9d79de3693466c63c1": "b2793368d6fe7a95f8d394f30d625d07",
".git/objects/a4/27c613a885d2318209b237bf559d0f2c72d1b5": "a551b1b724691800dd6e4814501f077d",
".git/objects/b5/280da5a7a659cfcc23e1c415d79dcf7d8f13e8": "0320f17af07d3ac5105fb0a895ba1bd0",
".git/objects/ad/e4021230d109b5f94f9af1473948a58924ac6c": "878c158aa9a46204edbbdbbba9fbdaf0",
".git/objects/ad/c78711b945ceab95942c4ebed7b38992e389f7": "024a2765f60110346214c37c11f7c029",
".git/objects/bb/d5c59a0113f285f16882216f9e67b1de1406cf": "6f47d452be489f1e16b397ea69d37b99",
".git/objects/bb/c18a3ffd05610be8b3223698cccc05ac2992b1": "945473e582a828b1b9fa7087995454f9",
".git/objects/d7/14d12635c1a63306aa7a43824a7f1b8dce6abe": "4bdedede5e08d1463d2ef9eb31b9cd62",
".git/objects/be/831e313c7b15d29e5c01ffc8f791e76ccd2cd1": "c32858aa0761093bd1caadd125de971f",
".git/objects/df/f857f1927365dccd11b1788d1114776671622a": "4105f08827996198b675041e381adbc1",
".git/objects/b4/f8d12b9b1042a3bee8a03525a30f8fca8a1009": "0144ade20af661f5681fa79d8b0c5d85",
".git/objects/a2/9284963b04445db772bb8907601973c6d833fe": "e13ea32fbf21cff37b4e234967c59a5d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8b374741b380bcb34bb429661210eab2d3a64b": "3f4461a060b357e7a84e9ded7fb3e18f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/244bd4f863bfee2d24b6aa3676346408e623c9": "bfba0253c785be2c66c332c8b56e7f64",
".git/objects/c7/a5ca65e5911962f863463ca7fd52cd362fdd90": "bbd39fffa5be891f1af37d8cdfaad5e3",
".git/objects/c0/4737706c310cf0156358f4ede99ed37b915d7d": "bb774c6cde4f062a1799a2bc99a25fef",
".git/objects/c9/e3bf7fc0f27016c5ad081b27fa0c28376f2b3c": "40b412b24a392c3e21f76103b79a7cb4",
".git/objects/fd/e2d2cdf21cad6ede3c06842ba71b2ed0305fd4": "7189bf35d0ab775372decd91d6bc6d91",
".git/objects/f5/79efd8e31a9b4304df240b741b1685fa02b315": "34261fabe623f8367103b9b6b4100aa6",
".git/objects/e3/3babff9045cd73bd87a9e99daa7cc3ad061def": "5076559b2abc18b3a319572925e4d8cb",
".git/objects/fe/6168eef3de58065af990389334374f0cc27097": "379c6dbc24359cd8111d078ecbd5e6c9",
".git/objects/c8/e24eb8a812c9a8ffab1d7cc4ef86f0f957e438": "bfc12b1f398c516f6ade52eee3667d20",
".git/objects/c6/5b9bcd7a357611aa3f7de312e16dc582febdfa": "52b86380b7a958ab8b9804549d15ac88",
".git/objects/ec/2fc2320fd191057f2229cb0b3646e42fd229a3": "b401c7812df5c12465d65753a11dbe09",
".git/objects/4b/1043c6d20f277cad12fa1753bbf230b3b0a8d9": "b56877f682c883a433c69acddc248ae8",
".git/objects/4b/dc619ae4249355d3628f5d8a7ed54d8fc5ca1b": "63e91214716cd8ce67555938100c5dcb",
".git/objects/pack/tmp_pack_eVeGnH": "3b78ee9e5c13995beb58876c2941911e",
".git/objects/11/cbd4f8f6e9358fdf64ac9c4c94c5064c7371bb": "990a0f96a080b27770f05e818294e2f6",
".git/objects/11/b8036aebc21496ada9939aeeafdba08552003a": "3745cb1cb3183a5eafa1f40b4acb74c4",
".git/objects/89/89a9676e8d90c252e3c2ef40ebdb727f421bc3": "50f002e405fed9e9cf39c889ef33ab86",
".git/objects/1f/58963b0779af866ee6dcbd9895362c83c03f60": "f22d5c32c0dedef892ff5d60984337c2",
".git/objects/80/c4995ddf480c64db50d694c5d6fc93dc0fe3f5": "aa4ccda74f37ac44d8cd8d8af9e069a3",
".git/objects/74/d43dd3ff7c33a5a136c40fb628451f71e945f4": "e3bf3b2e4e81053a4e84fa79327eae1c",
".git/objects/28/fab59590c5702d7591509655300cb56465ee31": "b050c70fe584228de8504938814ddb31",
".git/objects/28/a1095ea42f7541c28781f350076a0f21c953b2": "04b37920d282eb0ec25fee297c313d6a",
".git/objects/7b/f16cb4f69b225158c4e9daa90baf2addde5a34": "6884a96079c54fccba434171dd3636d6",
".git/objects/7b/10ca4b35153c5dfabf21a552668004f6573088": "d16743ad4603d220e0f273d8aae38f6c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/214cb650143dd417eaf40cbb9b8135fe4bfeba": "e67cdcf4e85bf75849022c94f0a8a32e",
".git/objects/10/b07cc348eacd4b56dc49d4ad5a3060c5406a64": "3aa78947bdd56b71737e5f2a7c186168",
".git/objects/4c/c3cf101880305cc4bfa65cfb8b4acfaa8b6d04": "14617211e457d4bac5848145ddef41cc",
".git/objects/26/7d7b68292d3440f111cf3ed256c060bff89188": "982418f59ca8b2bf47daf5192cc7031c",
".git/objects/21/60eb492653ac870674873b04b7f8cac0eb26fa": "1c7bba79526433bffe0431b0e3cfa286",
".git/objects/21/d3c24553121deb298a2227680de133378b9a78": "378232ce80ee585af0d10c03c933d077",
".git/objects/4d/8708a6a163a805ea45d2d4a86ab87462d1943f": "8309894c8f502914a1481d2869a5f64c",
".git/objects/75/ab00f73f084a13d98692f4eca71edd4b893268": "1b175172882cd4e283485c0517c869fc",
".git/objects/81/e789fd9f7dc6cf1b122f5b4c288755be1d201a": "f5f3f2a563744442125825a171c9be22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/38a696351c6385d456301f65b46ba8392f8b37": "0c2dbad213668d467bbb27a846c66489",
".git/objects/6b/edc4a0f615c5008cce0436d09e033992cb8e5f": "891c39b5e7f987e8a2eac8b4b27bae3e",
".git/objects/36/ef04148cc667a5207ce612049a388b0b65026a": "f3bbdc3cae850164f92be5787d254acf",
".git/objects/31/15ca8d310400bb6f5b0f49bdbeb2c4d7cde8b8": "6a5b3d091cf19301b3bba655a9f16d4f",
".git/objects/96/1729e15bb552a5b08db0836c1325abcdc87cd5": "53d273d8566cb98bc6e291120c6dc2dd",
".git/objects/3a/808020a6e5094fac2e068b70be20f3102ed399": "bb4fc23ed399a5cf9793055bdf1cb982",
".git/objects/54/7eeb44508b5351cd3743ee39c5133f0cd513c5": "054ed868f9a9fac86b76367bd4cb5bf8",
".git/objects/30/87da54763f3417fabfc130b52cc42fdd2c07d3": "999aa5bc3d9330d2972fc31b9dabba1b",
".git/objects/5e/562c1f1f2fb1828f03dbc2ab8cb6aa0af9282c": "0c477c8c70c6edff105a64744196bdaa",
".git/objects/08/f2b51fb17be2dec3aceccb8b34aec5c26f5edd": "009b9c40b79dfa276a5ff444cab83263",
".git/objects/08/a3003d7479c2848d6eae432f8d41b2fa6cf4b9": "9c33e8ca23f6900506c9ac1d4fe940b8",
".git/objects/06/ab48092862f144797a591f6544fcef11159682": "ca98c18d247047d3f75ad0dff8e2006e",
".git/objects/06/b569b2249c7395027878d8628f80783f5ea87c": "9ad72babd2dc925f73206d41d3142303",
".git/objects/99/16b0901f90ad00a142b7afeb7b5e8b3dff1898": "806fe94eab415bd9deaf3709a074736b",
".git/objects/63/14ef2be485b06667f1a7742e116e5be568c971": "4918613860b9b9288b888f83a853230c",
".git/objects/63/4e17ac9cdd254e24cba2f8d55bfa654aa90b58": "0b32294a03ae2f00edac609efb21af45",
".git/objects/63/1c6d4eae6fdf505768849a384d23b93fa0d3da": "9bad1084fdccb03f0d84e0ba49737b1b",
".git/objects/0f/b1d45bf3589ebf4079e2e8dbafa69e4c361dc3": "cfd1f8a9e1364d166ca8dda37f076a5d",
".git/objects/0f/ef0c5935ba61378206f3533ea4034cf319fd47": "309cefc1ab314e2d6127463676ce0972",
".git/objects/64/903452a3484fbd080a8051faad3c5d37bc2cd0": "9b1c1cfb085603d65034618fbc7f3f02",
".git/objects/b8/f239bc2862eff26cf2693784c268fb2b8f4c98": "4b637e6390fb60ef077296b515920adf",
".git/objects/dd/36e14ca991b508367e09123e20cf7e891d1c74": "bac08adfabacad1ce955e69dac0176dd",
".git/objects/b6/15dd253313096aa13ef7b076a2e5dad92b62e0": "847d6771873764abebf3c9729ffa0acd",
".git/objects/d2/b184f688022ef6a347a0593d06de4fcf8c92c1": "a8ac42b8dd17e5464a9d4baaeb3e4fb7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/3e00896259a28bc3c60e6bfa4876fb4f3b279e": "c7410a0612b8628601553b3a4a3f241a",
".git/objects/b0/9903c62bdc1d4d4d464c5379fa66964820984f": "189e35ef4af4f6169c7ac7e3b8612923",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/9c3d7923ecc342610e8a258cce02034525608b": "0ee2c74b70dc5c402ec7e84f4f6e6270",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/8d67a5f3456df58b4053f64b09d5eb65cac0ef": "d1682a5e5e2b36a03e62ed027f4a83c5",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/079c0547703a858bda75ec96933872c253f4ee": "49b5831a564d5427cd3ceff014ca32a2",
".git/objects/f0/5171c4964af09795b7726c05fa7043152a4088": "5c2ec75bfb222a1cec752db79f7aa0a5",
".git/objects/f7/f26035b3ac061cee74ae47374fdb1e22260018": "f7b4fde1b292406bf0117e52759b4731",
".git/objects/c5/4b0a93a482637ca254714a77a42d712dfc73c9": "7221ceabe271efe4e099abf6d48aaff3",
".git/objects/c2/da3a225ce69e8ba34750dd5cd7caafab6a4023": "fd86cf094d377f102d7208b6cde715fb",
".git/objects/f6/9e9a8d4a484bfa300dd76a552dd3e29220b168": "00d6251be871a56411a40625b4727829",
".git/objects/f6/be54a13dcc81379399bd2da2b6a127dc215550": "23f8e2c563bd6bb875f9eaaec6f5d8cd",
".git/objects/ce/4aefa0e1b45351a689464225decf159761e11d": "fc7a6f480580a7319b9b79d56257f577",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/9aa298d33832e9acf81d6143e449665d11ebce": "88402ad9a49309c1dd6caf83afd7c283",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/26a300aa5c5d94d37622dd375ab1cfb515a381": "5189dde2b721b4d05451e025009a2c7d",
".git/objects/4f/ca9476df5109672457b7d228cb13abb44b9dca": "c6a573aa09c5a90d3c4193f9f38d1f4f",
".git/objects/4f/6262b581abf0c947edf4ea3d5b1052b16b697f": "04e85f9c0f0639941e4cbf841930199b",
".git/objects/8d/dcb46798046d54efcebbd8f7bd4b322634ae6d": "de3510ff478221d0b08cea33fa82bc8d",
".git/objects/85/39533b4fa4b7d68d3ab16ffd58fdded92fc2d0": "5cd2215e4c4d9ba86c47a2a5454acd4e",
".git/objects/76/a7a0861316733e5fc7c5c4de0935aef8eb9db1": "67b800264da0888ad0df05a8fb520253",
".git/objects/49/18f884deed94e3837e4a8fc46261bdc7cd8b33": "d5ec1ecce5a645da2479db2ad866c1f7",
".git/objects/2b/833f37096e5bbb02e9d8a50bff012eb2034a2f": "fae139707d32d1e3d2618c242c1d2b6d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8b/104ae1c518f451c67e01bdb9a3d3f8f5443835": "26693cd7e5ac4628a518dbebee867420",
".git/objects/22/b28ecbc1828c4e81968279e94e15a241eb818b": "8c4eeedf3c6262e3d3de6c49b4e212a2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "df6dd709f94e33e66974264d3e46f6c5",
".git/logs/refs/heads/master": "02cdfe6229625fbc017efcfc350f1c1a",
".git/logs/refs/remotes/origin/master": "44c174643b65d0a36472ea4e229fbdef",
".git/logs/refs/remotes/origin/main": "9e80b166f0509a2c5d29928589b3c4ba",
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
".git/refs/heads/master": "0c991f2f0abd5a003de5c5e8e721d127",
".git/refs/remotes/origin/master": "0c991f2f0abd5a003de5c5e8e721d127",
".git/refs/remotes/origin/main": "ae7712fbf7a25c9a3e7a5e0ed05a67c8",
".git/index": "0565d40060668edf343331544e3ae391",
".git/COMMIT_EDITMSG": "65db27307aa0cdf0b3c0323431e08a15",
".git/FETCH_HEAD": "b919ef785acd05c2a32f04e5201be440",
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
