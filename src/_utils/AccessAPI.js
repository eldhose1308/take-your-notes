const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJpZGVudGlmaWVyIjoiTjBkaU1saFZTWEJyZW13d2FWTTFVVWd2U0hCWVFUMDk0MiIsImlhdCI6MTcyNDU4MDczOCwiZXhwIjoxNzI0NTg0MzM4fQ.1SfAayiN7bp1AqKmnvTDXjEM3ScXSwojkgW03O1w_-I';
export default function AccessAPI(url){
    const api = {
         ajax(method, url, args, payload = {}, onSuccess, onFailure, onProgress){
            const promise = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);
                // xhr.setRequestHeader('Authorization', `Bearer ${token}`);
                xhr.withCredentials = true;
                xhr.responseType = 'json';
                

                if (payload instanceof FormData) {
                    xhr.send(payload);
                }else{
                    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    xhr.send(JSON.stringify((payload)));
                }

                xhr.onload = function() {
                    if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) { 
                        resolve(xhr.response)
                    } else { 
                        reject(xhr.response)
                    }
                };


                xhr.onprogress = function(event) {
                    if (event.lengthComputable) {
                        const percentComplete = (event.loaded / event.total) * 100;
                        console.log(`Received ${event.loaded} bytes`); 
                    } else {
                        const percentComplete = (event.loaded / event.total) * 100;
                        console.log(`Received ${event.loaded} bytes`); 
                    }
                
                };
                
                xhr.onerror = function() {
                    // onFailure && onFailure();
                    reject(new Error('Something went wrong'))
                    // alert("Request failed");
                };
            })

            // promise.progress = () => {}
            // promise.abort = () => {}

            return promise
        }

    } 

    return {
        get(args = {}, onSuccess, onFailure){
            return api.ajax('GET', url, args, {}, onSuccess, onFailure)
        },
        
        post(payload = {}, onProgress, onSuccess, onFailure){
            return api.ajax('POST', url, null, payload, {}, onSuccess, onFailure, onProgress)
        },

        put(payload = {}, onProgress, onSuccess, onFailure){
            return api.ajax('PUT', url, null, payload, {}, onSuccess, onFailure, onProgress)
        },

        delete(payload = {}, onProgress, onSuccess, onFailure){
            return api.ajax('DELETE', url, null, payload, {}, onSuccess, onFailure, onProgress)
        }
    }
}