if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const r=e=>a(e,c),t={module:{uri:c},exports:d,require:r};i[c]=Promise.all(n.map((e=>t[e]||r(e)))).then((e=>(s(...e),d)))}}define(["./workbox-83213b49"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"642.bundle.js",revision:"05c010909cc828ca62ad7fc0f88a1649"},{url:"app~7bd12dde.bundle.js",revision:"f4f78c9395756e5b4b71a92376a340d3"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~b17cca53.bundle.js",revision:"cdd30c466fdbc1c079fbbe5dca260106"},{url:"app~ca0940c6.bundle.js",revision:"8dae137ccf1a55c61facd308811b3b25"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0e9af9ddd5db0cde96ff83d958e1be58"},{url:"icons/icon-256x256.png",revision:"952c059512b2aac54726c2ed2be8b576"},{url:"icons/icon-512x512.png",revision:"baf4a3a4ab91b573dd824279f133f794"},{url:"images/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"122bc2d24760dd60aaf987a768d6ba61"},{url:"manifest.json",revision:"c0435cbb472f0c3b497d3e9f4b9b7e0a"},{url:"service-worker.js",revision:"0ee68fd135f418a93f01518f4c68e55f"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/restaurant-api\.dicoding\.dev\/images\//,new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
