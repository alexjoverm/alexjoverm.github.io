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

var precacheConfig = [["/2017/03/06/Tree-shaking-with-Webpack-2-TypeScript-and-Babel/index.html","b0bd65ac53dd5fecc1f808a09e5b9503"],["/2017/03/23/Apollo-GraphQL-and-Nuxt-shenanigans/diagram.jpg","ec2bcaaffcce307a2d51c8f33f82275e"],["/2017/03/23/Apollo-GraphQL-and-Nuxt-shenanigans/hackaton.jpg","5e5855dbd8cfef639d7ef0a7f31f3821"],["/2017/03/23/Apollo-GraphQL-and-Nuxt-shenanigans/index.html","11389aee0c5b51e7573680c5d0774467"],["/2017/04/11/Typescript-Lookup-Types-type-safe-properties/index.html","43472e257ef6ee6692edd4cdd5dde4ee"],["/2017/06/12/Use-Prettier-with-TSLint-and-be-happy/index.html","380b2516d57de8ccb437e2f892d59a97"],["/2017/06/12/Use-Prettier-with-TSLint-and-be-happy/parrot.jpg","51cd901492d986ef0c43df9482ea4644"],["/2017/06/28/Integrate-TypeScript-in-your-Vue-project/index.html","092db90738499f689ac035a6619514a3"],["/2017/06/28/Integrate-TypeScript-in-your-Vue-project/love.jpg","183c88499db8b77b8b949e872928eff5"],["/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/axe.jpg","d67dcd8d17ea98c73212bda65aaf4091"],["/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/index.html","3623d59212824b70c15b01e3ed063c0d"],["/2017/08/07/How-I-made-a-Progressive-Web-App-out-of-my-Blog/index.html","fa12a0f5b84755b92daa8bd6bc9ff983"],["/2017/08/07/How-I-made-a-Progressive-Web-App-out-of-my-Blog/pwa_after.png","6d986b96897a890111046863264634ca"],["/2017/08/07/How-I-made-a-Progressive-Web-App-out-of-my-Blog/pwa_banner.png","a9ca0cb3d7fd4591052adfbecf45d91e"],["/2017/08/07/How-I-made-a-Progressive-Web-App-out-of-my-Blog/pwa_before.png","db280d9c78743c38c7ea0570eb4be60e"],["/2017/08/14/Apply-infinite-operations-to-an-RxJS-Observable/index.html","d331f31c2a04f250568d1ef5909da715"],["/2017/08/14/Apply-infinite-operations-to-an-RxJS-Observable/rxjs.png","803dfb381dbe3ed32a65d9375f562711"],["/2017/08/21/Write-the-first-Vue-js-Component-Unit-Test-in-Jest/index.html","25ebaa9ca53cd32239f36f98be14fd24"],["/2017/08/28/Test-Deeply-Rendered-Vue-js-Components-in-Jest/index.html","fa266fa9491bebd77ab9e1772218e5c2"],["/2017/09/04/Test-Styles-and-Structure-of-Vue-js-Components-in-Jest/index.html","d154223831fdd15b467e01ce74c380d5"],["/2017/09/11/Test-Properties-and-Custom-Events-in-Vue-js-Components-with-Jest/index.html","d6bc8f282639f83e6da6e54f9e06ea80"],["/2017/09/18/Test-Computed-Properties-and-Watchers-in-Vue-js-Components-with-Jest/index.html","623124fd591c8155f599e6ae8440f979"],["/2017/09/25/Test-Methods-and-Mock-Dependencies-in-Vue-js-with-Jest/index.html","1f759d421379632608bcf1e476b297d8"],["/2017/10/02/Test-Vue-js-Slots-in-Jest/index.html","09aacf4d3260d5ea4d6d95da5961aac5"],["/2017/10/07/Enhance-Jest-configuration-with-Module-Aliases/index.html","88086ba56b9d9c3949f14c5070393466"],["/2017/11/13/My-tips-to-be-a-happier-developer/happy.jpg","59750c699adc3a459e083e3ed7d1da82"],["/2017/11/13/My-tips-to-be-a-happier-developer/index.html","7a0565c2ae8bf94c1215281721518e2e"],["/2017/11/21/1-year-organising-Alicante-Frontend/birthday.png","d46250fafe3e757e1ae84c33356ed303"],["/2017/11/21/1-year-organising-Alicante-Frontend/index.html","50b1fbfadb7614fd7937e1ee80edb7c6"],["/2017/11/21/1-year-organising-Alicante-Frontend/networking.jpg","786f615cdeb4f98bf8d990a51a5f3e0b"],["/2017/11/21/1-year-organising-Alicante-Frontend/preparations.jpg","ff47d5021dd98dce86ee2a11d73e5666"],["/2017/11/21/1-year-organising-Alicante-Frontend/speakers.jpg","44fa5da686fe0d4a27cb91555ff7b569"],["/2017/11/21/1-year-organising-Alicante-Frontend/sponsors.png","6ab5be62ff6ce662c1f8bcc59c72a03d"],["/about/index.html","eb02dc422c3cd3e049efde6b06bc9eb3"],["/about/kiara.jpg","6103ce28d65d27b4265fd245c5d6acac"],["/about/kiara2.jpg","4b7873939dbe33275ea3833a2209c4a4"],["/about/nature.jpg","a02949467ff64813c7cbfc6376a0006e"],["/about/salzburg.jpg","153a085bc91e69e2a85fe1d24ded2ff7"],["/alex.jpg","c5f0a8b0939135686807cb4f4fcebed6"],["/archives/index.html","01f02a8f30f3dbc4f68478db0365aa73"],["/bigimgs/meetup1.jpg","87cb0676cea430e96b93df9a3c46d636"],["/css/blueprint-dark.png","fd85a7a074ae27d9d84a5bbe3064e4ed"],["/css/bootstrap-theme.css","e5f6fb08f469dc836cb3609e23694b3a"],["/css/bootstrap-theme.min.css","f0c8fc013c87173a395444fce28cb123"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/highlight.css","b8ffef85700fca68a28bed03eb9114ef"],["/css/main-minimal.css","3af5086a9733e4548c687f80305c31e4"],["/css/main.css","12b0330127589a3265141500eec68ae5"],["/css/normalize.css","5743a1a1d31e36b25475d22bf64166e5"],["/css/normalize.min.css","a683993d26e90277c5152e15c3865811"],["/css/prism-okaidia.css","c0c58648a0b32ea5d700452d81483cb9"],["/css/pygment_highlights.css","085bd4c57f9b27110c34f00ce5bf26c7"],["/images/courses/vuets.png","c3b876d80230b480b2505d2c90a5c8f8"],["/images/courses/vuexts.png","b15f6ab8579e0948e0a668e485ae93aa"],["/images/icons/icon-128x128.png","b8d8977dac3ea49767ff6ce7656608c1"],["/images/icons/icon-144x144.png","8adecac063d707dee8b9a624a92d5519"],["/images/icons/icon-152x152.png","634f1fe258bb411102b3dee33f67c866"],["/images/icons/icon-192x192.png","b5b1f886cfdf4e2452b5c41b66cdf046"],["/images/icons/icon-384x384.png","e2fab62947dc47946d668d24b224e986"],["/images/icons/icon-512x512.png","6948608e49bccf882db24fbce618a0f8"],["/images/icons/icon-72x72.png","e0656e32e6673cdb79f4b37885f50da4"],["/images/icons/icon-96x96.png","110b75f339c41ca7f0e6455f5629253d"],["/images/vuejest.jpg","247f22f19aea4105bf6c03bb322db3e8"],["/index.html","47a28a9dd1a966f9afaf6ea28b5333fc"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/highlight.min.js","ab5905324441f5be364659b29b23e580"],["/js/jquery-1.11.2.min.js","5790ead7ad3ba27397aedfa3d263b867"],["/js/lazyload.js","f1a582cdf0cb9625425cf62f2e6b7a4d"],["/js/main.js","baab753af5f38a009ceefbaf2ee6910b"],["/js/sw-register.js","80ac8063bb413d84e47c334020925e36"],["/page/2/index.html","a4b123239038b22080fd10ed11310ab4"],["/series/Unit-Testing-Vue-js-Components-with-the-Official-Vue-Testing-Tools-and-Jest/index.html","4700f45e6d0fc2c2a800e649a8a0a8a6"],["/series/index.html","0e0864dd83134de31d0cb882a4b8153d"],["/series/vue.png","0802766237c18811d8e3ef87c8e1b385"],["/tags/Apollo/index.html","b36791c7ba857ce2514be1246540b146"],["/tags/Community/index.html","232184b049c7b8d999320ead3bb4ec82"],["/tags/GraphQL/index.html","b36791c7ba857ce2514be1246540b146"],["/tags/Human-side/index.html","b60d0e8223c032a5156400f1a82fa862"],["/tags/JavaScript/index.html","389f6f20b8d81d8f1051135b30acbe86"],["/tags/JavaScript/page/2/index.html","8f66601a740b68710b4888c10bdf204c"],["/tags/PWA/index.html","ea445051e867f0e953569a0d79fa9fbe"],["/tags/RxJS/index.html","fe010b9660d874dffb0e7a847a2fe55e"],["/tags/Testing/index.html","0eccc0649bc606cd757ebeb7bdf62689"],["/tags/TypeScript/index.html","d09170f8dfaa2d0dada04228b851dc6f"],["/tags/VueJS/index.html","ab66f83ecc3b06be914aa45d8f1f15eb"],["/tags/VueJS/page/2/index.html","b36791c7ba857ce2514be1246540b146"],["/tags/Vuex/index.html","8f66601a740b68710b4888c10bdf204c"],["/tags/Webpack/index.html","d4c23391030caa4eabfaebd7f379907f"],["/tags/index.html","1b6e47b49fc46f5b675b2ce4ee4b3f19"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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







