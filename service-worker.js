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

var precacheConfig = [["404.html","b9d1c71e85bf57971268258b9523f995"],["CSP2019-graph/index.html","178c6ca4aa266072c2149e3907bcb577"],["CSP2019-greedy-and-dp/index.html","933513808f261382d7ada410490303a8"],["CSP2019-math/index.html","d249270142ff8e4abb272079fa986e29"],["CSP2019-search-and-ds/index.html","189fe56d3b190056eab1c7b1438e5b6c"],["CSP2019-string-and-tree/index.html","342e1221c55bb5121b25109a4e6dfb64"],["English-7-words/index.html","dcf86f418de215ff120ccf6c2105c414"],["NOI-Online-summary/index.html","8bfe0026128aa9c73d18664ed87a8e8f"],["NOIP2018-day1/index.html","7ddcd769836d2fb0bbcbe84739e16497"],["NOIP2018-day2/index.html","d7ecab880ebd2cc17ce977a9ae02da21"],["NOIP2018-day3/index.html","1aff23887f0604c884aca82d553169bc"],["NOIP2018-day4/index.html","c56d0ed45a967297840f618917a2cc84"],["NOIP2018-day5/index.html","2afee96f52be2428403f69523df9301d"],["THUWC-2020/index.html","31e18eb1d1eb1f56205f13afec99d532"],["about/index.html","5d68bd1a62872c7eaf0a2080fed00c15"],["adventure-record/index.html","80e1a03f4eaa3eaaa7dc83c03db8fcf1"],["archives/2017/02/index.html","f7082efc414d3f14599269e5127a1357"],["archives/2017/index.html","754433df4f2383025d907554cd57c67b"],["archives/2018/01/index.html","8d083a26b4cd7246d4296aec60184c10"],["archives/2018/04/index.html","f83af72299488505dce7eb0bc4494bd7"],["archives/2018/07/index.html","4655cb8cabf6e1ef7639a9f25e6e8532"],["archives/2018/08/index.html","4bab69913dd8b005031e824483f8232b"],["archives/2018/10/index.html","8b04e2c37e782e2661fa3c57719f008a"],["archives/2018/11/index.html","ccdbd25c21efde536511d58e76e56545"],["archives/2018/index.html","80ef6f9c0ea73235ebdda027991fa33a"],["archives/2018/page/2/index.html","dcfe047f97e52de41c8fac890d9418cc"],["archives/2019/02/index.html","af8911e0d848d13f4a0f92223ebdccc5"],["archives/2019/04/index.html","7c674d8b418521bbeaea29e25a26f10e"],["archives/2019/06/index.html","19ce618043bf3ef9a9e37807050f4b83"],["archives/2019/11/index.html","1bfc50cfdb6eaa54fa9973af2b2da146"],["archives/2019/12/index.html","65967746b406a076404c89add0ec768d"],["archives/2019/index.html","23de2371bcb753fb15e935817f973cfb"],["archives/2019/page/2/index.html","703c96f72e6a9dd98544d47e0ec5e211"],["archives/2020/03/index.html","781a1df15e2ea973ce08697f916771f2"],["archives/2020/index.html","529c50a6b6c70eff749887f8205c2fbf"],["archives/index.html","bdf87c75ac3f746eebc66920497f1c94"],["archives/page/2/index.html","5be5da0c4dbcabfff5d0d18cce6412c4"],["archives/page/3/index.html","5be5da0c4dbcabfff5d0d18cce6412c4"],["archives/page/4/index.html","5be5da0c4dbcabfff5d0d18cce6412c4"],["bipartite-graph/index.html","4f11fce0efd87a69802d1a33ed84125f"],["bucket-radix-suffix-sort/index.html","8affa4d790a4cc38db8807bb025f228f"],["categories/index.html","3db194ad992ae8301436c9783b3e6838"],["categories/即时笔记/index.html","1a7f46b21b40ecd40bd5d65a54a5ef18"],["categories/总结/index.html","39a0e9edf152b463301cc2988dff1bef"],["categories/文化课/index.html","af5be3e4cbdec055ebccfb638263dae8"],["categories/穿透世界边缘的呐喊/index.html","ff25f4e8219f875ad825cdfcc2633149"],["categories/算法浅解/index.html","58ca894f096efc1d56c08cd72e1b36c8"],["categories/随笔/index.html","dc03ede8dd889f89d8b79d697a0a6704"],["comments/index.html","fc11de7718951fd3d5ecf112312fb42b"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","71416f2db8823d2414b6c5537637d828"],["exgcd/index.html","a0651fa6304a7c8a41ccafc8f59e0ce5"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","3cfe2c11514db3610037275799bdd3a1"],["graph-in-math/index.html","9daedfa9ae828dae595287c270fd1fec"],["hello-encrypted/index.html","e47162f67af4dbe47857e8a867ca147f"],["hello-world/index.html","a9346723510cc6956e8322c0d80a47c0"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","b748f89fd1b61051a8ac800c75dd6392"],["js/app.js","fbc422d3b5fbb3182f6a1972890f6daf"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","d0df76a14086c4a71136282e28058765"],["kmp/index.html","5f6bd016ed5f79674b710635bc34ef7f"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","20704b9b694c4288f97e83164880020b"],["my-math-problems/index.html","64b06ebfd56189efd5f0c586b7b21f78"],["noip-2018-outline/index.html","e2dc06cc35e778e7da0026ab5461508d"],["offline-algorithm/index.html","7f369f872cfafcbcea966646df38c6eb"],["page/2/index.html","41081d1a45417a1df958dac33645cb7b"],["page/3/index.html","c03b6906f389ab59492618a2a81f73c6"],["page/4/index.html","b9d549548bf3de1c42457920ca9bc803"],["random.html","a095a8867700b20c3c523c385b51a1c9"],["retirement-speech/index.html","6ab9735e0cd6a19c0b9e69a6489f7145"],["s-and-d-on-a-tree/index.html","099db75f0946d0df0dae849fcfccac0e"],["search/index.html","1fa8944b992bb57bb7fe65fd85a4d3fe"],["tags/KMP/index.html","40830c4efb03292b28447e0eaf6b8f9d"],["tags/THUWC/index.html","c09a514d188e374fe8374f6bd42720e4"],["tags/floyd/index.html","53639ac60cd60c0ddc753205b87bc58c"],["tags/gcd/index.html","55c7c20f795c6cb687bff49d7d8b63e3"],["tags/index.html","0411fc51ce6761010085ecde13c9d40a"],["tags/世界间绪论/index.html","9ee924f2a873f8c5d55ca07492591222"],["tags/世界间评论/index.html","1fb96a503b0b2857d81f7774ee5e78e5"],["tags/二分图/index.html","1d4af7b4cc27bf02f88c264c0caae0b2"],["tags/你的名字/index.html","cfeae53891f78c95727c353a8b04643d"],["tags/前缀和/index.html","ae194e515cf23e467e426c9e6a7e66e0"],["tags/动态规划/index.html","06ff9d5177aef1bc190d7436fd279eef"],["tags/单词/index.html","3eda888d0d788ca121bf3fea73ab0d67"],["tags/单调队列/index.html","1caf6f1529dca976e7035257c09dead0"],["tags/后缀数组/index.html","6bc5386439023de3113b0dcb37cc190b"],["tags/图论/index.html","8fab4d2e062a192dc1fadeef0744155d"],["tags/大纲/index.html","80cb4542e9fea0a617ac39898f35218c"],["tags/奇闻/index.html","19aab432ab1b823e8629a760e181fa24"],["tags/字符串/index.html","bf6c388ef6b355183e3ee7dd658aa99a"],["tags/差分/index.html","3dadc7a9c17e865cca6d5e3546897226"],["tags/并查集/index.html","f798fdfd49c3b750e24af23cd4e03b83"],["tags/总结/index.html","6a1158fc05ba22c6b44dc98ca7ec23b3"],["tags/排序/index.html","1b8d78e70630a85663509554c2e60710"],["tags/搜索/index.html","7050de869882fa6d3be94f288398f816"],["tags/数学/index.html","692889f6c8c48247d797b7671cdab1ec"],["tags/数据结构/index.html","d28e62e435edbe4730bdb1a06aabd929"],["tags/文化课/index.html","b27b74cea93ff7b3e0a445f6546324e8"],["tags/树/index.html","b84a547041576a84fca2c6616c538647"],["tags/离线/index.html","25ef0a8169ebf2062a0e4a6733980835"],["tags/笔记/index.html","a4b1cbded8f5b30c12cbffbdb4950ca8"],["tags/算法浅解/index.html","86b754f60c41b1255474e30de5e95866"],["tags/紫罗兰永恒花园/index.html","3b2a00ea718fb4a4b2df9e58f6ee1311"],["tags/英语/index.html","93251b865a885458ccbef3dc3552b944"],["tags/蒟蒻/index.html","f97d799c1abc0bc8f0cb31d5ce172c6b"],["tags/贪心/index.html","e768d900ecb225bec4e82e5e73f3adb2"],["tags/退役/index.html","7a99f93dc3d68d0f9f9036aa4509e33f"],["tags/随笔/index.html","d8d94f16db197f35a02dc415ef72482b"],["transitive-closure/index.html","dabf321297144ac7aeef1cb79733167f"],["useful-links/index.html","252e3aea1f9e062088119e45eb80ee39"],["violet-evergarden-review/index.html","a3271f6c12c5a273c0c66d3cc85fd66e"],["you-are-more-important/index.html","b795d4753fe34adea63bd81a41548167"],["your-name-review/index.html","5d2aa5dd284d337ce450c018c239004e"]];
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







