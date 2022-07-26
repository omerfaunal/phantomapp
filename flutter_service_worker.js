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
"index.html": "c3b213f3a643cb2ba2b3a078ef5c0959",
"/": "c3b213f3a643cb2ba2b3a078ef5c0959",
"main.dart.js": "cc9bee23e28b9b58ce64689162e79a68",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "fa74a81385cebd92e26308a75aba28da",
"icons/Icon-192.png": "e58bff7bd4c18d0f7142a1f8cae0cec9",
"icons/ms-icon-144x144.png": "c20b67471b404bcaa2d2e902fd289931",
"icons/Icon-512.png": "ea2f8bf759e9028e3fa83497e8e9e6a6",
"icons/ms-icon-70x70.png": "d9683ff9495b2bfcca7e6d5330e595ae",
"manifest.json": "64d583ff9f444fccb30fc6eab6e859e1",
".git/REBASE_HEAD": "bc4471d25454ca39dddf4f7fd48e8037",
".git/ORIG_HEAD": "bc4471d25454ca39dddf4f7fd48e8037",
".git/config": "460b10b3260ec5e7c3d86e88b4ed167f",
".git/objects/61/c149addc97982dc6361fd5322cab82365783bc": "4dfeb0e935fc04710649d62e350b6b7f",
".git/objects/95/1b0792de90d7232d2ccda6271fda1ab9a2bd53": "c1e4cbde8ba95f174271b63e956a8936",
".git/objects/57/ea6bec9606150cfe3894d3996d6a8abd1d13b4": "df4e737c5b82ab6c434d0bf20f347adf",
".git/objects/57/c5ab81083df6b1df74fe428802e6618eb90a5e": "d9a814ff3c24c3d1ce07c97ffb07b786",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/6f/e4c0b81ca8fed8c04014fdd1fe3f088c3fd0fb": "00f07fadff37b6ba5338ef1bae0a273b",
".git/objects/9b/c5a5d8c6f0feb34b0159482fb1e3048d0d7142": "304040f9846c4a5ed0193ad8e7b842f7",
".git/objects/9b/d95b33bd30bc17d2b15bb2fb2aeef54a2a480e": "2241ee57baa723cf613fa404875d5c22",
".git/objects/9e/13c1ff07842db7f894f74d9dc6a90ed0cf4d96": "0555b537a5a408b7976c431bdce990c7",
".git/objects/04/9d59ca0f0214c7328514332b58c3dc2060413d": "7392c99f05038e6e7b2fc0ac7b523e2b",
".git/objects/69/e85b67965bb1ca35c99fea0aa9c19d627761c4": "b4d5ed2c730bd7e4c0b6921317db0b2d",
".git/objects/56/c9096c83ddac44395d3553e67ea6df17a2691e": "83c1b70f6120fd1909cae0ab43108444",
".git/objects/56/1991ad9789bed86f84836564b0af8f9df1844e": "ba8827111eb58f5e49e54cffa4e6cad7",
".git/objects/56/a98ba9921c51050365f00b59703fcee29d28de": "6a517cda92af735dd81598ce9b3d4e1e",
".git/objects/51/7b5c5d5ecc0a7246c9043144cd379a622dffb7": "e4d105b399743c08abca69b9ae663280",
".git/objects/3d/eb579763cfb5ae43da2ff0645cd640659f2fa6": "475aac6c20b7cddfde894059c2690e2e",
".git/objects/58/da1b5acd99202e071d8bfcfe010a2d5f11294f": "166d801cf9324dccd0472e86ee121875",
".git/objects/0b/391153486ac4eaccd7e19a4e1b893def8fe584": "1d672eccd506fa749b72169f525ac629",
".git/objects/0b/f338b6f3c8bf1a249569f83e832ec219bc527a": "143453f6686ce0aa36684fb09506635c",
".git/objects/93/b8c56a8139c9bb5be1dff5bacc4204a0611a4e": "bc8a711bcdd46d084be08a963f59b874",
".git/objects/93/e938669c4858e57d2853cd802cc2f7e17514af": "0adb3779f83606224fef98609508b382",
".git/objects/94/09b4284ede681783282aa8133b021caca36442": "56ed33b02adfdd2765c9398f2097e2c2",
".git/objects/94/7f2d9c5b1a87c9780c9fbb3e81f4c0a1c0f45c": "11303e001bc343f18ab266395a9042c1",
".git/objects/0e/64a6fe27a94e62391cd2af8814a892d39a9280": "47afc7cb43afc74afe45606086f21131",
".git/objects/0e/1ceb752450f706ce0b550fc366f24eef37673d": "c1f93d18faf57e347208d2cb6bb5d3cb",
".git/objects/0e/0cb0766a560d2b803ff2e362844f09d63284d0": "b2ab8cce742d335d31b8f93e6890f2f3",
".git/objects/5a/6c5ed1a313768b289f01ac95e1c43510d5bed9": "81c9f9ade1a3a23c33763212b678032b",
".git/objects/5f/05c8a4929a48b1bc109184dbab738395b8df68": "34a71c4eff22b4a01363778755eba075",
".git/objects/5f/2b5131b58fb70f3ecbfe8f25bb4b8295998b6a": "e700b7483bedf9a53297657306f0776b",
".git/objects/5f/4fbc2fc7a69fe8a8fd6442a2022bf8ed9073d4": "18ea5a20b15f9e43bddbfb345fc8b272",
".git/objects/05/219ae0c07aef512a53432ddf883e5a45472dc7": "c2e93a4219e2aad97265cee733f0a3a2",
".git/objects/9d/36e049a77ae6d8a826977d7d20241fd5adecb2": "076c4a6c522f4bfb35f2f9d9f90ad496",
".git/objects/9d/d08d669a763d1ddbaa00a60abc3e009c10aaf6": "10c6474e18dd2574538f32d3abad93f6",
".git/objects/9c/b8d96dde229bf3a97e78d25402566f9d425d23": "7104134552cd15acf379496d6243a853",
".git/objects/9c/c7f89f36dbfe3d36b8efce13b33af354da3788": "ac615dc668bdf9c1e5574025de76b0ef",
".git/objects/02/016f908ebf1c561ffa37941e6a33bd285c3705": "abb26cc692024ecd81f714a5a56ed35f",
".git/objects/a4/e8cef3c5d05a6a72577814f62a8f5a19c80bb0": "edbf7b2c99cbdd0399499807e26e8281",
".git/objects/a4/ee179f6615474d17593c9d79de3693466c63c1": "b2793368d6fe7a95f8d394f30d625d07",
".git/objects/a4/27c613a885d2318209b237bf559d0f2c72d1b5": "a551b1b724691800dd6e4814501f077d",
".git/objects/a4/9c6b4179394c33ea97649ca67f15cf7979aba0": "8786bc15a02f75aa1e4519fbd77383df",
".git/objects/a3/34b6a302c5b5cbfa4ffc6756218330fbf80b7c": "2f212e85308924fb487f1270c2b88e2a",
".git/objects/a3/9746a6f61411d7237bdd9bc84b55454a52ab6d": "beaf6e54f279dabd52fb41af7134b2af",
".git/objects/b5/280da5a7a659cfcc23e1c415d79dcf7d8f13e8": "0320f17af07d3ac5105fb0a895ba1bd0",
".git/objects/ad/e4021230d109b5f94f9af1473948a58924ac6c": "878c158aa9a46204edbbdbbba9fbdaf0",
".git/objects/ad/47b8f9fe0cffeb0ec53d70d532c84848bf1ee2": "e999f1c9446db007b072daadba2da3d6",
".git/objects/bb/3b95a9d25c6b168caf460453fcd40d5ea53cb5": "2f08375ec9baba4615b7b75340bfe58e",
".git/objects/bb/c18a3ffd05610be8b3223698cccc05ac2992b1": "945473e582a828b1b9fa7087995454f9",
".git/objects/d7/eeeb2530c89a756b38f8ffb07d70806d413e36": "a79a3cdd25b5218cfcac18ff6a3aeb55",
".git/objects/be/831e313c7b15d29e5c01ffc8f791e76ccd2cd1": "c32858aa0761093bd1caadd125de971f",
".git/objects/be/ef42aa378f1d0990d2aea71c143f42dfb2f858": "03a605a81f72e5872c5db8da94cd5702",
".git/objects/b3/b67d2433923a531fe9c37d58f8f1acb1982aaa": "562d013e0b8cf71792cf82f8d33bed68",
".git/objects/df/f857f1927365dccd11b1788d1114776671622a": "4105f08827996198b675041e381adbc1",
".git/objects/b4/410a19994f0db75750cc57d5294d1149ccb67d": "1538b8d31ef83627d15f05a01df6ede7",
".git/objects/b4/0e6a28cf7a4b76a188c0826a6e1581ac857f5e": "0a9ea0ccb705548b36798efb3b597cf2",
".git/objects/b4/f8d12b9b1042a3bee8a03525a30f8fca8a1009": "0144ade20af661f5681fa79d8b0c5d85",
".git/objects/a2/9284963b04445db772bb8907601973c6d833fe": "e13ea32fbf21cff37b4e234967c59a5d",
".git/objects/bd/3d7aa36e5d413d795e0f05857f92750ca52c0f": "be9f54b009e0d5f5f8f6dea5973b2eab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/8add463a06dcb9d64b328ebc3971f011bbd67c": "11d1c66b871675e0a66a518a70d68500",
".git/objects/bc/8b374741b380bcb34bb429661210eab2d3a64b": "3f4461a060b357e7a84e9ded7fb3e18f",
".git/objects/ae/b811c717164cc4aa7370d9658a38b8da6adfdb": "c9c544bd86c12491a52420f520e255ce",
".git/objects/d8/d844af3d0e5ad8739cc0c55cf1aa5c1b2c9724": "092f0f72da0940d9b89a40921f5c7fd5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/b758adcc314c9ebc919d212881c7fdba06fd8d": "44606dbf63b5ee36404b0ed658976661",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/244bd4f863bfee2d24b6aa3676346408e623c9": "bfba0253c785be2c66c332c8b56e7f64",
".git/objects/c7/a5ca65e5911962f863463ca7fd52cd362fdd90": "bbd39fffa5be891f1af37d8cdfaad5e3",
".git/objects/c0/4737706c310cf0156358f4ede99ed37b915d7d": "bb774c6cde4f062a1799a2bc99a25fef",
".git/objects/c0/d0ec62896eb559a96a1b6851a035601d12ea28": "c0014a9491b1af9537d68f12ea5763d6",
".git/objects/c9/e3bf7fc0f27016c5ad081b27fa0c28376f2b3c": "40b412b24a392c3e21f76103b79a7cb4",
".git/objects/f5/79efd8e31a9b4304df240b741b1685fa02b315": "34261fabe623f8367103b9b6b4100aa6",
".git/objects/cf/15de83dd178306c0bf9ef211127cb7c1c2f79d": "5d62d0d2e3fe84b2ec48a8e3d086ae22",
".git/objects/e4/3bfa90f2d658db71898df17560d9bb1acdd172": "c3bd6a5c56eaee890e361969ba113cd8",
".git/objects/e4/82e24be0c7be9535e103550337856157961179": "df5bfa57a6f3935e5190500a4bc8447d",
".git/objects/e4/7c3207ec85c1b10de7c86ab829445a5cc0ed46": "1cd187adec5373d4b48bbd99b031129c",
".git/objects/e4/afcc4f5419a735ad150d18bed8e8ced99e644f": "88d114551468032ba45f804970c94c75",
".git/objects/fe/6168eef3de58065af990389334374f0cc27097": "379c6dbc24359cd8111d078ecbd5e6c9",
".git/objects/c8/34c42df7676f4229b9500eb82f024282952549": "b142d27e8b93c083fa596cf1f88609bc",
".git/objects/c8/e24eb8a812c9a8ffab1d7cc4ef86f0f957e438": "bfc12b1f398c516f6ade52eee3667d20",
".git/objects/fb/16d14e50d909a2f66bfa3ff9a744100585ce4d": "2b26a4c3834f8253a15ee3b9cbd45636",
".git/objects/ec/2fc2320fd191057f2229cb0b3646e42fd229a3": "b401c7812df5c12465d65753a11dbe09",
".git/objects/4e/e0a73c5d265f7ef772f57f8da75c7b3f13aadb": "7e0f268b1af5638e836d53ae516b7aac",
".git/objects/4b/1043c6d20f277cad12fa1753bbf230b3b0a8d9": "b56877f682c883a433c69acddc248ae8",
".git/objects/4b/7a7f61946d199b691773bd5f351c8b71f01f06": "213187518e793f98875ca87766bdea93",
".git/objects/4b/e3d4c7feb0a25e8b971e3ac9f76b0e99c30819": "522389703b7402b8916224f318af48d5",
".git/objects/11/b8036aebc21496ada9939aeeafdba08552003a": "3745cb1cb3183a5eafa1f40b4acb74c4",
".git/objects/7d/03adfe782df7fbc255b76197682bdc885705da": "ac0218097830e123285bb490fc0fcd60",
".git/objects/89/89a9676e8d90c252e3c2ef40ebdb727f421bc3": "50f002e405fed9e9cf39c889ef33ab86",
".git/objects/73/cf0c65ec79553c4d9ced3576468703d60052db": "b4a331f456b692ead867f19d61e3801a",
".git/objects/80/5f6cfe4a2ee7e7822f2793625980cae22b596a": "2b4978d3017aa5d0cc9861c33cd87d0f",
".git/objects/74/d43dd3ff7c33a5a136c40fb628451f71e945f4": "e3bf3b2e4e81053a4e84fa79327eae1c",
".git/objects/1a/fff52ec8206051d62e56a1617410e83c5c1be2": "28e65acbb9eb878fc83f929f292f6bd9",
".git/objects/1a/17030754a933adbc7a1fffc8f2e49d5a2b7017": "1dc4ef879693150a5e371e9cd461e728",
".git/objects/28/fab59590c5702d7591509655300cb56465ee31": "b050c70fe584228de8504938814ddb31",
".git/objects/28/a1095ea42f7541c28781f350076a0f21c953b2": "04b37920d282eb0ec25fee297c313d6a",
".git/objects/17/6a15c214bba522ff3b4ba2bba06cab4e462d81": "14c5aa9c416839c329fb4ba12dc80418",
".git/objects/7b/f16cb4f69b225158c4e9daa90baf2addde5a34": "6884a96079c54fccba434171dd3636d6",
".git/objects/8f/415be59dfe9410d990077c485effb9e3c72762": "33977e6360f39c2bae6c4a8064438702",
".git/objects/8a/e8caa898fa6bf784d6923de0de408228788057": "3529b6ca94155f30c54147f808562593",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/b07cc348eacd4b56dc49d4ad5a3060c5406a64": "3aa78947bdd56b71737e5f2a7c186168",
".git/objects/4c/89be36127d32739634cf3858d06755dfc19120": "3893793358fa07354f51a7d8e797449c",
".git/objects/26/7d7b68292d3440f111cf3ed256c060bff89188": "982418f59ca8b2bf47daf5192cc7031c",
".git/objects/21/dc07c97503793be3f93b56315ccc144e8a8696": "eb2397f9dc07dd685ea45c3fba93bba9",
".git/objects/21/60eb492653ac870674873b04b7f8cac0eb26fa": "1c7bba79526433bffe0431b0e3cfa286",
".git/objects/21/d3c24553121deb298a2227680de133378b9a78": "378232ce80ee585af0d10c03c933d077",
".git/objects/4d/8708a6a163a805ea45d2d4a86ab87462d1943f": "8309894c8f502914a1481d2869a5f64c",
".git/objects/75/ab00f73f084a13d98692f4eca71edd4b893268": "1b175172882cd4e283485c0517c869fc",
".git/objects/81/e789fd9f7dc6cf1b122f5b4c288755be1d201a": "f5f3f2a563744442125825a171c9be22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/38a696351c6385d456301f65b46ba8392f8b37": "0c2dbad213668d467bbb27a846c66489",
".git/objects/00/410e1a2252e976841c7ddb3b54ba3315956260": "728ec1f8f117d41ad60529fdae96d599",
".git/objects/36/ef04148cc667a5207ce612049a388b0b65026a": "f3bbdc3cae850164f92be5787d254acf",
".git/objects/5c/012b001c8d79959c3080c0de462015a47ad0fb": "8ce512c2101711104a4b0e901b8c8366",
".git/objects/5c/d65d81f4e7aa1605c687ebab3d20a295c646f0": "5db884917d56910e1c5ebbb7a7157416",
".git/objects/09/fb768e12bba73200f4be35ff304143acf2a2b7": "122e75bd70882034057b7c9074003cf2",
".git/objects/31/9e31cc4bb469ceeec21bddb29bae950c29cee3": "3f8e9a83e24b3b9895207f888ce8f4f0",
".git/objects/31/15ca8d310400bb6f5b0f49bdbeb2c4d7cde8b8": "6a5b3d091cf19301b3bba655a9f16d4f",
".git/objects/62/807b877bb08e5a59423e289b3ec64dacbd63b7": "b156a18d35de3571838fdada20c1945f",
".git/objects/96/db9ebcbbc4ebd8747883723f49a53c90863025": "c1d4039af4c4246a80542ec30f48e8ee",
".git/objects/96/1729e15bb552a5b08db0836c1325abcdc87cd5": "53d273d8566cb98bc6e291120c6dc2dd",
".git/objects/54/7eeb44508b5351cd3743ee39c5133f0cd513c5": "054ed868f9a9fac86b76367bd4cb5bf8",
".git/objects/98/144cc4ce1fa74b59bedc75670cd50eb48a300f": "d3eb8bf3cd4c34213089452c353e4f2d",
".git/objects/30/87da54763f3417fabfc130b52cc42fdd2c07d3": "999aa5bc3d9330d2972fc31b9dabba1b",
".git/objects/5e/562c1f1f2fb1828f03dbc2ab8cb6aa0af9282c": "0c477c8c70c6edff105a64744196bdaa",
".git/objects/5b/ab49b578cae80ff693899aad0f955b4ef8c9ad": "04d9a51c3b583be8e7c69bb7e1fe6574",
".git/objects/08/f2b51fb17be2dec3aceccb8b34aec5c26f5edd": "009b9c40b79dfa276a5ff444cab83263",
".git/objects/08/a3003d7479c2848d6eae432f8d41b2fa6cf4b9": "9c33e8ca23f6900506c9ac1d4fe940b8",
".git/objects/6d/912b4b7528669e8a0c040c3b3cb57c79cbc48d": "6bb806dcf0213d86d6f8171d96741968",
".git/objects/06/b569b2249c7395027878d8628f80783f5ea87c": "9ad72babd2dc925f73206d41d3142303",
".git/objects/6c/90eb31a26b6d2f9c85494a6c439b8d1caeb262": "3d5bd78a4258a9220e5dbb1888a961bc",
".git/objects/99/16b0901f90ad00a142b7afeb7b5e8b3dff1898": "806fe94eab415bd9deaf3709a074736b",
".git/objects/63/14ef2be485b06667f1a7742e116e5be568c971": "4918613860b9b9288b888f83a853230c",
".git/objects/63/4e17ac9cdd254e24cba2f8d55bfa654aa90b58": "0b32294a03ae2f00edac609efb21af45",
".git/objects/63/1c6d4eae6fdf505768849a384d23b93fa0d3da": "9bad1084fdccb03f0d84e0ba49737b1b",
".git/objects/0f/b1d45bf3589ebf4079e2e8dbafa69e4c361dc3": "cfd1f8a9e1364d166ca8dda37f076a5d",
".git/objects/0f/ef0c5935ba61378206f3533ea4034cf319fd47": "309cefc1ab314e2d6127463676ce0972",
".git/objects/0f/987ed885e66908efb9ce3bae5f5160f22d4cda": "52c77bb23133127e31907461549645e8",
".git/objects/0a/8b0aa130a38e12326a5bdd4c549ae72bb2b16d": "66e93a00ea283fdf5071734d9ceff808",
".git/objects/bf/264dc027734bae466d142685aa61765c8938b4": "f65d20b29067d1f112199b898d13de58",
".git/objects/d3/16d5d7ac1d4501bc32031e9941a26bd1e46d61": "1821345044c188a7442ce44f60380c16",
".git/objects/d3/8e038c27b382e0ca3b5cbe4ad4b2c1832e49f3": "cbcf1b467bf6798032d8ed519a135934",
".git/objects/a7/ff3caac787cad9f2f0d396145b2f91e9de9933": "43cc1877086fea32ec729b49e5dd42d1",
".git/objects/a7/3bbc4f23ec413e6a4c460594208d0446948d48": "d8aa1f19cd7ae991238f71858baebfc9",
".git/objects/b8/3e3b5e33db4a3a6888af392ebfc7ee850890d9": "f6516873634b4303d67c820d484c9ace",
".git/objects/b8/f239bc2862eff26cf2693784c268fb2b8f4c98": "4b637e6390fb60ef077296b515920adf",
".git/objects/dd/36e14ca991b508367e09123e20cf7e891d1c74": "bac08adfabacad1ce955e69dac0176dd",
".git/objects/b6/15dd253313096aa13ef7b076a2e5dad92b62e0": "847d6771873764abebf3c9729ffa0acd",
".git/objects/b6/ce850dab528af8a49cf4407e64e172d6ebd1e0": "d0280592ea2f3679c3625767bf138685",
".git/objects/d2/088e1a73d2bd8498d84db7375b60265c0776c4": "82fb2f8b674698a58920e3850bf3664e",
".git/objects/d2/b184f688022ef6a347a0593d06de4fcf8c92c1": "a8ac42b8dd17e5464a9d4baaeb3e4fb7",
".git/objects/aa/3048232b4a33fefe6dea424b1b35ac77ba9846": "55325eb584daa769e5533a61edf5758e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/76fa62b3169348b2f2f25ad758968616070168": "27df9c85c4717eb5c7402bdc1c7775fe",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/608a44add63f0cff23ffa9a949f1ca985319ab": "f1e8a5ba6d290984ad612e635a6e2abc",
".git/objects/b0/b88842bba98b180a521f0479282467ea835cf3": "6de4ec2139531e21970ad4a710a09091",
".git/objects/a6/1d13e30bd130de8e26afffa509567eec574996": "6679dc78a47b046ce3977cff14dfb40b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e7fac7bebf783b66a7321ea79d4d9e31cf06b3": "15616e5e49aaffdfe92db83aca86bc77",
".git/objects/a1/9c3d7923ecc342610e8a258cce02034525608b": "0ee2c74b70dc5c402ec7e84f4f6e6270",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/0a0931edf68e903129bd139cc74b8cca9af8ae": "2b75015c6f2d3ba49ce34f7c614d55ae",
".git/objects/ef/8d67a5f3456df58b4053f64b09d5eb65cac0ef": "d1682a5e5e2b36a03e62ed027f4a83c5",
".git/objects/ef/94634e97bf7a38a1d28ad40e92577395b5d908": "169c92c0e94b805de4eb5c9d06b396ee",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/a9882bed2b888de5f45166d38fcccb3cd19356": "213533e3011f067fac0690e38dd6f31b",
".git/objects/e6/07ce29a7078229f3bd4e327f9636a7a3026489": "f09c316fc1acdbafdd371d9f00ea2c4f",
".git/objects/f9/079c0547703a858bda75ec96933872c253f4ee": "49b5831a564d5427cd3ceff014ca32a2",
".git/objects/f7/02501135444626fc4697ee90f2bad9e88c59d0": "3b545da9258fd638cddbd3e4c7e1c7c4",
".git/objects/f7/f26035b3ac061cee74ae47374fdb1e22260018": "f7b4fde1b292406bf0117e52759b4731",
".git/objects/fa/27c5ed8989e644d0e06f5a775eb96795a5a542": "6fea9e16fe177476621167edc1608b07",
".git/objects/ff/07dd0ccbc9075158f0270d48b08e86e3b7be01": "e3ed8d605a72b8833a925471fed8f3fc",
".git/objects/ff/1d37c4896222b125173074605c36df09bf6f20": "09a0480ab5a925ae11f08dc953dc98bd",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c5/4b0a93a482637ca254714a77a42d712dfc73c9": "7221ceabe271efe4e099abf6d48aaff3",
".git/objects/c5/494fa92a61d47f7ec4fff7c20c012bd455b5de": "b49d23bdac0ba8575947e8daf4f27580",
".git/objects/c2/da3a225ce69e8ba34750dd5cd7caafab6a4023": "fd86cf094d377f102d7208b6cde715fb",
".git/objects/f6/9e9a8d4a484bfa300dd76a552dd3e29220b168": "00d6251be871a56411a40625b4727829",
".git/objects/e9/91cbe2f9433b4379f2bcca9eab0013bfcf17f6": "7eb0b50ab1508a92de3d3bd06ab68a22",
".git/objects/e7/d19372c824f9bbb2c55f5ce8dbccecde56d9df": "e024821bb8bb979ebc4ec0ad4a98a86a",
".git/objects/f8/5cb14d6b0e7da8253f201582f5bb210f11f950": "e79473b27cab2f64c8509a0a45a67a3a",
".git/objects/e0/dfca3df4095a09295b63844188a6055b514b37": "f2dd68db28828336ea6572292a623bb7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/9aa298d33832e9acf81d6143e449665d11ebce": "88402ad9a49309c1dd6caf83afd7c283",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/7ab7eeb8e50b46eeb248aa5f04ce95c05131d7": "d46d61b8fe58bc8bf8f88d5ebb3a8395",
".git/objects/41/4c507310f9e72673c4aa1f38332eb2c256924c": "b26a642b6f235b0650bcc3b07c08028e",
".git/objects/77/26a300aa5c5d94d37622dd375ab1cfb515a381": "5189dde2b721b4d05451e025009a2c7d",
".git/objects/77/6078cc8db80817efdc693f4a675e242178c0f8": "9c59a2ebb121bcc364c76cf0771f18a4",
".git/objects/48/084a4768d561cd66f2ae927e218729ec9afb7e": "e23cbbc7da560552b598895295d0492f",
".git/objects/70/92d8ffac380458f9f2bd316ee1411f3652c0fc": "5a7bc4a5e321ed2fe876f34e0810f11c",
".git/objects/4a/ffdaa41588291e9773f8570211e3fcc19d16e8": "f314c1e2878aa6749ddb3ee3a6439cac",
".git/objects/4a/c98068d3a8d912c192a7374cb3658cade9d14d": "cdbb6ba0157acaf173dad03276586387",
".git/objects/4f/6262b581abf0c947edf4ea3d5b1052b16b697f": "04e85f9c0f0639941e4cbf841930199b",
".git/objects/4f/7c00137a1972461037cb2d0fc13271bdbde013": "1b978bb4889b0212cac7a3127e32e0e2",
".git/objects/12/057b6a81d0118cf935fa020d7011cbe4e89b2d": "2a3a4cc3cca3856b8b4e2ffa6864ab67",
".git/objects/8c/ffadb6bfba91b2c75edfabf8c6f0542129f4af": "3ac2d71b05e32a98f76765017a3e2114",
".git/objects/8c/0b970ddda365bf43fd641ff17738ddd15f4655": "6180590e8b184e3e3a5399059a17f659",
".git/objects/85/39533b4fa4b7d68d3ab16ffd58fdded92fc2d0": "5cd2215e4c4d9ba86c47a2a5454acd4e",
".git/objects/85/56d2067271539fcc7001b9785f6e1943af2364": "a4b35ab5608ef11fb65ace2b8a6770e3",
".git/objects/1d/d354ad67fef7ef601a347dd40dda50391a71da": "e435d9f754bb4e34c947ba58b09151f3",
".git/objects/49/18f884deed94e3837e4a8fc46261bdc7cd8b33": "d5ec1ecce5a645da2479db2ad866c1f7",
".git/objects/2b/833f37096e5bbb02e9d8a50bff012eb2034a2f": "fae139707d32d1e3d2618c242c1d2b6d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/65490a75d918aa60aac5a455ce7b0eec3d86d6": "b3b83cf6747ddffe3250bfd96dd81a62",
".git/objects/8b/104ae1c518f451c67e01bdb9a3d3f8f5443835": "26693cd7e5ac4628a518dbebee867420",
".git/objects/8b/c608a0ebb6be3dca97020c27304e27ad3acef3": "54a24ab23c0efae8dd23370dd00201fc",
".git/objects/7f/0748b0efd07751429a92232f2c9cfbb377c260": "f356cb3736633de27a6ed730918ae077",
".git/objects/7a/cfb6a1aff8eb29e227bbfd25024b3f15e5db94": "4a9d944490093e6b7a625299aa89c469",
".git/objects/7a/2caec488cd5c90bfbae89c37eec912b39b1db0": "b4e2b7bed2916919cfc7a135ef3527db",
".git/objects/14/8f0a954aab93e514b8086c5c411895890dc662": "5ce496a1c05a5507a7f92eb0c38ff720",
".git/objects/14/8753bd96ea4bbb35d4f3b15959a37848cd3ae8": "ea204e07f67cab9ee326c25c45294d93",
".git/objects/14/fe101226fa3ba61822d1a8600b5a3353172cb8": "133f9e46927903533b94aa31ce47c8b6",
".git/objects/22/83b6065af81403d477b613136cb5db4abba12f": "c358ee284ba530e1915da9beacab7469",
".git/objects/22/b28ecbc1828c4e81968279e94e15a241eb818b": "8c4eeedf3c6262e3d3de6c49b4e212a2",
".git/objects/25/85d0274f5a28d857a4babffda52fbff4c8512d": "b78d17f5aa68a2584456d542308521dc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b195976217ecb474311852d2069b7981",
".git/logs/refs/heads/master": "a95fce000f363a279c5cb2c00d1330be",
".git/logs/refs/heads/main": "349de7ed4536d3f49ea78a95e6a312d6",
".git/logs/refs/remotes/origin/master": "1bc73a01f01a273bdfd1fa02dbb015bd",
".git/logs/refs/remotes/origin/main": "7254a84e76419ce6ba74062e5c335897",
".git/logs/refs/remotes/main/main": "2bb849304b295e575c35b35bd2c40029",
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
".git/refs/heads/master": "95c20278f3e091970eee6860330a0fcc",
".git/refs/heads/main": "fd851c357a12f39a07ad06a8159a2d2f",
".git/refs/remotes/origin/master": "95c20278f3e091970eee6860330a0fcc",
".git/refs/remotes/origin/main": "a244a10dcc7f2073bba22bea68d6b653",
".git/refs/remotes/main/main": "a244a10dcc7f2073bba22bea68d6b653",
".git/index": "56c5cce2074f7b175abebb069ea8e6e6",
".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/FETCH_HEAD": "da014e9e87807dd0699d512870cac0de",
"assets/AssetManifest.json": "605a17a7bba5ef0fb8ee9dcab2377c00",
"assets/NOTICES": "fa1ba81762112619d3c83ddf58669aae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2be161c5541adb525464781830a7a171",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/phantomProductsScreen/placeMark.svg": "ced850812607bfc67e5d81638823a344",
"assets/assets/logo.png": "11700810f1bdc98e4b77053978315497",
"assets/assets/smallLogo.svg": "3df2aacce7a59c58c0da0b1e8d537792",
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
