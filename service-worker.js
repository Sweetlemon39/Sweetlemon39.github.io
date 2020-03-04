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

var precacheConfig = [["404.html","5c71962b45387131b66591e776268a2b"],["CSP2019-graph/index.html","313c6b17a2a049537e98a790c9e9a4fb"],["CSP2019-greedy-and-dp/index.html","573fc305cde2cb3e7eb1a841d3e812c3"],["CSP2019-math/index.html","0382ed769d6ed49b4c38ccd3be95acad"],["CSP2019-search-and-ds/index.html","c14529b69c4ede453c494335b20a33bc"],["CSP2019-string-and-tree/index.html","230846a86dc5b14c35ebafa8135e3627"],["NOIP2018-day1/index.html","5dc9c8bc1c76a9aa3ef10222026e7958"],["NOIP2018-day2/index.html","774fd3bd0715aa00e5a093e25fdeecdd"],["NOIP2018-day3/index.html","2fddec1596344cbf8ece8bfd4843cd18"],["NOIP2018-day4/index.html","279e03fe357778a6a4075eb6ecdee80d"],["NOIP2018-day5/index.html","c49f5e5c541e83fcbf6b83a9052c5f7e"],["THUWC-2020/index.html","3eff9a2074466d06739f3d26c68762e2"],["about/index.html","3eef60724d8f0220741b9276d9475150"],["adventure-record/index.html","a60514f48524d3a07188d3873533649b"],["archives/2017/02/index.html","267a312117e39a3902a14bc4fe725546"],["archives/2017/index.html","d752d37d96cff1c856e0365e32db1e8e"],["archives/2018/01/index.html","15a8152b9aa6ed805680ca88745b87b1"],["archives/2018/04/index.html","215ca18e7416413eee322cca1e3bf741"],["archives/2018/07/index.html","390fd0bb509a1a790e69481e1d2d4304"],["archives/2018/08/index.html","e7977af7337b3ba5c6e351dd18862f90"],["archives/2018/10/index.html","1dcdad641ea81525e854d15977e4bed7"],["archives/2018/11/index.html","27d69c3b5d0fb7d89d78796198ca8994"],["archives/2018/index.html","b572b463a2cea51cf71a447eba9c81d2"],["archives/2018/page/2/index.html","fd83204a940aa228dba4bc87ccdf93f0"],["archives/2019/02/index.html","5fbc0d52cb7f1b977588b1e930cebec9"],["archives/2019/04/index.html","ae1652ebf8ef45a4f1a1462387964c7f"],["archives/2019/06/index.html","47d8ef42642a2cd5668665cfe38526bb"],["archives/2019/11/index.html","a51b2c162c11cd62851e0133dd880a16"],["archives/2019/12/index.html","821e6d9e493b98abfb7008da4175ce31"],["archives/2019/index.html","0802d43e78312244607d1d52e53557a8"],["archives/2019/page/2/index.html","fe03db9a8a7a0dfbf31034e64ab0aa49"],["archives/2020/03/index.html","a5d78ccbf6d77f012cac4b4d428b5f02"],["archives/2020/index.html","8d63b8af6ba1d39eaed882a182755556"],["archives/index.html","363dc0260e4d3f3997a762b319698b4e"],["archives/page/2/index.html","363dc0260e4d3f3997a762b319698b4e"],["archives/page/3/index.html","363dc0260e4d3f3997a762b319698b4e"],["archives/page/4/index.html","363dc0260e4d3f3997a762b319698b4e"],["bipartite-graph/index.html","02970f4477e74b230819a1e4c03fc6b9"],["bucket-radix-suffix-sort/index.html","ee3e3bf5bd5087d5aada96257f3786df"],["categories/index.html","320ce1b3b3fb2817f9df6c157226317f"],["categories/即时笔记/index.html","2f906a3f2933f40bd088363547d43021"],["categories/总结/index.html","087d99b30e1b47d1322121458174f342"],["categories/穿透世界边缘的呐喊/index.html","75b57d9a49802bc30d18a8d530bddb9f"],["categories/算法浅解/index.html","9a11b2ab86b59fed3a3fd2d496654fe4"],["categories/随笔/index.html","2d003c404bc399a2e10e5b3185bc32a2"],["comments/index.html","11852093cc45830ba9de4074e853f68f"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["exgcd/index.html","07dcbc036e550e8703a481e4916dd6f3"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","89d9c9efeea9c6367b475e9bd35a869b"],["graph-in-math/index.html","f8946254db2b9bbf98ecd09ba17030df"],["hello-encrypted/index.html","c42fe18d5a3ac4adb5be1b41d01e213d"],["hello-world/index.html","af285d5a38b5b03b33eb65c27013bb88"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","c90846289439248f67437b787e244584"],["js/app.js","df25f304a0f95131d2f77826fd72e338"],["js/search.js","fe5be68bedd17e1a497cb1c18456a66d"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","c6cb7b3edcd2480a395518fe8ce338b3"],["kmp/index.html","38b8c32f69be62984f02aaac5d4265b5"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["monotonous-queue/index.html","090f6dae0c93cfa8b960a96865c8e148"],["my-math-problems/index.html","95532621cc0a1134d7e298b82316011f"],["noip-2018-outline/index.html","089cf963a60e57ff4dc5610706ec70fb"],["offline-algorithm/index.html","6b9a508bffa1d4cde14ea316fad97f5a"],["page/2/index.html","4aeae3b17905776996556d015fc0d15e"],["page/3/index.html","280c3cab2064f451e44a4bc3f54bca6e"],["page/4/index.html","f91b108db1cf86ad1ede9aca219186bc"],["random.html","f4b6d858a3d24d17fcabfec4302f31ec"],["retirement-speech/index.html","ee52abb73afd57af3ccef30b6308d48b"],["s-and-d-on-a-tree/index.html","242c55a03e86f5fa3703d183b14f074f"],["search/index.html","b1645b955fffc1513a5aa1ddb4ded863"],["style.css","0d9a8ac258b92cf634e0182192b4043b"],["tags/KMP/index.html","723f556e078f2e6135bc91b4846cc9b8"],["tags/THUWC/index.html","e99974ec24cf2e637ca3e046176a8870"],["tags/floyd/index.html","3f593bb4cce71c1fa839bcd7990b268a"],["tags/gcd/index.html","1e8ba5fa98f426943e94b43493f323e7"],["tags/index.html","c8e505cf89aaa95c38650471afd87e6c"],["tags/世界间绪论/index.html","7e195c7e775b84f24ca60f985603d4bc"],["tags/世界间评论/index.html","bf137a6f8c3ff0166552dacd673e5e36"],["tags/二分图/index.html","2caaf1bb93b86af34f80202373a12d3c"],["tags/你的名字/index.html","3af024a7f20a6a43c8c1df086cd1ed84"],["tags/前缀和/index.html","92869aec64056f3bd91a8912f8b98e83"],["tags/动态规划/index.html","95f4998bdc1c301afefac86d9f6e165b"],["tags/单调队列/index.html","8d011b1836c22985e35cc2bfee318f38"],["tags/后缀数组/index.html","e085fafbf9f9d6345c2d2a89d0f2cd34"],["tags/图论/index.html","43e7d2548f36f153bdedf0fdba2ed89d"],["tags/大纲/index.html","a78dea7d933d469512df9e4d5be6c5dd"],["tags/奇闻/index.html","06532dcef7a84529f463915c67f538da"],["tags/字符串/index.html","24db711b85f5fb74f9e2fb31af935355"],["tags/差分/index.html","958eb04f653921162b570da241f36be6"],["tags/排序/index.html","ab6116c2e6256faefd079c2d043b69c2"],["tags/搜索/index.html","d22e3fde7bc9b99ff883eda7c1547b25"],["tags/数学/index.html","e8d32e41bfdd19726315d22da006ba01"],["tags/数据结构/index.html","e4b772bdac3f0d01bc33a034efc32f9b"],["tags/树/index.html","da199fa49d42b3ac47053d8c1bd47ebe"],["tags/离线/index.html","8087b9f8858dbdfd1c87872d1eae3629"],["tags/笔记/index.html","0139d29ccb8b46c2401d92b7d8f6136d"],["tags/算法浅解/index.html","4d55695b5eddc938c71200c8a6103577"],["tags/紫罗兰永恒花园/index.html","16d1703812995f89aec9e1acd1b85ef2"],["tags/蒟蒻/index.html","e2dbe4c38ae33b11972e0e43b1b78106"],["tags/贪心/index.html","c33122fb6da77781d8be29ac0bd7a9ac"],["tags/退役/index.html","459481e507df229a1dddea4b14a1fe37"],["tags/随笔/index.html","52802cf50c0abc71d24955f67a3b0c6b"],["transitive-closure/index.html","56dc6f455efed266b5424f817455892b"],["useful-links/index.html","0f297ad05ec57d4c83f78bddfe15aac7"],["violet-evergarden-review/index.html","19f9ed345612e3b73ceff84fb9357783"],["you-are-more-important/index.html","4947c4e07e982952a47b04c33932dfcb"],["your-name-review/index.html","a117fe8612afe0b2c571ae552d428d8f"]];
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







