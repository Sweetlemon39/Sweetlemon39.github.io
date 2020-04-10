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

var precacheConfig = [["404.html","61e5a293456dc72fc37a64afe21fde78"],["CSP2019-graph/index.html","d37db70ee88c593de88f3ab042c5c088"],["CSP2019-greedy-and-dp/index.html","a2d32246aefc027a3da982fef957d1e1"],["CSP2019-math/index.html","d7f673181ad93ee844ccd16b434b99bd"],["CSP2019-search-and-ds/index.html","6ff4e2c3154cf5bc6988e6ad9767e97a"],["CSP2019-string-and-tree/index.html","75063a1c88ce75c7a610a48cc27365fe"],["English-7-words/index.html","13a3432c443728f873b0f9e9378719ea"],["English-8-words/index.html","1a215a6bd2c75a798c1ff2adeb489778"],["NOI-Online-summary/index.html","dbe2352f3aa5f2ef8c44842d5979972e"],["NOIP2018-day1/index.html","c027c1a1920b27c0ae84958b116ee64a"],["NOIP2018-day2/index.html","3a54decde3e5efc1c8384737e4709aa3"],["NOIP2018-day3/index.html","5956d97c7153efda1590845c2443d7d6"],["NOIP2018-day4/index.html","2934ddb39be83a08086b1c76236ce61d"],["NOIP2018-day5/index.html","cd0f03d73e316532177e30abaabffa64"],["THUWC-2020/index.html","40d844ea8c30d8ced84de2af52c139ab"],["about/index.html","a6b3dab333a7f05c8f1368a528c8d3fb"],["adventure-record/index.html","bc4e89547c918ffe2c89a6b03fc9780e"],["archives/2017/02/index.html","906fa4ec41063567c62e82e2abb6929f"],["archives/2017/index.html","9f5ce77f8cd214bd3234d6b399c63bb6"],["archives/2018/01/index.html","5a0b1b643d1bdf4ff5818f0b24bce030"],["archives/2018/04/index.html","3704b30dfff804bf66ac7bc9965a7640"],["archives/2018/07/index.html","f7ab5b024f7bf1823b97b227d8fe4bc1"],["archives/2018/08/index.html","046152179a9c34fb5e604e8bd04d176d"],["archives/2018/10/index.html","2de3c6795d7761be3a296d3ff4daf6e0"],["archives/2018/11/index.html","d92ca138b0d5e4c15a1246bd246d5fc2"],["archives/2018/index.html","ee0fce20bc8d0a62e6a59c5613d2e963"],["archives/2018/page/2/index.html","7dbc6da5f2b0627e883a3d965c87e7a9"],["archives/2019/02/index.html","0571c98c6c4dcaf6c274478921700278"],["archives/2019/04/index.html","e2f2bef55227de280f167147afa95c2c"],["archives/2019/06/index.html","de11a823836b26876e0453d7713aae10"],["archives/2019/11/index.html","80fddc366561c88949aaec35ef60b202"],["archives/2019/12/index.html","ba61ae351da89059eca8799bcfd232e0"],["archives/2019/index.html","f6c3fcfbdfb2ffec9883ce43c80d20f0"],["archives/2019/page/2/index.html","5f715c029028e2a21e0906ef5e871668"],["archives/2020/03/index.html","d3dd7032c37d144fc4afc15d6898a358"],["archives/2020/04/index.html","9e8e0e1cd531a686826c0c90d596e646"],["archives/2020/index.html","e8b13284699ed65023a490c8572ebf97"],["archives/index.html","910866b0b248da8dac2216b73ceec1e7"],["archives/page/2/index.html","b0e2f3f2776e49284eb664384039e738"],["archives/page/3/index.html","b0e2f3f2776e49284eb664384039e738"],["archives/page/4/index.html","b0e2f3f2776e49284eb664384039e738"],["bipartite-graph/index.html","23f6217e4521233289aac598d4320690"],["bucket-radix-suffix-sort/index.html","d0e2f161e0703751ea0332a09013250b"],["categories/index.html","db68261a0dd7eac03c4ed67bcfd2fe11"],["categories/即时笔记/index.html","b441ae149f0ddfc188ffaf0344f75c8b"],["categories/总结/index.html","be3a3b3adc22743c30d2259af09a36e6"],["categories/文化课/index.html","1082d6d63ceb10a4f64d9a1f5a5534dc"],["categories/穿透世界边缘的呐喊/index.html","5ea1b4700c87118b36ce9a41d0cd5046"],["categories/算法浅解/index.html","00e2d21efac5d0d250d94f279312a552"],["categories/随笔/index.html","284dfe3bc63899b7b662055eaf52fce0"],["comments/index.html","aca53a5c3ff53715388f44724d97840f"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","6fcf1e4e25619270b2084e975151bf45"],["exgcd/index.html","4bc3b21402297cbdd717e4a70b341b51"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","f81812249a9747cbf8da1092270bf1ee"],["gallery/index.html","603f6b4c9c356a4712d3bc2cc9070543"],["graph-in-math/index.html","92b4787eac5ec8bf170b09d97ee9da9e"],["hello-encrypted/index.html","b75ee04bfaee1ae435149f464bee1ce7"],["hello-world/index.html","0d6f5f314d179ecd9cb1f5bfd5c68628"],["how-to-recite-log-inq/index.html","ee76b110f22cec5eea510ae333c1ee8b"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","cf40ef0e8b2e4dbb8ebde6899bf29f6c"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","b18122e02974be4ebdb7c5d81636cb75"],["juruo-poem/index.html","09272c9c298651bb6c66b3cc15b3e88d"],["kmp/index.html","4bea5c8b2ec19dbb6f0f0e0abf264034"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","fd7f7e67d4c09fc6c8491c25f757a266"],["my-math-problems/index.html","e5e1bcf798d3bfc8d28c555ee04e6a41"],["noip-2018-outline/index.html","ea7bd8b8d4092e8374041f011c60b6b4"],["offline-algorithm/index.html","0e9525801eaad2d1a4b6510a5e755e95"],["page/2/index.html","64e964aca4270f9b2394a9de1de10477"],["page/3/index.html","d9d8bab81667d8412841492961c980b1"],["page/4/index.html","9992c1f8bbe9b3d53967190f68adf6b8"],["random.html","c04bb0ac7f168f01c4dc2014bbec9aa7"],["retirement-speech/index.html","eb48819939fa753bef5ec0f6624a1437"],["s-and-d-on-a-tree/index.html","b5df4e669cce7187f35dfe21786de7e6"],["search/index.html","10849c24e537e7ce5dda1411c663c252"],["tags/KMP/index.html","df71e251eb4abe09e89b768c246e73be"],["tags/THUWC/index.html","651af19be7d75d80e7d18bcdc14c42ad"],["tags/floyd/index.html","273d3f0bf16973de3feaaad80c80a3a5"],["tags/gcd/index.html","d5f75af83b5a063095d91b0883b9a664"],["tags/index.html","985f9c8bd5b279fc9df15367c557cc77"],["tags/世界间绪论/index.html","ea88cb3d76638afef79a118c40e22441"],["tags/世界间评论/index.html","b2f75b68f254f5386b3e6aa9407a4d96"],["tags/二分图/index.html","f961b6998247ae7c2c188dc7cd4c4349"],["tags/你的名字/index.html","cec478fefff2437edea1f68ff66e50d3"],["tags/函数/index.html","998232687c8695ddeeabc5eb1e745322"],["tags/前缀和/index.html","fc7dec9b76a610e099c0bfe208790e03"],["tags/动态规划/index.html","ea5f7afac92e06b7e10a6c863eb9f1e7"],["tags/单词/index.html","036b64843674197b38352aa609c083b7"],["tags/单调队列/index.html","405b2b210cb5299172dd25a81d5d13b2"],["tags/后缀数组/index.html","4122df898176980b5eccaca57fbdf62c"],["tags/图论/index.html","aa69ec71d3b80fcbab4029c0be96b2da"],["tags/大纲/index.html","ecfda13f8acd783e0694b31dfb5bbea2"],["tags/奇闻/index.html","6a5107ad624bb5a4fc76f2b04c5537d2"],["tags/字符串/index.html","abb2a43249935ab04bca5345956bacf1"],["tags/差分/index.html","67c8d85038b26400bd3cd8ead6977d92"],["tags/并查集/index.html","ff7219e60517e73ef5ccf3a6f72e146d"],["tags/总结/index.html","f355078f3b6137a9eaeaeec13b0bba41"],["tags/排序/index.html","d01a1137120cbd1113bf74ee1b9da917"],["tags/搜索/index.html","693affed33dada919e1d9bd1f2557bec"],["tags/数学/index.html","3a4deed0398042f8b5df7d36285fe83f"],["tags/数据结构/index.html","1ec97c9c7abe3dff73bb897dca398a37"],["tags/文化课/index.html","cd24bc6b4624c41c5b2b3f93a913b813"],["tags/树/index.html","d18c84741383787db1873af7db2ca190"],["tags/离线/index.html","58fd9a3791ca35e456686edb09008d89"],["tags/笔记/index.html","ee692dfb2325dd947f81f5315691a115"],["tags/算法浅解/index.html","e6a8a09ead7a233ee939d3e858f34f49"],["tags/紫罗兰永恒花园/index.html","e9856471694fa9cc6342a56c1c1708e2"],["tags/英语/index.html","5dec6a85f3f098cae3c095db5622da66"],["tags/蒟蒻/index.html","28560ef4f7504d77a197103de0c8eb8b"],["tags/贪心/index.html","aef9e0b176c5b2df52c0ba8e93a3afec"],["tags/退役/index.html","57f40e56456c19dc60f0e58697873bc7"],["tags/随笔/index.html","ebca8537cdb6761717a76e12fad24323"],["transitive-closure/index.html","561f5ebaa25cc029da9ced8b2664afc2"],["useful-links/index.html","86dcff783040369f18a792c04053c5d9"],["violet-evergarden-review/index.html","42279e0594986a7cfe42a40fdf96a00c"],["you-are-more-important/index.html","1dc994ac2a5d28eceda59caf06775f2a"],["your-name-review/index.html","7792dfa75129bdc6d17db7a09949321d"]];
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







