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

var precacheConfig = [["404.html","61e5a293456dc72fc37a64afe21fde78"],["CSP2019-graph/index.html","a178ebc7978c77b9388fed97b4f7395d"],["CSP2019-greedy-and-dp/index.html","b089eb62848484a82c3fcd5cfef1504b"],["CSP2019-math/index.html","81a67df5c7195158370473b459a1647d"],["CSP2019-search-and-ds/index.html","1d1cc8020a4f253c5b8e83c05de08788"],["CSP2019-string-and-tree/index.html","23f91b5074eb934c82e7c47b0bb5daa7"],["English-7-words/index.html","370539c82c2edf2d540ee8596fa9f9fa"],["NOI-Online-summary/index.html","602dfa87848242f08bbbc6ad58bae9ad"],["NOIP2018-day1/index.html","04b895fc65543175e2e44e01b206a2e9"],["NOIP2018-day2/index.html","dcc0be81d1164ff6b78d96950888fee8"],["NOIP2018-day3/index.html","331adec49877a39f7b2aa294c1c32ee8"],["NOIP2018-day4/index.html","46bb49acd173ea9d1d96e7d9cd4626e9"],["NOIP2018-day5/index.html","b4a9e5751ce1901d6613fc404de66e17"],["THUWC-2020/index.html","8346976fd8c329b7a70ff8fc6be3da6e"],["about/index.html","a6b3dab333a7f05c8f1368a528c8d3fb"],["adventure-record/index.html","0d09b429d61c62e439a3bd55b3c20fbd"],["archives/2017/02/index.html","c9e95ddb9456595c7bcfdaf365d05222"],["archives/2017/index.html","86410bf5cbd7c6e9f8848238c69acd7b"],["archives/2018/01/index.html","be13b0b392dd768caa4d29fda1be85a3"],["archives/2018/04/index.html","d0ad1adb5dacfd2ff02b33d3b07f7b99"],["archives/2018/07/index.html","c0b5cf4ca993260c11ee10bef3df42e9"],["archives/2018/08/index.html","70cc55577d9b137574ea6c4da22acd22"],["archives/2018/10/index.html","a723f476a6626981c43a0a230e98cb85"],["archives/2018/11/index.html","3b8ce16ace0a89470127252c8543a26e"],["archives/2018/index.html","5920c8501a23048c58008286c29abfc8"],["archives/2018/page/2/index.html","f4336106b87244ae14449df077b51de5"],["archives/2019/02/index.html","7ec34b8b56ce134f913a935a72ffb9c7"],["archives/2019/04/index.html","6d09aeebe402853c8784e6ab3c64d094"],["archives/2019/06/index.html","a22bb19faf94a456fadcbe74261236f8"],["archives/2019/11/index.html","bd3ec09cf6197da6f9389b6fac582275"],["archives/2019/12/index.html","4860ae7389b8bcc2a75da09453945da1"],["archives/2019/index.html","3e19c47e3f368b06153f41a8b94f2e07"],["archives/2019/page/2/index.html","ef95965b0a6a5ba2bf415d61209cb3b7"],["archives/2020/03/index.html","4fe3f383a6b3d3885a2b9a43fc90d549"],["archives/2020/04/index.html","865678f0fce600a31e931e19a67b8682"],["archives/2020/index.html","1113fa9d887f0f0482ce0a201e394de9"],["archives/index.html","9976c49a176602e2267d3432d273fe4f"],["archives/page/2/index.html","2a71ff3f5d285bb9868be24bbea68fc7"],["archives/page/3/index.html","2a71ff3f5d285bb9868be24bbea68fc7"],["archives/page/4/index.html","2a71ff3f5d285bb9868be24bbea68fc7"],["bipartite-graph/index.html","f02e6ceaa786f0cc1989ff724ebe4c3f"],["bucket-radix-suffix-sort/index.html","901ea1c48128806a457c3940bccee4e6"],["categories/index.html","a13f6ea99899c8272166a23d37e8d251"],["categories/即时笔记/index.html","eb914c44520568604156bb2965e222ef"],["categories/总结/index.html","7d4ca34b3db539ccd651d98b133d4972"],["categories/文化课/index.html","8ba3ef7e7e1b5ae6387600ec63cd1977"],["categories/穿透世界边缘的呐喊/index.html","c515a010c10f76e08024e52bf1a50ae2"],["categories/算法浅解/index.html","2fe8102a1b89271ff9de8f8121f089bb"],["categories/随笔/index.html","ea0d6313d5d9da21565ff5de26e27f42"],["comments/index.html","57ab07df0fbe686b8f0664f5041623a0"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","6fcf1e4e25619270b2084e975151bf45"],["exgcd/index.html","e9f8d57f91ef15f9f3c4af70bf64e4b1"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","8adba181d69c2e839ec4b0beb5dc3201"],["gallery/index.html","39522cac5ecf6e7354b1e4dc716ecebf"],["graph-in-math/index.html","b80806ff7598c282228d5f1d34f6a8ef"],["hello-encrypted/index.html","a4b383d00ca93319ba85edd7bf446223"],["hello-world/index.html","b1c8c1fac58997946de28b68b1cd4bc7"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","7e74247e441fee79de922b3491f1926f"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","d6c45b23828090d9ab3aed9ab94a9157"],["kmp/index.html","953103faace67749e7520577f7bfb5dc"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","5b433d12122b67422c956f3ac59ad3d2"],["my-math-problems/index.html","fc2a9047585912288e925086b784d3b6"],["noip-2018-outline/index.html","5310df34c9d67d87c2993cec87d40384"],["offline-algorithm/index.html","4a1a48edcb38a173d6145aa8a498901c"],["page/2/index.html","2c92a315b933182ca9681f6c4247d526"],["page/3/index.html","c8f2464ec854381ef751e91e9c44c5c8"],["page/4/index.html","af9ce9c589ff8c8edfc0ad3fd698dfea"],["random.html","c8658b7a1c7ec8e1e5ec131169d6fd28"],["retirement-speech/index.html","e32376570f72ff5aa253589c7d62ff3e"],["s-and-d-on-a-tree/index.html","3a7c871a800bba89e3d258c18473a80a"],["search/index.html","cc32f3f4652bc0159def369c5fb3a966"],["tags/KMP/index.html","0f3dd9a8b2d2a8a8b27dc9f81e02e502"],["tags/THUWC/index.html","0bae1475fb6e96c3f73c4efb81bfb878"],["tags/floyd/index.html","8d5f286fbd5351fd9ef407a83a8f0549"],["tags/gcd/index.html","8a3c09bb0dc785b82b59181a038ea8fa"],["tags/index.html","01f4265781680021acb91a78badfe2c3"],["tags/世界间绪论/index.html","43fc40c8f210363ef2af3a4acb9bc19a"],["tags/世界间评论/index.html","f646c566e29628f0cc42fb13c5c1608e"],["tags/二分图/index.html","fe40b177fe521ed548e5acfe818fa93f"],["tags/你的名字/index.html","3d62e7744d1fd793083dbc3928e901c5"],["tags/前缀和/index.html","6959097642ccae0a6235b747a94679fd"],["tags/动态规划/index.html","cd5695eed8cc67b13220742290621c0e"],["tags/单词/index.html","34d3dc0e12ce9b3686250c86ee5537d9"],["tags/单调队列/index.html","8232ca69865370a286323f2dfdd9bfb8"],["tags/后缀数组/index.html","f495deb1452931574fddc138949141eb"],["tags/图论/index.html","05bab336bfa5a4043900644206bc4292"],["tags/大纲/index.html","439e98a210f6b9702339c2bc89d5416c"],["tags/奇闻/index.html","369b7b7cb9690254785746df5d9ded94"],["tags/字符串/index.html","9b08092019fa3d0ae62b980b15e2eb6f"],["tags/差分/index.html","7cd76ef99aab49959ff1524823ccd067"],["tags/并查集/index.html","78afc653e79233ce9b4dddcb23bec138"],["tags/总结/index.html","9fa2e8d57cc566071a9d03a54ff7e559"],["tags/排序/index.html","293c116871f706b85bf65f1313e631fd"],["tags/搜索/index.html","2f16ef6bf16855e6b361849777c19191"],["tags/数学/index.html","e39bbdc7aebfb40c5b515bd645b9b093"],["tags/数据结构/index.html","490dff611221c8b9add28c971cf19a53"],["tags/文化课/index.html","f8f4f1524a09601d0c48a635dac57de3"],["tags/树/index.html","ab7d1fa79f5b3d53f17e0242f1566f01"],["tags/离线/index.html","9083254b8e28e3dbf9fbcab8df5cb7f4"],["tags/笔记/index.html","da7ba88d3ae0675d9ff57434a6b227a1"],["tags/算法浅解/index.html","07cff65e0bef739d9381fe4ca3cabecb"],["tags/紫罗兰永恒花园/index.html","3d25798bf9340067ef9f233aaca0efee"],["tags/英语/index.html","bd2b8de70bf461ff56d98e4fc4cbc4b6"],["tags/蒟蒻/index.html","68cc3018106c8f269b20ce6a4ead2902"],["tags/贪心/index.html","1be0a78851e16300ed51b5bf8f16a3a6"],["tags/退役/index.html","b37fc04166e9cc95e9fb3540ca9fa7cf"],["tags/随笔/index.html","3ea8702673e976e497d878de22e010b2"],["transitive-closure/index.html","d9b998c79d466e9e513a860dc5f2c4ea"],["useful-links/index.html","9151aff03bdd68bd9360b4a8a73d1f12"],["violet-evergarden-review/index.html","3b0a74686602a1c1cd9aef2a42209c07"],["you-are-more-important/index.html","3d412601772ac4d65b2d867e4bc6ee30"],["your-name-review/index.html","7584d5e8d80ede4d2d8a35bf90865704"]];
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







