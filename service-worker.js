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

var precacheConfig = [["404.html","8770a8643fb36e87911d3fc9dd69861f"],["CSP2019-graph/index.html","3ecdd365327db82fee0498bc3806b076"],["CSP2019-greedy-and-dp/index.html","55922b65cb6993a7689d930debe87bb4"],["CSP2019-math/index.html","c7a3f060095ff6ae37502c82a96a5856"],["CSP2019-search-and-ds/index.html","73cdeb3f1ff59c0f649c5ab23be06271"],["CSP2019-string-and-tree/index.html","ea3a6ea318866282c68fef48cbee80d7"],["NOI-Online-summary/index.html","f69c23691d6f75447113f6d2f92e6b4d"],["NOIP2018-day1/index.html","fdc7ea162de1f6f7790ad99e952790c0"],["NOIP2018-day2/index.html","fa35527695efc31c81eef690d900d7cc"],["NOIP2018-day3/index.html","590120980992bd3416e5d33c63613d99"],["NOIP2018-day4/index.html","70ef15eb01fa7e2ec0f0dedba15a1301"],["NOIP2018-day5/index.html","6c0bb5ad390931e539a4066ece4904c1"],["THUWC-2020/index.html","0dda38223fb245b877a715eb4f455c7d"],["about/index.html","f95f5e814832dbc360691eb5d2b4ef24"],["adventure-record/index.html","85946aff6899b21c36b63225b5c484ee"],["archives/2017/02/index.html","5cf0e4a359e75d81fdb004c0e669efbc"],["archives/2017/index.html","eaecd389619c93070454574870dc437a"],["archives/2018/01/index.html","73ce6699e36ebb83cd239439e694bfb5"],["archives/2018/04/index.html","7c3b51492404dc1dc97454d63e4e2bab"],["archives/2018/07/index.html","4854d49a5308296ac257875ec108566d"],["archives/2018/08/index.html","fbae880fb58b47f5d293ea0c649381a9"],["archives/2018/10/index.html","ae123203f97dd3dfdc7fefb11bc7f00e"],["archives/2018/11/index.html","831042e17360007914867c5b3709fade"],["archives/2018/index.html","42d542889c74f9da8ec0f033b68522da"],["archives/2018/page/2/index.html","7fd76ed5f21cb85e1937833abc4ab9c6"],["archives/2019/02/index.html","ce64691a443d5934df4f4dd3c229b3d7"],["archives/2019/04/index.html","259e951234424349d5b44b7e39f78b4a"],["archives/2019/06/index.html","0f2694755f219837cb5a3a98f29887c4"],["archives/2019/11/index.html","681f058c0e8ee967278bddd916be50fa"],["archives/2019/12/index.html","c8e9c83830b69effb76d8f862502f83b"],["archives/2019/index.html","77e604b47bfb86d6c20bf83e03ff7757"],["archives/2019/page/2/index.html","cb73e6795d1ca0cea61a0383a979ba43"],["archives/2020/03/index.html","a130425baadb72bcfd444000dd76536e"],["archives/2020/index.html","ee002b6285021e12c9355f5e8f30ced2"],["archives/index.html","4039131b6d60d5315c18688fae89932a"],["archives/page/2/index.html","6c7da6afe1ebe5bf2248a5b3becc5c83"],["archives/page/3/index.html","6c7da6afe1ebe5bf2248a5b3becc5c83"],["archives/page/4/index.html","6c7da6afe1ebe5bf2248a5b3becc5c83"],["bipartite-graph/index.html","9b10efa37e4b982ca38df9c8578b5fa1"],["bucket-radix-suffix-sort/index.html","f4a8c099ab876b32bd194d9b7af9eede"],["categories/index.html","1ec588a6d96c52ed1f4b951489151405"],["categories/即时笔记/index.html","e05a235f0e286b58526adf0aaf28f456"],["categories/总结/index.html","e2a6218b2b605ff7618c7f446a3ab8d9"],["categories/穿透世界边缘的呐喊/index.html","556aabbc3b3c1e3bbf48394b1d15d33a"],["categories/算法浅解/index.html","50fd9efe2295e9dd7ad8881afe07fa5d"],["categories/随笔/index.html","14208c40bbf7b8e56f1337b508831af4"],["comments/index.html","60c2de8d8eb90893b97f8bed9bf83459"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/style.css","40098747f4f60aca531c326030ebba04"],["exgcd/index.html","638454853f1a7d947365273627f602a7"],["fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["friends/index.html","a36639f53284029e9624bb1aa62aa853"],["graph-in-math/index.html","dfd2986eaf9e503cf34d8f8defcc8e27"],["hello-encrypted/index.html","b4e11a19cd5e93ce6892d384876c1d7e"],["hello-world/index.html","3b2077ffc4631235d96cce9d76173913"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["index.html","9ae2f9bce6042c1340314b91a7b8e11f"],["js/app.js","5619acc77c6b2e7d78023d382978cd50"],["js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["juruo-poem/index.html","59c3c22f9b12fd6540b5e800240655a4"],["kmp/index.html","5a61f1d62359263d372bcfb7ef6763d2"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["monotonous-queue/index.html","60a55879b769cc64f39821fb3f196692"],["my-math-problems/index.html","3dde40434eb21b5286d1bdf881d3ab11"],["noip-2018-outline/index.html","d6ac17723f5a6ae3b37ce078d364d8f8"],["offline-algorithm/index.html","9e6a7b7b1af231eb0619079ff15a3d55"],["page/2/index.html","0f8653e3f71e56232f87ea0ad2603762"],["page/3/index.html","9cff3863aa36aae3179fa034d49cd541"],["page/4/index.html","f21e3298c36c8dfab644fe38c7a0da85"],["random.html","1c5d975ab1819627760336335d0873a1"],["retirement-speech/index.html","087867255c5b91bf4b8dfa0c67e5f428"],["s-and-d-on-a-tree/index.html","0074bfb34457087899bb000460fa6cda"],["search/index.html","5aa4a370fd9e8cb8d134018cde1a3653"],["tags/KMP/index.html","81b34a7ca89deb422436a9288ee0ad50"],["tags/THUWC/index.html","e4d01038da5da23c4e1be9f3f357275d"],["tags/floyd/index.html","b5a690d41d8a74f5892d998e67c5738e"],["tags/gcd/index.html","4c5d8007f2c43b4f209e61244cb78f6f"],["tags/index.html","8fadf4cc6c4455fb217fd5e43f0b34ad"],["tags/世界间绪论/index.html","5b45995ed46469ec2a2ee55e676fdc7b"],["tags/世界间评论/index.html","29398b3eeabdcfc7a8e22b2b2c4660b9"],["tags/二分图/index.html","8f3d601664072381fb2da2a8eddfe12d"],["tags/你的名字/index.html","07ec8e1abfe0fc6b80d5585902795259"],["tags/前缀和/index.html","2efdb2122aac27bea5fbd345f1909bef"],["tags/动态规划/index.html","687f26f88877f33d6f1ab9b7c57f5383"],["tags/单调队列/index.html","3960c49f1959dbbd65636cc95925c7b8"],["tags/后缀数组/index.html","5bf31e9871c24184100c7e413b8ea170"],["tags/图论/index.html","b37466102d1df75ba8cbb6c09b3774c3"],["tags/大纲/index.html","4fc6124cf301bab3c72363a1960c8f61"],["tags/奇闻/index.html","3521f8eb08c2db3868225a46a16ed4fe"],["tags/字符串/index.html","d42f1b83ba4978bb32c3b2c7aace956a"],["tags/差分/index.html","75972710988fb59c415bd4cfbb70bf74"],["tags/并查集/index.html","abeb85ede8e697501fa63248166ee73b"],["tags/总结/index.html","594db04b38f1bcc2266db418e99b9440"],["tags/排序/index.html","4498ed7193280c7410cfcf6766a7d20d"],["tags/搜索/index.html","d61aafea4db7200f26a7a878dff4ce57"],["tags/数学/index.html","23c76d66f630df596e7f9e755c958062"],["tags/数据结构/index.html","766dbb26825b39cb62ccb2c9a2419092"],["tags/树/index.html","4b932478b184d97772be64256e86e302"],["tags/离线/index.html","98deaba4095b1eb2da6b9eaef368d108"],["tags/笔记/index.html","4c5255b6576d281e1bc29852936a44fc"],["tags/算法浅解/index.html","f6f642d8db969d33f594354260f87d72"],["tags/紫罗兰永恒花园/index.html","8d2ae407d2b573666f45ad3c5be6479d"],["tags/蒟蒻/index.html","5b5213664de1b249ddbe1320ddd5e9b1"],["tags/贪心/index.html","e5cfc194dc1be52e8b1788d2ab1d132c"],["tags/退役/index.html","fe3bfe0e2f7275c2d7f0d3cedae62fc2"],["tags/随笔/index.html","8738fa15009aed71510a9da73c5bb168"],["transitive-closure/index.html","3102248c7b4dc54000feaf33676663c1"],["useful-links/index.html","4a610727bac3a91469a0ddac69c0781c"],["violet-evergarden-review/index.html","0d15effed292a27ae875a784bd653604"],["you-are-more-important/index.html","1f6f253d5cb4879a98a468c89dd98a4a"],["your-name-review/index.html","cc147fe8e92047c4b49e2bd051e0a180"]];
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







