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

var precacheConfig = [["404.html","0015ab946a05e85b956a2ba0a35a14f2"],["CSP2019-graph/index.html","d0ac074d78a2ed684e106454552269d6"],["CSP2019-greedy-and-dp/index.html","39ee3f4efbd4b4b3b2d76a7fac1616d8"],["CSP2019-math/index.html","f5b4ededa6cef728c4db5d711f9cf095"],["CSP2019-search-and-ds/index.html","009088f5be659f8c210786f73c0c4cc7"],["CSP2019-string-and-tree/index.html","266f333476544cb7c721fba2d63cbdcf"],["NOI-Online-summary/index.html","ce6b66c69ae2475da4baf5a9354ed745"],["NOIP2018-day1/index.html","80f34219d6d69bf92346c6c273645737"],["NOIP2018-day2/index.html","9a35797f3751feae9b70fd4092fd0e34"],["NOIP2018-day3/index.html","44b4db2c2f78549cbef689b648eeb9f8"],["NOIP2018-day4/index.html","7fad13c7e6071960731bd2787761cc33"],["NOIP2018-day5/index.html","3e0bdd61ea61d00dc8372b157f71a539"],["THUWC-2020/index.html","5ca204b993fb414ba229aa012a18faa7"],["about/index.html","ce49a28ba9a4d28dccbfbb8291c21890"],["adventure-record/index.html","8de004d27e317a449738a2e2f776d3bf"],["archives/2017/02/index.html","16b7676d98d9cc02cdfefe9fa37aa96a"],["archives/2017/index.html","99285b274ad7318a667b697c45fa03e3"],["archives/2018/01/index.html","b280956089ea4f4d51829c61b1d22ce8"],["archives/2018/04/index.html","d0992b30e52239a2d9c104d9b0c0c24b"],["archives/2018/07/index.html","f8688c99cc674cbd01061042c6dcba7f"],["archives/2018/08/index.html","075b0dda489b147eed203f3f9e4c5bc8"],["archives/2018/10/index.html","2f0fba9cb36a8b1c7ca8076ed3df1af0"],["archives/2018/11/index.html","c2c59b778ace5033d07213ecc40f1817"],["archives/2018/index.html","d521dd2fd554791541abdeac6e6065f7"],["archives/2018/page/2/index.html","249a27d5646195c9e16a247b3242255e"],["archives/2019/02/index.html","e9fd1d58f9fa4fcfc36e2d712990136a"],["archives/2019/04/index.html","1be33c829b3aaca18d6deb8ce9e6d7ac"],["archives/2019/06/index.html","61d18b52eb7a90b2d4c346336fc681dd"],["archives/2019/11/index.html","0807281b4edcbfd8909d0d2d97d2590e"],["archives/2019/12/index.html","d1fc958f4131676f3805e31f40247cd9"],["archives/2019/index.html","426ed438520c92d6dcb160af1511c669"],["archives/2019/page/2/index.html","133b53759ba618cd633995bc08ae1796"],["archives/2020/03/index.html","e2cf30efe5c4889339ce3751af5f93ad"],["archives/2020/index.html","040de9708e210c42edc3cd9173fd8bfe"],["archives/index.html","1745ddd435b4bd73abaac8fcc70adbd2"],["archives/page/2/index.html","05d8f51828ba1b657ac45527a3ca7b53"],["archives/page/3/index.html","05d8f51828ba1b657ac45527a3ca7b53"],["archives/page/4/index.html","05d8f51828ba1b657ac45527a3ca7b53"],["bipartite-graph/index.html","01e8c00c5563d420c1bdf42b448b955b"],["bucket-radix-suffix-sort/index.html","7b8e36c4396ec4fa36d6db7733f0b708"],["categories/index.html","9719de90f4b7a1ac09ae80a791952425"],["categories/即时笔记/index.html","ebee8f983e067ca7be30d06290e4ea76"],["categories/总结/index.html","0e2fecd057cf128a2ad675054d88a029"],["categories/穿透世界边缘的呐喊/index.html","1a789abc1ae4cadab8bc8485c599298e"],["categories/算法浅解/index.html","09c1828ddb35a3e15f131389cb826ded"],["categories/随笔/index.html","091089e991aa111f8b98418f94e3c7f5"],["comments/index.html","bb272509ddc86e031cd9958e1447ffce"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","40098747f4f60aca531c326030ebba04"],["exgcd/index.html","2088231fe253e3eec1853e04fb57ce9a"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","d7333a0752e558479bf0fcded2d32f61"],["graph-in-math/index.html","3805f1405a8169492d1aec62cdd6663b"],["hello-encrypted/index.html","2f1a8858af7915b6a75516cfa4548234"],["hello-world/index.html","5f00ce60b7db5bef458d409344ec3d5b"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","f7f8e0e1d77b83c195435c2023321432"],["js/app.js","5619acc77c6b2e7d78023d382978cd50"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","2bf58e3e64371598c988200d8abfe525"],["kmp/index.html","a08b495d98c99994fe8430d29322a5da"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","ed528e76f1f6c25ee0b9903682ea6f83"],["my-math-problems/index.html","41af8bee4c0ce8addd8588dc2907c137"],["noip-2018-outline/index.html","7e3196214f11ae646c28fcc12110d931"],["offline-algorithm/index.html","286ec87dfeeb0193e183c5d2d956e464"],["page/2/index.html","bcc39e4a4fe23a97aa4c8b9452874ee7"],["page/3/index.html","956ac5f65c774df112d8eb11864b83de"],["page/4/index.html","e982ee026c176a90c2c93a6ee627f7b7"],["random.html","8d944be55c66978094950352713cf70b"],["retirement-speech/index.html","cc9e54779ad01a9d819d915d4fdd4427"],["s-and-d-on-a-tree/index.html","2af32fbb40c21ead7ef05d308effd668"],["search/index.html","4bfdb84eb152a0084b5d845e39d1a04e"],["tags/KMP/index.html","e648ddd461795187d17bf7e077843f02"],["tags/THUWC/index.html","ffaa5f660dc513284f1b7b85d73e4b32"],["tags/floyd/index.html","7aacc321a024a5cbb7eec5c284eb8026"],["tags/gcd/index.html","95845bf0b1c4890511029b0e0785d698"],["tags/index.html","bdc34078541524c3df85d175282ac9b7"],["tags/世界间绪论/index.html","cd2f975839622709d0f71b4a4ddbbe45"],["tags/世界间评论/index.html","0a333834940dc9bb69817c57d30d0b90"],["tags/二分图/index.html","eeb796a87405d797e0a01931cb1b4031"],["tags/你的名字/index.html","4faaeac72a76cf6410f1e0eb189c24cc"],["tags/前缀和/index.html","10c7dd9127f2c94731785026c5054593"],["tags/动态规划/index.html","b97e5fb9e95e4aec5739ee79ec0d326f"],["tags/单调队列/index.html","e9b5959f9752c90a8a6fb4588de2b777"],["tags/后缀数组/index.html","1cc5fec6c71ec6b23bfbb3eec4f54b7b"],["tags/图论/index.html","cd4a8ce3fd9701310a2151d4a1ef1f1d"],["tags/大纲/index.html","671175aba2400532d4bf6004a0d33502"],["tags/奇闻/index.html","39ca7664c740baba2f1194248e6445e2"],["tags/字符串/index.html","83ecceba4b716a102ec2dafb747bd12d"],["tags/差分/index.html","e5bbb39fa54b4da95874ed4df05744af"],["tags/并查集/index.html","9e8a5f3b8d1639804eb775dd78cb8666"],["tags/总结/index.html","bc34db01fb1562ae221cf08d4bf04884"],["tags/排序/index.html","e8ba7d744302fd03b84f7892cb3b125c"],["tags/搜索/index.html","ba0cdeb39863fee90410cd2e56a9843e"],["tags/数学/index.html","4919293453c5ae7fdcdd8425e9768b1f"],["tags/数据结构/index.html","9e62c1c919d417ee0f6b64a22c8df452"],["tags/树/index.html","821ee151dd8cff81b0b6eb1134c4ea51"],["tags/离线/index.html","905df859b8569dcd9176ae64ebc1356f"],["tags/笔记/index.html","4d3a31beb5ae7b53e371ac673e17af40"],["tags/算法浅解/index.html","69eac132acd4ab1ebbcafb09823cac91"],["tags/紫罗兰永恒花园/index.html","a9ec6eb72fc778bd9044f4794baa1508"],["tags/蒟蒻/index.html","5ffac8381797c6eebc6757588a5067e9"],["tags/贪心/index.html","effd67b31d4eaf0b16a9344c3ec18225"],["tags/退役/index.html","6e94654ea3de060797c0a5ae77b9c25f"],["tags/随笔/index.html","3713455533b6c5d558dd4f81c3e5b99e"],["transitive-closure/index.html","49cfbeef2b67af5ed479dd21da70cc9c"],["useful-links/index.html","1663b7f3b93ccc2a3b13c8ecc420eed0"],["violet-evergarden-review/index.html","87b2d504f46bf88569e9b19f4e850306"],["you-are-more-important/index.html","d3396452474e35f7c96a4bd918228be6"],["your-name-review/index.html","3cafe1303dafcc3f45fdade5e0220acb"]];
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







