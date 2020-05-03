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

var precacheConfig = [["404.html","21e45d75025317e0bbb3f24f6311924f"],["CSP2019-graph/index.html","ff89ed645bbc9bbb80738a8dececb4c1"],["CSP2019-greedy-and-dp/index.html","f632f6d881332eb14256994f1dcade4c"],["CSP2019-math/index.html","1ceba3bc867a79fc7ceed0e479d00262"],["CSP2019-search-and-ds/index.html","1e0ae33802aa833d14c4180a533343ff"],["CSP2019-string-and-tree/index.html","fab577d5ebf9e9fa19bc6a0d180a3fec"],["English-7-words/index.html","9e09bd9268f66c3b20ec214dc9a8a83f"],["English-8-words/index.html","9fc05873aeec92ca75d0d70e15af80f6"],["NOI-Online-summary/index.html","91df8451425af9647cf63a9412d0f2e5"],["NOIP2018-day1/index.html","b0ef2930230e83320f9e808a3a1c8e2d"],["NOIP2018-day2/index.html","3bab688196150643e454e865ba6e0ff1"],["NOIP2018-day3/index.html","6ad8addc8c8e029f315144262a43b2a2"],["NOIP2018-day4/index.html","695a23b98ae0e911abe1173b77c55d4c"],["NOIP2018-day5/index.html","3b993fb47a9b59495831af5f2da52709"],["THUWC-2020/index.html","c473379d19370baf1671bda49e7a23f7"],["about/index.html","2cff99ee00130bfaf3df28f027723f4c"],["adventure-record/index.html","a16cd5f29b5a8c62582af5c20c2b81cf"],["archives/2017/02/index.html","39a93b14d6d3911f49a450826a319b98"],["archives/2017/index.html","6e2956ead11ff8285df3ba432222766b"],["archives/2018/01/index.html","001149cf36157e3885253ce0031982a3"],["archives/2018/04/index.html","f10a83e6e3b89a7f5eb18b7a0ddeb1de"],["archives/2018/07/index.html","74d77227a4a47f16eb553b58c290fb4c"],["archives/2018/08/index.html","2cfac9be2b8a6ded74c743f3cf7a6081"],["archives/2018/10/index.html","94a8a49ff4c31c3b82a23f7772026e4a"],["archives/2018/11/index.html","3144b08d708ad697e82156222ffdc0c7"],["archives/2018/index.html","095d7899bad607b42339dfca250c2056"],["archives/2018/page/2/index.html","f9aa063d9e7b1bf71800a81b144663c0"],["archives/2019/02/index.html","af3e8c928b048d3c7f288244ad1558c5"],["archives/2019/04/index.html","05615c7028970e0c6e45dcc2897b02bc"],["archives/2019/06/index.html","fb1d7aab5f2e0384b5c8ab81efa8ac6d"],["archives/2019/11/index.html","f8a278422458006a09dffd175ac2d8a7"],["archives/2019/12/index.html","3286e7db475c7810c9e1c2fe279e27ea"],["archives/2019/index.html","d40bf751717d523c26ed030d17bc5c5e"],["archives/2019/page/2/index.html","738cb3077815f3f211574767a90de53a"],["archives/2020/03/index.html","df35d11ebfdcf9a11e14d062b614093c"],["archives/2020/04/index.html","030733b58b87412c3097059384d2aa9f"],["archives/2020/05/index.html","0b4fb029554b76d511cc6c1cf815a4f6"],["archives/2020/index.html","9ac09fccb64e2ada45be4a18a8cccd89"],["archives/index.html","fe4e42eea0532ade99baf90b8c438291"],["archives/page/2/index.html","579e6a824d788661b385e6aa6a5b0c00"],["archives/page/3/index.html","579e6a824d788661b385e6aa6a5b0c00"],["archives/page/4/index.html","579e6a824d788661b385e6aa6a5b0c00"],["bipartite-graph/index.html","4da7eb06da7cc00bfd8f8aa04444f12a"],["bucket-radix-suffix-sort/index.html","47d584a12a42d8fd4e3ae737a7676356"],["categories/index.html","439252a57d522498188d9f588cac2b08"],["categories/即时笔记/index.html","b95c64f7c3413d429ddcfc2f6bdf53a6"],["categories/总结/index.html","92b0f756039838d935b9bfffebc078c2"],["categories/文化课/index.html","6fd035655425bc772bb113acd3da7f94"],["categories/穿透世界边缘的呐喊/index.html","49988d06cc24fce455f2d83063c49668"],["categories/算法浅解/index.html","c286e06eb97c955d4ae34075e4a62f0f"],["categories/随笔/index.html","c98bdf602f78a9f229e83006d3583478"],["comments/index.html","bd58154b1349ae4d31d18e15ae25bddf"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","7a05a7a0bdb8ec6520ed8240b6d22615"],["exgcd/index.html","3b74a915a8a2bcb3741b6616c259cfa8"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","bf8ce88e89746d6c1c51d6821a5990d0"],["gallery/index.html","4285772b8440d9a04665207cd2125021"],["graph-in-math/index.html","9378de6a997d028c05e9f4e160001d42"],["hello-encrypted/index.html","ff985f06cb28f3ebc92c0c8d63f987d0"],["hello-world/index.html","69d9e79348a4449ce4b81f70d4bd39ac"],["how-to-recite-log-inq/index.html","155b48be177a963ad54f010aa1182d7b"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","22dd224db60750ac431d5c55f9e31cbc"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","79a35208f6299bba0be2c81174b25bd6"],["juruo-poem/index.html","ffb05312d53bd450593acee8010b6353"],["kmp/index.html","379a1a8f1ac5d71e3a4ba0d866f068ea"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","6dc90a1ce21bc61eab5b3851e4a21a9c"],["my-math-problems/index.html","d59bc7da18fc6658ffc1e256ae3655b2"],["noip-2018-outline/index.html","a6e6acf37ce7355981dff8d25e74f126"],["offline-algorithm/index.html","fdd6f475cf7323628c0d7e2123be3161"],["page/2/index.html","b6f0e7ee2ad962fffd6eba42936164c3"],["page/3/index.html","572b458ff79db1df7f46ab935e891b28"],["page/4/index.html","4c87de6f80ae96bd19dfcec3496b7b67"],["random.html","0f90430586274a91f73976a0adf44793"],["retirement-speech/index.html","78586c64f32dc043f70a590cf0b84471"],["s-and-d-on-a-tree/index.html","606ea3b0d610e0c114c494db52157256"],["search/index.html","034ead8cdc78472db0887b990b4d9fd6"],["tags/KMP/index.html","d18b9093a37f2b59e1b263709074ec92"],["tags/THUWC/index.html","cd03a6150423cbf3965482f79734f527"],["tags/floyd/index.html","b5f7ddba906e7daa66eea33230fffed0"],["tags/gcd/index.html","dbac0d81c7df55f089113f79d8808cc8"],["tags/index.html","7c3345aced36a999d533f47b6181519a"],["tags/世界间绪论/index.html","37a45c8f0e3140dd635dc28c366851d8"],["tags/世界间评论/index.html","97f7312ba565de42f39752f76e5d9709"],["tags/二分图/index.html","30c1d4b2a22af49ca2a3c8a37e780914"],["tags/你的名字/index.html","a076c61482893600155ba3571289f4ad"],["tags/函数/index.html","6b5fbe0889e1747eddf6646eab886130"],["tags/前缀和/index.html","9a794a014e37d3db37f50160c52388e4"],["tags/动态规划/index.html","8e9c5c2e5849b426842eb94152222fc3"],["tags/单词/index.html","7144afd55e89c60b4eefae2c7f23e21f"],["tags/单调队列/index.html","bcf69afa837666373566ad1ee282076f"],["tags/后缀数组/index.html","02d8c62bd8049288e5e7e4f50f870761"],["tags/图论/index.html","a2b78fff67169de281d07c17d24c7ce7"],["tags/大纲/index.html","d11af3907c0dae34fdb5dc7542ced17c"],["tags/奇闻/index.html","eca51f8bff4c9a2c35f949e85d8dcb82"],["tags/字符串/index.html","2f42f9cda3c557590ab46c9fc4babf14"],["tags/差分/index.html","55a14bb53ad75d67a1c1addd88db3488"],["tags/并查集/index.html","b231dc55c2481e1fe63edb65ceee3c20"],["tags/总结/index.html","6352a48fe28a781fb1905ff2cbe673cc"],["tags/排序/index.html","948c48e97710e0ff74a248ada8fb7f17"],["tags/搜索/index.html","0895956bf02bd44c074bf24a5278e396"],["tags/数学/index.html","c06f7ec09efa7d052850fb6e633ca17a"],["tags/数据结构/index.html","135fd6068502ec1ff1c296c2b26968ec"],["tags/文化课/index.html","2208afa5964dcc380f9aeeafd8b29baa"],["tags/树/index.html","1cfd5344ff33a6d6bc05e8e7705afa89"],["tags/离线/index.html","83f1be2a12e15bcf66b252c6c0c051c2"],["tags/笔记/index.html","8f525961b8b207cc99fb744514f2e714"],["tags/算法浅解/index.html","46edeb2a4fe6f9bac9c0265ddb3e99ae"],["tags/紫罗兰永恒花园/index.html","e27c9a21027355647bdc31468ffd32b7"],["tags/英语/index.html","ab51d5806ba596b36f456023736254a5"],["tags/蒟蒻/index.html","018cc61715e3342e36c9fb5c838ccc8a"],["tags/贪心/index.html","323eddfa834d97853a76c75a0597bb2a"],["tags/退役/index.html","3181de3710a305b23d0315b9cb0db7a4"],["tags/随笔/index.html","9e9330796f8af166eb268026871d5e6c"],["transitive-closure/index.html","c4e3e85099a088cce07aa17d29975534"],["useful-links/index.html","30d660911b4bbe943e58274c724e1ac5"],["violet-evergarden-review/index.html","c4ed15552a68ac96d8db33bbf9512599"],["you-are-more-important/index.html","ccc008757ea03a1fb70f17c2a4192a06"],["your-name-review/index.html","4cfb14b22156caa652037f77d9579eaf"]];
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







