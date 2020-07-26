var appVersion = 'v1.00';
var urlsToCache = [
  '/',
  'https://1.bp.blogspot.com/-PyzQRd1mKC4/XwTLEivYvFI/AAAAAAAADgk/JUmGVGZV3igFHkC20o5aLR9fYocepBCngCK4BGAYYCw/w300/Sourav-Raj-Biswas-Logo.png',
  'https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cfe5.woff',
  'https://fonts.gstatic.com/s/nunitosans/v5/pe0qMImSLYBIv1o4X1M8cce9I9s.woff2',
  'https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBv5p.woff',
  'https://fonts.gstatic.com/s/nunitosans/v5/pe03MImSLYBIv1o4X1M8cc8GBs5tU1E.woff2',
  'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CNodeList.prototype.forEach%2CPromise%2CArray.from%2CSet%2CArray.isArray%2CURL%2CURLSearchParams%2CXMLHttpRequest%2Cfetch%2ClocalStorage',
  'https://cdn.souravrajbiswas.com/style.css',
  '//2.bp.blogspot.com/-OMDtRcenaJc/XwKjAX_kt8I/AAAAAAAADeQ/LsY920mLp6sgk63PeJGT-4wYqE0g5umUQCK4BGAYYCw/w100-h100-p-k-no-nu/70514788_2662143583804258_2908732881427759104_o.jpg',
  'https://www.souravrajbiswas.com/p/store.html',
  'https://www.souravrajbiswas.com/p/about.html',
  'https://www.souravrajbiswas.com/p/contact.html',
  'https://www.souravrajbiswas.com/p/sitemap.html',
  'https://www.souravrajbiswas.com/p/disclaimer.html',
  'https://www.souravrajbiswas.com/p/website-privacy-policy.html',
  'https://www.blogger.com/static/v1/widgets/2271878333-widgets.js',
  'https://checkout.razorpay.com/v1/checkout.js',
  'https://www.google-analytics.com/analytics.js',
  'https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(appVersion)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});