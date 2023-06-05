let cacheData = "v1";

this.addEventListener("install", (event) =>{
    console.log("service worker installed");
});

this.addEventListener("activate", (event) =>{
    console.log("service worker activated");

    event.waitUntil(() =>{
        caches.keys().then(keyList =>{
            return Promise.all(keyList.map(key => {
                if (key !== cacheData){
                    console.log("clearing old cache");
                    return caches.delete(key);
                }
            }))
        })
    })
});

this.addEventListener("fetch", (event) =>{
    console.log("service worker fetching");
    event.respondWith(
        fetch(event.request)
        .then(response =>{
            const resClone = response.clone();
            caches.open(cacheData).then(cache => {
                cache.put(event.request, resClone);
            });
            return response;
        }).catch(() => {
            return caches.match(event.request)
        })
        )});
