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

var precacheConfig = [["404.html","f9ffdc0834bd21ec800778d5d7c46cf3"],["CSP2019-graph/index.html","d4e5a60c53c5b6d8bc0359e06f44bb03"],["CSP2019-greedy-and-dp/index.html","f95b80459f5172b3757c17215ffd9243"],["CSP2019-math/index.html","55f11ecb09c6548cb177345bd6c978c9"],["CSP2019-search-and-ds/index.html","5b35b5e090524a8aa170864bedaedfae"],["CSP2019-string-and-tree/index.html","d0762b35f3f2111c9a0638db04e5363b"],["NOI-Online-summary/index.html","f68fd4240b099d09e4806cf5a432ba2d"],["NOIP2018-day1/index.html","525f66323a28de3dfec9d835146ade9f"],["NOIP2018-day2/index.html","a0ff58d3728f04b72ed26ef7d9c5f7c1"],["NOIP2018-day3/index.html","73e249ac48bcba6514e1baf8b6a89e09"],["NOIP2018-day4/index.html","e715fb4f8cd3fafc7680f031411a31dc"],["NOIP2018-day5/index.html","3fa8f52ee96753ae65ad8efb3271088c"],["THUWC-2020/index.html","7dab1d2c8f2f01c4f077077d7bc14557"],["about/index.html","b7fe7392e50531bf1fac15ce8d8891cb"],["adventure-record/index.html","7013bbeec14a50ea4bb424ddf67db714"],["archives/2017/02/index.html","5bb06d62ef330611b0c0be3f144ffe96"],["archives/2017/index.html","d72db8692c5a7c5ef57359ba2c59be88"],["archives/2018/01/index.html","815c9fe5d585c729eef817c0e50ddd9c"],["archives/2018/04/index.html","3b2edf40049187c2f1a78a1224c49855"],["archives/2018/07/index.html","177a9ada45818e30895d20cf9f834195"],["archives/2018/08/index.html","069079338d40dc8a79b5ca4f23c59557"],["archives/2018/10/index.html","ad8d42afe02ecd6aa9d6554ad87ad55b"],["archives/2018/11/index.html","33b8b2bdcaa49790dbaa00a73b76fb3f"],["archives/2018/index.html","39adc98e61d59c05b0ccf0ee21babc3e"],["archives/2018/page/2/index.html","306e02b85957a934c88cc1967548782c"],["archives/2019/02/index.html","889569d86f7a6af2f5057066f657d21c"],["archives/2019/04/index.html","98df591ae9041703eb5f7edea1e8c4e9"],["archives/2019/06/index.html","6098e10176db7fd4bfc67066d998a923"],["archives/2019/11/index.html","c56df6be8ca53b21de999debe67b2603"],["archives/2019/12/index.html","6bfac74f759eb05602b95df26c663eac"],["archives/2019/index.html","f57f619a14798a30c01fae30c82bec2b"],["archives/2019/page/2/index.html","9347e001c764b9f810592428cbc189b1"],["archives/2020/03/index.html","d6ce65c62d8530615ccd098425c40dc0"],["archives/2020/index.html","f40d1ac7028da9c56813b8aaffc7b770"],["archives/index.html","9c2676de07aeea50e18bcc0c64f4209e"],["archives/page/2/index.html","f4b90f7078f018b2086ae6249df99931"],["archives/page/3/index.html","f4b90f7078f018b2086ae6249df99931"],["archives/page/4/index.html","f4b90f7078f018b2086ae6249df99931"],["bipartite-graph/index.html","68c52d044e79066d020cdbd442b27c8e"],["bucket-radix-suffix-sort/index.html","a9d63c2e19bde20d5624c1e3d7dd2ddf"],["categories/index.html","6a45ab99d418589ac93bf870299ef567"],["categories/即时笔记/index.html","76ca643abfad4dfb23fc18a06ee2ff11"],["categories/总结/index.html","25d4e80ccf67e9e647105d9cf221f4f5"],["categories/穿透世界边缘的呐喊/index.html","84ceeb1136e4c6cab86a33d475265d88"],["categories/算法浅解/index.html","f0b7ff8f5dbf1861320872d3ea9441af"],["categories/随笔/index.html","ee5ad024d9a436cd382c2e883284e37c"],["comments/index.html","cc78e70226f599ef18f5b028b2fd5c1e"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","f7db290a0fe82e597f4d5646d02ac583"],["exgcd/index.html","ac84f58c753a3ac76b2d3e85f042641f"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","c15a23b8d471aa8b70ce8190112c0501"],["graph-in-math/index.html","49c0cb824918f70932ccbd65f30b3609"],["hello-encrypted/index.html","4e65f58e9d8c8843d57ee71576b78c31"],["hello-world/index.html","c4704d6a4e0d08b50f634ca496ad59e4"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","5949432d35dd0179f67d5cacf5a1a86c"],["js/app.js","90b3d4d8d4de01c8a8a8578ce7da3b25"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","cb0b0b7a18483330ca899fb4e397e8d3"],["kmp/index.html","b2babd821e4d0aa151c531c880cb954d"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["monotonous-queue/index.html","339f6cd5493ac24a27a62a55eee9d51c"],["my-math-problems/index.html","c26050799878bc77779b12eb2f57fbd4"],["noip-2018-outline/index.html","db2e95fcf165d065a6c9da8bfe5686fe"],["offline-algorithm/index.html","0032ced29931cce09480cee616fa17e3"],["page/2/index.html","62abf045ef06fe1198309ec6d5b24d12"],["page/3/index.html","e7850c9e34945ff7ed9fc87a71dc1bce"],["page/4/index.html","150c2e72eaf0ab123ea8191846111622"],["random.html","cc4309f1bc7146d55940a7105164a49c"],["retirement-speech/index.html","f372abbce65302b8a9f6c6132227226f"],["s-and-d-on-a-tree/index.html","b8cf383df9d8098140822a80bd3c0035"],["search/index.html","40f2e8e69f5a598322bd09cc984f4189"],["tags/KMP/index.html","5a2f986717319721cc784b1d4359778f"],["tags/THUWC/index.html","e5bd83a93554e54fdd939490e448f968"],["tags/floyd/index.html","6a5c68995d49593bca353914766650dd"],["tags/gcd/index.html","fc386a2c9b358891617bf3c91fc4f875"],["tags/index.html","3928d37103dff2286bd9f7ec7d9cc49b"],["tags/世界间绪论/index.html","c7ca548c42c5f4b09c34c5795c808a83"],["tags/世界间评论/index.html","4c10965050d0da2d3bdadd642a26e7f1"],["tags/二分图/index.html","cb07094813009b350444feb9c6726950"],["tags/你的名字/index.html","418baf54d12d3a67250f542387341478"],["tags/前缀和/index.html","e3693617bacbd5438af21c5ef9f030ce"],["tags/动态规划/index.html","96dcbda8d44703a50401eadd17a2d770"],["tags/单调队列/index.html","9cab9aa5f5ff08c3ee57455edbb5b6ed"],["tags/后缀数组/index.html","f4f85ed75dd573bd9ce58efa427f81d2"],["tags/图论/index.html","64e0eea34c67312ed077ea2b59b2e410"],["tags/大纲/index.html","01998b7969455273d4319d093c90b630"],["tags/奇闻/index.html","ac37f09f293526d4e9683f555ad31718"],["tags/字符串/index.html","dcd396c055b3b54d39af9d6c88f80180"],["tags/差分/index.html","debd790eb93783bb15c15eedf5a90a7f"],["tags/并查集/index.html","35f51dacede28d382588819d9ef7dcdc"],["tags/总结/index.html","b8c3a26a26fea8956e04532293305291"],["tags/排序/index.html","c33779dce500c2bc49671d7b65ed16da"],["tags/搜索/index.html","c7554e4f9ff85621ce08e803358abfc0"],["tags/数学/index.html","718937e2bc4035a7c01229a2bc04182f"],["tags/数据结构/index.html","8c9e7e5d1dd2730e730990b606f30a91"],["tags/树/index.html","c92d413c5ea1a42f9a053a777f1020a1"],["tags/离线/index.html","56d31e8d759db9cb8fb82ddf28a7dfa3"],["tags/笔记/index.html","22b5d5fd46b20d633c2d44c7fcbede41"],["tags/算法浅解/index.html","4c7c637792ce9fe7119903a9bf85fa99"],["tags/紫罗兰永恒花园/index.html","e23152b9b7adf6ca718b751c32ca2f54"],["tags/蒟蒻/index.html","7a94a78a1bcba7707fffb2d989ad8361"],["tags/贪心/index.html","09a394464ba85c76aff04f831181b562"],["tags/退役/index.html","aac70938677c3ecaedfca51fdde3608c"],["tags/随笔/index.html","5cfe57858d7c84c9ebf48b3e50d65f17"],["transitive-closure/index.html","4002bf771d0f61214f845b13f1f6ddb2"],["useful-links/index.html","8f3a16ee692e43d2d617aad6b6f19fe0"],["violet-evergarden-review/index.html","e179e2578a9b0bfc49c22e54013759cf"],["you-are-more-important/index.html","f629bd5d8ae91c84bf8bdd750902dad6"],["your-name-review/index.html","b33a1e03a23ad8ad41e3d171e622a8cf"]];
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







