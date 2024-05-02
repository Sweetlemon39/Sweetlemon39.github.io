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

var precacheConfig = [["404.html","993452854cc89e88140ab074a66d2bd4"],["CSP2019-graph/index.html","0c666c918a87a07764c60d1623fc0872"],["CSP2019-greedy-and-dp/index.html","0cbac6015e5c5b1e39392b6a5a93df61"],["CSP2019-math/index.html","b60ca9f68ff69ee48b5560738b172649"],["CSP2019-search-and-ds/index.html","5a84bdb0d7974017332d4d842f3e26ba"],["CSP2019-string-and-tree/index.html","b4200632a34b581b9e31853722eecd91"],["English-7-words/index.html","b3df1693eca1964f7e7470dbcff986df"],["English-8-words/index.html","5a82d75b9d270896569062a3dd27bd2e"],["GXOI-2020/index.html","8b8b06835c2be38460a73caf7a677ddf"],["NOIP2018-day1/index.html","6fb23699d6f5e3efdfdbb66939057d26"],["NOIP2018-day2/index.html","e9394054264f71fac40c2f3091676f4a"],["NOIP2018-day3/index.html","926c53daa62e801c546283651411cadd"],["NOIP2018-day4/index.html","b5109d5154b9544dd48ad8c2d911847d"],["NOIP2018-day5/index.html","9eb1a940bc64fbd9a38c8ece98d814da"],["THUWC-2020/index.html","131f1dcb1c1e4ad4febfa19dc7492559"],["about/index.html","e1bae306d105efb75f66c48ae626f28c"],["adventure-record/index.html","cb2a9bb51c9dc6bd87aab459798fadd5"],["archives/2017/02/index.html","429dc89a1ffa36aa85138ac78554c00c"],["archives/2017/index.html","c2a60d3d176e7badf1142cd403aa3284"],["archives/2018/01/index.html","ab4ff96f91d31294f31dbcbc02ced07f"],["archives/2018/04/index.html","ace7e37f7f360b6937332282d24c27ef"],["archives/2018/07/index.html","9a2584b6eac7ade82700ad51836970ac"],["archives/2018/08/index.html","78f870e096ff5dc62290ff3eb356cf34"],["archives/2018/10/index.html","d4e40970d39adc360049dd21e10a198c"],["archives/2018/11/index.html","b1a8d5d95b996d2527ef8f0818f428c0"],["archives/2018/index.html","286c37bb501c4edac428a7415baf00f8"],["archives/2018/page/2/index.html","31d9c1512cea74f7bb005faacd96303b"],["archives/2019/02/index.html","d732fb815f4fe0bd0eecdea65a3a2bf1"],["archives/2019/04/index.html","35f8db1d855ed7bd9b9bcbdcf13c5b25"],["archives/2019/06/index.html","25c3a444cba1ca0b06faf3e52b148a66"],["archives/2019/11/index.html","8f1a97d07914201a80ac9e4a052626fc"],["archives/2019/12/index.html","5cc9df6ba80adeffc3452a07aec06b1c"],["archives/2019/index.html","e4b648405150d920d7f31dd97330e8cc"],["archives/2019/page/2/index.html","012c5c2c8dbe4bc43d8455e7b74abc48"],["archives/2020/03/index.html","381ec2dbdac304cbfcad00f8573a994b"],["archives/2020/04/index.html","940f6b2869f322db1a995516203e258b"],["archives/2020/06/index.html","83471603a741c1d075fcefa7085c97c2"],["archives/2020/index.html","93f4e5658a82d7163606e3b37544a16f"],["archives/2024/05/index.html","ff2e38c792c6d7e964f70d57aa1a791c"],["archives/2024/index.html","41e20de17cc3dd2b1b46266ec2c6ecb8"],["archives/index.html","dc324485b71fe82ac331b28c38c59d34"],["archives/page/2/index.html","dc324485b71fe82ac331b28c38c59d34"],["archives/page/3/index.html","dc324485b71fe82ac331b28c38c59d34"],["archives/page/4/index.html","dc324485b71fe82ac331b28c38c59d34"],["bipartite-graph/index.html","49cd7a3e61faa27c191bb18044e65538"],["bucket-radix-suffix-sort/index.html","76b93f14d97eef5dd132ee2e7287fe1b"],["categories/index.html","182d70fcba7e864a01d2b8767e71ecce"],["categories/即时笔记/index.html","fc785afaa3c51ac2e1f87609680ed4d4"],["categories/总结/index.html","e7ddae54b393472df3c6a2c6ed59bc93"],["categories/文化课/index.html","f5a420b2d3f58dea8e6f93c80af1716e"],["categories/穿透世界边缘的呐喊/index.html","5abdb1ddb7fd730be1aa19aee363a1d6"],["categories/算法浅解/index.html","af7a02d454a42193c67c28022caa5c9d"],["categories/随笔/index.html","532394a23b75c7b6e597f95b9c2477cb"],["comments/index.html","3fe16fdadca022402820f84f2374a7b3"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","7a7a16bd49cdaf087ac2f045208f55b7"],["exgcd/index.html","e7a3d650817b2609a97414f2ea30d66e"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","cc8899e4b774a4cd0b2d1d1a8aec0f3b"],["gallery/index.html","36d76ceb910e689ee8e679ffae65ef39"],["graph-in-math/index.html","19de64f1c3907902f28b074effbbec10"],["hello-world/index.html","4b979e10ef057ac0b8263bab20ccdb90"],["how-to-recite-log-inq/index.html","9485aab12a9c077f2c36233fa37566a3"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","d9f74a7c2342547c41f7e0fa72c1667e"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","ae0e60f090e2dc8c5828eac58cf46aa1"],["juruo-poem/index.html","ecdf28e0db3942828bef64b3a75b082d"],["kmp/index.html","a4a123709bb9b85c8e116f0e5558a255"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","68b636a28b23a1939506b8f93fdcdd07"],["my-math-problems/index.html","92ad4573a26994e7994212f55069f4d2"],["noip-2018-outline/index.html","1c0caf61c83ab915bf7aeb7de8de6add"],["offline-algorithm/index.html","636fe0cce2bcace5e30f209c33f06b71"],["page/2/index.html","4582298eb63562bff27311ff720c2aca"],["page/3/index.html","64025d024777a847c677a070af6ba6ae"],["page/4/index.html","24371a96c6458f03a21ab0eabb6620bc"],["random.html","26d0474ba74cfdf1d81e9f50c013f2c1"],["retirement-speech/index.html","dd46a6beb1271d07514181358b9486e6"],["s-and-d-on-a-tree/index.html","1a73d1ed2cfd50a0c34a8172d92f03b4"],["search/index.html","71753144f9c8428566b5bb5572a4e65f"],["tags/GXOI/index.html","72c334bfef2484411d099d9445ce21f3"],["tags/KMP/index.html","9e76c1c11b25957829b63ceae7228b96"],["tags/THUWC/index.html","f7b8b29a49544765693cc2a588a8fa80"],["tags/floyd/index.html","7bcb3a845c6237bb103dfaea76d6b188"],["tags/gcd/index.html","2b12cd03f7f802e5672e7a056b4c1518"],["tags/index.html","bab08c863f55b44564e47aa6cd65c82e"],["tags/世界间绪论/index.html","dff84aa29c74a30376006132d04ee74f"],["tags/世界间评论/index.html","ec17160eaca69be830d1f4adcd464961"],["tags/二分图/index.html","5736df8ca5c9ddafb18d62edbc606161"],["tags/你的名字/index.html","2787ccd237279b7c3b976b7b6ecb0e9d"],["tags/函数/index.html","0c0b5bc1e443beed4acdfb040bb5794e"],["tags/前缀和/index.html","f6cb3361bf5eb25a45c7f91889d771bd"],["tags/动态规划/index.html","9aab6ec7b193cdbbb377dc41d57438d6"],["tags/单词/index.html","46391d3663b61f4f62ad6aa6058cb75d"],["tags/单调队列/index.html","34b2dc452066df26d691f4018e60c1d5"],["tags/后缀数组/index.html","1009987525661cd048525c9807092366"],["tags/图论/index.html","b2851fa32aebadfa0e9fe7eb6fc5a050"],["tags/大纲/index.html","a20355c75c8dc9608d6b32b31cc59500"],["tags/奇闻/index.html","aac9e055f619ec0689d64099e14b11e1"],["tags/字符串/index.html","aee04b5aec9841381dd98caa3c1be1ac"],["tags/差分/index.html","cd01f17edde7c8603ced3cd66f45ff83"],["tags/排序/index.html","2e4908887f5b9065303f3d4c4c3ca115"],["tags/搜索/index.html","8fe81ad130036bb972acaa39fa2b4c7c"],["tags/数学/index.html","13721808fa3d7ec5ef197543fc093f0b"],["tags/数据结构/index.html","9ab138090368b75d58488373dfe8555e"],["tags/文化课/index.html","fe30d3f24e317317310b2188b3728f27"],["tags/树/index.html","b36fb7d0838fddf80baa455ab0bfb6a1"],["tags/离线/index.html","a637a6fdc88295a480e4e5dc90f55237"],["tags/笔记/index.html","27e4642676046e6320c1286228fd83e6"],["tags/算法浅解/index.html","3d7a0968924fee054be31e26b6088b1a"],["tags/紫罗兰永恒花园/index.html","9a30ad14bcff12f0d91c65dad6e8a05d"],["tags/英语/index.html","64850d02b4749e68f13e27e23d9ec3e9"],["tags/蒟蒻/index.html","5d6e72105780ff927c80a14cda044cad"],["tags/贪心/index.html","35b49327c6d6d3d815428f4a4bc128d6"],["tags/退役/index.html","56680228eb0df6fd6aec260b5c5b74d4"],["tags/随笔/index.html","1ce3a1f0de259bbbfbd6d5cfef678853"],["transitive-closure/index.html","4b8bdc32f28e77de0ef8a6a131884f27"],["useful-links/index.html","996a5f87bb52d41b67a4c539c48c4362"],["violet-evergarden-review/index.html","2469ce41f5dd537eabceda2431674374"],["you-are-more-important/index.html","f25cd069d5e6f3144cad97c8f218bbdc"],["your-name-review/index.html","c10250cec5c3c6d3c3c3bf93167f633b"]];
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







