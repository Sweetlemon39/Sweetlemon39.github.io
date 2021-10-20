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

var precacheConfig = [["404.html","f712ed37d946410517e316b378592e1f"],["CSP2019-graph/index.html","0848a7b3a9735116486af64b15e8e9c9"],["CSP2019-greedy-and-dp/index.html","ec0788afd1bde2a13b2706a799991ac4"],["CSP2019-math/index.html","7b62a51bb28f0b6d3463fc3f93d90347"],["CSP2019-search-and-ds/index.html","038e9f1a7e2de0ceed26407fd156c75a"],["CSP2019-string-and-tree/index.html","5a824b8bfb7997c4f791d03f9868f5a6"],["English-7-words/index.html","b53af4744e0ddffb60fe45bc5009ce2a"],["English-8-words/index.html","d9e2e9a9559d3a666636e5acba3b30d2"],["GXOI-2020/index.html","ec8083b8ecdfc3736fcecab77a1f2ac3"],["NOIP2018-day1/index.html","8b8efc4b2b5d4f44373d743d26d515da"],["NOIP2018-day2/index.html","390a8bc91c724a1f4ed69e86512be218"],["NOIP2018-day3/index.html","9441069e4cadee652554222c59bec4e8"],["NOIP2018-day4/index.html","123ae821dab54220eb2b3ffd6d3384cc"],["NOIP2018-day5/index.html","0e19a5718cc1e6d96ae0a6dfbe02f885"],["THUWC-2020/index.html","b8819758ae1ca95037dc37f7bdcca5b8"],["about/index.html","ee49cd6e655a985bf11f2a5273f0452e"],["adventure-record/index.html","47a496ff1f9b3a1d971edd1bb05f78b1"],["archives/2017/02/index.html","b511dc49670fff802b3b71d0a5db216c"],["archives/2017/index.html","ba1b0663378da59cd2ec485d66331f5e"],["archives/2018/01/index.html","8fe9332e1f724da17fab95da949e8aee"],["archives/2018/04/index.html","c03741051a5b9879899fc8b56779d900"],["archives/2018/07/index.html","49e86f300123ce350b1c223c2e864a75"],["archives/2018/08/index.html","5e7aaa7e093592f10d8efbcf1f236688"],["archives/2018/10/index.html","f41520d3d78f594e6e820edcbfab4d1e"],["archives/2018/11/index.html","eed390253a810861715bdbb1ca349a54"],["archives/2018/index.html","1129bac7f9e5d964803c6f21946d70df"],["archives/2018/page/2/index.html","e26578a759a19be41e36eecbc9b2295a"],["archives/2019/02/index.html","a58d36ec931abfb4a9334456841c4356"],["archives/2019/04/index.html","54c189bc650b4bda87e0ee27e7859849"],["archives/2019/06/index.html","8ae6ab3ec69078785fda687a23ebf010"],["archives/2019/11/index.html","c0423ba36a4753b0285571cbff173ec8"],["archives/2019/12/index.html","d441753d71e8dce2e26a719915f46313"],["archives/2019/index.html","d54b36f0588743540ce3f89ba310cf45"],["archives/2019/page/2/index.html","a4b63d2340690f59a4007376dd8215f1"],["archives/2020/03/index.html","85591b30facbab91435800c35e682236"],["archives/2020/04/index.html","c347074af4ecdcc3a1cb073a521ecb59"],["archives/2020/06/index.html","3e023e31ba3a8d61aef58aa5af5aa8d8"],["archives/2020/index.html","cca329c3e893311357a74b12ca7d6ef2"],["archives/2021/10/index.html","57cb4bbee55541ca913e05a3636f8c20"],["archives/2021/index.html","199d2fbb73f22efca0787a07ca05b35e"],["archives/index.html","045544b391ecc511a706f4d27d25fe4f"],["archives/page/2/index.html","045544b391ecc511a706f4d27d25fe4f"],["archives/page/3/index.html","045544b391ecc511a706f4d27d25fe4f"],["archives/page/4/index.html","045544b391ecc511a706f4d27d25fe4f"],["bipartite-graph/index.html","32302e0c084401eed786441d73f1f8e6"],["bucket-radix-suffix-sort/index.html","9f24081b4cbb27e8d5de22552d387f91"],["categories/index.html","7be752c7ed1069cbb31f9084a62c96ff"],["categories/即时笔记/index.html","46c6ee19a339e325c531e40941a3e770"],["categories/总结/index.html","a332f0a0ffc2ebb5fa60bded629f43db"],["categories/文化课/index.html","1a865ab162c6307148ed86e64e9e9bde"],["categories/穿透世界边缘的呐喊/index.html","76e07fd11bd7e5bf475c173be3228320"],["categories/算法浅解/index.html","faa02567a1c255281b93d54add2a2520"],["categories/随笔/index.html","af80f7b7a331723f8397211127c334b3"],["comments/index.html","deffe40fdcbd7f1204e7eed712e4b033"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","7a7a16bd49cdaf087ac2f045208f55b7"],["exgcd/index.html","a8e99ca63dc83dd3f470004df4e90918"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","47d6f4cfcfe626bfa21378ff68a19a52"],["gallery/index.html","594fe274c65db78f26549ae8fa14857c"],["graph-in-math/index.html","1ba9c4083983ac69d20b55cc317496eb"],["hello-world/index.html","29c16dc5666d3aba1242afaa0861b767"],["how-to-recite-log-inq/index.html","a10dd217e611bbb659ee62b75f5c1339"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","16ed5130ef2ccbb53d93d3acb1d04c81"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["juruo-poem/index.html","d13d882abddb05dbbb37fe9b5d58042a"],["kmp/index.html","a2f59f192ae6701078537966e97038d6"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","d1a74b93f18ff9990c4a8786825b246c"],["my-math-problems/index.html","edccb9dc5c8a0ab92821e4fa154f46b1"],["noip-2018-outline/index.html","e700be091da16dda5dccaab426b89739"],["offline-algorithm/index.html","61934c94b105dd603e467d33f197e4e3"],["page/2/index.html","67e80a016185252941216e0442541f46"],["page/3/index.html","034461258eace6b0e9aab0a8c1b2a65f"],["page/4/index.html","c0857131772d5fadbf959b66e37171b0"],["random.html","05bce08c48e4759dafa6f8c88031a31a"],["retirement-speech/index.html","540f274820796159d59257577b4d0246"],["s-and-d-on-a-tree/index.html","3765dcae305afd824e885b6a28c710b2"],["search/index.html","67d324341eae1b40659aea5e96e6d28b"],["tags/GXOI/index.html","4513b6a58bca9daa61e246a10a0180e5"],["tags/KMP/index.html","fd227fc29dcd35f249bc895cf80c6530"],["tags/THUWC/index.html","22d47c6cf0eb64061bda9dde35de1d2e"],["tags/floyd/index.html","740cdd500d877e3ceba0cc94d83526c9"],["tags/gcd/index.html","f654069a56532a066ab7d92c9fd3cf7e"],["tags/index.html","b2276404088f53d748e8175faac3e282"],["tags/世界间绪论/index.html","7781091f6a63fb7c14f6a7dc122a1f44"],["tags/世界间评论/index.html","36354c8c9078819552fc23b07b25dd93"],["tags/二分图/index.html","d4c5fb1fdf2db353ea897ced40b9a871"],["tags/你的名字/index.html","c7513fc88e01a9eafe9e8f2454320f18"],["tags/函数/index.html","35663a0c04aa6e508bb620030787ff4e"],["tags/前缀和/index.html","52b206fb2f570e04a04565e3c119b29d"],["tags/动态规划/index.html","2fecde34a497ce52760d4b64f485d588"],["tags/单词/index.html","52f8504406418682e5cba6534c696863"],["tags/单调队列/index.html","d37ec0d92cd9dd14950e74078e4a72e4"],["tags/后缀数组/index.html","051925f1d965f58a15bcb2c401ae36ae"],["tags/图论/index.html","cd788769b2acb0eedbf7545521fcf68c"],["tags/大纲/index.html","b00a2e47ac23d701ac717f0b27e28df5"],["tags/奇闻/index.html","99a868dd1840cf58fbe8209db5bf6717"],["tags/字符串/index.html","8c9c25f14341586e96c6fff7d58c27b1"],["tags/差分/index.html","2e22a2e577cb96e577e427df6d3943d6"],["tags/排序/index.html","5a36ee63053fa5545f3d7ffae5f96794"],["tags/搜索/index.html","9c62903df798b3bfa0de3deded4a8b94"],["tags/数学/index.html","667747a279d355336a6a569f1bfdc7d1"],["tags/数据结构/index.html","fcbe79afb35995047a8e3b064fb4f9de"],["tags/文化课/index.html","e950982dbc1e7273aa52b8d2f8f64c74"],["tags/树/index.html","c7d7ee2984f98c250f778abab0488e09"],["tags/离线/index.html","d5e594a35518c206b05d04d703e0be41"],["tags/笔记/index.html","9fd2c802fe896a172c40b59aefede8b6"],["tags/算法浅解/index.html","c9097b1527b9ffc921f1ad70c8bb960e"],["tags/紫罗兰永恒花园/index.html","63cd77f243a0a15c827060ab4c6e3d93"],["tags/英语/index.html","21d25be030bc4ba1702fddb21df14bd1"],["tags/蒟蒻/index.html","8fc647cc2ba6ceba3eb39e0a2bdc71a0"],["tags/贪心/index.html","9e403bfd4cb090b668028bd2ec31a288"],["tags/退役/index.html","6a022779f745d9f578eedc56dc1a9914"],["tags/随笔/index.html","863157e463d4be690350a37ce0b07094"],["transitive-closure/index.html","7f9044258608ccfb07b7adf3de2fd10c"],["useful-links/index.html","d82086b7994b2bfd40db851a65c5856d"],["violet-evergarden-review/index.html","dedc2952acfc9c6173b06c290570656a"],["you-are-more-important/index.html","5e0867b74295577cb991ca086825a8a0"],["your-name-review/index.html","55de25948b80310263f8907e650ec246"]];
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







