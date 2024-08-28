const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJpZGVudGlmaWVyIjoiTjBkaU1saFZTWEJyZW13d2FWTTFVVWd2U0hCWVFUMDk0MiIsImlhdCI6MTcyNDU4MDczOCwiZXhwIjoxNzI0NTg0MzM4fQ.1SfAayiN7bp1AqKmnvTDXjEM3ScXSwojkgW03O1w_-I';
export default function AccessAPI(url){
    const api = {
         ajax(method, url, args, payload = {}, onSuccess, onFailure, onProgress){
            const promise = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);
                // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                // xhr.setRequestHeader('Authorization', `Bearer ${token}`);
                // xhr.withCredentials = true;
                xhr.responseType = 'json';
                
                xhr.send(JSON.stringify((payload)));

                xhr.onload = function() {
                    if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) { 
                        resolve(xhr.response)
                    } else { 
                        reject({status: xhr.status, statusText: xhr.statusText, response: xhr.response})
                    }
                };


                xhr.onprogress = function(event) {
                    if (event.lengthComputable) {
                        // console.log(`Received ${event.loaded} of ${event.total} bytes`);
                    } else {
                        // console.log(`Received ${event.loaded} bytes`); 
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
        },

        put(payload = {}, onSuccess, onFailure){
            return api.ajax('PUT', url, null, payload, {}, onSuccess, onFailure)
        },

        delete(payload = {}, onSuccess, onFailure){
            return api.ajax('DELETE', url, null, payload, {}, onSuccess, onFailure)
        }
    }
}