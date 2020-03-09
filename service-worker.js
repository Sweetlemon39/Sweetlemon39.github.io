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

var precacheConfig = [["404.html","524c9ccb2c4a3bf419303f563510b55f"],["CSP2019-graph/index.html","6c4db1f2acea3adabe6576a23683b0c6"],["CSP2019-greedy-and-dp/index.html","f5779c8fb9a6fcc9861bf8c765a5fb1b"],["CSP2019-math/index.html","f72a1c8173092d567e403eba35f5c43c"],["CSP2019-search-and-ds/index.html","d1c2643f40bccacd5491673d9058266c"],["CSP2019-string-and-tree/index.html","ad7012b5a337a150986f4b07628aa3de"],["NOI-Online-summary/index.html","a654ad4246a4a026d1d372d3b6be9377"],["NOIP2018-day1/index.html","fd5b8a257a14ea801f4996c557024e5d"],["NOIP2018-day2/index.html","14000743e502865975eae1262e9e995b"],["NOIP2018-day3/index.html","ec5c558867bbf2c34fbae0a3aae02004"],["NOIP2018-day4/index.html","cdfd501a07101cbe613db5d056637c5e"],["NOIP2018-day5/index.html","d85f730a202c8f9de55e976a046a8c66"],["THUWC-2020/index.html","5ae68dbd997445d335f1ddd33dac3892"],["about/index.html","288ad75d05ce5504e4553179c816d92a"],["adventure-record/index.html","cbd8ad391b07acdd311a5c4c8d1a732f"],["archives/2017/02/index.html","8807bf6355e78052559d5ca8cb292035"],["archives/2017/index.html","3c4c481abf891d913007653137147177"],["archives/2018/01/index.html","c5a522f7ae250fb8b4c0eceb1cddb000"],["archives/2018/04/index.html","25d2b0e2bb236892d1fce30f927959da"],["archives/2018/07/index.html","f595ce82837ca45765ddb392e3dedb20"],["archives/2018/08/index.html","8dcd761c42560350be4cfd2673523e9a"],["archives/2018/10/index.html","d62924786b44252fdecf7593f21bc2fe"],["archives/2018/11/index.html","f8bdbc0a3d9c68d698c5ce97b7b9e3be"],["archives/2018/index.html","5caca19572acfc5ce351461554849041"],["archives/2018/page/2/index.html","8c82f92def5998c7a3401d830a3a16e4"],["archives/2019/02/index.html","3230385d98e5447be461fa59de385e1c"],["archives/2019/04/index.html","ff940e9fadfbdcef954eb108f092dea3"],["archives/2019/06/index.html","b0ef20ad77a76d3ec6f9fb0d94dc1fd5"],["archives/2019/11/index.html","af388211fa6e68710e788d37dd8161ca"],["archives/2019/12/index.html","cc75d645c913b9191539d2d77efe8f78"],["archives/2019/index.html","ab169ca01f392c9f9781144dc1876ff0"],["archives/2019/page/2/index.html","fec6290f66bfd41a6a0fa61e0462e7fc"],["archives/2020/03/index.html","41b349dc61c57c9f134873565e76e2e9"],["archives/2020/index.html","f7c9f3b890bb7a5418f530a786aac3d8"],["archives/index.html","e17cefa66d01e6f1750719ddcf4cf1de"],["archives/page/2/index.html","e17cefa66d01e6f1750719ddcf4cf1de"],["archives/page/3/index.html","e17cefa66d01e6f1750719ddcf4cf1de"],["archives/page/4/index.html","e17cefa66d01e6f1750719ddcf4cf1de"],["bipartite-graph/index.html","5502c554a26724a2ec78ad0029a62cb1"],["bucket-radix-suffix-sort/index.html","a6a0019fe58a90bbd08571d5334de70a"],["categories/index.html","ce7b1326100ac697a9071f7b5909c0a5"],["categories/即时笔记/index.html","9fa5cb37c22ebe960d621b866347e03f"],["categories/总结/index.html","26c875bb166cd0eb26efe8a0e1909570"],["categories/穿透世界边缘的呐喊/index.html","57ca7e92e340728b3d3652b40c9fb517"],["categories/算法浅解/index.html","33c72f10d4d7d7b74ea1fe6933a3de51"],["categories/随笔/index.html","1a5b073ee7afa48d5606c1181974b686"],["comments/index.html","250686cacd83438c36849a1596afc696"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["exgcd/index.html","33c829603bd03a18239f01dc2172b0ba"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","f25990395a07db4a4ef3a1827a4e2962"],["graph-in-math/index.html","d4f58d3234c503e8228f91c633462e38"],["hello-encrypted/index.html","064b04c29bbd41657c2e2e9f8236d8e8"],["hello-world/index.html","7e764e9b074d2040a8da8f3b383ed13c"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","f65d8096850069190501fb28cce3b1b7"],["js/app.js","db046ae35a33c7f9e17f68f25188ef4f"],["js/search.js","fe5be68bedd17e1a497cb1c18456a66d"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","673e686a70d755391eb68703d0e2923f"],["kmp/index.html","5aacde31767f6f31203e6d953746ae00"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["monotonous-queue/index.html","429a65aa1260b61113f179d529f73a6f"],["my-math-problems/index.html","1c0964774b2b86779c34d97a0e6c0cda"],["noip-2018-outline/index.html","57c07c69ba551e9c9741662264411c9f"],["offline-algorithm/index.html","1a09f06b0c95a759337d684487270130"],["page/2/index.html","7e5330519281744a0c6a0889c4de43da"],["page/3/index.html","527caefb5026c1ce0e4de48157ff7cb8"],["page/4/index.html","72b15057144b0690dd59a34bd7af4d96"],["random.html","cc4309f1bc7146d55940a7105164a49c"],["retirement-speech/index.html","435fe26664d7ee0a891f7b641163f73f"],["s-and-d-on-a-tree/index.html","f360fc925800efdc2b5eaec7ab584156"],["search/index.html","1762cac29e7965e7dca07603d3916148"],["style.css","80760eab75df264560f0dc40aeb1492a"],["tags/KMP/index.html","70a1ce1bfa0817517a61868b05663996"],["tags/THUWC/index.html","41a2806388521fe195dd7c959c833f18"],["tags/floyd/index.html","5d327b7bb6b9c96a2bad77d2a2ef0984"],["tags/gcd/index.html","a106a7a7381848db2500aa69bc121fa1"],["tags/index.html","097a550d30085709154bf37c7ce99db2"],["tags/世界间绪论/index.html","d65862b8c8f91b78caceed6101891ceb"],["tags/世界间评论/index.html","a6ad72a6f3b114d4127ca52b0abfa57f"],["tags/二分图/index.html","39625a3dd04a5d58ef049c263b197b48"],["tags/你的名字/index.html","c3189ff70bb251c77129b3ee72f1a1ea"],["tags/前缀和/index.html","bf60d8eb0dd4ee92f7805d1a3607f160"],["tags/动态规划/index.html","2347af069b343c7477c68c9c2397faaa"],["tags/单调队列/index.html","46751acca1ad3d0e7456fb659f0b32a1"],["tags/后缀数组/index.html","05e1e2009b49ca0b904501d979df8629"],["tags/图论/index.html","c4db9fb0e7d8c3720a82bdc1cad06de2"],["tags/大纲/index.html","5bc9df7c58fb454b26f53e5af2b6ef4a"],["tags/奇闻/index.html","1b7abc9666875314d01a83d66c8e0ad5"],["tags/字符串/index.html","2f0c9c441b4e0a8f29a8855f49ba329c"],["tags/差分/index.html","54f0c421f5625b968cc09072ff0531ee"],["tags/并查集/index.html","2be93476eb0bf92e1db1381d73763ede"],["tags/总结/index.html","e36948dc53c0224d8813a69e6aa80133"],["tags/排序/index.html","2ea57d1a082d3b0bf7ee180630953605"],["tags/搜索/index.html","a2125a6dd7677533d0e192bbfd1bfaf8"],["tags/数学/index.html","71063dfc8629d93c1efbd334004d8b4f"],["tags/数据结构/index.html","15ec39800f06a7a49591acf0c982012c"],["tags/树/index.html","4b97c0ae297f248a64165149317b6551"],["tags/离线/index.html","aa952623a32ba62f3ff4c51b2aa5d8cf"],["tags/笔记/index.html","c83f134435990b2ba906e5f2c39796cc"],["tags/算法浅解/index.html","b2d573edce1ded6040d2f25798251aa4"],["tags/紫罗兰永恒花园/index.html","b1b9425ed9e161b58d31bbed5cffa06c"],["tags/蒟蒻/index.html","432a693ff6f4252bd79609d8c6fe7f11"],["tags/贪心/index.html","8e57608b9a59a100402b1f9556cd7bba"],["tags/退役/index.html","1bad2175f15069eeee654307b32a60e4"],["tags/随笔/index.html","9a6402998d211ff68683e60793c41ca7"],["transitive-closure/index.html","fee748f4a276a3e4dbada279212c98a9"],["useful-links/index.html","eeaa06069e00dc1b1e06d69213d0dd72"],["violet-evergarden-review/index.html","51f9028747fc257efe6f386047a4b64c"],["you-are-more-important/index.html","0a9683e91c8a527c5ccaa4b620a3a8b7"],["your-name-review/index.html","1ccd9237816f57eb6f0bc22ebf80f872"]];
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







