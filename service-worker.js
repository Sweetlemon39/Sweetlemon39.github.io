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

var precacheConfig = [["404.html","2ae64a94aafb1ffb68b482fc7c9345d3"],["CSP2019-graph/index.html","1a04f1f61c5cbddcca64985d2bcef73b"],["CSP2019-greedy-and-dp/index.html","e41df6bffa50b59245e7d9ec6fd424b9"],["CSP2019-math/index.html","596936a2c74807d75421e5c9aa557732"],["CSP2019-search-and-ds/index.html","102fedc5560ed5425bbbc03e94dd7da1"],["CSP2019-string-and-tree/index.html","6c89029676a47211b02c4205d6507ff5"],["English-7-words/index.html","7a916f661c5c5bc14f0ebf39adb4c326"],["NOI-Online-summary/index.html","2f9701af65970803f8a5a8eea2aa7469"],["NOIP2018-day1/index.html","9522ebe5230b97438cc36f06ed04d805"],["NOIP2018-day2/index.html","c764eb653e6ce134299214ea73eb26c7"],["NOIP2018-day3/index.html","561cf73fde9ed7770f8bbf2359e2b9dc"],["NOIP2018-day4/index.html","9e6a38b3d367fef05c06aa8cacdab0ae"],["NOIP2018-day5/index.html","199f6557fad45444ed6740688a92ee63"],["THUWC-2020/index.html","8341d71ff13e8482a2e8eae3710cf39e"],["about/index.html","6c55cc425fe94529b35613131913ca37"],["adventure-record/index.html","d1361d576f35d0bf49c050ed6edce5fe"],["archives/2017/02/index.html","0d4b06d4de872d737332e9a0daa08f54"],["archives/2017/index.html","80dda68265b0f60886ab157bc31bfb2c"],["archives/2018/01/index.html","adf6ec1bb2ed24e698ec9fb4cc89766e"],["archives/2018/04/index.html","18af1756d6f347be7095db926f9d20c9"],["archives/2018/07/index.html","55bf6cb70a5de771eaca439aa5a07b11"],["archives/2018/08/index.html","167aee5c2299540aad039a79c5af2136"],["archives/2018/10/index.html","f4c1b1921621623302728fd6a2b0761d"],["archives/2018/11/index.html","7ffd76d2c8b20cbca896285d5ebab75c"],["archives/2018/index.html","46fa6e3f3f6364e19b3800569b9291d6"],["archives/2018/page/2/index.html","f689ee8fd6bb6a5b98d13be46a52392b"],["archives/2019/02/index.html","b03797368a13f16f85c670d0f510d159"],["archives/2019/04/index.html","d6bb7744cbc0de8418b916571ae9097f"],["archives/2019/06/index.html","287f38dbbfc67eb98968a8b8550527ea"],["archives/2019/11/index.html","0d9a12566c4cd327b456d4cc62c42bb3"],["archives/2019/12/index.html","ae93793b05ce8ceeca46b1ca2b0be25b"],["archives/2019/index.html","eda21e367e205518b6c27535363c2057"],["archives/2019/page/2/index.html","06d6192055018615ce680f519d23aa56"],["archives/2020/03/index.html","56408fd98de29d9d6fe97ffbad743f52"],["archives/2020/index.html","819e292d26e5df1fcbfe195fff68b058"],["archives/index.html","e8020ef8a3497533bbaaab0c96bcca38"],["archives/page/2/index.html","9e5b3fdb990e0cb0f5622f769e9567ba"],["archives/page/3/index.html","9e5b3fdb990e0cb0f5622f769e9567ba"],["archives/page/4/index.html","9e5b3fdb990e0cb0f5622f769e9567ba"],["bipartite-graph/index.html","6c12ee1e3e127be0e718e4ad200f53ae"],["bucket-radix-suffix-sort/index.html","50b0a4eecd996082558b90e95fad3508"],["categories/index.html","7edbdf7856fe0fc30dde2f6269bc9d44"],["categories/即时笔记/index.html","773152ef37295d54fbe22414ea5fd43a"],["categories/总结/index.html","b3aeb9e2bf167a73bee6991312db7a04"],["categories/文化课/index.html","f884d6dddd8362ee1608bb2802d17689"],["categories/穿透世界边缘的呐喊/index.html","6add7959aab5932ba1dec383446bedb9"],["categories/算法浅解/index.html","e27ecc06e227c10bed24509d024227d9"],["categories/随笔/index.html","2af34e5eb18f56a4685cce32a275ebbd"],["comments/index.html","b9550650a7015e5b2b4e637f42170fa0"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","9e40c1dc19ff5ac0d388d5069aabb0f2"],["exgcd/index.html","7c8cda614fb5f0f6f71a4b14f5e93fe7"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","39880b8f8c1440453a9ea29fb4d748b4"],["gallery/index.html","9cb4a90dcbbad2a3895c1c6b125a9b33"],["graph-in-math/index.html","ccd83cacc8705f063b084383a896de53"],["hello-encrypted/index.html","186c252bc7dee006c24df5e80cea0a03"],["hello-world/index.html","b6a2eb24f024eac2391b37976f799d1d"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","265204ca3eda61f9bfc96f57f668cc34"],["js/app.js","ad4268ee366f668d3f682c29c5ba0aed"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","411538b9aa7dbef8473d3d9bce25444f"],["kmp/index.html","04a98160acc3094632557672b7a78398"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","c2d1559bfff7b46f24c932ba26c72618"],["my-math-problems/index.html","22b0fde3af84841a7fa096cf2377897e"],["noip-2018-outline/index.html","7c4fdd30f6b2cda8fa39750faaa4425a"],["offline-algorithm/index.html","cb04bdf58adc9904358e27bf2ae643cd"],["page/2/index.html","474e241c537019204e1ba5c3c8b2e962"],["page/3/index.html","bde23768d8570d0423b6cb3b7549acc1"],["page/4/index.html","fc33a1b734125a18f854a9acd94c4b6d"],["random.html","c8658b7a1c7ec8e1e5ec131169d6fd28"],["retirement-speech/index.html","2821aa53936c22e29e192844946f7088"],["s-and-d-on-a-tree/index.html","be0c1c57825cbb60aef20c7ecf2d709a"],["search/index.html","bb9330f6bf14dbe7f8ec86023e374ebd"],["tags/KMP/index.html","213ebf2f045036dfd855f70d951515ce"],["tags/THUWC/index.html","c62b7cf83c7d3696c57e627e2f5b8efb"],["tags/floyd/index.html","c1a655b147147b89d2deff6ae5b32998"],["tags/gcd/index.html","e1555d427532847887715170523e6762"],["tags/index.html","cdecbefa63814a5563e393e783b7822a"],["tags/世界间绪论/index.html","c8f132aa925f18edc88f5bc79dfc19e8"],["tags/世界间评论/index.html","ca8db3d19ae70298cc10b33c6868aed4"],["tags/二分图/index.html","5950462961acd2f6a81c28b04c6b58fe"],["tags/你的名字/index.html","7642982a1ca86bc4381a7d39206aaeb1"],["tags/前缀和/index.html","554d62f03271f81c2db5b50e67a4ee15"],["tags/动态规划/index.html","c8d9f7668db353302d5c2a1f4ddbd013"],["tags/单词/index.html","ac296002c2e7053f58dd3fedcccc8286"],["tags/单调队列/index.html","e9458bca5983f43e418fa951ff3d0fb1"],["tags/后缀数组/index.html","b3fc948ba9bfaf2d37673c8e55e7b73a"],["tags/图论/index.html","1bc2e69b2b87a7042f2d3bc12d8a55d8"],["tags/大纲/index.html","52c9732e1bbcd7643d188c09a6c3d77f"],["tags/奇闻/index.html","31a99d7ca1c07b439e780acd99ac6d6a"],["tags/字符串/index.html","f9438a1878a7ad2ca40f37a73ac9811e"],["tags/差分/index.html","62c8fa7c2bade5cffb76e593b4bd0489"],["tags/并查集/index.html","5dfbaa7635d50978ff0112a5cd5762a4"],["tags/总结/index.html","b3eac40dc4f46c32a910be886a7efce5"],["tags/排序/index.html","2036a95ac75b788ec47d5defb5532c93"],["tags/搜索/index.html","fa5db2a43fd6ffc32b89a2c2f8dafd90"],["tags/数学/index.html","f6599b32024232a8fc635ec5d5250ae9"],["tags/数据结构/index.html","e681ef98ae544aeced77cb712445256c"],["tags/文化课/index.html","e8c8f566d0c63905e45120e14813ef0a"],["tags/树/index.html","640d69ffd541a8da8fd97e08b9ec05ca"],["tags/离线/index.html","83fa3acf461b984dcb63f90f0018f94d"],["tags/笔记/index.html","7d6179524f220e606d7aedef14d66a96"],["tags/算法浅解/index.html","ec656596f7be021fc651c402e6c9e55a"],["tags/紫罗兰永恒花园/index.html","fe2eb6a13e0b63394066f3b3321ab063"],["tags/英语/index.html","7c65fecf231b8654cc711c5760bee9c6"],["tags/蒟蒻/index.html","884014e590cf5ed0e79bcbb059038e54"],["tags/贪心/index.html","f6e56f67d8713be0d57e850b8d658996"],["tags/退役/index.html","36e298cba49b5d5dfe0c7cab5123d6bb"],["tags/随笔/index.html","875b3c23c47f56bf7319b0b826ff0f65"],["transitive-closure/index.html","f2391431fe90b0792d68f7843685c537"],["useful-links/index.html","4711d93588f086acaaff2f5b33ee8764"],["violet-evergarden-review/index.html","c1c03cf2ca84fee6662f54e9e1059886"],["you-are-more-important/index.html","f8b1e5320e005f612b9ecde9d27487a7"],["your-name-review/index.html","141504bdb1107200b397de9283244e41"]];
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







