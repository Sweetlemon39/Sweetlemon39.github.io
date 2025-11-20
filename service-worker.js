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

var precacheConfig = [["404.html","bce9616ce705a5879d7f0709ffec138d"],["CSP2019-graph/index.html","7b192ebc7363aca2a67ed22f6a552aaf"],["CSP2019-greedy-and-dp/index.html","c97ac039b526efe37a252a6fd223d5d8"],["CSP2019-math/index.html","d2445dadf5a4806c60a7a814cfaed117"],["CSP2019-search-and-ds/index.html","798750f9aee14622f08d555e7cdd34af"],["CSP2019-string-and-tree/index.html","d76c45c6d68658dd4145d99278484a61"],["English-7-words/index.html","4c9f8b71feb431784911cba8531fb20c"],["English-8-words/index.html","e32c890a4e42ca2e007b7526eb07b1ad"],["GXOI-2020/index.html","eff082931060b3c8c3c1709d6b2cbc1b"],["NOIP2018-day1/index.html","17e96be42cb132fca08727e6c83481b7"],["NOIP2018-day2/index.html","1a264d32e5f799c67e41bfb14f3bb329"],["NOIP2018-day3/index.html","5f8a3e0ff66cb77c27bef78f59425d85"],["NOIP2018-day4/index.html","6688bdbe47248ec096c5257334c419f6"],["NOIP2018-day5/index.html","6efdf42569b973b29ef431b771b6fba9"],["THUWC-2020/index.html","eb12e40acc99375df4d138a01cfe62fd"],["about/index.html","0a22ab9b2d71e2c32ae559bfdca9191e"],["adventure-record/index.html","c630c39b33bfc73beb83f6ef57f95451"],["archives/2017/02/index.html","5e0d5d80cbae49d840c685c6984cf02a"],["archives/2017/index.html","63b396c93de11b66a136890aaa8c000a"],["archives/2018/01/index.html","d5dfa813d8bf62addd67a9bd4e5e4ecb"],["archives/2018/04/index.html","07239159ac46c7b827ef4ec64072d870"],["archives/2018/07/index.html","02395b154903da16edf8c6f629518a64"],["archives/2018/08/index.html","cf64fe17cf89f1bc8c846ff98795965c"],["archives/2018/10/index.html","faee0339ff52f392c46623a794645fac"],["archives/2018/11/index.html","3093f7d540f416975e82eb6622aeafe6"],["archives/2018/index.html","15d9abc552bbb8a8821fcbe2ca066ba6"],["archives/2018/page/2/index.html","d4d35c52de63ea92d31711ed0eedc74a"],["archives/2019/02/index.html","ad500e435c1ff179f3cc6563c3a4a370"],["archives/2019/04/index.html","19a415726e9e9ba9fd9aefca9b315135"],["archives/2019/06/index.html","69a140325355a4a84cd2d04f4f302e9a"],["archives/2019/11/index.html","f1ac21304c91c1b3dc93889cb51dec29"],["archives/2019/12/index.html","a83c46de81140410a59f0b975c728cbb"],["archives/2019/index.html","d5aef5fa6157125ee6c4fba04539612d"],["archives/2019/page/2/index.html","13edc3977248886654d6eb6bc16f187a"],["archives/2020/03/index.html","9d1b9f40639692ec5bb98edd0cb949fb"],["archives/2020/04/index.html","5fac8419002f730c86885ca19af5dfbb"],["archives/2020/06/index.html","946043b5ba37388bc2ec5f102f9523b5"],["archives/2020/index.html","a5e761ed2af11d64825595c2ae1fe23d"],["archives/2025/11/index.html","7b018f9b9e80bbe3af11df7f0b970f5a"],["archives/2025/index.html","34818b1a71cbe7b7ef48cc9446a05dd3"],["archives/index.html","c282f5afaa760026d75ba611372f6e08"],["archives/page/2/index.html","c282f5afaa760026d75ba611372f6e08"],["archives/page/3/index.html","c282f5afaa760026d75ba611372f6e08"],["archives/page/4/index.html","c282f5afaa760026d75ba611372f6e08"],["bipartite-graph/index.html","7a86d6861030c976370039b4322fb1e0"],["bucket-radix-suffix-sort/index.html","e455f83dd0e63a3af6d2ed09ce4f5183"],["categories/index.html","71d78acbadfae370ac5f895a1c0c8526"],["categories/即时笔记/index.html","7a677aacb01a9ef4fd8143c8dc481dc0"],["categories/总结/index.html","2559a76432277312649381024f2f176a"],["categories/文化课/index.html","f7e54a6e9b7c27844f1d7aa240849bb1"],["categories/穿透世界边缘的呐喊/index.html","d70cd6fbcd89a859bd5b75d6166c0e96"],["categories/算法浅解/index.html","ffc27ce2fae89d8c2b65c4c3a48a6a61"],["categories/随笔/index.html","99bc739a31389074d913932409a05ae3"],["comments/index.html","5aaa442e4b50ba86df7c1451315645f0"],["css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["css/style.css","155930b565ccbec54aa78ccf3fa9a6b3"],["exgcd/index.html","cdb7d5a9b90c5263d9f5ac125d42a5d1"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","f54899b6b33f8eb6b229571f5526df1e"],["gallery/index.html","7bbe2e0a50fa4c920e8b5aac41dee16d"],["graph-in-math/index.html","c55e22a2b2f77eed4ed88fe904bc55a6"],["hello-world/index.html","57745b2b8745734caa99c03293d8cec2"],["how-to-recite-log-inq/index.html","b7d96952b6b216c7316840f1f5247fb7"],["img/algolia.svg","57c1a85312b6545c3d0ee2b21eece237"],["img/azure.svg","2204ef54a6f887e66b01aae7742db1a4"],["img/baidu.svg","4d32bf9d965ef7355ef3d1fdcd610890"],["index.html","2c0b76107ccf3b4a5a8246de1fbd57b5"],["js/app.js","800903c880d8773bbc076ffefa81fa8f"],["js/search.js","daeb375c2106465fc79da51002d3244f"],["js/valine.js","c4bc113721f3eb087aa2ded319e40fba"],["juruo-poem/index.html","1d72848fe87d6f502d6e2080127c75e1"],["kmp/index.html","8f82bb43351354b12c445d1dedd230fd"],["lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","95a42703cb1a43fa7c9899e16d60e9e1"],["my-math-problems/index.html","6879528a5ec95d4f5135e738b45eec0a"],["noip-2018-outline/index.html","f60320cc1378c84a47c8c84ef8906cf5"],["offline-algorithm/index.html","fd04dfa8bc13f3d979572a7d6a34b148"],["page/2/index.html","307f95f8bc2722d36f5ad8f166917957"],["page/3/index.html","84a0a2fd71c62815dc0422e879a39177"],["page/4/index.html","db3278ab0382a23621d1230fb98f9dc5"],["random.html","3f1930d0a5add577a4874b46b1b751fd"],["retirement-speech/index.html","ce1545d85659a8520393f9287acfb5dc"],["s-and-d-on-a-tree/index.html","98ebdae100ee1c07e5b6d198c1107165"],["search/index.html","9d35e1a4eaf4f94309db5f9d37b2710d"],["tags/GXOI/index.html","1a1b1ff92b16447f9e5ab7b9af230385"],["tags/KMP/index.html","87063c171e7523760441a31859a7383a"],["tags/THUWC/index.html","ee05d1713084326de54ee1a2c95cab4f"],["tags/floyd/index.html","a01a82fdbe618acdc95b6f139bc8c8d7"],["tags/gcd/index.html","e2057c2410f2d30f2b3c0f73dae6d9aa"],["tags/index.html","2371e4ad9c858f4da2efada27d1016c2"],["tags/世界间绪论/index.html","209d93af108aaaa0750f60682fb2a0f6"],["tags/世界间评论/index.html","dbf029b1bc133fea6509e4b2246006f6"],["tags/二分图/index.html","74dac784b973cd5b603a9eb36e195099"],["tags/你的名字/index.html","b0a90296d31ac57ee0ad20def0a2b73a"],["tags/函数/index.html","97c3a6811fec2607940654b4b34d18de"],["tags/前缀和/index.html","d08811a49859de636ccce7695e273d42"],["tags/动态规划/index.html","3ce5a493c3e8c89954bc1e2d89a879a6"],["tags/单词/index.html","da2043590eacabbc8bd40903ab576155"],["tags/单调队列/index.html","f0db8e1454121634fcef9d80d7de37d1"],["tags/后缀数组/index.html","12d57db27ea61c50f373e03f743e40a9"],["tags/图论/index.html","ca9779b406489a40e99d3a2c2003920f"],["tags/大纲/index.html","bf5101e03fa6a58bdf41f654460d8a60"],["tags/奇闻/index.html","f91ffb720bfbd5b96d6090d6b2193455"],["tags/字符串/index.html","99d8893f61420734a975410f8252a1a7"],["tags/差分/index.html","3722ba4582aa28f183d98cde1d207a6b"],["tags/排序/index.html","272d7b5bce1a3eee83807026475a2284"],["tags/搜索/index.html","055c3d24dc53f9f625b77156c224099a"],["tags/数学/index.html","885e2149cb7302bd4874cd9c7fd20979"],["tags/数据结构/index.html","de21e94c4064e3a7d9e0b196582ae505"],["tags/文化课/index.html","443126287d80a999217bb00cb7cd4ee6"],["tags/树/index.html","ed819ae3e149a9dac2a2fae647345f6c"],["tags/离线/index.html","2ea3e5fdb005849749899f9235974c74"],["tags/笔记/index.html","e80b999acce9d0bd802fd7392bd6db8b"],["tags/算法浅解/index.html","223c3697c6465ca56c44ccb13aaf722c"],["tags/紫罗兰永恒花园/index.html","ab2745d9cb1bb3ee1b2362f69cb80b70"],["tags/英语/index.html","697c3f16e0b468d45e136fc06a37d95f"],["tags/蒟蒻/index.html","105d1d70a3d9ba76d95efe71a2de8761"],["tags/贪心/index.html","2aa0b99a83f5b78fe325c3243b47024d"],["tags/退役/index.html","daff2468cf8cdc8499a3550461741d06"],["tags/随笔/index.html","7c1c88f5d48eee979975e03fc877236c"],["transitive-closure/index.html","9c935f7bb8e5c2ad106a890e5fd18d77"],["useful-links/index.html","8c63c9948f9f2a0186d14b24fd80ae5e"],["violet-evergarden-review/index.html","11270a41f2e98d7efba3288e9392472f"],["you-are-more-important/index.html","5664c83e49efbd70e43fc9cdf5e4687e"],["your-name-review/index.html","4cc83caa78ca612a53946dd14e556a2b"]];
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







