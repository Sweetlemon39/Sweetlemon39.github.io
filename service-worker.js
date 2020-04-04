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

var precacheConfig = [["404.html","61e5a293456dc72fc37a64afe21fde78"],["CSP2019-graph/index.html","a81de215c3227bdb18c9a397b53b860c"],["CSP2019-greedy-and-dp/index.html","798810a5e2dd87968fe12048ffd3509c"],["CSP2019-math/index.html","f043f76b1963dcfbf9d0c721dd4b26c5"],["CSP2019-search-and-ds/index.html","1a9758b5d25a785c54c4c34d9a4721df"],["CSP2019-string-and-tree/index.html","11adf28f07644f82a8998ad16fffe1e1"],["English-7-words/index.html","d932f3b04adbfc3eb6125f54370f4e47"],["NOI-Online-summary/index.html","823b80f609c43cce4b75d615919f9438"],["NOIP2018-day1/index.html","2189b3f2009211823489da20db55adf6"],["NOIP2018-day2/index.html","0dc1dcd8d1685133a1458a51c0445b8a"],["NOIP2018-day3/index.html","cfb22114a2ebcb9a8a59c94ec0283fa7"],["NOIP2018-day4/index.html","c2fb51ca7a99849003ba719865234b41"],["NOIP2018-day5/index.html","609884c1e7a270a93e731e3cb8f0b978"],["THUWC-2020/index.html","62e0f15a110499a4f8bdcbdf89cce1ff"],["about/index.html","a6b3dab333a7f05c8f1368a528c8d3fb"],["adventure-record/index.html","c55806c54fe58774900bfdb71027045c"],["archives/2017/02/index.html","b8f4de6ec9eb445847fef0bb59e80f3d"],["archives/2017/index.html","8fc5782d767fecab24b46b09795dfa0b"],["archives/2018/01/index.html","b634b4ab24402b991d471fc300b65da1"],["archives/2018/04/index.html","99c5b3ab6e884af1d2641b45c6cca5ce"],["archives/2018/07/index.html","9b5b1481fd8fd9cab6ee46bd038a4333"],["archives/2018/08/index.html","3f492a4c39938c82a6c8b3f68bac16c4"],["archives/2018/10/index.html","07b9844d7ffc26fdf05370dbcedd39de"],["archives/2018/11/index.html","85c84764b5d07234edb4683c7b3fb18e"],["archives/2018/index.html","7330b34f63e4f2db52e4bca77812cb95"],["archives/2018/page/2/index.html","5c7319fb8905f54764933dda02606087"],["archives/2019/02/index.html","32523a280701abfcb2980cb96e75cfdd"],["archives/2019/04/index.html","6c8e2f662cf4295ab353239b92dd3656"],["archives/2019/06/index.html","f4851b4d0769952ef82d1aa9243a2bd3"],["archives/2019/11/index.html","9a0ce34ee31e1af55df8ef3e1a5d0a6b"],["archives/2019/12/index.html","c2f1e488cc6507352a98136c4cbaad66"],["archives/2019/index.html","7f5dc9d4e9ee4bffd1a92593e60b7ff8"],["archives/2019/page/2/index.html","54517884193308517cb256a9d1a9ba02"],["archives/2020/03/index.html","7856313a47cf51c0549286affafcafef"],["archives/2020/04/index.html","6a25e476da92db9cbcc4585e900bf45b"],["archives/2020/index.html","aa7117fb7f372d163f87558a078467fc"],["archives/index.html","3d8b58450b2abab625d7f30bae2eda5d"],["archives/page/2/index.html","d6d527dbc81f6accbd2f14788d537162"],["archives/page/3/index.html","d6d527dbc81f6accbd2f14788d537162"],["archives/page/4/index.html","d6d527dbc81f6accbd2f14788d537162"],["bipartite-graph/index.html","3f1525ccb52351dc7d73881665c1fcd8"],["bucket-radix-suffix-sort/index.html","6a390137ab15274088f794da7479aa2b"],["categories/index.html","28f7603e3934840997f5fa8175382c37"],["categories/即时笔记/index.html","66779b5f480193a4efee973ff7c75dc3"],["categories/总结/index.html","7a14860f62d10e091b207bbd48409c44"],["categories/文化课/index.html","8181f6b79618b27cf110097682cb6e3f"],["categories/穿透世界边缘的呐喊/index.html","1e24ec33de3aeae99ca471541a88c1ba"],["categories/算法浅解/index.html","229d97a5399ced4c03461b03541bac8a"],["categories/随笔/index.html","07a1c6cbdd7119628777563f0f6828b8"],["comments/index.html","fea7247c8941a2365389469c5241f326"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","6fcf1e4e25619270b2084e975151bf45"],["exgcd/index.html","a1682681ab06ed804abe3f224c7afe9c"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","44d9a6068a05f85133a14c95d94a0f1d"],["gallery/index.html","67b4f165bc46a4dacd3c8f261c3825c9"],["graph-in-math/index.html","c57a46be055d0f111be62ef02b543738"],["hello-encrypted/index.html","41efc70f77e7653c9f844e5c93f40cfa"],["hello-world/index.html","29043b221a3a4ce52962de19c7a490cc"],["how-to-recite-log-inq/index.html","3a255139a6d51ef5999303edb61c8188"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","08537f24d3014778225b15e16f0f574a"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","dd8991052a752dc4eb13c48903ba7720"],["kmp/index.html","9e55e541d943d94f1b6346787c3715f5"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","5c7f6957da558f4c899fb71bf4a97de4"],["my-math-problems/index.html","cc6b35e753d8e9460304a0b1e0575a33"],["noip-2018-outline/index.html","b936ac4806b482891f22ae867736f4c2"],["offline-algorithm/index.html","02732bc0c533cd4fcfd1762c9047da78"],["page/2/index.html","884f6cdbd3117e8d86fde690a55731f1"],["page/3/index.html","e51d23184487031f98227950af6c15b7"],["page/4/index.html","78adfe8920651643018f04fc30274eaf"],["random.html","2c1069cde630c77c6d07a2ef5931ba15"],["retirement-speech/index.html","28aa99a467ebe3bf65b362d6db9ff19f"],["s-and-d-on-a-tree/index.html","1ca87d794191f5787e46dd806ab9595e"],["search/index.html","5a9012999e4710c0d2a61a32a5f484bf"],["tags/KMP/index.html","3402e181fd3c3748f78aa4dfd4df5898"],["tags/THUWC/index.html","eba2be069f208a50fc8c1c101be1592e"],["tags/floyd/index.html","3556886bc285fb3334206c962bbcf4cf"],["tags/gcd/index.html","149a14b3532ed158093f2c54dff11fbf"],["tags/index.html","b043329618b0f6ce914419d83e96c48f"],["tags/世界间绪论/index.html","1522b6c2fd29ad561f54b610e056009b"],["tags/世界间评论/index.html","e8ad46631e951966fdb03adba3067903"],["tags/二分图/index.html","d51ec080abef4d4073052bc6594e51e9"],["tags/你的名字/index.html","aff9ec3bf14e7bfb4f24ff3edd9b3fdc"],["tags/函数/index.html","5a7d5730a64b79193d7405a3ba96fd81"],["tags/前缀和/index.html","add6dd5af486e1800d08e57e7971f425"],["tags/动态规划/index.html","70cd3695f1e97fde01ac5b7ef429a27e"],["tags/单词/index.html","bd1e273bb7e0cccfb9d7397c9a99dc22"],["tags/单调队列/index.html","dd32afe9b576a686ecd589516402df3e"],["tags/后缀数组/index.html","83911586ddb84fcbdcf80961de59ede0"],["tags/图论/index.html","c49f8923491827869d9ee3c9285d1c0a"],["tags/大纲/index.html","590917ea26bdd3ae2a213905bfe27d34"],["tags/奇闻/index.html","6b67333b32f5880012577d265575b682"],["tags/字符串/index.html","3ec9745d4343683ceabb7530f417061a"],["tags/差分/index.html","5cad50c399a39108fe94e61e4277b2a7"],["tags/并查集/index.html","3160f065c7500c81517b01454a5a4683"],["tags/总结/index.html","2382e23d3cebe66fe28af31717699f44"],["tags/排序/index.html","950b2826374a44a80e83426c6423574f"],["tags/搜索/index.html","4ea42d2508b93f763af3155d4c60399a"],["tags/数学/index.html","f31084396bcaae98be858a4aa837b894"],["tags/数据结构/index.html","df7fb75a4d62483ca69a3935c7706f8b"],["tags/文化课/index.html","f377afa241b6e7f5f79bd3bbb2068e55"],["tags/树/index.html","e2c8b1a005246147ebc263ef499aa7d2"],["tags/离线/index.html","e6f7c737a6e6db7c783c903593c37c12"],["tags/笔记/index.html","1f8bd070d7f95fabab11a71211a9559e"],["tags/算法浅解/index.html","0e0f05c5468be7c2517575f260c868b6"],["tags/紫罗兰永恒花园/index.html","5dbd9037ad3f5113727ab94590a2d813"],["tags/英语/index.html","280ccf8d8e1cc6fd8c4538515a4ceaca"],["tags/蒟蒻/index.html","39cb39563ecb846279cc1351387777b5"],["tags/贪心/index.html","5b283206036752c4ada8fbd90044d208"],["tags/退役/index.html","aee223cfbd27edb3c50ed716793e5290"],["tags/随笔/index.html","3fa33f9a1c99ea48f6284b0067a6c68c"],["transitive-closure/index.html","d514f9c4267cfcef0e9d8e6bcbc04436"],["useful-links/index.html","5f2b1747eb49cc9db770bdfb641332b0"],["violet-evergarden-review/index.html","47eb6119183141bb7fcb01ccafd50c6f"],["you-are-more-important/index.html","b1b3c5b687ce185cfeebaa049d55a995"],["your-name-review/index.html","f627575a795077a200ddbfc1c6db74d9"]];
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







