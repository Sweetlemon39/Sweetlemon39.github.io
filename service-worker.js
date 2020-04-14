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

var precacheConfig = [["404.html","577969af1284e6a4a9b22d5e61b15efe"],["CSP2019-graph/index.html","da03e7caa389e67a6e5154ce236452b7"],["CSP2019-greedy-and-dp/index.html","be26f71ada36e922818bd044ddc25452"],["CSP2019-math/index.html","c68f00b16ecbd00977868be278a08193"],["CSP2019-search-and-ds/index.html","3a8e2218750c073a23757202e81b93bc"],["CSP2019-string-and-tree/index.html","8658de61cf1523931e81e96ce651716a"],["English-7-words/index.html","726861141e68ab1993ef5a38572b00ee"],["English-8-words/index.html","93e8aa628c145a32db5043ed313edc06"],["NOI-Online-summary/index.html","a4e719d724e742dce2a5a2c252e05533"],["NOIP2018-day1/index.html","8ce01ce12a341ab805e1eea7096c8145"],["NOIP2018-day2/index.html","7fc25e05b37b64de3ce23b5ae298491e"],["NOIP2018-day3/index.html","7158779308c1d27000b5ac45e0c650c8"],["NOIP2018-day4/index.html","2b08774b2f458e7ea3edbb6c847b6361"],["NOIP2018-day5/index.html","a54e97e701ee1853ef7bb40337392d5e"],["THUWC-2020/index.html","adee29d1063b70baaec499bdae6eb64a"],["about/index.html","4a59007d18c03e53d453a38e96e94249"],["adventure-record/index.html","d880ef1ec1035e9a638ca0149879b806"],["archives/2017/02/index.html","db88ade47b3d0df1282489dfcc41f4fa"],["archives/2017/index.html","fc36dcc7f4d9a9f7a9d95386533a77a0"],["archives/2018/01/index.html","62a79aac32535a457cef6ea89d0a1d18"],["archives/2018/04/index.html","81a2784fbb3d1ca2a49d9f314738fdf9"],["archives/2018/07/index.html","200907c3fcfcdabc0c46d69bc50343f9"],["archives/2018/08/index.html","98128604a03c689570059ba3e1631354"],["archives/2018/10/index.html","5d13909d20e8ac0d130aa40d50a710d3"],["archives/2018/11/index.html","fdad83f2af6346c25df1688404524e38"],["archives/2018/index.html","9bf9cfef06574de8eb1a57c4e74549c4"],["archives/2018/page/2/index.html","1563dc8ce04191673a9bd08c14c6e6f6"],["archives/2019/02/index.html","194b157204185ea04f571e620a84cb10"],["archives/2019/04/index.html","961273910ca9602e41d958187541d740"],["archives/2019/06/index.html","54287d6da9fceb196e4010a8ce1f1328"],["archives/2019/11/index.html","d803c709e8d0f6ad269caef5d9155dfa"],["archives/2019/12/index.html","b82aedbc4135d84309e8fb3271478f7e"],["archives/2019/index.html","a01a60bd6836e9ecef6740b2a0311f1f"],["archives/2019/page/2/index.html","afbee0bc16a1f70827cee9964d0bd166"],["archives/2020/03/index.html","9960ea7acc149182595f77967fa80ad6"],["archives/2020/04/index.html","fe794fd844511f89c93b182cab8abf71"],["archives/2020/index.html","2595ca1a010a7c38bbedd2c413ff90fa"],["archives/index.html","0aed64bbc13247f37fdb1fd3d6a00546"],["archives/page/2/index.html","9bb684b01035417388fa5a0f9362002c"],["archives/page/3/index.html","9bb684b01035417388fa5a0f9362002c"],["archives/page/4/index.html","9bb684b01035417388fa5a0f9362002c"],["bipartite-graph/index.html","855760b8dc3faa4aab4e5722905428e2"],["bucket-radix-suffix-sort/index.html","f930fa56c0c3a892d2a8e72f13e9c199"],["categories/index.html","ea3b94be98290c1da751ca8fb023b40f"],["categories/即时笔记/index.html","bb07e22d7102866d01816ae6238cd1e9"],["categories/总结/index.html","a74f9769cb36e9817713967f93930c36"],["categories/文化课/index.html","fcafe0885b7af1d4006a6984700526bb"],["categories/穿透世界边缘的呐喊/index.html","e43c4bc9cf9b12881052966a4647054c"],["categories/算法浅解/index.html","c446d3d32c20ad7ea67fc5cb975b95c4"],["categories/随笔/index.html","b7c84556ab77ab486b6b07f4706ca728"],["comments/index.html","71578f782dfac1b52e12a263098b371d"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","18cac06e56afeb508392c5dbfd6586e1"],["exgcd/index.html","08c1a6a66f381cfda2dd037be238d0c1"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","56d2b91331c7c10b0aeec3da2a61812b"],["gallery/index.html","57cfb006d748377da3d3e7e7cd6b849c"],["graph-in-math/index.html","312e5e51e178ffa143a1fb6a58355f04"],["hello-encrypted/index.html","e3bc18d1399522748818f975f14e0a1e"],["hello-world/index.html","f5b348038b08786195196c3ed8513e0c"],["how-to-recite-log-inq/index.html","c120cced8daab2bd3792d758b1028929"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","9c79acf593707b020bc5137d669841ea"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","8980c82c259bc710fbd5fd8f6ce0bec5"],["juruo-poem/index.html","cb448bced056cb7639e6a734ef102f14"],["kmp/index.html","8f143813f8ecca2a6c0e40925d4032e2"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","72095c9fd09ebb6ad01f5bce72c9cadd"],["my-math-problems/index.html","d1cb9546229d39c97c1a45ba728cc6ed"],["noip-2018-outline/index.html","0bf94b3fc8e8d090053230b6ae874f89"],["offline-algorithm/index.html","70932fc9f19e9b3f37c5d7d31646179e"],["page/2/index.html","0faae7bf543d547c842118f36a98feec"],["page/3/index.html","78eb19a9f25b3b7b325190c987bfa34c"],["page/4/index.html","0b274fbe2b858486f5a9d73586119ca1"],["random.html","c04bb0ac7f168f01c4dc2014bbec9aa7"],["retirement-speech/index.html","ccdf9f15dd23ee546ebe2159480f462c"],["s-and-d-on-a-tree/index.html","0086fab768f4ecb9c9ce7cb047c615f1"],["search/index.html","139ad128e88cc969f8fa365ddfa48f9a"],["tags/KMP/index.html","59b45f1ab4e951aa447ef03a657ba3a1"],["tags/THUWC/index.html","758ef58890db71823ed7d00391dcae75"],["tags/floyd/index.html","2c2d8085ec7bf739007fe7691d6bf0b6"],["tags/gcd/index.html","84c15034464a140fb586bd7840e0d6e3"],["tags/index.html","25675f4204de4ebaeb509423081bc2f2"],["tags/世界间绪论/index.html","ac284cc84915bee2e4241500eb94bb0f"],["tags/世界间评论/index.html","7044c0daeb5fd61143177e0084fa659d"],["tags/二分图/index.html","96b7f4f2d8f531b1bba1a66265aa9d26"],["tags/你的名字/index.html","1740fa3f23db1587edcd40ab9d74cbcd"],["tags/函数/index.html","d07c0f5330c35ed857c3a4595e41cb2f"],["tags/前缀和/index.html","c8aa744bbbf1afa24163081303ec1396"],["tags/动态规划/index.html","7388bbe1d1df477c924120c7c5313bc1"],["tags/单词/index.html","23f520811cc9fdc562aadad79456430e"],["tags/单调队列/index.html","83997fb38234f347d6ac96216a9fec50"],["tags/后缀数组/index.html","ca17e98a2939387e81581ecf790704cd"],["tags/图论/index.html","926551a59193b4a3ed4fe3748d1990ee"],["tags/大纲/index.html","5cf0fe7b9bfcbf0215cef8d9ef1ae11a"],["tags/奇闻/index.html","3f13761272580ce607f1d1a1751b0138"],["tags/字符串/index.html","66b694be84df68808e573e8222e0b511"],["tags/差分/index.html","92dc5ba5122bccd701dfcf5284651f7a"],["tags/并查集/index.html","f0a9e4ce7680bcbe184db7e8777ddcca"],["tags/总结/index.html","a855d23c43798484fbaf0ff64131a01a"],["tags/排序/index.html","9844e5e18a23bc6a36bce7f34398ead6"],["tags/搜索/index.html","868e3474ca637664325b6f620c3f4880"],["tags/数学/index.html","5b46f5b5f69d9891ba96fcc3895136f8"],["tags/数据结构/index.html","15c71a12a320d18e03b648bdf7d97b65"],["tags/文化课/index.html","3cb2d83fd31a435d54a3ff4ae5dc939a"],["tags/树/index.html","83fe47aa130efdc4bdab91df8768bb74"],["tags/离线/index.html","e4fe39381483be2c059f1ab3300e3c34"],["tags/笔记/index.html","e709e813be3f9bbca7bbd37505898b61"],["tags/算法浅解/index.html","ccbadbb3ed1e81ac42706281a1fd9513"],["tags/紫罗兰永恒花园/index.html","c63cab265f5fa947fa5144061928277b"],["tags/英语/index.html","73a7c46557ecde225a3caede43816b66"],["tags/蒟蒻/index.html","e5adab9c4066c696e2466dc6177b9275"],["tags/贪心/index.html","0668098721186c49df2c9d8eb6a9e934"],["tags/退役/index.html","03863f6f4d4975a255d158671d64048c"],["tags/随笔/index.html","55fd8b8af7a612fdc818e4eef61da135"],["transitive-closure/index.html","9337a41a280354815d8b7642e8a00dfe"],["useful-links/index.html","d1b1b2dcea359e9b7c20ee82c337b256"],["violet-evergarden-review/index.html","cbe8963af44facaeec9b7406a739260f"],["you-are-more-important/index.html","f609a8264186f09c35982288194bc7e8"],["your-name-review/index.html","b69c01ee11d9efe9049e00f8a835676b"]];
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







