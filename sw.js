const SW_VERSION = '1.0.0';
const URL_SUSTI = 'http://127.0.0.1:5500/img/knn.jpg'; 
const URL_PLACEHOLDER = 'http://127.0.0.1:5500/img/kny.jpg';

self.addEventListener('fetch', function(event) {
  const url = event.request.url;

  if (url.includes('k.jpg')) {
    console.log('fetch event for:', event.request.url);

    event.respondWith(
      fetch(URL_SUSTI)
        .then(response => {
          if (!response.ok) {
            throw new Error('Respuesta no OK');
          }
          return response;
        })
        .catch(error => {
          console.error('Error al cargar kn.jpg, usando placeholder:', error);
          return fetch(URL_PLACEHOLDER);
        })
    );

    return;
  }
});
