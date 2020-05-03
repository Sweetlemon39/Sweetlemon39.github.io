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

var precacheConfig = [["404.html","7b8ee8a99669ad55aad587ddbaa2b096"],["CSP2019-graph/index.html","fa1a15f4a6adbeca7e1357c06b8e5b02"],["CSP2019-greedy-and-dp/index.html","c7130b23108ce72538c8053b7514fa8a"],["CSP2019-math/index.html","8f071566a55496a07fb98abf6cddf4af"],["CSP2019-search-and-ds/index.html","66ef4073869f1dca9c7b716856219341"],["CSP2019-string-and-tree/index.html","86b65cd0ae3d6d919a3e577a6afd837e"],["English-7-words/index.html","4b999de8842c6ecbbab34b7f90f57e63"],["English-8-words/index.html","898c9316c5781708b01b3c6251c15950"],["NOI-Online-summary/index.html","52afba1a1b5fdb810557e1b03d3c2273"],["NOIP2018-day1/index.html","2c5a7b8bc677aa9fdc68fefd594702a5"],["NOIP2018-day2/index.html","e4bcd28084b51a31bd64a7f22fa99edc"],["NOIP2018-day3/index.html","18113da312142580af5e64bad4513f51"],["NOIP2018-day4/index.html","676d8b602b9a267999832fe83ed50629"],["NOIP2018-day5/index.html","ce53adfe264ba12d8be79bd4e2db3087"],["THUWC-2020/index.html","b3fb19fd18a956374ccf40f827eff5dc"],["about/index.html","96d2e9ebf45c6024189fba586ef99493"],["adventure-record/index.html","b878fd8e78528f685be30aba5d682c6e"],["archives/2017/02/index.html","12813d8cb3501e32d282911a08d11adc"],["archives/2017/index.html","d33dabd18245afce5370acdf7408d60a"],["archives/2018/01/index.html","bc660ecc979e2bb7c5631547f6cb4186"],["archives/2018/04/index.html","cb7bd6ad03b17fa3711acd9747e6705e"],["archives/2018/07/index.html","12a2b20bc2aa305ac91a5808cfba4ae0"],["archives/2018/08/index.html","526678460b95c49f7dec3570400d1596"],["archives/2018/10/index.html","7891671154ffd0727e888b72a6cad6a1"],["archives/2018/11/index.html","c200a238d10a37ab7f4dc1972741e9ed"],["archives/2018/index.html","0b227c8c3e03f5bcd281007468171b09"],["archives/2018/page/2/index.html","dda5e2f7d37cd79d8469f63e966e30de"],["archives/2019/02/index.html","005c6e8018acec94a8f99d1fc9604f4f"],["archives/2019/04/index.html","c6de2be10cbb13b13fd02382a30627f3"],["archives/2019/06/index.html","0735f7510a87f78c0f14df13a453df5c"],["archives/2019/11/index.html","b7630cdcd045c5c99059005bcde689ac"],["archives/2019/12/index.html","bff065e023fd9bc7cd82733aa49db887"],["archives/2019/index.html","f23fcda9aa883ed01759e80eb1e036bf"],["archives/2019/page/2/index.html","5a0fbbf0b4c2f27aaf433d8e21c73ec4"],["archives/2020/03/index.html","3daed3331199114de837ad69ec75068d"],["archives/2020/04/index.html","d4cd0682a4797d53e008e83db684cb74"],["archives/2020/05/index.html","484d306532422456191a4f25b6c8fc11"],["archives/2020/index.html","1cc85ee122fbfd60428a583dc089c2fd"],["archives/index.html","2e17bdd941e1d39f1a3eb3318df9a81d"],["archives/page/2/index.html","b183c83fbc58a397c580c4f5de770cbf"],["archives/page/3/index.html","b183c83fbc58a397c580c4f5de770cbf"],["archives/page/4/index.html","b183c83fbc58a397c580c4f5de770cbf"],["bipartite-graph/index.html","f9a9a0221d18f5932258a802689097f5"],["bucket-radix-suffix-sort/index.html","ffd3b4177e59884b75ea34540cddb89c"],["categories/index.html","64c98530802586c1720540aeb7c1c2b8"],["categories/即时笔记/index.html","e723a7ef83961790a3e325caac448319"],["categories/总结/index.html","53e5c9b90a5b67ce86ddf9cb34fcfaac"],["categories/文化课/index.html","4ab8c23f8d722668a939113956749c1d"],["categories/穿透世界边缘的呐喊/index.html","5c1a5c1d70a42f9a07f56b5a36aabec1"],["categories/算法浅解/index.html","49fd085fcb41f681114fa7be3be3a7a5"],["categories/随笔/index.html","1d19a9e88e8d0af140a075fc4764c4f6"],["comments/index.html","afcc5c069d7510ccadef14f76d148019"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","7a7a16bd49cdaf087ac2f045208f55b7"],["exgcd/index.html","a25366077160fccda3d842c9ff4ab39e"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","624267504628bded3ad3f3f022fac4d9"],["gallery/index.html","e32126b73b72380a493d200ef128ae23"],["graph-in-math/index.html","66c9c7aa6f4f4fced84ebef26220232e"],["hello-encrypted/index.html","99cae2e32211048026a0535d004c2c6d"],["hello-world/index.html","39eb5b8bbeb26b97f5b7ed710db3eb81"],["how-to-recite-log-inq/index.html","0bc6d0062d48d2a5363e8bed62de18dd"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","0c506cf47b64204515314a1b17746f21"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["juruo-poem/index.html","8680b204db53dfe089ab7d91c47048d7"],["kmp/index.html","31004fb20b5fc4078ed67f1dc85139a3"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","68e5906441e5d71e9619d20e3790dd96"],["my-math-problems/index.html","a76909c65ec4aa54d6553a5fedf772a5"],["noip-2018-outline/index.html","70bfa6483fa758a1dc8a0a5c54334b0b"],["offline-algorithm/index.html","ef5349a01c3c5168a75bb19f05370d03"],["page/2/index.html","d7542d7f6bb39f090a43a04f95f4fbad"],["page/3/index.html","5e8f27be657098d87251e812a50006ac"],["page/4/index.html","93d8d4831ed4187afce8903bf91d6f49"],["random.html","c04bb0ac7f168f01c4dc2014bbec9aa7"],["retirement-speech/index.html","a4306eaafdf8ec8860049e35e69b1c83"],["s-and-d-on-a-tree/index.html","3698d392681c4e4cac80b160faa7f5f5"],["search/index.html","db0e6c881bf73dab26a4bdd0ae7af97a"],["tags/KMP/index.html","1926c170c4625952ad697ab75cc6d019"],["tags/THUWC/index.html","7bf544685aff10b29246102f11a46805"],["tags/floyd/index.html","5362cf40f6940f932fd9712ebfcf906d"],["tags/gcd/index.html","094167ac994c957a70cb518067c9f2bd"],["tags/index.html","f144cf43f57198d38ac0bd8cb3d5490d"],["tags/世界间绪论/index.html","755f35dc868f9cfc00da2d1783d9a8b2"],["tags/世界间评论/index.html","ccc159dd54cd1ca856ff6a820f2a461f"],["tags/二分图/index.html","7dc43a53e49656283dae3c9fef7b7ec2"],["tags/你的名字/index.html","94b5f44b45606d42cb983d02ddf8a595"],["tags/函数/index.html","ba25d5ffe17a91891ca5611f4a9f8d16"],["tags/前缀和/index.html","e2eb1eb3ba64c72967e0ec62bea80f90"],["tags/动态规划/index.html","12d86c25f8ff0655d6e8afb23fe2a64b"],["tags/单词/index.html","310edb2c235e8b957c3a50636edcda6b"],["tags/单调队列/index.html","63be2e647903264e03cc3e106696dbc3"],["tags/后缀数组/index.html","a13cc4752a62147e6b15496fad9537ad"],["tags/图论/index.html","d83145cefcbe3c95e137c84692792dd1"],["tags/大纲/index.html","1dab40dc2ff8eadfdb8947828e8b3bbe"],["tags/奇闻/index.html","36fcd9a93efcddfa054ae0fae7ea60c7"],["tags/字符串/index.html","53b7ca3e5553c09a1cfbd6b12731bf0d"],["tags/差分/index.html","50fc7e8e8c23c5929db8a24a1a64b89c"],["tags/并查集/index.html","987e0ee348de2249a294366c15dc8afa"],["tags/总结/index.html","b92a4acfc12980631e15b0dabbbbe5d9"],["tags/排序/index.html","4b9a92d06502fb4417e1417a940a2c4b"],["tags/搜索/index.html","7fcbc915be3bdba73cc378466a1601ce"],["tags/数学/index.html","a7a6b66f399ef1a81251c2ee5d425182"],["tags/数据结构/index.html","91da9522f2334157f4bcc96e9dffb99c"],["tags/文化课/index.html","91c812062c53ce46881e02aec8033bbd"],["tags/树/index.html","8ca038043aea661789f93ba839c10916"],["tags/离线/index.html","76bedb0d236d1f7da81755c6c31d69aa"],["tags/笔记/index.html","b117f3f7d975cc94287a2e7bafd64621"],["tags/算法浅解/index.html","6d237c5080e1902a83b9f97aa6003536"],["tags/紫罗兰永恒花园/index.html","20cbf32e7896dad122226b6df4b485e6"],["tags/英语/index.html","6aba09fb201ae80f8ef5ef60a535839b"],["tags/蒟蒻/index.html","94e7919ba9eed9b9b50aaead0a56a0fd"],["tags/贪心/index.html","f0faadbca948dba48d9a8e2d0dbb68b3"],["tags/退役/index.html","c9fc9f4add156e9b603c5ea8bdbbe29e"],["tags/随笔/index.html","cd72e6301b4969e6f07e3111e9ac073a"],["transitive-closure/index.html","e9f6662b8850725110f768cc6a8b2364"],["useful-links/index.html","440fd1f8247869b2dcaea31bbd0a55c3"],["violet-evergarden-review/index.html","d791b0049f07842dc1dc8fcfba5c379a"],["you-are-more-important/index.html","16623e301a6e105332aa8d2dec171c33"],["your-name-review/index.html","0aa9aa4c1ba758a30bf5021416e45877"]];
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







