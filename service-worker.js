/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","fcbe2756c9e0de0a5838d4306707c85b"],["CSP2019-graph/index.html","a18f6ec79b27c309853fbdde68c9f7cf"],["CSP2019-greedy-and-dp/index.html","7277a1b587af899af91f961262be6bb0"],["CSP2019-math/index.html","8e14a74ff2e0ff7608720eeda978345d"],["CSP2019-search-and-ds/index.html","9113556250c2de81fc8d6552d67a0010"],["CSP2019-string-and-tree/index.html","b3d4720e92dee7885753476bde5d9dae"],["English-7-words/index.html","157dd72ea5ac1d6ccbb8bcffb247e161"],["NOI-Online-summary/index.html","26991a012bb9c65d8e245c2d7440c793"],["NOIP2018-day1/index.html","1af5db96a86baf5f9c02f4da347639c6"],["NOIP2018-day2/index.html","511e0d196699899f2ac3b81640029a44"],["NOIP2018-day3/index.html","a623eb09b8ee0e865a89ce495a14bf93"],["NOIP2018-day4/index.html","14b4209c2adba9306cad08726b59d363"],["NOIP2018-day5/index.html","4e7e7c366602d596c8286535fe1c2e4a"],["THUWC-2020/index.html","240def276bab4f36f9c5e59e1d06ad14"],["about/index.html","0f96bd8008ada4e90eff686a73c095a3"],["adventure-record/index.html","de820ebda834ced890948959710967f7"],["archives/2017/02/index.html","3c4a63bd42fcc20ed5e05f1ccb67504b"],["archives/2017/index.html","149ebbd502935a5da4f025a8a7fd9137"],["archives/2018/01/index.html","b35297354e8451f324b7b1bed46b7b61"],["archives/2018/04/index.html","011448c5bf0c7d55f6fe93d248238f76"],["archives/2018/07/index.html","296b830c012ccfe774c33311c5fa5344"],["archives/2018/08/index.html","cc4793c7af7e186b36a52008409acd53"],["archives/2018/10/index.html","965eff7c6437c9f1278938914f5f8c89"],["archives/2018/11/index.html","c7af6e5ff4e3989bfe3e26d15de71170"],["archives/2018/index.html","97df5faa731cc643e31cdfdac5c19f92"],["archives/2018/page/2/index.html","1e2cdbd3be1b40ca2d2913ff0d7f6cf0"],["archives/2019/02/index.html","a262e780d5eb30bfbcbf565bd5270def"],["archives/2019/04/index.html","9fa1ba48641e354587c98bc5decf81e4"],["archives/2019/06/index.html","96c9dbcb7f99c3fbc836d33262933875"],["archives/2019/11/index.html","fc49ab8311e50ff3a0752c28fc2f3ca4"],["archives/2019/12/index.html","feb79add64a41374ab5bbf9ef0ec0372"],["archives/2019/index.html","b7900eeeb275fc216062fefae146765e"],["archives/2019/page/2/index.html","a5a83380c8a7bebd1275ed58707e1bf7"],["archives/2020/03/index.html","938d8ab7d283fb37afef0dadfa996aa7"],["archives/2020/04/index.html","cc6489bfc1ceffd9a0d632d24f800cd9"],["archives/2020/index.html","575f037e9136def43632f9fad3518265"],["archives/index.html","8bdcc76a11c0e86d24b54c672afa2d0a"],["archives/page/2/index.html","c2ab70e8a7e27e99f962c266568b2a70"],["archives/page/3/index.html","c2ab70e8a7e27e99f962c266568b2a70"],["archives/page/4/index.html","c2ab70e8a7e27e99f962c266568b2a70"],["bipartite-graph/index.html","b677dfc1b879227734da5a8ba8bd7324"],["bucket-radix-suffix-sort/index.html","63a0d2338af5f861d725a3c041f5bafc"],["categories/index.html","17805e2a6a6381df57510cad2d8c3c24"],["categories/即时笔记/index.html","07b48f9856f27aac7609c91e807fb722"],["categories/总结/index.html","02b446bbff8fc157b7ce58a08b03da86"],["categories/文化课/index.html","a17b7a9e2c6b406975505cf17ea5d4ee"],["categories/穿透世界边缘的呐喊/index.html","7a5fc87df26acde42890e0fadea61d84"],["categories/算法浅解/index.html","33a8de3bf28e6f839d19eab91dc74000"],["categories/随笔/index.html","39d016260326e8af6923d0195d3928b7"],["comments/index.html","ff48afc68f9040e045b5fc0d67ad41ed"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","6fcf1e4e25619270b2084e975151bf45"],["exgcd/index.html","fcbc59b2fe99af1002d132d72cf4eecf"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","e687b5ca66d4dbbd7c04ddaed0762b5f"],["gallery/index.html","a53c80a1871e8fc5c488a733a22611ca"],["graph-in-math/index.html","dccb1eb5ce9f9044178e223d113be68e"],["hello-encrypted/index.html","c4031c33745960766ef726f079d866af"],["hello-world/index.html","c75ae38fbe2445f730f63d99cf846857"],["how-to-recite-log-inq/index.html","f987d6ed8006828aebb5a45645070ab9"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","0bc5eecd4616a4f2663e803d123f49ab"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","b5cb61716f5be32212d2e9f6579de1d5"],["kmp/index.html","0a4d0ceaf4f313c425bb293c481d718b"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","f49df27482c581850ba2eb751432bb33"],["my-math-problems/index.html","b15202fa542cb095e68720004eae6770"],["noip-2018-outline/index.html","cc26d45b2a455994e5b50ff2113fcbcb"],["offline-algorithm/index.html","d8fe383976b24cfd9ad2a6c9e8c2b0bd"],["page/2/index.html","1b2082aad9b89e18cbb1b76a0f4de95f"],["page/3/index.html","87c22e5dc59470272798e6ebba583897"],["page/4/index.html","007e611187e554c6d5076ab5efe0d04a"],["random.html","6ef9502651e7ce963b4ae621d4403779"],["retirement-speech/index.html","64710d7c842e7ab9f0ad5edb783795e1"],["s-and-d-on-a-tree/index.html","9f06def3a0f36e1d6701b1a669f36d07"],["search/index.html","a964232e312b992010d46f5ac7e9d3c3"],["tags/KMP/index.html","071afa83734653a54dedd5001d3cd5b3"],["tags/THUWC/index.html","e33feaba4d516cd670689968f2ae0f97"],["tags/floyd/index.html","97dd187631a19c0929192262314e48a9"],["tags/gcd/index.html","fd6543fdd3b066c7700365a7825d6b8b"],["tags/index.html","59455396e57fe770d17c2f079f43f414"],["tags/世界间绪论/index.html","5a433e844824bb9cffabb5b71971f1dd"],["tags/世界间评论/index.html","ee2ad0ed06ecbe1f603f3db4e29592c9"],["tags/二分图/index.html","40c167087d100acfbc4e931eb0659ede"],["tags/你的名字/index.html","746e8e3dd14e5d9ed3f7054bec74ef56"],["tags/函数/index.html","515add8301c18ea93f6f75eb3513921d"],["tags/前缀和/index.html","843880afffe0a007576ffb0657e95988"],["tags/动态规划/index.html","ebd5f1b71f676bbd57f4e03bf1bc87f0"],["tags/单词/index.html","e1fb00f8e3775beae0ceca5d68f26538"],["tags/单调队列/index.html","6ba225ebf15d2dcb6031c77e3e9da0c3"],["tags/后缀数组/index.html","d13218976ef00043305b2ff0bf3b8a92"],["tags/图论/index.html","70d8003d0a29af865a25e2b956c9ae2e"],["tags/大纲/index.html","d6b432394edf142ba74f6c54599f8467"],["tags/奇闻/index.html","526dbc11727b9accb55740b1abaf7cde"],["tags/字符串/index.html","15df71d767bff1717423ef344e188f43"],["tags/差分/index.html","ac03f3eb083d9b907f83a6f67275041f"],["tags/并查集/index.html","01ae6ee651f014d6691b7062ea316201"],["tags/总结/index.html","3297948432d97c87d2ad215e502e3cc4"],["tags/排序/index.html","b9124069071303b7e66fab0af14203e2"],["tags/搜索/index.html","ac7a2c1d50bc52821bda84b88cdaab04"],["tags/数学/index.html","2c7bbe13dc0934991e969aa2beb5a120"],["tags/数据结构/index.html","538fa676d2555c8c11a9cb680be5803a"],["tags/文化课/index.html","f3648c358365ca6ea7497783f85916fd"],["tags/树/index.html","05cc8d1bd08912bfe7b41ce9c0a76976"],["tags/离线/index.html","276c362b5be9b3314f17f462cd16b1aa"],["tags/笔记/index.html","15e475c3877e44a127b5935b815c76c7"],["tags/算法浅解/index.html","ee652997f9c768b3f2acd96db3859655"],["tags/紫罗兰永恒花园/index.html","3b9dbcd3846f849097302e58521cb701"],["tags/英语/index.html","81420c6a9a90c9218fbc503633b2393b"],["tags/蒟蒻/index.html","7bff669f1b7876b9dec96bbc3ae04ae5"],["tags/贪心/index.html","89d2b2a53f50fbbadd24370a9077bd7b"],["tags/退役/index.html","7660d25ae8d3e8e2d4f63a2c6c10f500"],["tags/随笔/index.html","4dc5be1808b4f16226d890bf9dd6d1ba"],["transitive-closure/index.html","bb37324bfd85754777657668777f2751"],["useful-links/index.html","daae82dfe37411655ce6c05ea8a99a15"],["violet-evergarden-review/index.html","ebfaa46456c0abd02a6ed0ff45f8fcef"],["you-are-more-important/index.html","53864e320ea00f8e75d7bdb5106646a1"],["your-name-review/index.html","a743a89948bd0dfd53610e5efb3d6a4a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







