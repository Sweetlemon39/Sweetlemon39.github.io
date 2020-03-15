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

var precacheConfig = [["404.html","8770a8643fb36e87911d3fc9dd69861f"],["CSP2019-graph/index.html","0e17f0cc801854c3ce8cba02d23b2269"],["CSP2019-greedy-and-dp/index.html","895239078b2c45d0cb174492cc36398b"],["CSP2019-math/index.html","45ce2865481847eea0b803776bce0c23"],["CSP2019-search-and-ds/index.html","9255c4b547984db974a06092e1eea686"],["CSP2019-string-and-tree/index.html","4f851bf6b9409590ca0a03eb308884f0"],["English-7-words/index.html","5efabb25db0af5ca886bc4a497d916b6"],["NOI-Online-summary/index.html","ff5133cb90bd69f729f428dd2767a60c"],["NOIP2018-day1/index.html","bb4a661c844aeffc91f017b1e6f5eaba"],["NOIP2018-day2/index.html","942ce8267114850869f3cd1c56045afa"],["NOIP2018-day3/index.html","e5ea920de105733cfda80c68c3b0f966"],["NOIP2018-day4/index.html","ee06d628faba7922cd00a2c65260fb9f"],["NOIP2018-day5/index.html","2eac9cdb2c55852e5343367bceb945d9"],["THUWC-2020/index.html","3e9552755ca9b36af5b5dc0dc60a8067"],["about/index.html","f95f5e814832dbc360691eb5d2b4ef24"],["adventure-record/index.html","a32aba9afef14874810a59bd0123f3aa"],["archives/2017/02/index.html","df52c956449f2441170c5d14ea59752f"],["archives/2017/index.html","3c3e5a9d9b23f70d644f41c728ea42ff"],["archives/2018/01/index.html","dc5371dbc2379a9cf7275d0296ce64ca"],["archives/2018/04/index.html","270418fbdb94d92acf6a5199b60825f4"],["archives/2018/07/index.html","383e939279f987fdc58ede8618646408"],["archives/2018/08/index.html","17054d7ed1a0f3eefa5944c4802317c2"],["archives/2018/10/index.html","07f78c9ff30ba484680310185da4f4f5"],["archives/2018/11/index.html","5e787b9fa49bbb1b399794eebe444c21"],["archives/2018/index.html","0e8e037ad58685d6012553a8f998a18b"],["archives/2018/page/2/index.html","4ec947183c65f84a54037ee3edad9784"],["archives/2019/02/index.html","6879507679ae922b46cb98505de5ff4b"],["archives/2019/04/index.html","0f56c561b8201fd0aa901524aa26a906"],["archives/2019/06/index.html","57552a2137ae04c406ed4a557f495033"],["archives/2019/11/index.html","c2fc2913da97867c7f29ff0140a4f54f"],["archives/2019/12/index.html","f3a741f5eb79ad52125dc9dac6ea13ba"],["archives/2019/index.html","f048a290a6dbdeeb366199938e066534"],["archives/2019/page/2/index.html","28b662803ff48ab3f200011443ec3b59"],["archives/2020/03/index.html","82c5403234aab852160a0a9bd7d1f767"],["archives/2020/index.html","ed7f710cb860d647de55a115216b53c9"],["archives/index.html","5b3ad369add46d9c2349db86132d4721"],["archives/page/2/index.html","b4d7a645a16f19bf799b4bdfe5c0119e"],["archives/page/3/index.html","b4d7a645a16f19bf799b4bdfe5c0119e"],["archives/page/4/index.html","b4d7a645a16f19bf799b4bdfe5c0119e"],["bipartite-graph/index.html","bfe948db4ab66c883420cb6195bfbc4b"],["bucket-radix-suffix-sort/index.html","2479be440059914b87b2663e5065c1ef"],["categories/index.html","ed97ec336e315eba3299eeda469e0f84"],["categories/即时笔记/index.html","d9812da8cdb16b1c4ee739221e9a4819"],["categories/总结/index.html","af46a49c6631afa11d0f2762d9fee969"],["categories/文化课/index.html","3866ce9e1cd9cbd4770dd3625419baca"],["categories/穿透世界边缘的呐喊/index.html","025c0498c171749accf19f4380cefe9f"],["categories/算法浅解/index.html","526cddfe3eec08dd6c30e33cac2c5e3d"],["categories/随笔/index.html","33828bf7a805242c720721f487fc80df"],["comments/index.html","1e4a5e9663465183607e9b8401fd240d"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","40098747f4f60aca531c326030ebba04"],["exgcd/index.html","36dbfcec801e31efb62788fbebe1cf22"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","973a2212db10a048fb161d0e86bfee6d"],["graph-in-math/index.html","3db708565f106181d820ebc313a5e59a"],["hello-encrypted/index.html","a010addad300b94003cf178461ebc3c1"],["hello-world/index.html","777b40759b06f39eeeed99759dd4dab7"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","96658ed881ae08909a7654fcac74a06b"],["js/app.js","5619acc77c6b2e7d78023d382978cd50"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","0d1835d02d8ca2abf9432db9048f9d61"],["kmp/index.html","8072e72df7fe73a18742af116e1808e0"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","7fb7bebf25924b7a096e1302f797e552"],["my-math-problems/index.html","5787c59447e8760873b2aa4a19f369a0"],["noip-2018-outline/index.html","22bb4dc0e4c7dc25bc81308da74e875c"],["offline-algorithm/index.html","39aadbaf910c55313ea2d599a5b6cbcc"],["page/2/index.html","7326d9f975b09bdffb5f1a4c30064664"],["page/3/index.html","1f73b54c5040b9b161d4e52b8b125ce3"],["page/4/index.html","4021e824310dce8b08a63e19bb72af7d"],["random.html","cfdb82c6c1bdac92d3db8fc039d16396"],["retirement-speech/index.html","ec9adad2f80fe8a60a3cd2dfb4440459"],["s-and-d-on-a-tree/index.html","00be3a085f3173c8d7206effb7c15381"],["search/index.html","b1301a8566b5eec60acd7a9184851013"],["tags/KMP/index.html","124e617e89b5d98d32eea4c5578f757b"],["tags/THUWC/index.html","07726e8160cc877a95fa0840b36e50ab"],["tags/floyd/index.html","9eb6d2bd635d4d84c32a1cc7523e197e"],["tags/gcd/index.html","f5a28ec14c81a969d2d2bdc81a9968cc"],["tags/index.html","f854df0b4a912706d760ef6903091fe5"],["tags/世界间绪论/index.html","b785c9151932257d8d0500117a84c437"],["tags/世界间评论/index.html","f0abae49806e1ecb12f3e3ae042875fe"],["tags/二分图/index.html","e9e56daa17a517400ea2cdd89df55a93"],["tags/你的名字/index.html","b698a5f8cf871ccf1606e6a86187c342"],["tags/前缀和/index.html","f62c79b59523375996a2fb21fc5f9724"],["tags/动态规划/index.html","56ae36cc591ba0b63f4edf1e856c0b4c"],["tags/单词/index.html","1f43baf4e94979dff96c96f235dd448e"],["tags/单调队列/index.html","2bda77bfdd4836093a60156ab75558a7"],["tags/后缀数组/index.html","6e401aac9c51b670d00a0a17422b4a66"],["tags/图论/index.html","e437e7d87920772526f5dbe460001c23"],["tags/大纲/index.html","6207c87d493dc6a400d2a1c942e9cef8"],["tags/奇闻/index.html","eb4e130be4ced4c4041c57064a8cbb58"],["tags/字符串/index.html","27c4182ce82efed93e435b07ab0205e1"],["tags/差分/index.html","e597532cbf67af2433abc51de4caedf2"],["tags/并查集/index.html","3e532f36eb5b785387c3c6dfb4a7b0a7"],["tags/总结/index.html","87f7126e905dfd09b92ca377bc479f3b"],["tags/排序/index.html","ac1b2790bb173ce931fe2865f4142e02"],["tags/搜索/index.html","9de0291cf63700c12af351a2e543b5fa"],["tags/数学/index.html","c508c8ad08ed82f89ebbae38647bd75b"],["tags/数据结构/index.html","88cb93fbb046007ee648055fce05e493"],["tags/文化课/index.html","1d59b1a9a41fd845002192b2efdd5fc0"],["tags/树/index.html","ddd0c7dcaadeba20dfeb38d8a4935b5f"],["tags/离线/index.html","5f0cabc838e9a791c9677be100823f8b"],["tags/笔记/index.html","328b25b6a2e675cb11af3d09d5b383cf"],["tags/算法浅解/index.html","ea06d23823b67de1dd04796e54b84caa"],["tags/紫罗兰永恒花园/index.html","f5135775b09a8ffde5a7dd408fcc4961"],["tags/英语/index.html","128c2e32f9e11ae61c8ad0a0e91fa42b"],["tags/蒟蒻/index.html","4895b5b955bd2e5c35d4cfe044223392"],["tags/贪心/index.html","33583cbbb2596a586a19630ad3e523a2"],["tags/退役/index.html","ca41d78a904db305364b76bd5504adac"],["tags/随笔/index.html","92f299c69864e93937fbee48eec1b6a3"],["transitive-closure/index.html","f30d65f18b3542f93822fd9d0c7eb3f6"],["useful-links/index.html","2693248657cdd78a6c25b4cb09dc2867"],["violet-evergarden-review/index.html","5ed29c68edf89c0a70e450cbdb285300"],["you-are-more-important/index.html","6f94c66cfbf9b09bdb2b2221b5cc67af"],["your-name-review/index.html","317fc50b1f29465e4e403d3eaaa011ba"]];
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







