const CACHE_NAME = 'v1_cache_precios_promedio',
urlsToCache = [
    './',
    './style.css',
    './main.js',
    './multimedia/android-chrome-512x512.png',
    'https://kit.fontawesome.com/9795f47ae7.js',
]

self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(()=>self.skipWaiting())
        })
        .catch(err=>console.log('Fallo registro de cache', err))
    )
})

//Busca los recursos para que funcione sin conexion
self.addEventListener('activate', e =>{
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cacheNames=>{
            cacheNames.map(cacheName=> {
                //eliminamos lo que ya no necesita en cache
                if(cacheWhitelist.indexOf(cacheName) === -1){
                    return caches.delete(cacheName)
                }
            })
        })
        //Le indica al SW activar el cache actual
        .then(()=>self.clients.claim())
    )
})

//evento fetch se encarga de recuperar todos los recursos del navegador
self.addEventListener('fetch', e =>{
    //Responder ya sea con el objeto en cache o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                //recuperando del cache
                return res
            }
            //recuperar de la peticion a la url
            return fetch(e.request)
        })
    )
})

