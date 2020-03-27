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

var precacheConfig = [["404.html","fe6dbed8dc7a7270671fef5ade497830"],["CSP2019-graph/index.html","04ce0e30d07039e09f7171e221f2ee91"],["CSP2019-greedy-and-dp/index.html","ec91d4a662d89a421870bbd0d5d5f4a1"],["CSP2019-math/index.html","6e773e724900a0b7baf4824317d2b6dc"],["CSP2019-search-and-ds/index.html","73d58fb4fe0fb8c99b74809e098a2900"],["CSP2019-string-and-tree/index.html","83361e2fd07f4efc8620c27d13c42ec5"],["English-7-words/index.html","e748b7e6718882281ab39fee6280978a"],["NOI-Online-summary/index.html","04c8187ab0e09bd9a541dd9800d19d49"],["NOIP2018-day1/index.html","38aba056fbd9b7ea5c5db69bc92c29da"],["NOIP2018-day2/index.html","f945520d331030a82324fe9cdbc11e04"],["NOIP2018-day3/index.html","3bf423be7742eb519e08c940db686f06"],["NOIP2018-day4/index.html","d1fd1b8ddd2d51eaed6d90cf856f42d5"],["NOIP2018-day5/index.html","1c362dc14d1e296dfc88a072a1b64577"],["THUWC-2020/index.html","8d6072f8a37635fce543fbf93ed9d47e"],["about/index.html","af1d81a436d033cb491c7320b553543d"],["adventure-record/index.html","b7d9879c23529ad784642cd671fec94a"],["archives/2017/02/index.html","c07454cfe3eb61d69f9b009c702c11c7"],["archives/2017/index.html","14cca2af1d1ad602ca3f20517ffbfe34"],["archives/2018/01/index.html","0a94cfca3b86683333059d1901f06bb4"],["archives/2018/04/index.html","7681bd9f24738916b28347a58c7621ac"],["archives/2018/07/index.html","20195460f2f25ad766e1df7bae45493a"],["archives/2018/08/index.html","e2f04ab1f7d18a8f4c1b89b01089caad"],["archives/2018/10/index.html","fb3a4fabbf1712445d2a333c94a14ad8"],["archives/2018/11/index.html","560dd245d908c66ba9e4e82de13631e6"],["archives/2018/index.html","3486096cd7f6aa2769e870570ff7ec23"],["archives/2018/page/2/index.html","744a4119a171afd5c8f4330d09cc9001"],["archives/2019/02/index.html","52170587b45aa948d6325de45b84fd1c"],["archives/2019/04/index.html","395be39a3a12516d0403f71f1a50ed81"],["archives/2019/06/index.html","510bee787d7a771a4e0d14e331f4757e"],["archives/2019/11/index.html","3a9a8d123650397f9cae8d8399734d39"],["archives/2019/12/index.html","52cafa9e62ec9d09fce3a5bb34d08336"],["archives/2019/index.html","814935ee74b86ab89ad4a933003b97d2"],["archives/2019/page/2/index.html","4774082f0931103f816e1a816a53f836"],["archives/2020/03/index.html","ad3ecb146b32649aed5346246c9b17a1"],["archives/2020/index.html","94759748405b54610c8416035d190ecb"],["archives/index.html","59f13a50a1e4b53f5647d5c85c603ccb"],["archives/page/2/index.html","8961db82a1169924ed24f53da3f0451e"],["archives/page/3/index.html","8961db82a1169924ed24f53da3f0451e"],["archives/page/4/index.html","8961db82a1169924ed24f53da3f0451e"],["bipartite-graph/index.html","644f50c01f07b5fcedba79bb9b324f98"],["bucket-radix-suffix-sort/index.html","68d40d287ad8011cb3c6dd38f9dafd3c"],["categories/index.html","e00ca2d9063febd3d2819d9fe6abba5f"],["categories/即时笔记/index.html","d603c36d040b74f57d84845704f8b196"],["categories/总结/index.html","5b83626dce5336ef22289870361b3f6f"],["categories/文化课/index.html","57ce7fcaf3f5af3d8b36770e9b6179b5"],["categories/穿透世界边缘的呐喊/index.html","3894e69f82f0131eaa73718d41b311c8"],["categories/算法浅解/index.html","a9af720afeb49e1c179592aaebaf2655"],["categories/随笔/index.html","11b0a3c6bde2cf623a2ba0b1bd9fa253"],["comments/index.html","383de5018a477250596688980adefd15"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","cb0381f252d1209bfc98b0ddab07ec6f"],["exgcd/index.html","e27dba975cc6d72d37be0c5d578d0993"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","a809c9404e1128a689bcb035d5d412b3"],["graph-in-math/index.html","074ca5c3a14c9467febfe4f01535db18"],["hello-encrypted/index.html","65e23c50627bc9d8aa6dddc762e2f194"],["hello-world/index.html","9bfc886a1a0d7cd9735bb73379231a08"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","2512d4d6f9b54b5b7c7fd47c0e5745eb"],["js/app.js","ad4268ee366f668d3f682c29c5ba0aed"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","74591526f2e02880d2995c1371a0849d"],["kmp/index.html","a860da91a7ccb5b472a06ec4b31f272c"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","a1f2629d6c9bd78299ef9c71a38a6e46"],["my-math-problems/index.html","099c888087d65cd478107ce59d618188"],["noip-2018-outline/index.html","0c90e6d9b193f89ffff3fd5a0e6d7590"],["offline-algorithm/index.html","b30e08ac5d5a8566db7c244f82e41d77"],["page/2/index.html","b81ebcbb5459b46b8a7f2dd10bd28a37"],["page/3/index.html","abd7dece1c95a6b12c6fb652a1b5c663"],["page/4/index.html","02c7819291711093f7aa39c7713550c9"],["random.html","6867aaddeca26b7597b49cff626c7312"],["retirement-speech/index.html","87abca187f63c9c8c91d1c13d935ab4c"],["s-and-d-on-a-tree/index.html","43524defef21af08ead8a767a62123eb"],["search/index.html","6b260ccd3ae6ffae36890328822ee1fd"],["tags/KMP/index.html","c1a785ccd6f35ebc055d2f0c61033f28"],["tags/THUWC/index.html","0a52eed3d65e6ae9514694eb55af1cd9"],["tags/floyd/index.html","9c969b4a49c51735fd570fa34b721f8e"],["tags/gcd/index.html","f332e8a65e4188b07633dd127e4ce14c"],["tags/index.html","f3ceac2be87a70bd706855b71fac3912"],["tags/世界间绪论/index.html","d3c8797128881059066552974e11da4e"],["tags/世界间评论/index.html","17f98dbcd5d9fd181d61699e9d61beb3"],["tags/二分图/index.html","164274a45af958d8b260fc37bf997ac8"],["tags/你的名字/index.html","d61de7b07f4108bf830fffde803d0b26"],["tags/前缀和/index.html","d5e7a025576a271fb95393f7af9d7dc3"],["tags/动态规划/index.html","0aeb5baced1302a20186ea72f9b5b451"],["tags/单词/index.html","38ece17db7f7834f99d6a1e5cfebc222"],["tags/单调队列/index.html","26908a900d90a167a15a5cca9d770022"],["tags/后缀数组/index.html","c5edbb1080411ae39668b28aa02666f2"],["tags/图论/index.html","cc8dd562f65275adaafb423a2e6c7b88"],["tags/大纲/index.html","520c8d9e04f5eb1c707671f5057acb3f"],["tags/奇闻/index.html","e2703a0bc32fa601cf257821719f0824"],["tags/字符串/index.html","aa7010f9d7a7fa94dcadd5c6e6f0928a"],["tags/差分/index.html","daacde1803bce8da44583be2529a915c"],["tags/并查集/index.html","b71ff1132ec4f9964dd2bc2f71e89c51"],["tags/总结/index.html","47f61d1aa343f7aa514a8f605f4564e0"],["tags/排序/index.html","cd86cd3bc7403731320676cc95b02b72"],["tags/搜索/index.html","e274660141685232379d52def94675bc"],["tags/数学/index.html","0410750a1ee73b4688e6ba114e273e29"],["tags/数据结构/index.html","eadc80f5a3f15caab6f4a60df449e058"],["tags/文化课/index.html","f6c65e180589f52ac3078be532dc4924"],["tags/树/index.html","233f4a3ea31e289b056dac47a9b15a79"],["tags/离线/index.html","48c574d0d500f4498313a89cedc4ddb0"],["tags/笔记/index.html","83136fba6ad35b2139eb46f27a51105d"],["tags/算法浅解/index.html","adf47525a4cce58b01ec964866943390"],["tags/紫罗兰永恒花园/index.html","4d934da603e9b02bfad1508d546a1dab"],["tags/英语/index.html","7ce60383931b4dc7ff6594de64ab19e3"],["tags/蒟蒻/index.html","5e9bcfdfce2fe7302f28666139e531f8"],["tags/贪心/index.html","e15901d1e37952244689a715431d3893"],["tags/退役/index.html","c7faf4a1b7bc1af45a79f1d411574e11"],["tags/随笔/index.html","d189062e7177c8e5b6c8c11ae880d566"],["transitive-closure/index.html","c0d158f2169aaaced10c609188b559eb"],["useful-links/index.html","a5d28b4f52bf1ffae22fc2e1dd6339d9"],["violet-evergarden-review/index.html","00f0a44760674a4234a1192c016607de"],["you-are-more-important/index.html","b4418578614318a0c5b25dddbc21d430"],["your-name-review/index.html","c7b64088f1de55bb12ab624ebd6a20be"]];
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







