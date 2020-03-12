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

var precacheConfig = [["404.html","9d0b04db73a8e6da22f25d7d835d9b0e"],["CSP2019-graph/index.html","13aab311bc20c7a898e16c5a1b7f62dc"],["CSP2019-greedy-and-dp/index.html","38ef3b7c54f2a32c10812cf649cc7003"],["CSP2019-math/index.html","bebfdf935ff5fa9d2f278a32b179b62e"],["CSP2019-search-and-ds/index.html","6bbc5c3c29f36e6ed32d45dc4ff7a92b"],["CSP2019-string-and-tree/index.html","70cb54e14939d6c3916dc9d529bdc49e"],["NOI-Online-summary/index.html","8a947d01c58a1418d31c731e5fd4b1fa"],["NOIP2018-day1/index.html","f918fd85709eeba692bba6e773490b2f"],["NOIP2018-day2/index.html","bb9c54df93164bacb16bb63318bd487a"],["NOIP2018-day3/index.html","c8d9978612eb3831736650879e410198"],["NOIP2018-day4/index.html","f1d5c8b4fb7ce4a8a355410c276c5cbb"],["NOIP2018-day5/index.html","a4e616104ec86f43832fdbba3459a102"],["THUWC-2020/index.html","3a9dd45fe2da87fea70865a776f10114"],["about/index.html","077a7c1bf092f60383854ca923ad27ef"],["adventure-record/index.html","3de68fae0a1901aff452f1b6d7326648"],["archives/2017/02/index.html","715828c19b906f681b83820e3921011a"],["archives/2017/index.html","45495a8c8ab1ced81b8257c17374d9e9"],["archives/2018/01/index.html","dd50678c576b0b22a0359a77ab227d74"],["archives/2018/04/index.html","4367f55aa6aac4aba5880a7df49244a8"],["archives/2018/07/index.html","08cfdb2574625353c9e7add3a91b5031"],["archives/2018/08/index.html","4d933cba150f33ec155eae240ad1138d"],["archives/2018/10/index.html","425879925436045dd514dac027a7bee0"],["archives/2018/11/index.html","4347fb7d550c8ff3757f1b2a1c666680"],["archives/2018/index.html","a7966d0faa27e5e8288daba8a5c776e9"],["archives/2018/page/2/index.html","b72540ce810e50f2d50316f18570476e"],["archives/2019/02/index.html","b716f97711a18d0443b406963a870536"],["archives/2019/04/index.html","47144ead989ea119b2ef0b95c727052d"],["archives/2019/06/index.html","24f103a228c3516b521a4d14185456aa"],["archives/2019/11/index.html","073b801b8d250cbf165cc8d22523faca"],["archives/2019/12/index.html","3cb96b13408b9fc21af15da77825a608"],["archives/2019/index.html","287cc085e800dd2ba011ac709548bac5"],["archives/2019/page/2/index.html","f954e4cd83455e91721be8219e3384af"],["archives/2020/03/index.html","571854d9471aa69918a53bac7b1be135"],["archives/2020/index.html","99368fe6e8f5e4b2e29bda5738bb2736"],["archives/index.html","d9fca46d365b9a68b5390c2ce61c13d1"],["archives/page/2/index.html","cee6ebfeb9d41c69f865458c48840d87"],["archives/page/3/index.html","cee6ebfeb9d41c69f865458c48840d87"],["archives/page/4/index.html","cee6ebfeb9d41c69f865458c48840d87"],["bipartite-graph/index.html","86d8d235d0c8b6bc4bc1ddb504d66ff5"],["bucket-radix-suffix-sort/index.html","a1a3d003414cc491c2dd69e1260e4af7"],["categories/index.html","de49f718b86f43e07843d6f0f5316305"],["categories/即时笔记/index.html","04482fdc9f0a69fba12d6ee2c2cbd5a6"],["categories/总结/index.html","3c2501c81bb14bc072f1f42d072e29b7"],["categories/穿透世界边缘的呐喊/index.html","798f1bd07dccc800f50d91c3231719d3"],["categories/算法浅解/index.html","5885dfdb808fd7f0d1383bf8bda5b6b0"],["categories/随笔/index.html","5dbacfddf8cb4036abca0d683b38e644"],["comments/index.html","80d4dcfc906e646f152dedaa8a204ede"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","f7db290a0fe82e597f4d5646d02ac583"],["exgcd/index.html","c13d50b8d185a26d2cd42ed3024c9a45"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","bb909e5f3b7f58a79cd38bd8a2be9add"],["graph-in-math/index.html","273e54034a608d8cc29a24d9abbaa277"],["hello-encrypted/index.html","4cd315317df7fac984a8f00a611a5368"],["hello-world/index.html","74a604a12adc4c84f2c1b2f326f44dce"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","13bdf6c3d858de00f840627e53112f48"],["js/app.js","90b3d4d8d4de01c8a8a8578ce7da3b25"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","7ddcf4a7cefde1bb3093f38905ffd793"],["kmp/index.html","72f3405175ee925ad0d861f8df7ea371"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","966a47e9b5cc989b7db6cf7aed2c2391"],["my-math-problems/index.html","b00c7e40014c5fd6e97a42ef10833944"],["noip-2018-outline/index.html","bb63026ec7c9914ace0a3652433f3a96"],["offline-algorithm/index.html","f1b8a882b553f4e947c246527b454c43"],["page/2/index.html","91587f3376dba83b03c8d40ebeed011e"],["page/3/index.html","34a39ab77dbccf4fcea3f6a35e414611"],["page/4/index.html","fc2ca11dfc779af297007964cccca9da"],["random.html","8d944be55c66978094950352713cf70b"],["retirement-speech/index.html","4cb7543b8de2bfebcdd323ebb07c56de"],["s-and-d-on-a-tree/index.html","8d53aa6ab17ff5d8300379b33ed75add"],["search/index.html","3f609abd20fceb241bd79f108a37fb92"],["tags/KMP/index.html","c4f490a088ceea32daf16036220411cf"],["tags/THUWC/index.html","14c8f708b96fc230d3c16feac7590b94"],["tags/floyd/index.html","c07ecea8dd8a14dd8acbca10dd0b546d"],["tags/gcd/index.html","6dc36931b0953cd444616e3d6869ccc0"],["tags/index.html","9962d6c2cccdb9184508358035283ae7"],["tags/世界间绪论/index.html","64f5b865840f4f0254442732dcb2e4da"],["tags/世界间评论/index.html","b3736ea32f956923e15a5355fb9c8737"],["tags/二分图/index.html","c1a4f37aa061cfab5a2939f32f4026d6"],["tags/你的名字/index.html","554a5ecbf11c236746fc03089b5e51b2"],["tags/前缀和/index.html","abca965fb67351830646c9466ec9ac74"],["tags/动态规划/index.html","3df9fd0726e9aacbfd14cbcc84e317b6"],["tags/单调队列/index.html","a8c83a5bf52aea429ceef5934e3b2be9"],["tags/后缀数组/index.html","f53c477609e55443d66d4b2d94ac1dc6"],["tags/图论/index.html","9619563d77bca6e3546d0be365f6b46e"],["tags/大纲/index.html","54a427ba0a0f79245828f5fd0639ec0c"],["tags/奇闻/index.html","61a45120cb060567693cd7384e639ee6"],["tags/字符串/index.html","176286335b0d57a542851f10995c3706"],["tags/差分/index.html","5e8dae754ca4c3eaf5d33c7d9d609542"],["tags/并查集/index.html","2520b059dce9e2590f6fa3dc33faca08"],["tags/总结/index.html","21ef50078b351379ae00b2ad853db917"],["tags/排序/index.html","8c48e36928a61bd56f8ae59686ccb18f"],["tags/搜索/index.html","aa858bdc2ee333f3bab52e644ae80ae2"],["tags/数学/index.html","00946621c50d438d9678b61bf597b2be"],["tags/数据结构/index.html","f901e15231bc6b48e01f607b7907b1a6"],["tags/树/index.html","2a61fe67249034ce5ad8d8c501349020"],["tags/离线/index.html","22377b9ae1cda19e63f60ae912e54a2e"],["tags/笔记/index.html","2cdc03b8bf4b2aa9713ce41090a15e7a"],["tags/算法浅解/index.html","8077ba36cb773aeaaa4ddc405a9a8a39"],["tags/紫罗兰永恒花园/index.html","5042483be561142136225ad0cbb9bd13"],["tags/蒟蒻/index.html","9b2b07ac62adec3e3581590eccdb247f"],["tags/贪心/index.html","3429c02918f83f793fc510c95d4bae30"],["tags/退役/index.html","8a270e2dfb5ffc7f66627aefd1fdef2f"],["tags/随笔/index.html","53fbef85780b8945c67b28bd2eedaef7"],["transitive-closure/index.html","d27a1de9770a917e4b1586a1292c8e11"],["useful-links/index.html","96f4ba4e4b0a498db0328784ae5113c1"],["violet-evergarden-review/index.html","32f15955847201198af820a082b98222"],["you-are-more-important/index.html","38e26a226d6ebd26a25ffc1bfa94002b"],["your-name-review/index.html","d754eb63d2cbd8323e2de1a3b31a5098"]];
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







