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

var precacheConfig = [["404.html","dd28ce79dbe8315db8282d8c666290d7"],["CSP2019-graph/index.html","d356048018d6c9bd9c98ffcfc78cb659"],["CSP2019-greedy-and-dp/index.html","554ccf1c36a4b7b1c7c226a1d1bef5b8"],["CSP2019-math/index.html","33aa062711b803f87d077d425192c3df"],["CSP2019-search-and-ds/index.html","00fc546bf66fb6cae5545812ece7305a"],["CSP2019-string-and-tree/index.html","57bdbdd456de349607ee7253d0f5c8e6"],["NOI-Online-summary/index.html","6fc93d7d22e367d3fb723ae2091db37e"],["NOIP2018-day1/index.html","76b58101b0651ad8861c69ef06a27ecc"],["NOIP2018-day2/index.html","0404ac2e53b1089048f8b104dbc2add0"],["NOIP2018-day3/index.html","00b9593a6d022d7e7f298f489cea62f2"],["NOIP2018-day4/index.html","2c13bf8138497f82abe27539f11a86e2"],["NOIP2018-day5/index.html","086bc3fed01957cc3bedcc74299c6178"],["THUWC-2020/index.html","1ef2f83aafd29036acc9e6b3673d31a4"],["about/index.html","6dcfe630a287e3ee07eb18fd123716b3"],["adventure-record/index.html","301788f3f9c7bc0f05e9e097dd35bb85"],["archives/2017/02/index.html","13890ae64c8c495abb8c9e187a3b9152"],["archives/2017/index.html","fce2ba52024382e109d9dcb6273700d1"],["archives/2018/01/index.html","7288e3a343b86d44a848a0cf489e400b"],["archives/2018/04/index.html","8cc872fb8d52f088d084d98f8503e796"],["archives/2018/07/index.html","e9025412f3d0773bf457e3059fe8a6f1"],["archives/2018/08/index.html","57d2227825fd9b23e4464f4dfccf7714"],["archives/2018/10/index.html","152bd72be83b7b36e67ec0f37c2727c1"],["archives/2018/11/index.html","80b36749b2d52c490b9627f306c5606e"],["archives/2018/index.html","761b22e56fff429b35db65701e6209d9"],["archives/2018/page/2/index.html","946c05553941f6a865a2f2cf688bf9e3"],["archives/2019/02/index.html","e4b7651adce8b800351721b8ee856a32"],["archives/2019/04/index.html","a08f2ea759e344f8ea3e1be5524eff87"],["archives/2019/06/index.html","363da7905ced1e3db09ef98975be228a"],["archives/2019/11/index.html","7e33ef10c57509204f7ede4a83984733"],["archives/2019/12/index.html","e49af2c684abd4ca3da2ce865d9c22e9"],["archives/2019/index.html","8c4c750fe756b2d71b4a9822a38f4898"],["archives/2019/page/2/index.html","96390bd6be25915966eb3e8c1950b058"],["archives/2020/03/index.html","92a8e475e15e3465ccb53656e837acd0"],["archives/2020/index.html","6bb951609e17d143a87fa5fbfd2bbf1d"],["archives/index.html","f754e5def6445ff984ca3af738cb3daa"],["archives/page/2/index.html","f754e5def6445ff984ca3af738cb3daa"],["archives/page/3/index.html","f754e5def6445ff984ca3af738cb3daa"],["archives/page/4/index.html","f754e5def6445ff984ca3af738cb3daa"],["bipartite-graph/index.html","8b6482bd7491c2e27a94c4ec76a61a24"],["bucket-radix-suffix-sort/index.html","037ec7d1888f8437b381479b390b4d79"],["categories/index.html","2f6753d3bafd11f1bb6a4270ac19520f"],["categories/即时笔记/index.html","3fea1d8f6ed65df11247493b96139f2c"],["categories/总结/index.html","f3cb0ee828a30e77c2458b8f9a0e5640"],["categories/穿透世界边缘的呐喊/index.html","4f978630225bb5264d89bf2a28315de2"],["categories/算法浅解/index.html","9cc879b79bf9b30d8d4a6de17c13af32"],["categories/随笔/index.html","b8e9ebcdeb4683a0542d9f971d9b565c"],["comments/index.html","a103aef0c0098cdc2392df0ce8bfaef2"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["exgcd/index.html","d916166acbace898a3c3ff8f934701a8"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","cc164fd51a821f46d858e7a7d8f6a587"],["graph-in-math/index.html","93c74a6f025cb21a13dbaba38abb9ffe"],["hello-encrypted/index.html","7be3221290bf748ceee91d126e95c024"],["hello-world/index.html","da90156481eb839ca697f2c27b8716fe"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","b7b37a401ee8dc96fb08331ad5152049"],["js/app.js","db046ae35a33c7f9e17f68f25188ef4f"],["js/search.js","fe5be68bedd17e1a497cb1c18456a66d"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","9419c43dcc4dedbc2900b55cf20473c9"],["kmp/index.html","97bcb2beab012525341d137db87919aa"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["monotonous-queue/index.html","c7108b5f370fb864643574faffde6fd3"],["my-math-problems/index.html","de88a7fbad5b203b5626aa51fe35e8d4"],["noip-2018-outline/index.html","a0b7135eb448e76d448a8428cf1e0e9e"],["offline-algorithm/index.html","decb3cc8150eb92a61b8dc8b1196fb8f"],["page/2/index.html","e21916cb7101bcbf8d661c5da8262540"],["page/3/index.html","6233c5fccb4cc6d8bd04fc7c516cf7e7"],["page/4/index.html","0ff62f6276ad022330b20215aad38d2f"],["random.html","8d944be55c66978094950352713cf70b"],["retirement-speech/index.html","adc58956b147324cd0029ba5b2df5190"],["s-and-d-on-a-tree/index.html","95bd26c5e8eee691f757646c8ab57367"],["search/index.html","02ed704309922de8d706429ae889c85b"],["style.css","80760eab75df264560f0dc40aeb1492a"],["tags/KMP/index.html","91e8d8102cb6d005898377a90aaf6d38"],["tags/THUWC/index.html","763181ba6df83867d71be3c9c31a882c"],["tags/floyd/index.html","fed7b561b67ecd1152237d4134f74460"],["tags/gcd/index.html","1acbd64928cf757fde35f6f09914515e"],["tags/index.html","bb3aaa6799a169e2fca91a6d74e9af98"],["tags/世界间绪论/index.html","af5e4e856bee4769006022d887781bbb"],["tags/世界间评论/index.html","3e3d787862e89b97e4819345fe259ed2"],["tags/二分图/index.html","bdb12d4fbdaa41832e4790d55df095a5"],["tags/你的名字/index.html","059e516a2eabe4259e413f0ed84674f5"],["tags/前缀和/index.html","e3e8dd099c6e97e76fe3c5f7aab26c0d"],["tags/动态规划/index.html","6c8fa157a639863a4d25a59d32e609ff"],["tags/单调队列/index.html","0106f26fae1b9a6f000fc96defd59ec2"],["tags/后缀数组/index.html","bab5e5afbbcb5ed51805356efeb771d3"],["tags/图论/index.html","8181d1a2fe0bc97525000db1bf640107"],["tags/大纲/index.html","22d996a088fe98a5c17b8eaa54fb599e"],["tags/奇闻/index.html","2f2103fa4b5d51c95ec73c445f4d8a93"],["tags/字符串/index.html","042e91bbb2f933a9c54f1e883c92021c"],["tags/差分/index.html","b00cef0c8290e6cc7b52bfffd266fe3c"],["tags/并查集/index.html","2e1295540e9ffde792bbb8c195bbca8a"],["tags/总结/index.html","68500c732c937281d4c6d1856f3f3a86"],["tags/排序/index.html","5ec2effd7f381147dec576998d74e0b7"],["tags/搜索/index.html","d3bb1d633ebabbad95bd89d0bf4ebc7f"],["tags/数学/index.html","d67ae762f99433f845d5bf0d4261969d"],["tags/数据结构/index.html","bee70cc24d4c29bdd0b540fcf8a61e33"],["tags/树/index.html","7383a80dd189c49e502dfadebf001374"],["tags/离线/index.html","105ac58719a3561690f5bed7c242ecd4"],["tags/笔记/index.html","694fd3eb8bb726f21464f39445fe71ac"],["tags/算法浅解/index.html","2c55ffccf053b8184ad9c351f497d796"],["tags/紫罗兰永恒花园/index.html","dda42aa13b6a2761c34cbe2d423c4799"],["tags/蒟蒻/index.html","a6094b60c228b9f3f1efe33460d1688a"],["tags/贪心/index.html","4aed2cd0444c4f67fe1b4a4941a85c07"],["tags/退役/index.html","4853864498adb324f008e686d525fa56"],["tags/随笔/index.html","bdbdddd67e3a94669f79adf1f7e002c8"],["transitive-closure/index.html","81f27c1ba7096fe65496f06e24834d53"],["useful-links/index.html","0404f6ba7cd5d5330e610166bf9ae4c6"],["violet-evergarden-review/index.html","2e65e1ef23bd77c2d52e1761e0725ab8"],["you-are-more-important/index.html","4c39a9b80f712ee451f2e86095430e19"],["your-name-review/index.html","a5245a1a28d3486d6f66b00ecf835708"]];
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







