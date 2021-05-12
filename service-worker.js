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

var precacheConfig = [["404.html","7b8ee8a99669ad55aad587ddbaa2b096"],["CSP2019-graph/index.html","5df05534b028244ba4cf5d107ee17ffb"],["CSP2019-greedy-and-dp/index.html","c44fa97497b8a9ab7d493a2f280b7453"],["CSP2019-math/index.html","e73a6e4e7261303d4585cf657c9d5a2f"],["CSP2019-search-and-ds/index.html","3d588a79b940f439138cd7ff1910798f"],["CSP2019-string-and-tree/index.html","d63d45597678c5a5521d909e6d861591"],["English-7-words/index.html","4426b0f384a1adc224a9253edae113d8"],["English-8-words/index.html","888f9aaeb0da05fe5cd931d98c2853ba"],["GXOI-2020/index.html","a5242bb58b2162e658b0d21af7101dea"],["NOI-Online-summary/index.html","8ea7d9394d392e2dbc2c577aac43da8e"],["NOIP2018-day1/index.html","ee8ee550ef3d033a57b167f73c32dc48"],["NOIP2018-day2/index.html","b5cb51841588c55061789a70d854323f"],["NOIP2018-day3/index.html","c95c91de320b4b04f93cbe3383be3a73"],["NOIP2018-day4/index.html","c3afe5a600d7e2dba378eecfe43b35c9"],["NOIP2018-day5/index.html","9a4b1ce6be5e153d9efa364fc7eb9d50"],["THUWC-2020/index.html","3ae4a43655c9702c27d8a60da916a9ac"],["about/index.html","96d2e9ebf45c6024189fba586ef99493"],["adventure-record/index.html","52dfd918176347196f027623f47261c8"],["archives/2017/02/index.html","bd62c7272ccf6a2dc1d3739aaf63a090"],["archives/2017/index.html","1f676ea55436cd95cd8e3dd843cb38f1"],["archives/2018/01/index.html","68e9f4ad3fb8812ed3b14416f3cdf289"],["archives/2018/04/index.html","67b2eda7969081123adf4e6bcdaafc94"],["archives/2018/07/index.html","4138a135643e7f65be7164c9aeb61ccb"],["archives/2018/08/index.html","72346aa9cfd5e42da12ad6e169855bb5"],["archives/2018/10/index.html","f3b7d3df5e01718b1a9333fe91c8d5e4"],["archives/2018/11/index.html","c29f6d3091e41aaa661892fcc4302bbd"],["archives/2018/index.html","56007b9c5940e7967473c1a603ea89ad"],["archives/2018/page/2/index.html","ebf12b8d848f8bf68bfea1a96636c89c"],["archives/2019/02/index.html","366b6d81f99909b9b6576096caa98e8d"],["archives/2019/04/index.html","acc1b897aaad7631dc1cc0641ec20586"],["archives/2019/06/index.html","8b3c760277b459ddfe6e6bf05eb4f46b"],["archives/2019/11/index.html","8fc06b83fc09bfc6a8dcd13baabc24cf"],["archives/2019/12/index.html","57541c9ae781490cc603e5ddf00a073f"],["archives/2019/index.html","20c53e20a8fb568cbb3900ee2f8be4a8"],["archives/2019/page/2/index.html","2c23a75d67ba700e5897583ab5646699"],["archives/2020/03/index.html","71c0869adf84fae7b684987a62dbee31"],["archives/2020/04/index.html","9a7046563b1374f86539e339bb63c7b6"],["archives/2020/06/index.html","923af746fcbef1dceaad59e487ff16c8"],["archives/2020/index.html","77e42ec8a5f44fc15f2eecc4e267e49b"],["archives/2021/05/index.html","86a5f1c63f5e89d5b91352711d6c188d"],["archives/2021/index.html","6dd1b3fbfbe72cfdfb59f29b6e1e6a5b"],["archives/index.html","abe11a144d6387cc1a7d9ba29b8f82ed"],["archives/page/2/index.html","1f3b489537880667fce9737bf6ca8963"],["archives/page/3/index.html","1f3b489537880667fce9737bf6ca8963"],["archives/page/4/index.html","1f3b489537880667fce9737bf6ca8963"],["bipartite-graph/index.html","9a9616fbf8b8a722c87fa1bbca037df8"],["bucket-radix-suffix-sort/index.html","64ee0b3eebdd3b60ced1e32358d94152"],["categories/index.html","58a973333a8ad60037371de1ed84edef"],["categories/即时笔记/index.html","d62490b6e3d60369d1b0578a2904776e"],["categories/总结/index.html","3955182f274a84a05f9546b67b99f21f"],["categories/文化课/index.html","be48d5f04baa703a816f7ee19be184be"],["categories/穿透世界边缘的呐喊/index.html","4c101ad15ddd4371cdca45e0d9feabe6"],["categories/算法浅解/index.html","63ecda38b248476d7191fb6b5cd42fb9"],["categories/随笔/index.html","a5f0ad3487661abce8e57611054d86e5"],["comments/index.html","6c7675ae77c00367f306f053562f99d9"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","7a7a16bd49cdaf087ac2f045208f55b7"],["exgcd/index.html","c331cd54656951c344247647bb5de0ef"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","c9eeb9f33cc492ae03950af50a933a78"],["gallery/index.html","dac54ffc02a63de95862f035ec13efba"],["graph-in-math/index.html","512040779262725e6dba12df8eb0b3a4"],["hello-encrypted/index.html","11601999179c5718ce8dadfc212815de"],["hello-world/index.html","027e957cdf812bb87c17ae6ced8cb899"],["how-to-recite-log-inq/index.html","143db6a220901567663aa6aecc6ab3f3"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","fb07ddbd90d0aa9c1d99ccd7aa6c3567"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["juruo-poem/index.html","41e4204bb3857d4aca92b42c354aa60a"],["kmp/index.html","3c016c7b912318d774d5e08924e76702"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","85e5bb67fc637fa9d40f5946f1ad8ba2"],["my-math-problems/index.html","f965551bded421d4df12bd3032c3d962"],["noip-2018-outline/index.html","2d1c360a6ed1ef3405c984e58db58738"],["offline-algorithm/index.html","209ffb8cd7bafc5f98572bcf266eb493"],["page/2/index.html","74a84088eb21025088b8e4cfd8e21954"],["page/3/index.html","7b05e0e4f32d5e871d250a25afcab8e0"],["page/4/index.html","0c5e20ba13a21776a9e6fb8f4bae935b"],["random.html","a08de525eadc63183ad8832286ca8ea0"],["retirement-speech/index.html","94348b5a47f030a63ff2231c2ada4974"],["s-and-d-on-a-tree/index.html","0f0b8087bfdfbb387ab75381f9dd01d1"],["search/index.html","ac644cba3edd90e49dda381b1ce524ae"],["tags/GXOI/index.html","56c6e95c30ca491f43522f798e8a59c7"],["tags/KMP/index.html","d6dc9827b0752f8f1bc5a3e558fc39fc"],["tags/THUWC/index.html","6d204eba5104497da707e7228a3def82"],["tags/floyd/index.html","bedf56806718d2633f6d92b964ec0168"],["tags/gcd/index.html","175c443546aa7a3ba6c04972d73c06c4"],["tags/index.html","328a746eca244e90d058dc1e9572f05d"],["tags/世界间绪论/index.html","99809749a66c12a4c5091f0033d57f28"],["tags/世界间评论/index.html","3d749369798e06fdb0d7e118c8ffdb02"],["tags/二分图/index.html","9f10364ac8b3dd5265d869e39de818b5"],["tags/你的名字/index.html","368eb8e4ea072d7eb76f9073034eb8d9"],["tags/函数/index.html","ac22b60d3ebd835947122bc01f064bd0"],["tags/前缀和/index.html","b40ed5382984e5ab167c3a20034d0189"],["tags/动态规划/index.html","0e0c422936a560f44ac5375d852477a0"],["tags/单词/index.html","892b18e7334d99cb6c80901e51d13ee1"],["tags/单调队列/index.html","ceb28cdc0a77a48ba7f3f4da6b99fee6"],["tags/后缀数组/index.html","84fe6bb5a242f670ea42bb829ea8db57"],["tags/图论/index.html","3c2c1055505eae35b29d8bd9fad6bdc5"],["tags/大纲/index.html","08a176dbfc7a09ea1fb1b36d65870a45"],["tags/奇闻/index.html","f73d31ea267ebd81b9532dc523bb558e"],["tags/字符串/index.html","8a50a5c5a14bc37f6a63b5c60aa55d89"],["tags/差分/index.html","c893398c4b972807e78c1e97e38c4826"],["tags/并查集/index.html","ae792d1d108c2414d1f37339061eceef"],["tags/总结/index.html","66e6c1e4d65b779831322e70023f828f"],["tags/排序/index.html","1415aabe0221602782ea3cd94bb08025"],["tags/搜索/index.html","bca9c951d25da0ae4536dd887482f866"],["tags/数学/index.html","a002b60918a70a1ee972aabc5babc655"],["tags/数据结构/index.html","620f7d7e6228af4f3465030fdc24dc25"],["tags/文化课/index.html","474fd1ea965f829d1207ead50b9b11e1"],["tags/树/index.html","a4aadd629f9dcce7aec652a004a0d41b"],["tags/离线/index.html","95ee6ab7c23e5f036274769a7b1ac8e3"],["tags/笔记/index.html","8ce98d5ad26dc87da30364bfe7f4d28c"],["tags/算法浅解/index.html","edbb434124e831d2d83cc48ad6b33b84"],["tags/紫罗兰永恒花园/index.html","d5e665ecade0cd4e145a248fc6dbdd27"],["tags/英语/index.html","3663304f7170ec871918e185ee4408fd"],["tags/蒟蒻/index.html","274ad5b67893ca1a785ae5c0065a0ab7"],["tags/贪心/index.html","af13b579d02456a3ef8087de692b008a"],["tags/退役/index.html","3d3f95400595e2e98a15e9029ca36573"],["tags/随笔/index.html","3968d76d010e004b739ab0b46dabafe0"],["transitive-closure/index.html","4b16d74a165f934c8c183cdeadbf4b53"],["useful-links/index.html","6d135e7dbc942b1afde85f30373eb6d9"],["violet-evergarden-review/index.html","fb66a46b9a18ba9979d3ffa1fa221db1"],["you-are-more-important/index.html","fb6eabf770d6c0371bd66a8e5d5ee9ed"],["your-name-review/index.html","7cc0d1ddf2b8e5e076b63b94fa236561"]];
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







