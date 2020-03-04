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

var precacheConfig = [["404.html","dd28ce79dbe8315db8282d8c666290d7"],["CSP2019-graph/index.html","a6c8f9925a14602b42db567e8caafed6"],["CSP2019-greedy-and-dp/index.html","effb56b67a33fae5c8ecc41fa831a0dd"],["CSP2019-math/index.html","f91c39d8be89af7fa965e98836792acb"],["CSP2019-search-and-ds/index.html","20e03f0f79bfc079a0134bf14de1070b"],["CSP2019-string-and-tree/index.html","a594081438de28e316228d4949ace384"],["NOIP2018-day1/index.html","a53e008ffeca9c6feea91270663bd5ab"],["NOIP2018-day2/index.html","47ab25e02a20b0b64d4ad31ebd1030a3"],["NOIP2018-day3/index.html","6a964aeb958b9e992fcdcc947674907f"],["NOIP2018-day4/index.html","679b74d2c5af703826e46928574ce802"],["NOIP2018-day5/index.html","60a7ecd93c29a87595678dc11f98b76c"],["THUWC-2020/index.html","9f46558cf3b08a15e700fab9b0cb8deb"],["about/index.html","6dcfe630a287e3ee07eb18fd123716b3"],["adventure-record/index.html","cb0dfd112ec41c71240bbdf647630b27"],["archives/2017/02/index.html","5b7b81b318758ed31b62ea500d59ef41"],["archives/2017/index.html","ad58a23902ef4a2f75f42e14df4934cc"],["archives/2018/01/index.html","d0e5a7b89d6b4102287a93f39830e1af"],["archives/2018/04/index.html","5dc12cc21247d52351e81d47b50f22a2"],["archives/2018/07/index.html","6fb98ceb1b7131ff3a9ea95bebcf629e"],["archives/2018/08/index.html","0f56ba728632f4e961d43c82b1a8db8b"],["archives/2018/10/index.html","85403e90d6c3a6b84c3409f9e029cfd1"],["archives/2018/11/index.html","b87ea7590ad34a71c76cabcb73d71b9b"],["archives/2018/index.html","b15cf66a8b7d50d0ab90c2c2aff9fa9c"],["archives/2018/page/2/index.html","bf14f103614316fd6b02dbe45152bd9d"],["archives/2019/02/index.html","e72008c2bf40f8da1929ea4dfdcfc986"],["archives/2019/04/index.html","239947429f5eddccc40fc0f741a15bbb"],["archives/2019/06/index.html","06389d9cf63a67cf51e4dade05e09856"],["archives/2019/11/index.html","56d0252d9cecd43c0e7986818d6b253e"],["archives/2019/12/index.html","0d3d39dd504e4e1b94f517d5f1bfb7dd"],["archives/2019/index.html","0d53a19bdaf8244fde32c70a1a5a3a96"],["archives/2019/page/2/index.html","db2601e011cf019f5df6cd9ec7fd9075"],["archives/2020/03/index.html","dc0d4fa403d6812b476716bbbf574864"],["archives/2020/index.html","993afd1ac67498058ef0dba03edf8b76"],["archives/index.html","0beea77327953e3df8ae20c9bd31ad61"],["archives/page/2/index.html","0beea77327953e3df8ae20c9bd31ad61"],["archives/page/3/index.html","0beea77327953e3df8ae20c9bd31ad61"],["archives/page/4/index.html","0beea77327953e3df8ae20c9bd31ad61"],["bipartite-graph/index.html","534e89c04b14ffcd849c4e99af593825"],["bucket-radix-suffix-sort/index.html","d08d1d26189b30fd720d2d303988e053"],["categories/index.html","508b8e3e64f21d1eddfa19723f6bbe59"],["categories/即时笔记/index.html","c08d9e5abb6feb6860e9b780a43100f5"],["categories/总结/index.html","a1d55ecb3563d0d920b87b48dc3bd0e1"],["categories/穿透世界边缘的呐喊/index.html","742fa0d81e5b3c15c33fc424832fcf3f"],["categories/算法浅解/index.html","0425606b4833dae9c777e427b05ed0dd"],["categories/随笔/index.html","461ec75dea1c42b639671b0d6faee83a"],["comments/index.html","6cfa972ace363ab74594d38cfe9f1679"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["exgcd/index.html","92866adab4b5ebb55060fe75072e01b8"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","1a8ec96f534dc12fe9c1253c5158fff4"],["graph-in-math/index.html","6c48d759af49c25733a1ddd195544795"],["hello-encrypted/index.html","194f8227eab673d300fc5d55f6ff5bb1"],["hello-world/index.html","90c4c534737478a46f6f4326f12c2e42"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","a47569db20006debeb56124b05ae2e2d"],["js/app.js","db046ae35a33c7f9e17f68f25188ef4f"],["js/search.js","fe5be68bedd17e1a497cb1c18456a66d"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","327c153f63bcce7d5f0c113e1811842e"],["kmp/index.html","a0767f70d83e6692e366cb2869ee0c7d"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["monotonous-queue/index.html","d5122bebae5ae6ea993d9f74b236acbb"],["my-math-problems/index.html","76afac803346e795f72242d1e781eb1e"],["noip-2018-outline/index.html","fbb121c7194a64e1d38bde8f4fe2987e"],["offline-algorithm/index.html","945b912213d69006cd9671e46504682f"],["page/2/index.html","6f05ee1b0302d34a12c7143145db67c0"],["page/3/index.html","739107d612061dc3d718324308ac2df2"],["page/4/index.html","a4159062cbdcdb44cd24733b2234e8fe"],["random.html","e0571cde5aed866ddd383a2a060639e7"],["retirement-speech/index.html","a3d26098ba7c43bac24b5ca01f4adde8"],["s-and-d-on-a-tree/index.html","56984529339a0ffaa42f4268b1623c68"],["search/index.html","9a6d5b43b12aaf3419f6d5b13c6aab1d"],["style.css","80760eab75df264560f0dc40aeb1492a"],["tags/KMP/index.html","f315d94c5ef9c9ea00957ff3012a19bb"],["tags/THUWC/index.html","05c5578ae2579a001403d0f077cb005f"],["tags/floyd/index.html","5d2181f13db2caba067c238c4f3c7978"],["tags/gcd/index.html","e3918de106bd630d28318a4f4df2af40"],["tags/index.html","f87af3c084a824b4a875d01aa63c895e"],["tags/世界间绪论/index.html","30b1b8b1eab31d7771328b49799d09d2"],["tags/世界间评论/index.html","6dd94c675056feb6c072923857907039"],["tags/二分图/index.html","d42c34ef4607c9a981a7d6eea2532d7b"],["tags/你的名字/index.html","f8a191600c0d2c24af8b61476860c84d"],["tags/前缀和/index.html","7c5b31df0e31dcbf7ddceed877dd9b86"],["tags/动态规划/index.html","fd26ff5dd5a4f36dd84934d7256732f4"],["tags/单调队列/index.html","baded54341c55a58e60f83206276e1bf"],["tags/后缀数组/index.html","9320ea321d7d9150515266780add0a7a"],["tags/图论/index.html","3d370fec5b315c65b9cc4cb4ba9cbe5b"],["tags/大纲/index.html","f1876e29e59cf39b31c191d88b6cca69"],["tags/奇闻/index.html","1bf81faac3cd6cd64e3062145d0e1298"],["tags/字符串/index.html","2034eec82081966415217d20f43d6dc2"],["tags/差分/index.html","d4dbdc6f47df3f6b8a815586ee69b8fa"],["tags/排序/index.html","4d4eb7e93a46bf1c409e51c5bab1c378"],["tags/搜索/index.html","7b62bd7251a972c0e18ba22f007f6d32"],["tags/数学/index.html","13e30f24673c7d521da14fde917c9a49"],["tags/数据结构/index.html","31217aa5e00fcdd14f57c438cb5314f4"],["tags/树/index.html","b46d1d60a94cad498f96bc7b7e41b094"],["tags/离线/index.html","cd6c2f605fc8f16b8d575edbe7768564"],["tags/笔记/index.html","64f33b4a3090c903746bc3cb66090937"],["tags/算法浅解/index.html","c0fe8c6e62696581393753a26541d8f2"],["tags/紫罗兰永恒花园/index.html","df6c69e4308bd5740bc41f5af401972a"],["tags/蒟蒻/index.html","ca2b321a6befa714a0baa5e99298aed9"],["tags/贪心/index.html","d6856125dec339faa15004b367f07e96"],["tags/退役/index.html","f27f7c9de82b86aeac4ce5e893141a19"],["tags/随笔/index.html","fb9ead48545c2ee1ad10f7b9945527b9"],["transitive-closure/index.html","10dc8ca3e2a082a1fda0f85cc0369e4f"],["useful-links/index.html","f366bb4c840e28516245fd6250d61ee3"],["violet-evergarden-review/index.html","91b908881ea12b979be9dd7efc21a6e9"],["you-are-more-important/index.html","ee089280ec096136c6b3561b12f6675e"],["your-name-review/index.html","dab62a28a74a61941a3d585a0a2ed40a"]];
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







