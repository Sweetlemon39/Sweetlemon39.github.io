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

var precacheConfig = [["404.html","0b4210984fe72fcd4724ef405dd1d9ba"],["CSP2019-graph/index.html","ab63d50e75877a215b657824929f7bee"],["CSP2019-greedy-and-dp/index.html","4ef36075de8dfde1e4aa2dbf6e7df6a8"],["CSP2019-math/index.html","a4e322715b8ce8b95cc632aa7950d936"],["CSP2019-search-and-ds/index.html","3782b8afa8be0cf7be11b0b19a79e75e"],["CSP2019-string-and-tree/index.html","5c34adc6939c81ad6ec3680e7725dcc7"],["English-7-words/index.html","61631ec5cb600ecfcd43b9d473ce21b3"],["NOI-Online-summary/index.html","4540b1be8d25fac029f2743a42659c4d"],["NOIP2018-day1/index.html","a3ae138eabef675a0579b445e75f2951"],["NOIP2018-day2/index.html","90598c1f82f0c3794eeecdec73379e37"],["NOIP2018-day3/index.html","546fbfb2383ff8aec03d90becb754502"],["NOIP2018-day4/index.html","76194e36424871a35a2ded96d2ab8dcd"],["NOIP2018-day5/index.html","5c57d57916af8da8b3c46d20f1985495"],["THUWC-2020/index.html","4e873fa07c8d77c26029cce707872c51"],["about/index.html","3dc3a0935d65969184e471601935f0cb"],["adventure-record/index.html","daf61eb9441ecdcf4163173804da184d"],["archives/2017/02/index.html","31c91262ac78fb8aed8fee7abd64543e"],["archives/2017/index.html","ceae3425474b07310e94d0f08c6527cf"],["archives/2018/01/index.html","9c45a13f432b90e467f939f8e072e828"],["archives/2018/04/index.html","4fc82f9003faa2eb8440d260bd542adf"],["archives/2018/07/index.html","0dad0bc70050a0c881d1a727b0b53472"],["archives/2018/08/index.html","418534daae573565791f55ee516ddc7b"],["archives/2018/10/index.html","9f82a44d00f836ac46c77d65cbe234d1"],["archives/2018/11/index.html","9e4a2de3d380d7d90483d20cb0c153d9"],["archives/2018/index.html","6683b502624ec66b6aab97214c2282d6"],["archives/2018/page/2/index.html","6b1cbaa3a3371e68ee87aed148e43f5e"],["archives/2019/02/index.html","9ce0088b615161502b3934875097416f"],["archives/2019/04/index.html","4f70c3119444130b9473dd6d2e22724f"],["archives/2019/06/index.html","94a58d4abd301259cff82e0eea8b06c5"],["archives/2019/11/index.html","47c1ade423f222b369a9f1c5854f4bbe"],["archives/2019/12/index.html","05d99349ba4b986b4e3aff2c6be7e9c8"],["archives/2019/index.html","298610622f33b150f0c5f30b5c013704"],["archives/2019/page/2/index.html","668ef88bce4b7631a01c8ef2194544de"],["archives/2020/03/index.html","5fd52c98fa2af93cd6a3e2f5cbdacad6"],["archives/2020/index.html","3a6b72cd380080a1ec315a3375f64628"],["archives/index.html","565ae1fbd032761dd3416d192374cfd3"],["archives/page/2/index.html","7991b00d48e5a80fc9f7418cf90d69c4"],["archives/page/3/index.html","7991b00d48e5a80fc9f7418cf90d69c4"],["archives/page/4/index.html","7991b00d48e5a80fc9f7418cf90d69c4"],["bipartite-graph/index.html","e2bb35d55a2f068a33b2efbf816ad834"],["bucket-radix-suffix-sort/index.html","0935b347d2063e84809f3dfa0e357a1b"],["categories/index.html","0d6cbcf2f25f281015965e6ac8254c2c"],["categories/即时笔记/index.html","a1957a4ad42e04e00cedbe3998f4441c"],["categories/总结/index.html","a1345c0c5246a4649403fc70245f021d"],["categories/文化课/index.html","825f5f4a76d751dfe885abac9330f2cc"],["categories/穿透世界边缘的呐喊/index.html","114ad096b76161199597de23d627f9c7"],["categories/算法浅解/index.html","cfc2d9ee96a0f9487539ea13f6142a45"],["categories/随笔/index.html","751175b8ad63e1f0145af8b0069692c9"],["comments/index.html","39d18f565fee34e5c18d245c7845c5da"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","acbca1e202f5bd202714e8b24943c175"],["exgcd/index.html","827450454d82a5e38e2f7fcf4d1fde1d"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","15fec208c1809b0d02bcd651eabf6b60"],["graph-in-math/index.html","63885b5741e92ae8aa1bbde96706c4fc"],["hello-encrypted/index.html","c8c953cd854d0edbe93a931390278d0e"],["hello-world/index.html","cd4a602149aad59d2133fc9f81d93aa6"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","b392e010c13aef12a62e871b60a944d7"],["js/app.js","fbc422d3b5fbb3182f6a1972890f6daf"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","8b98318ecefc8d7ce5225a31953ae67e"],["kmp/index.html","56c61d17db369c4f6833e9517e8b1b31"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","984baf21caa9494e3aa93a562f9f71be"],["my-math-problems/index.html","fb4b9737a42fa0925958dca2880a6408"],["noip-2018-outline/index.html","e5fcbe0ce87094f2d7f1c928cc17f5f7"],["offline-algorithm/index.html","64f783632d4ee734ca31570207ff948c"],["page/2/index.html","220d8b0712bc22160fa0aea2b807d389"],["page/3/index.html","4bca606e341731fca8d9ea8d7f69dbfd"],["page/4/index.html","c5b9c94639c963dbbd3b093e04ac2afe"],["random.html","a095a8867700b20c3c523c385b51a1c9"],["retirement-speech/index.html","3500b266bdb7b247f81192b6b1a716b3"],["s-and-d-on-a-tree/index.html","8f3c62b8246f0db519c69c55fa128b55"],["search/index.html","422ec130c8b73714025b4135952d6e43"],["tags/KMP/index.html","d7ce2989b1f4bd82c52cb479440d6be7"],["tags/THUWC/index.html","37c428847ccd4287f5696e631a5768a7"],["tags/floyd/index.html","fff2be63c940654af9702c12dabc22da"],["tags/gcd/index.html","b9de4d67e4fadbda7c2282d1c1941018"],["tags/index.html","33c92cce587c593fbbd54140b2fcfdc5"],["tags/世界间绪论/index.html","229fdd6faf6a89bfa11487fc1297f2cd"],["tags/世界间评论/index.html","00e56f85443b35d4cd56b3e5e3ad5dd4"],["tags/二分图/index.html","beb7f0cd0bf7d20c96f63c61868740d9"],["tags/你的名字/index.html","5715c56cdec7119534eead12296294a2"],["tags/前缀和/index.html","1ce140c2ad87e0471be5b2bb5ea8fe79"],["tags/动态规划/index.html","983e7520ed07b8513075b6e1cc0f58e0"],["tags/单词/index.html","99fe25aa0436ab4d1eeeaaa5d19a3a22"],["tags/单调队列/index.html","a15dd675b34c43579f9f6886af6e5531"],["tags/后缀数组/index.html","d2871f8ade982a665ebbb9eb3a3d2bd5"],["tags/图论/index.html","311a66cd8dfd14e19412e2a432ab3cc6"],["tags/大纲/index.html","0d706312ef88af8a7959a783c75271bb"],["tags/奇闻/index.html","0db0a337e179b0ab1cbc23f4105c58d5"],["tags/字符串/index.html","3d0eade0454afacbcbf1c69cb25612ee"],["tags/差分/index.html","d82aca281fdfcbd29d48efbdb18ac28a"],["tags/并查集/index.html","e7f9bc7333c465e6588a1a37ba105536"],["tags/总结/index.html","9448124fb3e5326007b9a5371b9dbfeb"],["tags/排序/index.html","d1525d058385c23d4e9b2857016772b1"],["tags/搜索/index.html","e3b66f6a8ecb13854643b79f3a3e5a88"],["tags/数学/index.html","8e48d3cb23d460549a75a626c94ae2c7"],["tags/数据结构/index.html","2e7cd81cb2a798488f7720ca9a886b6f"],["tags/文化课/index.html","86868298458fba7986a2c497336c20a5"],["tags/树/index.html","202bac837f9dd69739fa9c30b43fc04d"],["tags/离线/index.html","0b1ac1b1b15bb5b94e61ccf8ca772bde"],["tags/笔记/index.html","1fc9a7cf5cd5459a89d88606d5d7359b"],["tags/算法浅解/index.html","be00cffa3d8dbb5ca0cf740b63a99050"],["tags/紫罗兰永恒花园/index.html","a9525c35360cd8a62e6cbd5dad111a48"],["tags/英语/index.html","054c55bc90e9c2091921bfa1ea550d39"],["tags/蒟蒻/index.html","21c0dd49b372addd823759a7198f42d2"],["tags/贪心/index.html","d7a212547b277d5958b7b6435d0ea759"],["tags/退役/index.html","6b8e876c80c31878f0a93855ec2c08a5"],["tags/随笔/index.html","adeece539e49a113fab5cd7e6bff8e42"],["transitive-closure/index.html","ad407fae3b6fb6ac7cafec93c95ad10c"],["useful-links/index.html","80314a440bf73eb1c093eedac6160bdd"],["violet-evergarden-review/index.html","58254ed86fbb404e1de1c829eab272c1"],["you-are-more-important/index.html","11b9f6aadbd4a654a290c6636ec5da5d"],["your-name-review/index.html","e63c5dd6135b4a93eae01e256c585ff7"]];
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







