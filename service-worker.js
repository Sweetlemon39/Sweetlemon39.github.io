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

var precacheConfig = [["404.html","a10f86c9df5c55957abf37fdbe956ae4"],["CSP2019-graph/index.html","6a58827ecd4d7a0fa8baadf35b73f702"],["CSP2019-greedy-and-dp/index.html","30a04bd34a6bc428587ff34d67f48ec1"],["CSP2019-math/index.html","559dc6fb5a64dac5361af62e38ab9715"],["CSP2019-search-and-ds/index.html","af1223e9dc35d2d8f799fd1189b0807a"],["CSP2019-string-and-tree/index.html","8cd67c3d2544952f0477dd050e1783d2"],["English-7-words/index.html","434c579371181c914bce998d8d957af1"],["English-8-words/index.html","a3b86965a375fdfddf21aeb58c6aa37b"],["NOI-Online-summary/index.html","8cf50e92a5513d71022de2006129f508"],["NOIP2018-day1/index.html","c681f3cd2ba44152ff70e54627515020"],["NOIP2018-day2/index.html","06d75221adc87dcd9ade4e510d18f432"],["NOIP2018-day3/index.html","7281cd3bf1c22958f8de24174b8c707f"],["NOIP2018-day4/index.html","c58aab83c05523c180f99b308800d036"],["NOIP2018-day5/index.html","44c2b98e13006af2e60a2eb9f2670431"],["THUWC-2020/index.html","8409355d80939d49b6a838894e894b20"],["about/index.html","6ddeb08bc8d49cd938db66423d78ed0b"],["adventure-record/index.html","98aff0ea98a7dfebda1c0ca537a2d5be"],["archives/2017/02/index.html","120e133d5748f00d68e5f21780ae76c7"],["archives/2017/index.html","ee9129b55f5203d80d0a3d02a9c3080b"],["archives/2018/01/index.html","3bd21cd49cca47e4247647804c3c502b"],["archives/2018/04/index.html","62a70184d33bb0f70a8057477f644cec"],["archives/2018/07/index.html","818f8d399e555cac41cf3e5664b6b3cf"],["archives/2018/08/index.html","528f1a26abd92f27de375e8dde9764e0"],["archives/2018/10/index.html","0e8edabab8dbef04ed5aa5bf9c0fdfe8"],["archives/2018/11/index.html","1770e93c7610787c9bc0cf5876f22334"],["archives/2018/index.html","21ad0601774a8924a9e0c1e9c9c8a2da"],["archives/2018/page/2/index.html","0ccc0acdb17e3b8610dd7381988f97e3"],["archives/2019/02/index.html","e2c9ea5b1dd188e05646e86041cc8a1e"],["archives/2019/04/index.html","983ba113e265250c809d464b7132feb9"],["archives/2019/06/index.html","785eadd11c0a7e6ee67feb50214807a9"],["archives/2019/11/index.html","b3cdd1a051542a67b813efcad96ea137"],["archives/2019/12/index.html","81159062ca801bffb2f2d8034e1cf68d"],["archives/2019/index.html","ab5a8dc3d29c4839204ec65a4bdd729a"],["archives/2019/page/2/index.html","11f5a27fb1e6c1ab432efe84b6e416f3"],["archives/2020/03/index.html","4a8600af13b3a94fecf6a68b2072400d"],["archives/2020/04/index.html","657ff92a51b30f7d8a3b860369227c2c"],["archives/2020/index.html","582e4b88890a015b033943b17ba094a2"],["archives/index.html","99b4dc3889efee95feec94f1b70bb880"],["archives/page/2/index.html","5546f861df2fdd26629c60e905f73b53"],["archives/page/3/index.html","5546f861df2fdd26629c60e905f73b53"],["archives/page/4/index.html","5546f861df2fdd26629c60e905f73b53"],["bipartite-graph/index.html","80d33b8df08a6de668da8b129cbc741f"],["bucket-radix-suffix-sort/index.html","0397332ca5f01276e4a4d555423267ff"],["categories/index.html","bb8db5bdee426df21075f490e085ecf4"],["categories/即时笔记/index.html","e19f458d910ea26c06943908447c2d20"],["categories/总结/index.html","08afff1f7da79ba721708765f0aaaf2b"],["categories/文化课/index.html","e794399a4af72c20cdc82a1bd4dcffb7"],["categories/穿透世界边缘的呐喊/index.html","4b7fed65781b3ea8a3493a1aa672a3a8"],["categories/算法浅解/index.html","ee529e125b416bec5249215113fdc13a"],["categories/随笔/index.html","3cf42d517da62f278a260f806abe8c33"],["comments/index.html","bf2e8fee8588fde68e4c1ffbab02bba3"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","7a05a7a0bdb8ec6520ed8240b6d22615"],["exgcd/index.html","71d20053aa505598da435019c4171dfb"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","daa57751ff8af1095f5a8ba474914b6f"],["gallery/index.html","df0ae15dbb359305536466b3da0b196b"],["graph-in-math/index.html","b07342898caee5b352af87839417f86f"],["hello-encrypted/index.html","fe48de41711ba969c8cd54bf49c3624d"],["hello-world/index.html","97649a46c16a20942c579aaa8679995f"],["how-to-recite-log-inq/index.html","c15a9de8e8a5f57e73a9110a4d19288d"],["img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","a6cabda23da90e099bea48a20960f29e"],["js/app.js","fc6b6fd83988374192f07ee0adea32a9"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","79a35208f6299bba0be2c81174b25bd6"],["juruo-poem/index.html","fb14fb180940bab31ce79bc2650ee4c5"],["kmp/index.html","a043a461b4138a3eb3f6c819634cef37"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","0ab4671fb4bbccf0bd0f33c02fbf76b1"],["my-math-problems/index.html","4e214066a0ee1ecd2df2c4ce6d05003d"],["noip-2018-outline/index.html","87cd4726742021e0d29392ce5cb7fc30"],["offline-algorithm/index.html","20c7c84bc2ed31968dc7515bde18f86c"],["page/2/index.html","7909cafc542f0c62cb4ea85f3fe3f7cc"],["page/3/index.html","315d92129e27a26d60f03ee963bc79bf"],["page/4/index.html","b2747a867be2dc22036b4d212cfe1ff6"],["random.html","0f90430586274a91f73976a0adf44793"],["retirement-speech/index.html","1af346f62d33e23a97e715530682a765"],["s-and-d-on-a-tree/index.html","362f0605b6e2edc366725102fa914522"],["search/index.html","96b0a7d05964b45b39332f2b6697de0c"],["tags/KMP/index.html","3d9ea1c8e48a5f56f2aa5dda00466814"],["tags/THUWC/index.html","a6a471238b0e730af3508813f812582c"],["tags/floyd/index.html","a8b59652d30b61f2b9f907ed89e60ea3"],["tags/gcd/index.html","aa8e6996a6d5e19921f9f23f2d457517"],["tags/index.html","e71edd38f347aaca81421417f4326280"],["tags/世界间绪论/index.html","5d7c3211acfeb179929d9b9a56d24263"],["tags/世界间评论/index.html","af26dff856bd95f1cbf01b4167a06858"],["tags/二分图/index.html","a63f188a48a214f877497d3ab29ce830"],["tags/你的名字/index.html","a556f3c31feaa5531a3e12e2d3f6dac3"],["tags/函数/index.html","8cb6abc4f4d0045237a097c1caa46de2"],["tags/前缀和/index.html","cb3224152a956989969d3e2304478527"],["tags/动态规划/index.html","17c6eb91fd89177e5641398a640e168d"],["tags/单词/index.html","1c3694f07a46e85028c75ea5f0ed8677"],["tags/单调队列/index.html","d81b96cb31d0ff508ad218593c21088a"],["tags/后缀数组/index.html","8ee6babbc18ca60d78610b102d9d9ddb"],["tags/图论/index.html","19b61442a4f9ebcdff8b127afed9a050"],["tags/大纲/index.html","2d766cc0c0214df635cc4a73c5fa0f94"],["tags/奇闻/index.html","9d0c775a49806ba4a98d9dda15c7f9b6"],["tags/字符串/index.html","4b161dba24762649e664a233968b5728"],["tags/差分/index.html","5e840706cb5b245a3e66e983c581d208"],["tags/并查集/index.html","627f75fc108769b038b0dbd128539fef"],["tags/总结/index.html","00a4e2d2d65ecbd1d37a5c5abd433351"],["tags/排序/index.html","2f5df4397729f56fe4ccf90eca4947f1"],["tags/搜索/index.html","ca4cb00090d1dc8974432ea118425404"],["tags/数学/index.html","9b7e9bc6988b5e106acad2f5fa7fc806"],["tags/数据结构/index.html","8a5637d614a2e4adc9f2a5814220334d"],["tags/文化课/index.html","55f367d62ae596730dde79509d6deb9e"],["tags/树/index.html","a0c41eaa3346b2c33d9104dfc7d49ed9"],["tags/离线/index.html","387de73cd5745871379d67a0818eb24e"],["tags/笔记/index.html","e0daf29c07c9c00901139487e0986a23"],["tags/算法浅解/index.html","298034ca75ca8bf439d579da57cc76cb"],["tags/紫罗兰永恒花园/index.html","e1d606767d2e1b0a55ca4a46ca5f9aba"],["tags/英语/index.html","527df4ab435496b58ea39dd5460d7ede"],["tags/蒟蒻/index.html","5168b3c229787d0c9b04044454ac10c3"],["tags/贪心/index.html","e96b5594fa4c3b8ed249c52788d90aac"],["tags/退役/index.html","eaf6df0fe805b59dbe93aa341a591e3d"],["tags/随笔/index.html","2c9a049181515b03f66d9aab60c24689"],["transitive-closure/index.html","49470a07d632f80b233bcbcc7b0ecba2"],["useful-links/index.html","17c602ff8319b598a9b0101a2ce86fe4"],["violet-evergarden-review/index.html","c0aff58912289868b238904bd60ff3eb"],["you-are-more-important/index.html","0a82bf58165fec738618f1a41ed26f33"],["your-name-review/index.html","f26bc8cf6cb76583f8867b671779b166"]];
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







