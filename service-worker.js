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

var precacheConfig = [["404.html","0a157e0e20aab9b4a2fa0e4c2ee531a1"],["CSP2019-graph/index.html","3586093e9d997f0fcbbec5ede386430d"],["CSP2019-greedy-and-dp/index.html","2dbe89de9aabe68fd5335d0dc5ac2104"],["CSP2019-math/index.html","78fc0114b7175fb868cf75f1eba05a13"],["CSP2019-search-and-ds/index.html","7dbc1c39029526faad8a21dcdf86e753"],["CSP2019-string-and-tree/index.html","86f79ceb0227776eb252d1cf03b2d434"],["THUWC-2020/index.html","9ad40f9bb41f71fc29b1c52ca38a9445"],["about/index.html","c712baf5ad746bd3a22bfad44f7c6c09"],["adventure-record/index.html","3f27353780644e388ae68ea04c321b8e"],["archives/2017/02/index.html","1772d654bf2877da74eaf4a4897f6ab4"],["archives/2017/index.html","73deb2f69923459fccd6720ae6972447"],["archives/2018/01/index.html","53e439aa75a7fb37f7b460806f1ca47b"],["archives/2018/04/index.html","8fb73f94e92f1b7d203655247f03467e"],["archives/2018/11/index.html","1daf357ac98eaffb79a51b5edb2b6493"],["archives/2018/index.html","840442784fe553a9cf05e0f821bead97"],["archives/2019/04/index.html","4ab26aec449d6d9a551188416d39990e"],["archives/2019/11/index.html","83d9dedcb0af01b8b0a129b9d62d9f30"],["archives/2019/12/index.html","d46b9ba250e03e3cb31428526fd5b800"],["archives/2019/index.html","4490f2cfcae4e9f743e44ace70b7e045"],["archives/2020/03/index.html","52db04104eab22bda137bb3490bc636d"],["archives/2020/index.html","04827d3981fdcce81173ead6d467862a"],["archives/index.html","a769df22a1182a1af79d3f6bd1c8b384"],["archives/page/2/index.html","a769df22a1182a1af79d3f6bd1c8b384"],["categories/index.html","a659cbbb5108ac6095c81c5f79b9f5dc"],["categories/即时笔记/index.html","cac4f264c79453cfc8fe264a8f38dd67"],["categories/总结/index.html","8bc13dd59d7ee552b7178b9a64e0ead5"],["categories/穿透世界边缘的呐喊/index.html","b85a4eaeb1d07f915eccc12655187e42"],["categories/随笔/index.html","2483e9c81889f1ebe4166c789d6b0d2b"],["comments/index.html","a18f32427696875446b4ccec6add14d2"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","7c93b47bf45ad269f90158d6f2568c26"],["hello-encrypted/index.html","ebec6556bbaeafc2645220d5e54c644f"],["hello-world/index.html","4eada658a6688e1063f10c5df972bbc0"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","30c0e3191901e7cb94538b9abb1a83dc"],["js/app.js","df25f304a0f95131d2f77826fd72e338"],["js/search.js","fe5be68bedd17e1a497cb1c18456a66d"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","e6c034dd1f50a104418d8108eb5069b9"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["page/2/index.html","bc82036cf1207f630551ebca0d3e12a7"],["random.html","318520b03800c4617cdd75d2c142dd5c"],["retirement-speech/index.html","2b0a2252b15fb00c0151e728c1be4e5a"],["style.css","da86acf93eb9b7db0dc517ff9dd65d08"],["tags/THUWC/index.html","ee47770ab0eeb31cf7fe2b0f0f886e9e"],["tags/index.html","9fc8caf970d9b99a9559c2c6701d07a3"],["tags/世界间绪论/index.html","bc660d9ccf8954ab3457652075f0fb9a"],["tags/世界间评论/index.html","5d1a1d54a0395c69207fc05be94d2eb2"],["tags/你的名字/index.html","fca2a8c1f882d467274d9d89ee6191b0"],["tags/动态规划/index.html","1affae31abc23158c47d1f0a2553bb9b"],["tags/图论/index.html","8d1b8fb04c09c5d2a1b0c73db0adb247"],["tags/奇闻/index.html","2c555a814c9e8279d221876d606f40cd"],["tags/字符串/index.html","4ee6556ca73ee8594df347fef043957d"],["tags/搜索/index.html","a9f5d49df5c353537d6e193e9e2ea2cd"],["tags/数学/index.html","0f95d4a4d120cf2ee44975d18d98c421"],["tags/数据结构/index.html","7aaa185edea67443323f5a722f9d7a30"],["tags/树/index.html","f179da78fe91b9b9a2917efd0155b0c8"],["tags/笔记/index.html","4a2110116e5c3e7740a7529c48795e89"],["tags/蒟蒻/index.html","fcdcb4efba4b68c87a551da8eeb5c328"],["tags/贪心/index.html","3239314a477c2d1ef23b57d91c0bd761"],["tags/退役/index.html","4e103a4cb780af2ce91444e68f6ebf0c"],["useful-links/index.html","3572001f26a220a4650be3fe75f4169e"],["you-are-more-important/index.html","5abf25e9582a875b4b00cb73b9f798d3"],["your-name-review/index.html","268ec3998b680b1ecfdd90b83bc66cd7"]];
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







