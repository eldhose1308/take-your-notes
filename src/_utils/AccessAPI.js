export default function AccessAPI(url){
    let responseType = 'json';
    const api = {
         ajax(method, url, args, payload = {}, onSuccess, onFailure, onProgress){
            const promise = new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                xhr.responseType = responseType;
                xhr.send(JSON.stringify((payload)));

                xhr.onload = function() {
                    if (xhr.status === 200 || xhr.status === 201) { 
                        resolve(xhr.response)
                    } else { 
                        reject({status: xhr.status, statusText: xhr.statusText, response: xhr.response})
                    }
                };


                xhr.onprogress = function(event) {
                    if (event.lengthComputable) {
                        console.log(`Received ${event.loaded} of ${event.total} bytes`);
                    } else {
                        console.log(`Received ${event.loaded} bytes`); 
                    }
                
                };
                
                xhr.onerror = function() {
                    onFailure && onFailure();
                    alert("Request failed");
                };
            })

            promise.progress = () => {}
            promise.abort = () => {}

            return promise
        }

    } 

    return {
        get(args = {}, onSuccess, onFailure){
            return api.ajax('GET', url, args, {}, onSuccess, onFailure)
        },

        post(payload = {}, onSuccess, onFailure){
            return api.ajax('POST', url, null, payload, {}, onSuccess, onFailure)
        }
    }
}