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

var precacheConfig = [["404.html","d9bfb61a2368a8f4905f9119c12ac011"],["CSP2019-graph/index.html","b0fd7d0ff5c15d8f0199641b2ecd9437"],["CSP2019-greedy-and-dp/index.html","f6521a9e2b8152460bee6b54e702ffa1"],["CSP2019-math/index.html","455bcdb7592ab92bdde33d3d6bed4c44"],["CSP2019-search-and-ds/index.html","93ad0904e080722678dcdf5b34c4508d"],["CSP2019-string-and-tree/index.html","dc9b06523a82c47ec69f49c148fa753f"],["English-7-words/index.html","c612fd0d3c091ea4a1c2f645c03cc88d"],["NOI-Online-summary/index.html","b0aaaa2aa7bac0d8efa95490c843b3d7"],["NOIP2018-day1/index.html","9732cc2896edfed72f7a5f3e16614a51"],["NOIP2018-day2/index.html","cf0dbae6ae6f299934cd07217182beb6"],["NOIP2018-day3/index.html","3a6b6828c843a450d4d9bf497b720009"],["NOIP2018-day4/index.html","a352fec183209bcf39cd72cd63338dc7"],["NOIP2018-day5/index.html","5d0c80c36a0360fdcbc73e918ba271f6"],["THUWC-2020/index.html","5d454ea70d902ce2a3e82d3daeb04039"],["about/index.html","974ce9d8a97982a0d6e611b2fd961bfb"],["adventure-record/index.html","1dddb65226ab03f5444c28686d1e27c6"],["archives/2017/02/index.html","710788b3a5e82fb2dea9f5e2301d0f37"],["archives/2017/index.html","1248d26967a1df5bb31af5769b71b524"],["archives/2018/01/index.html","844bc28204020b230d15c8814484b5ae"],["archives/2018/04/index.html","18d7c55580d92bd276e28a073d5f4bfa"],["archives/2018/07/index.html","91c0a130defa3e91ab1e28ddc0f8fca2"],["archives/2018/08/index.html","5e6035db3d2977c34a3b661370903824"],["archives/2018/10/index.html","3fb09c8a5c0d24ecdcd3c53869146289"],["archives/2018/11/index.html","c58a18697e2cdc7ba51ce201d5be5254"],["archives/2018/index.html","a53da97809de1069530fce20ef50775d"],["archives/2018/page/2/index.html","ebabd2adb6d4632e88f22e67f840dbf6"],["archives/2019/02/index.html","348b5398bb64517881b7dc56ea053c30"],["archives/2019/04/index.html","477edf39f0c77a56ea605e9be10634f3"],["archives/2019/06/index.html","c68129e81eda4148a14e829a4230ba6d"],["archives/2019/11/index.html","629915436c92e839875f56dde359e304"],["archives/2019/12/index.html","e294e1ec43a7d3c6de5344e7732c31f8"],["archives/2019/index.html","2c9bd4f366dbcb4e5135440bae025efc"],["archives/2019/page/2/index.html","c8717302a320d5a529f13864440dfd86"],["archives/2020/03/index.html","def68f753d91b0b670a3b20d7d367834"],["archives/2020/index.html","8131c2b3fa71dbb22774673ca34b57da"],["archives/index.html","fdc930ba6217c727ea2e9e99f15f89f4"],["archives/page/2/index.html","c601f4ebcd4e4d923778a2321eaec23b"],["archives/page/3/index.html","c601f4ebcd4e4d923778a2321eaec23b"],["archives/page/4/index.html","c601f4ebcd4e4d923778a2321eaec23b"],["bipartite-graph/index.html","b76daf23172609e1614689e183842d53"],["bucket-radix-suffix-sort/index.html","49796b68437cbb563e0891827a963a62"],["categories/index.html","d21103b62442b595a0652cad5e526c49"],["categories/即时笔记/index.html","617a33e3b2c24dad4a03dfe48b7e0de4"],["categories/总结/index.html","8381e581abc012594cbb8df61c921cf2"],["categories/文化课/index.html","f0244e4c7e9258065010d23920b49beb"],["categories/穿透世界边缘的呐喊/index.html","18085457ad6b5470b915562af6038f90"],["categories/算法浅解/index.html","80bf8e97df40eb22da0f8765171a7ee8"],["categories/随笔/index.html","b5ca3f321db1379129325c4a841e2e01"],["comments/index.html","4bbd21bbcff2f1f9744b25e4bdb38576"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","394bd92935b61eaf0255199a69cb4086"],["exgcd/index.html","f6a02c57c0a77e6a87b9bbfbb1878310"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","38f2e788211d5ef179c69f69f0647a68"],["graph-in-math/index.html","221d7c587cc2f407668f7aaff590bda8"],["hello-encrypted/index.html","3628cb97dc07884d04013e7b33f2d03a"],["hello-world/index.html","06e10a2a39cefa611c346c57711c6eca"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","f5342b7838c024991f8b0edab7e65adb"],["js/app.js","69beb3ee5e83a0b60adb49e36feda559"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","5a46d63a98da9b32da67266ced5dc93f"],["kmp/index.html","3c23b10c6bc751f340a7881533f86c57"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","6789437c9c288ba1d979704f50dc7a64"],["my-math-problems/index.html","b572e58a22326730be5d6cba11c6150d"],["noip-2018-outline/index.html","0eb5f900e3e9d9df38821e26ab7b0107"],["offline-algorithm/index.html","e53ceb87a3be1f13882d0f049b208efe"],["page/2/index.html","dbb2a61b64f55364efc62b15c8ef298b"],["page/3/index.html","0490690b8241137da3c9a3d2f9db3ebe"],["page/4/index.html","871cac3e87ae34af24fae54fa2008665"],["random.html","a095a8867700b20c3c523c385b51a1c9"],["retirement-speech/index.html","ef4a42e23e6756687324698e7323a7a0"],["s-and-d-on-a-tree/index.html","be68bb7e3b342ca591162a1ba7d2cffd"],["search/index.html","768f747b0461ec4d2a60f2b2b1bd47ae"],["tags/KMP/index.html","114a933152060886f5ba200e239387d1"],["tags/THUWC/index.html","53d7cbc2a99f58ac050931fa1fb27c4f"],["tags/floyd/index.html","a9be99bfcea44cb2d457aeeb0d210045"],["tags/gcd/index.html","45b83bab86cada427bd80398eeb1f1a6"],["tags/index.html","5ac4166b84be991f2120c13db5310ede"],["tags/世界间绪论/index.html","f47c61564bfab44ad6894b628ab07480"],["tags/世界间评论/index.html","fffd507d99ca22eb247c40a4ab8b6673"],["tags/二分图/index.html","b7d6caac74d307d744e02677c739b139"],["tags/你的名字/index.html","a70d0e4db56e3d88c745e3228f77160f"],["tags/前缀和/index.html","2c36fda5b90084bf45287b6988eb15f4"],["tags/动态规划/index.html","59c3ac45f5260aa421c88a6f19bc5b13"],["tags/单词/index.html","912631dcc3e5934999f14add419ce39b"],["tags/单调队列/index.html","ffd2ec5bad15c20717a83e70427fdd1e"],["tags/后缀数组/index.html","b8bf8aa3cc89749188ba0931b49bddb9"],["tags/图论/index.html","b882e85423fb23560860578d4e0c938f"],["tags/大纲/index.html","bb0069d715f9b2129da924ec5c0061a6"],["tags/奇闻/index.html","c0d639c8d10cbc06f400af2aed51c056"],["tags/字符串/index.html","01ae7b360642952e2900990940551916"],["tags/差分/index.html","b34d68e8f2536129c0c566494a088b66"],["tags/并查集/index.html","a8353a7437ff331eac7c955105e5c114"],["tags/总结/index.html","a2642e1cf2d97a096dbd28c792a2ca1f"],["tags/排序/index.html","7c1d1ae1b1b438a1dbb5f4d491ae76ee"],["tags/搜索/index.html","19ff5fc0225ae15053c977883343ce42"],["tags/数学/index.html","6ebbd3282ca95161b5df7cd60c94cac4"],["tags/数据结构/index.html","d67f93e80e4045aeccf493dd10fa9d6a"],["tags/文化课/index.html","51d1429e807e2b29627a947d09614227"],["tags/树/index.html","74f98b6c8ef71c43674092fa3b0a9bad"],["tags/离线/index.html","2234732c8a0fd8f103900b65117c3bec"],["tags/笔记/index.html","e7d358dd8d557c8f2d48cb91d5648f1f"],["tags/算法浅解/index.html","4a72a684ef312d8bcf7490507fbeb2f0"],["tags/紫罗兰永恒花园/index.html","f8b53f04e6c0043be401d8a97ecd122d"],["tags/英语/index.html","d1ee7f634c3f482f07c432bae8ced571"],["tags/蒟蒻/index.html","c64fee34c26606a4ddcfe2227afd984e"],["tags/贪心/index.html","8d1eb42cf7aacccf278ea2990ab6b6c5"],["tags/退役/index.html","54e6c97f89d2548ddd7fe2ec11fd42a0"],["tags/随笔/index.html","2b305d3478e47cd034a990b19560c4a9"],["transitive-closure/index.html","5c7dfece30eb7ee4a3c6a6f0c5abfe0b"],["useful-links/index.html","c796ca2d7ab0fbc98197abfe472ccdc0"],["violet-evergarden-review/index.html","406c078494a49daa9c454f4e0ec8a2a0"],["you-are-more-important/index.html","ea5cc89b9c95352017931ad096033c3a"],["your-name-review/index.html","56977845f2913408470a31bee165afa7"]];
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







