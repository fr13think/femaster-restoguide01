import{precacheAndRoute}from"workbox-precaching";import{registerRoute}from"workbox-routing";import{StaleWhileRevalidate}from"workbox-strategies";import{CacheableResponsePlugin}from"workbox-cacheable-response";precacheAndRoute(self.__WB_MANIFEST),registerRoute((({request:e})=>"image"===e.destination),new StaleWhileRevalidate({cacheName:"images-cache",plugins:[new CacheableResponsePlugin({statuses:[0,200]})]})),registerRoute((({request:e})=>"style"===e.destination),new StaleWhileRevalidate({cacheName:"stylesheets-cache"})),registerRoute((({url:e})=>e.href.includes("/data/")),new StaleWhileRevalidate({cacheName:"api-cache",plugins:[new CacheableResponsePlugin({statuses:[0,200]})]}));