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

var precacheConfig = [["404.html","6fcd803aaf879e1d0ba2efad249b05e3"],["CSP2019-graph/index.html","95cdcb99e5b70a5d74ecca55b6e10ce7"],["CSP2019-greedy-and-dp/index.html","a75df3de0e8458b4ac984506b898213c"],["CSP2019-math/index.html","fca3a087a9a0ea516abed70e0320f830"],["CSP2019-search-and-ds/index.html","30f56e976cd8c8ebe017d850e59b5931"],["CSP2019-string-and-tree/index.html","a921e32d62a480616bf29ef867bd60bf"],["English-7-words/index.html","66c70f7298b64484bec6573cd3f1db6d"],["NOI-Online-summary/index.html","c56a656c8335271f92bf62a566b854b4"],["NOIP2018-day1/index.html","c1cb2668aa13bc701fa76eb2147b4479"],["NOIP2018-day2/index.html","70f0f3577c605e69c778602ba683a5ca"],["NOIP2018-day3/index.html","e1cf5f86f7e59f3ddfacd06bd01fa64d"],["NOIP2018-day4/index.html","c7a335b08a8422e043857f9f564d830d"],["NOIP2018-day5/index.html","55f0debe631e05660bb4b46a964989e2"],["THUWC-2020/index.html","af2ff75321dbac31bf9191f84b18f484"],["about/index.html","7d6b3b185d6620f63dbec22ff00b5aac"],["adventure-record/index.html","660a211e7c9abc4ff2b29f36890e5224"],["archives/2017/02/index.html","7360b9e366daab3899940e2ed67a767c"],["archives/2017/index.html","01ba52abf5e22a36009f32e7b5a95786"],["archives/2018/01/index.html","a45bc5e8cd0a5dba5dba1efecb9d6686"],["archives/2018/04/index.html","0c5c4e03bba8d34d32194188be43a8c7"],["archives/2018/07/index.html","0b91f566a03ffb6957170fc495be0816"],["archives/2018/08/index.html","cc0990e6a9aa47c73f05be41719a6b3c"],["archives/2018/10/index.html","420200101b75a674f3faa0aaff54a01e"],["archives/2018/11/index.html","7064f5b6ac98cfbeb24bd60c1b34ec39"],["archives/2018/index.html","d1ca71816ed538ce805f0b0dc3543d82"],["archives/2018/page/2/index.html","34ed209bb2ecf7bf122a4ca6cc7173af"],["archives/2019/02/index.html","81108febb0d2bce80d4162a0b3c5971d"],["archives/2019/04/index.html","9cd96632f318d0469b6cd7f3fd722c3d"],["archives/2019/06/index.html","26524161fae5e3fe5a9ab82a81c2a902"],["archives/2019/11/index.html","b32ef8508283b6e83c0da3bc5dac9913"],["archives/2019/12/index.html","5cabcf3530ea4d7e6739ee77cb3e2024"],["archives/2019/index.html","6416ac2947dc77dbbff378fecfe889a3"],["archives/2019/page/2/index.html","b83fcc2a6324f319d6b5badba399adfc"],["archives/2020/03/index.html","9015da1a2c6cc7ab43bae87d6686d1e0"],["archives/2020/index.html","792d67a7738f5048d24e52da8b4a3e03"],["archives/index.html","c05cb4c6aadc3a8aad41d7bb4c9bd4ae"],["archives/page/2/index.html","9af33ea09e369c53a05b61e020f16738"],["archives/page/3/index.html","9af33ea09e369c53a05b61e020f16738"],["archives/page/4/index.html","9af33ea09e369c53a05b61e020f16738"],["bipartite-graph/index.html","fd80f650657ac4496fc062eaafe284a3"],["bucket-radix-suffix-sort/index.html","590396db42731af9e2138e4288ee5a90"],["categories/index.html","adcec5b7709879c5cbf715c99b186b70"],["categories/即时笔记/index.html","3b50060a7acad75c4dad38c603b7c47b"],["categories/总结/index.html","5fcec5b3a09bd960bad3ef0a302bb460"],["categories/文化课/index.html","e61233dea1078fc4c2d3f9185a0a3e8c"],["categories/穿透世界边缘的呐喊/index.html","0122daffe2b38ef2e373c8b5fd0f9535"],["categories/算法浅解/index.html","b7f782023d03b7e225e2235039c79905"],["categories/随笔/index.html","d88647934a41c4a138a7d886fc177bec"],["comments/index.html","8ed33be06a520b63c7b27ea9478cfcd3"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","63f9cafe0c6c7bfd992a7fd5cee43b8a"],["exgcd/index.html","9498b976c909b6bef33fa03ec59633bf"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","392dbdbffc04f20a822da2e879dfacfb"],["graph-in-math/index.html","3a0b2a415007d632d26ed7eed11b380b"],["hello-encrypted/index.html","fb73a7104a131ff14f813fb001a4484b"],["hello-world/index.html","05fe7877a8f2fa4723fc354234213694"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","2c89de4b9aa72e07bd52d0691c13bf2d"],["js/app.js","fbc422d3b5fbb3182f6a1972890f6daf"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","47175c73adab98eea8def6b1470c760d"],["kmp/index.html","3c1c2985da8b8cf50e81c2783410b83f"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","1c44585e7bb7d3ce7084d53e3b99f626"],["my-math-problems/index.html","1d843439eb675445e3adedf24ebc8dca"],["noip-2018-outline/index.html","dd47092c866ed54056fcb099348baba7"],["offline-algorithm/index.html","646b67ee2dd2dde948e8eb4456bf3943"],["page/2/index.html","4c38687f92accd31bc3231d0e064e3c1"],["page/3/index.html","80b732b824d4c734fac5f5142a3a4b74"],["page/4/index.html","4ac8ca0cc380b0f917def3d52f47e640"],["random.html","cfdb82c6c1bdac92d3db8fc039d16396"],["retirement-speech/index.html","8af9bbd5c031d6fb64f608119b4d8190"],["s-and-d-on-a-tree/index.html","84fd09ebd31f2e3d58d6659d6810e6bf"],["search/index.html","7850ea733d1587e48d1a8b599afeec8d"],["tags/KMP/index.html","656e60b6a0a093320b72fba71db9a014"],["tags/THUWC/index.html","d5ccb2507d29bd2b2651a769b548880e"],["tags/floyd/index.html","2673aa05cfbdac683b17a7943cb40e9d"],["tags/gcd/index.html","7fb13cf04ed0ab0458708b884da2b9f1"],["tags/index.html","5c025b2ebd6e7d6ffcb712f69e07131a"],["tags/世界间绪论/index.html","f0974266ddd02dac2a18e10eef55152f"],["tags/世界间评论/index.html","281079a7026deefa1153ca7880c94b91"],["tags/二分图/index.html","334a37cd5bf3de02ecb9fc8ef7bbeb9d"],["tags/你的名字/index.html","7f370647477a28bbc4c8c6c9005f4350"],["tags/前缀和/index.html","e1d4e695f6fda0810dc89b804af569e5"],["tags/动态规划/index.html","f132ee1ba31f4b485c53654c3babbd3b"],["tags/单词/index.html","058438025ce5d9eb25c3b54c2b18d21e"],["tags/单调队列/index.html","81c6c7f552d4f814ec2927782abcb8e2"],["tags/后缀数组/index.html","86fac710c11c9e080e388012c0ea6f3c"],["tags/图论/index.html","514a0e916021bd79389ffff5a71660cb"],["tags/大纲/index.html","a24d66be690161e5053b8b4090e1dc9d"],["tags/奇闻/index.html","5a59dbd291ed32dcf5a94f1c97e254b8"],["tags/字符串/index.html","8a330a65b85b603493df4bc853ae6bf5"],["tags/差分/index.html","583bbed60f56a6514f279d64ad9a8edb"],["tags/并查集/index.html","83d48116560d8456e5ae12e67c86b5ee"],["tags/总结/index.html","b84a203acccc64823ad24662f9e965d9"],["tags/排序/index.html","394d944b0256c2e3d4a5f2a5af8a9198"],["tags/搜索/index.html","ef721fd6ede3908abc05de64c28961ac"],["tags/数学/index.html","53f2555ab4fffd37a0ccf11294ea3b97"],["tags/数据结构/index.html","a4ffbd5c8c6a89c19bc1d230f92448fc"],["tags/文化课/index.html","5455fa5859432816d0189a387ffd2e2b"],["tags/树/index.html","96bf1f03de15531893cfb0edff59f493"],["tags/离线/index.html","419e64b70a53274a02f52a6ef715da3f"],["tags/笔记/index.html","2217c4b935136b93b231383241bf0bec"],["tags/算法浅解/index.html","2fb2ea330223e67d2662a472eee788a0"],["tags/紫罗兰永恒花园/index.html","c94dfd4ab67d57740a50162ec7286b01"],["tags/英语/index.html","13db404c36f3e8a31548bf3f42aaaa5b"],["tags/蒟蒻/index.html","3a1dc49845f85d2c7acd25e9c438a2a9"],["tags/贪心/index.html","dc14992d38cd5af29fc129bae46acacc"],["tags/退役/index.html","b2ce444b8f1856987b1216226b5adb67"],["tags/随笔/index.html","cc950e9e0f544eee6363a706ffc3321b"],["transitive-closure/index.html","b64d6e98cf23e7a59b93862be32f380f"],["useful-links/index.html","2f17d00ca67246e1caf037e31c167c0b"],["violet-evergarden-review/index.html","f680a66d917bfd97ffa28ebd472391b6"],["you-are-more-important/index.html","99127ed2e10ea77e6d16633a4c06fecd"],["your-name-review/index.html","2b03e40f25e889e08228eb71a37149ef"]];
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







