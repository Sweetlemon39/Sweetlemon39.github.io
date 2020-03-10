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

var precacheConfig = [["404.html","0a7cb50920f4789d891087a0f832c9ba"],["CSP2019-graph/index.html","9ac88eb51ad89b5322fc0d2fcbce62a7"],["CSP2019-greedy-and-dp/index.html","9f0a6e27d2009af8024571d0758cbe4b"],["CSP2019-math/index.html","81e9e1f0a095bfe7721fc1a9c0c65e29"],["CSP2019-search-and-ds/index.html","a50559a6e76d122e64fbcb3061eac9e6"],["CSP2019-string-and-tree/index.html","6b52b137459af05f4b2093eba69b1b86"],["NOI-Online-summary/index.html","38eb402bb58d28571096b0c310bec428"],["NOIP2018-day1/index.html","5f20027d39e646d219bbde7f0fdb9c56"],["NOIP2018-day2/index.html","b7b38abcdccd457870eb7d4431c08a87"],["NOIP2018-day3/index.html","91ed765f5b49c1d5c08b6b83650f0c54"],["NOIP2018-day4/index.html","ddf5dae7d2e6d11d1b0a4eaddb14a08a"],["NOIP2018-day5/index.html","79a6801ea383c9fc31eb0b8203abe83e"],["THUWC-2020/index.html","29b4be25ab5079e3b995c07f41496c0a"],["about/index.html","5e7c94fba1a3401e59e4a9686a7d8ecf"],["adventure-record/index.html","d2f5f5bb8a18401f3e2aac02584ff231"],["archives/2017/02/index.html","f064cf5a1c7fea140cfae162f5b51669"],["archives/2017/index.html","5580a7c67356e0f6f325394bb1a0ee69"],["archives/2018/01/index.html","0a671fcd8d0d6fc69c95cf81935b0a2d"],["archives/2018/04/index.html","0423fda98c218e8aee12e4332ba20b8b"],["archives/2018/07/index.html","2ea59055eb6ba461e0ccd71c72f783d6"],["archives/2018/08/index.html","edd2794c84930dfc0bbbb53c331f72f4"],["archives/2018/10/index.html","d91f09e94492e4003da6e8f801cbded5"],["archives/2018/11/index.html","890f0e56c3286818437230348edef2cb"],["archives/2018/index.html","9367ec5db76a36e228ff7402c30bdce6"],["archives/2018/page/2/index.html","8bc651d99a4b5aa9d4df69baf6b03f91"],["archives/2019/02/index.html","4a28c7672c931684b11863b72d1d44c2"],["archives/2019/04/index.html","17e6d74b3ae2b56747704bd6b0695686"],["archives/2019/06/index.html","1a17aca7ea330a4c304fbe686b320430"],["archives/2019/11/index.html","71c9ba41556e90354a06e3de7d94ccfa"],["archives/2019/12/index.html","b7af26792213ed6ef42bde526746056a"],["archives/2019/index.html","91c35607dca8e9c7a7553d27b2fcac72"],["archives/2019/page/2/index.html","dd4999149b32a02865928c675cd7eb4a"],["archives/2020/03/index.html","2891adba9dd8e1edc74fee5f567e32a1"],["archives/2020/index.html","135878d66bf6a01992680f9f6032bcff"],["archives/index.html","2b4f0ad2cb9314aaffca23c27075d411"],["archives/page/2/index.html","5ab26f21241185cbcfe40a1495186106"],["archives/page/3/index.html","5ab26f21241185cbcfe40a1495186106"],["archives/page/4/index.html","5ab26f21241185cbcfe40a1495186106"],["bipartite-graph/index.html","d6b0cd762ef02de1ad87c23054b51e5f"],["bucket-radix-suffix-sort/index.html","46780f40a6fae36dba904fd552a722b1"],["categories/index.html","b85b47ae69fd6611eacf3208b88dbd0b"],["categories/即时笔记/index.html","656f9ad2f41ddcd82d07dd3143cc6b21"],["categories/总结/index.html","1ddf1c9a55de37656464ffc2baa5bb2c"],["categories/穿透世界边缘的呐喊/index.html","60c9ff701f4a681f6f43dffa5e2caafd"],["categories/算法浅解/index.html","69779f575e9f43c8f08e32442a4fe98e"],["categories/随笔/index.html","c8956a1650e220e2c819f68c183d096f"],["comments/index.html","3e7d8d2b4f300cc3070f940360275752"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","cfb8b1702d03c0260a7dd6f410d43279"],["exgcd/index.html","8696d9ef2e045a4e1e5daaed543ea309"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","fc7f33688faa7be9570706a93a829f45"],["graph-in-math/index.html","d029f1cbd14775b7d1b22f3c1e09a088"],["hello-encrypted/index.html","aac7045f58377e2e2bb896d5701f877a"],["hello-world/index.html","58e93f261a442f031c083ca70b215428"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","c93b0c8082b09fdf7a44d1009df94f6a"],["js/app.js","7b11ff1914c049a07bb5da2506034ef0"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","5d29b497d8ab637326f97750701fc178"],["kmp/index.html","5f356c40e2f9b1948c2ff7e06bc80999"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["monotonous-queue/index.html","6582e7d31b2aef21f4aba1ef5c1e259d"],["my-math-problems/index.html","4585369619590a980d28386e8173a8d5"],["noip-2018-outline/index.html","46305b0fa7a1e4b7863d3dc7ed568a50"],["offline-algorithm/index.html","316adef3d9580638a64a3fe38e580fe4"],["page/2/index.html","6192246d59ee31aee38d7d02d45f7deb"],["page/3/index.html","58182f60c9332e800c3bb5f8d2ff1ff0"],["page/4/index.html","267c773f7ce10a94f5f0ede5cde57dfc"],["random.html","8d944be55c66978094950352713cf70b"],["retirement-speech/index.html","d21b03fd12093077ccce9ed73ca34cf4"],["s-and-d-on-a-tree/index.html","149cfc9630191a4185370b67acf5261c"],["search/index.html","8cc7173b95debe2193dd4e5e23bdf992"],["tags/KMP/index.html","d072a9922e431dce08380abb23dac4c2"],["tags/THUWC/index.html","279b1cb862fdc37e1aa5c0a75f3b2d7a"],["tags/floyd/index.html","307ed2dece036553597136e9cf07a28a"],["tags/gcd/index.html","8e2d7188fc80c06185785d42c0f6efda"],["tags/index.html","3624ad6ccad5970a4fb05e132538fae7"],["tags/世界间绪论/index.html","8fa741fb6ca48661397b8c0032ee891d"],["tags/世界间评论/index.html","6d1b87b2e2e081e5c7c1e80c3ea25551"],["tags/二分图/index.html","23c05e05e753cd3552ae64087a1a6c17"],["tags/你的名字/index.html","0fe522fe2ac7dc85e5f6898116dab46f"],["tags/前缀和/index.html","7786f2c026b03fd68c33cc8ccf315d0a"],["tags/动态规划/index.html","b485b0fab832722b030771902d3bc98f"],["tags/单调队列/index.html","fdcdc8c05b0b6772849d72bd88d4d314"],["tags/后缀数组/index.html","cc606be9aa44ea435ee152d553b79df7"],["tags/图论/index.html","01ab7dc2c8729d1a17300f61ba44108f"],["tags/大纲/index.html","46df9c0dc2434177c75530a69e5faeaf"],["tags/奇闻/index.html","2bf2b79b150110d7ed075da931d77887"],["tags/字符串/index.html","c07b2bcd585a054bd9c61885f64effb0"],["tags/差分/index.html","34496fab68e80ad05aed35c8b2e953d0"],["tags/并查集/index.html","b84daaf3b9a664ddb515aaac3ebfadd5"],["tags/总结/index.html","6ff811bd29d9de5e91adfcd78b1bef06"],["tags/排序/index.html","dfe365745bd7699303cd3379dcaf6d0e"],["tags/搜索/index.html","957856d678372de326977524cbdc98fa"],["tags/数学/index.html","07d1572307bd70106dc3053d4efcf35a"],["tags/数据结构/index.html","ebb83ebfc0e9907c71052fff7b8a739b"],["tags/树/index.html","ac878db3933279dab0f3075e3e273353"],["tags/离线/index.html","cbfb24ee4bcc913252f87d5ddf5cb1ae"],["tags/笔记/index.html","b554c9e4841520b4b5265426836b3d71"],["tags/算法浅解/index.html","48069dc37d36fee2dc2a9f9249b9fd06"],["tags/紫罗兰永恒花园/index.html","c79e4d709ef8dacd23efa53599b6d547"],["tags/蒟蒻/index.html","ef3fe7dcab15dc43d628d3d7d6f40b1d"],["tags/贪心/index.html","91179000c4ec83097e53ef67697ee239"],["tags/退役/index.html","ce83cba4a035b14f6f8e79b807d0dcdc"],["tags/随笔/index.html","1348462106c7109ac5f38832aed0d1b2"],["transitive-closure/index.html","2f712f301117f2fba27673dcafe40335"],["useful-links/index.html","90bbf70000892aa01f77a06003af0df5"],["violet-evergarden-review/index.html","1b165badb50150516e7ddcb46232e147"],["you-are-more-important/index.html","0bdfc91446695a9b8d3629d8d18850c8"],["your-name-review/index.html","aa0650724d754a71ec1d8869e130ee99"]];
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







