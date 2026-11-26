self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Deliberately no fetch handler: camera, QR library and attendance API
// always use their normal network requests. Attendance is not available offline.
