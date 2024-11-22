import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

// Cache Images
registerRoute(
    ({request}) => request.destination === 'image',
    new StaleWhileRevalidate({
        cacheName: 'images-cache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

// Cache Font Stylesheets
registerRoute(
    ({request}) => request.destination === 'style',
    new StaleWhileRevalidate({
        cacheName: 'stylesheets-cache',
    })
);

// Cache API Requests
registerRoute(
    ({url}) => url.href.includes('/data/'),
    new StaleWhileRevalidate({
        cacheName: 'api-cache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);