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

var precacheConfig = [["404.html","cf5675ab3011925a97c5eeb4f676f276"],["CSP2019-graph/index.html","7278ed0262c6b9b9c40c679867aaa98f"],["CSP2019-greedy-and-dp/index.html","2cba978ae625243eae3f68836b5785c3"],["CSP2019-math/index.html","7434eaaa1fd605987ea230055e6703b7"],["CSP2019-search-and-ds/index.html","7e240dd1567507d4b9ed2cfa60dc4ab1"],["CSP2019-string-and-tree/index.html","b30c6ef11b1b7d441001f8e2b3aeaa07"],["NOI-Online-summary/index.html","46b9d82a52e69e9c40ed5a744140ffc6"],["NOIP2018-day1/index.html","b1f3ccab440906e2f398871187b76d87"],["NOIP2018-day2/index.html","5e9ddc21abc7c32f7720c00bbb2a3009"],["NOIP2018-day3/index.html","50fedc560bf78adf55794730af688180"],["NOIP2018-day4/index.html","adc7b46feffcbf5d5b99e2836ca1d93c"],["NOIP2018-day5/index.html","78e80e416549c444c0dc14f1d7f98f2f"],["THUWC-2020/index.html","0155ecd2e21b200c2b132acba30f9f32"],["about/index.html","7560b9b160f8eea522bb67c8442a3c73"],["adventure-record/index.html","7def8406203738a7c39143cd7ed09eb4"],["archives/2017/02/index.html","8ba3d2aab8ca0d619761a5b76da432ee"],["archives/2017/index.html","2a03c271d900513aa270bcdc28ff1f8b"],["archives/2018/01/index.html","2878e68d33dedc761031bce890476857"],["archives/2018/04/index.html","a1096a6651554ac8958de53ad94751f6"],["archives/2018/07/index.html","9b713c69a12d75cb3e164fbdfd39cdd6"],["archives/2018/08/index.html","4df6a7caa028840809063ade97684e88"],["archives/2018/10/index.html","12310c1f4079e8f5c7b59052ed8dda4f"],["archives/2018/11/index.html","808325eecf41f47164aa54f0b7e86c6e"],["archives/2018/index.html","5e03ac7a1baa8e2d4cd5c6626a0fa0f8"],["archives/2018/page/2/index.html","f4f3c9c32b0d7d5aee753e2442f67c43"],["archives/2019/02/index.html","3c2b79bfcf48650e84bde1c2fe5353be"],["archives/2019/04/index.html","9ee74905b731dfafba84daf025032b66"],["archives/2019/06/index.html","0351d85987d09d0487573c27b794ca8d"],["archives/2019/11/index.html","8084cfdc82c6d177de6870308fe047ec"],["archives/2019/12/index.html","bfa597f70fd4b13f4a66d8c361d56801"],["archives/2019/index.html","c63bced670fad45ff950f5d49702f94b"],["archives/2019/page/2/index.html","8d40e13623e9dcfa7329da4c25bddc41"],["archives/2020/03/index.html","1c3247a51d5878b8105e2b8034efa0f4"],["archives/2020/index.html","554ee6c4d9f00f11de7aeedfa0822a6c"],["archives/index.html","604421f6e45d94e6135909de732d02b3"],["archives/page/2/index.html","f3ffda6736b50659e76ef17176c6cb66"],["archives/page/3/index.html","f3ffda6736b50659e76ef17176c6cb66"],["archives/page/4/index.html","f3ffda6736b50659e76ef17176c6cb66"],["bipartite-graph/index.html","874ec7ca265cf84aabba427685d1b6cf"],["bucket-radix-suffix-sort/index.html","a87936f3a38f6b0d876d8b4511adcfca"],["categories/index.html","12acfdf2bd8f9a4360e3766838f74316"],["categories/即时笔记/index.html","031d027b388057dbcbd8c3b14b71b2d0"],["categories/总结/index.html","1390cbd1027cf1e6705cd7788397a884"],["categories/穿透世界边缘的呐喊/index.html","463874bb5247f34d69cd58d9c8128d19"],["categories/算法浅解/index.html","f5724c0882403bd105c9bfc367c6fcd7"],["categories/随笔/index.html","73c89d9eb05ac2c0cf208cbe0e38840e"],["comments/index.html","17210b566485bdba0b06c601e3e337c5"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","f7db290a0fe82e597f4d5646d02ac583"],["exgcd/index.html","749404db5f17907d1c3da7cc2605454f"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","429304c9a20b46e51442f4c143a5aa44"],["graph-in-math/index.html","1010c96b6da8cfcbb2d8720ef9e58cd6"],["hello-encrypted/index.html","e144e45a24c901cff9e5887e026fc93d"],["hello-world/index.html","28bdf68d553c09f7d074b9e72a06a5f1"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","91d015dc2e4c50ee2a8cc7f1e49039ac"],["js/app.js","90b3d4d8d4de01c8a8a8578ce7da3b25"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","7e85370ac2327aef90cd6a4c384b0b64"],["kmp/index.html","4549052d2341b6c165a45a57fe863bcf"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","9d430ddf94d2e2d5d3d9d04c9ff049a1"],["my-math-problems/index.html","22207311195f35b772d01e1cc65e3a02"],["noip-2018-outline/index.html","bf6895831dc98c42857342e55bc41486"],["offline-algorithm/index.html","f4f4fdf290929167d85b73b2b1336a81"],["page/2/index.html","ad8158b9717a29d2bc35c1f44ac6f850"],["page/3/index.html","f256f406dd724bc6394a2242b475255e"],["page/4/index.html","e31001e6168cd564ed3d9edd8d7ed604"],["random.html","cc4309f1bc7146d55940a7105164a49c"],["retirement-speech/index.html","65da861f11df6f17ec3e425be9681bc4"],["s-and-d-on-a-tree/index.html","85a196ff9f9b32e0c2a0b4c54ce169a2"],["search/index.html","44c7f0e6701ebf416cbb13fe8e847107"],["tags/KMP/index.html","342f8e2bf566669b2c7ed1bdc7e5743e"],["tags/THUWC/index.html","d825db49e0f059941465fff4dc281be2"],["tags/floyd/index.html","dfb9a45e58ab42745bcd5d9d72edd5d0"],["tags/gcd/index.html","b3e474b563aa146c182579c330fd00ac"],["tags/index.html","ec7d1bf6e6b4156c24e99fc5a8f6fc9e"],["tags/世界间绪论/index.html","e531d1a7b450a80960c9200d8877416c"],["tags/世界间评论/index.html","9b6387b9819f35e5a400d4592da75237"],["tags/二分图/index.html","09c8808ddb1528e5e455d91c79101295"],["tags/你的名字/index.html","c38165d93a63814dbc881c212c8982dc"],["tags/前缀和/index.html","836eff444ebc5691aed4a30618931ad8"],["tags/动态规划/index.html","76e22181650dd66ae26af97d090974f7"],["tags/单调队列/index.html","2cd9f2b5be02374d33368bd9d524767c"],["tags/后缀数组/index.html","1f34cf1bf1784faae8cbfaba7db26793"],["tags/图论/index.html","2ef42b10bb84d2445ab8fb874df13163"],["tags/大纲/index.html","d73529fff1ba1f5f4de1c1e40317c7ec"],["tags/奇闻/index.html","5461fd211f9a7fa74f024cfac654b75a"],["tags/字符串/index.html","b565b219cc09d0471b9dbba6301ce496"],["tags/差分/index.html","a4c2a915f03aa222f29eb44c51706c38"],["tags/并查集/index.html","b6f39660b369d52644115707382d0099"],["tags/总结/index.html","bc27806a99521986c7d280db9edf2345"],["tags/排序/index.html","347fcc1297242949340e71372bf6eb6c"],["tags/搜索/index.html","74d24192aa6a391cda18e42d4f849540"],["tags/数学/index.html","3551b65dd44b6601429fb3b2b22d7596"],["tags/数据结构/index.html","1b5b5aac7321712ca44c851dec7f4311"],["tags/树/index.html","e5c5504688ecc4ffd59b93bff2c35899"],["tags/离线/index.html","faa6ee37a9e18dcf9f17690bbadd734b"],["tags/笔记/index.html","21672d37ae54081f7e7f179c1c5d8e26"],["tags/算法浅解/index.html","3345b04afdb1c803b8996e1c66ca2b30"],["tags/紫罗兰永恒花园/index.html","a324e6df6580557263eed5780476a651"],["tags/蒟蒻/index.html","8e6e7bf9e1c4d622ad4cf2f95c07d717"],["tags/贪心/index.html","a9bb254516c193544ed890fbae092293"],["tags/退役/index.html","d9d7dde9285b17baafb1b0c307315886"],["tags/随笔/index.html","f71c59b5b9db0b50528333bcd6e5628d"],["transitive-closure/index.html","e13d22029755d243763c875e512b6ab5"],["useful-links/index.html","d9e9fa0eefba51b02610219a564f18c5"],["violet-evergarden-review/index.html","40160be563dd6de5df84e3e01d6e1aa8"],["you-are-more-important/index.html","ca679a2e2f053f01e10888f0907debd4"],["your-name-review/index.html","70b32e258a01e7c39fba4c49f5064060"]];
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







