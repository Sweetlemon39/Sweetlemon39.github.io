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

var precacheConfig = [["404.html","bce9616ce705a5879d7f0709ffec138d"],["CSP2019-graph/index.html","748fe1e2235cb69081b343d8d7c97954"],["CSP2019-greedy-and-dp/index.html","8c89170abb6da3d08316e87a06e4ac0f"],["CSP2019-math/index.html","f23c945e597b0fd902ad797e978e431e"],["CSP2019-search-and-ds/index.html","703d8bed3ad7e58547fd99ca918a58ef"],["CSP2019-string-and-tree/index.html","0c009406a9ac302ac378de5143e2fa93"],["English-7-words/index.html","62ef25af1f1867d392cb678629ea2df9"],["English-8-words/index.html","e56afb7b6cf9b4e16208bce62829fb9a"],["GXOI-2020/index.html","cf16bc08865b8c18d3b09711feebd43f"],["NOIP2018-day1/index.html","ecde48617668698a5c1e468bf4025800"],["NOIP2018-day2/index.html","4ac372f09177ada74fd52416e53bf872"],["NOIP2018-day3/index.html","daac6684a282e6f5d4b16cb22c3c5ddd"],["NOIP2018-day4/index.html","7aaf27adcb76550ef3e4b00936d0a503"],["NOIP2018-day5/index.html","94d73bc56830adcabd01c8b37387864f"],["THUWC-2020/index.html","2da22f1b63fe9d35cdc6a097160f39f5"],["about/index.html","0a22ab9b2d71e2c32ae559bfdca9191e"],["adventure-record/index.html","c630c39b33bfc73beb83f6ef57f95451"],["archives/2017/02/index.html","5e0d5d80cbae49d840c685c6984cf02a"],["archives/2017/index.html","63b396c93de11b66a136890aaa8c000a"],["archives/2018/01/index.html","d5dfa813d8bf62addd67a9bd4e5e4ecb"],["archives/2018/04/index.html","07239159ac46c7b827ef4ec64072d870"],["archives/2018/07/index.html","02395b154903da16edf8c6f629518a64"],["archives/2018/08/index.html","1ca8eb22724ba2bac1130d07672d4e4c"],["archives/2018/10/index.html","385176001eaec3b9aaba52ca5d1c0f2d"],["archives/2018/11/index.html","3093f7d540f416975e82eb6622aeafe6"],["archives/2018/index.html","53625ceddeb12922523bfeb5b2dde24d"],["archives/2018/page/2/index.html","3e33db2b88409d866f4d1b5d932a9e74"],["archives/2019/02/index.html","5fd037498b7c019c2ab36464fc94aab8"],["archives/2019/04/index.html","19a415726e9e9ba9fd9aefca9b315135"],["archives/2019/06/index.html","69a140325355a4a84cd2d04f4f302e9a"],["archives/2019/11/index.html","75f0a6dcec07f782e44d1e675bfb2153"],["archives/2019/12/index.html","a83c46de81140410a59f0b975c728cbb"],["archives/2019/index.html","be0f4130b257d8f67e541119fbf4f1bf"],["archives/2019/page/2/index.html","b3b96327274370b073c00eb9674e3411"],["archives/2020/03/index.html","9d1b9f40639692ec5bb98edd0cb949fb"],["archives/2020/04/index.html","5fac8419002f730c86885ca19af5dfbb"],["archives/2020/06/index.html","b926f5b1e15fb523f472e0e0ba9cc488"],["archives/2020/index.html","6a8044458b33e76aa2c99866b6e2d21f"],["archives/2024/09/index.html","39418217b0b125d6a0213eeccf826f33"],["archives/2024/index.html","abd9b31c69207d11132414c407a1e753"],["archives/index.html","e9c56dff98d0beb9f467d8665f62b7f5"],["archives/page/2/index.html","e9c56dff98d0beb9f467d8665f62b7f5"],["archives/page/3/index.html","e9c56dff98d0beb9f467d8665f62b7f5"],["archives/page/4/index.html","e9c56dff98d0beb9f467d8665f62b7f5"],["bipartite-graph/index.html","73b1beb1285345d4fe4dbd165b3ca6e3"],["bucket-radix-suffix-sort/index.html","1c3f7f8afa0269f59eb602e51e87a3a2"],["categories/index.html","71d78acbadfae370ac5f895a1c0c8526"],["categories/即时笔记/index.html","6cebfcc2ff128dcaef5f4c634b9c9100"],["categories/总结/index.html","c5aee9c65c2042c61046cf2ac7a2bd17"],["categories/文化课/index.html","f7e54a6e9b7c27844f1d7aa240849bb1"],["categories/穿透世界边缘的呐喊/index.html","4ae0a41b4140cd052a84805a9fc24895"],["categories/算法浅解/index.html","d31144c25bfef50651af9c659e414624"],["categories/随笔/index.html","7bbfee7de7239339644490fd865b9b1e"],["comments/index.html","5aaa442e4b50ba86df7c1451315645f0"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","155930b565ccbec54aa78ccf3fa9a6b3"],["exgcd/index.html","96e3e24d8fd8c3a27d83c0aa3c70b635"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","604bf8cb2c28538bf5a175ec80cf4dbf"],["gallery/index.html","7bbe2e0a50fa4c920e8b5aac41dee16d"],["graph-in-math/index.html","b751d5adece81b342ed94561e04999f6"],["hello-world/index.html","12a9b52cea8c1e3d4c8bf2b5bfad8eb7"],["how-to-recite-log-inq/index.html","e1a492fb826e42659efa51e433184863"],["img/algolia.svg","57c1a85312b6545c3d0ee2b21eece237"],["img/azure.svg","2204ef54a6f887e66b01aae7742db1a4"],["img/baidu.svg","4d32bf9d965ef7355ef3d1fdcd610890"],["index.html","02df5d3d9df694b218c717ecd824dc13"],["js/app.js","800903c880d8773bbc076ffefa81fa8f"],["js/search.js","daeb375c2106465fc79da51002d3244f"],["js/valine.js","c4bc113721f3eb087aa2ded319e40fba"],["juruo-poem/index.html","1d72848fe87d6f502d6e2080127c75e1"],["kmp/index.html","0c7388859bc207742dd1cf4f66a5f38c"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","d7ca49d8d0bd51f3da56c89daa1600c3"],["my-math-problems/index.html","aa822931bd95fd200ec134a4e5c3d7a2"],["noip-2018-outline/index.html","ebd8c576e688dbbc6bf0dfe5f0ea10ab"],["offline-algorithm/index.html","42a91ae59ea508781ea04f648df03e52"],["page/2/index.html","34befee61ec7378de686f54cdba11a71"],["page/3/index.html","844e1aa66297974538a8e4ba96656f87"],["page/4/index.html","db3278ab0382a23621d1230fb98f9dc5"],["random.html","e19c0cbffa5ea8b79a31ea901b7b1333"],["retirement-speech/index.html","ce1545d85659a8520393f9287acfb5dc"],["s-and-d-on-a-tree/index.html","aff0d0cb9492dccc299101efa00e71bb"],["search/index.html","9d35e1a4eaf4f94309db5f9d37b2710d"],["tags/GXOI/index.html","184e373a0cb94c76c5f373c3bac2830f"],["tags/KMP/index.html","cddd7e24fddcd08889cd89f9410b426f"],["tags/THUWC/index.html","ee05d1713084326de54ee1a2c95cab4f"],["tags/floyd/index.html","6ac7408313aa3bb652bb7adcac3e8c2d"],["tags/gcd/index.html","de5c2a3316583bfcbc5c2c0ebc60c64c"],["tags/index.html","2371e4ad9c858f4da2efada27d1016c2"],["tags/世界间绪论/index.html","209d93af108aaaa0750f60682fb2a0f6"],["tags/世界间评论/index.html","4046ce7837db8971785231b2c827838b"],["tags/二分图/index.html","236c5fd38f978f3f4b4977eb3202c660"],["tags/你的名字/index.html","b0a90296d31ac57ee0ad20def0a2b73a"],["tags/函数/index.html","97c3a6811fec2607940654b4b34d18de"],["tags/前缀和/index.html","d08811a49859de636ccce7695e273d42"],["tags/动态规划/index.html","3ce5a493c3e8c89954bc1e2d89a879a6"],["tags/单词/index.html","da2043590eacabbc8bd40903ab576155"],["tags/单调队列/index.html","f0db8e1454121634fcef9d80d7de37d1"],["tags/后缀数组/index.html","12d57db27ea61c50f373e03f743e40a9"],["tags/图论/index.html","98998de6b315712cc63d4fcf56ffbe76"],["tags/大纲/index.html","bf5101e03fa6a58bdf41f654460d8a60"],["tags/奇闻/index.html","f91ffb720bfbd5b96d6090d6b2193455"],["tags/字符串/index.html","9259a9d1c9fe9d699802a6d7839e7158"],["tags/差分/index.html","3722ba4582aa28f183d98cde1d207a6b"],["tags/排序/index.html","272d7b5bce1a3eee83807026475a2284"],["tags/搜索/index.html","055c3d24dc53f9f625b77156c224099a"],["tags/数学/index.html","cd8b723f2875fb48071eb224027b0f93"],["tags/数据结构/index.html","de21e94c4064e3a7d9e0b196582ae505"],["tags/文化课/index.html","443126287d80a999217bb00cb7cd4ee6"],["tags/树/index.html","ed819ae3e149a9dac2a2fae647345f6c"],["tags/离线/index.html","2ea3e5fdb005849749899f9235974c74"],["tags/笔记/index.html","74374d555d017a6624b8eb096c0f0714"],["tags/算法浅解/index.html","a4c53c3b033cfbba433e89e0315408e2"],["tags/紫罗兰永恒花园/index.html","3e60b1b3667510f6e033af2a7fd6f9c4"],["tags/英语/index.html","697c3f16e0b468d45e136fc06a37d95f"],["tags/蒟蒻/index.html","105d1d70a3d9ba76d95efe71a2de8761"],["tags/贪心/index.html","2aa0b99a83f5b78fe325c3243b47024d"],["tags/退役/index.html","daff2468cf8cdc8499a3550461741d06"],["tags/随笔/index.html","1a32b37c369d2a67bf5c41aadc5f6dce"],["transitive-closure/index.html","f9bcadcdb02053cbebf0bd839ced1568"],["useful-links/index.html","8c63c9948f9f2a0186d14b24fd80ae5e"],["violet-evergarden-review/index.html","3b212c1f8d8a8c7cd3443595461ed678"],["you-are-more-important/index.html","5664c83e49efbd70e43fc9cdf5e4687e"],["your-name-review/index.html","4cc83caa78ca612a53946dd14e556a2b"]];
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







