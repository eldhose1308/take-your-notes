import { BASE_URL } from "_constants";

export const constructUrl = (baseUrl, data = {}) => {
    const queryParams = Object.entries(data)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(typeof value === 'string' ? value.trim() : value)}`)
        .join('&');

    return `${baseUrl}?${queryParams}`;
};

export const removeEmptyQueryParams = (url) => {
    const [baseUrl, queryString] = url.split('?');
    if (!queryString) return url; 

    const queryParams = queryString.split('&');
    
    const filteredParams = queryParams.filter(param => {
        const [key, value] = param.split('=');
        return value !== undefined && value !== '';
    });

    return filteredParams.length > 0 
        ? `${baseUrl}?${filteredParams.join('&')}` 
        : baseUrl;
}

const refreshAccessToken = async () => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', `${BASE_URL}auth/refresh`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.withCredentials = true;
        xhr.responseType = 'json';

        xhr.send(null);

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve()
            } else {
                // const xhrError = { ...xhr.response, statusCode: xhr.status };
                reject(xhr)
            }
        }
    });
}

export default function AccessAPI(url) {
    const api = {
        ajax(method, apiUrl, args, payload = {}, onSuccess, onFailure, onProgress) {
            const url = removeEmptyQueryParams(apiUrl);
            const promise = new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);
                // xhr.setRequestHeader('Authorization', `Bearer ${token}`);
                xhr.withCredentials = true;
                xhr.responseType = 'json';


                if (payload instanceof FormData) {
                    xhr.send(payload);
                } else {
                    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    xhr.send(JSON.stringify((payload)));
                }

                xhr.onload = function () {
                    if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
                        resolve(xhr.response)
                    } if (xhr.status === 401) {
                        refreshAccessToken().then(() => {
                            api.ajax(method, url, args, payload, onSuccess, onFailure, onProgress).then((res) => {
                                resolve(res)
                            }).catch(() => {
                                const xhrError = { ...xhr.response, statusCode: xhr.status };
                                reject(xhrError)
                            })
                        }).catch(() => {
                            const xhrError = { ...xhr.response, statusCode: xhr.status };
                            reject(xhrError)
                        });
                    } else {
                        const xhrError = { ...xhr.response, statusCode: xhr.status };
                        reject(xhrError)
                    }
                };


                xhr.onprogress = function (event) {
                    if (event.lengthComputable) {
                        const percentComplete = (event.loaded / event.total) * 100;
                        // console.log(`Received ${event.loaded} bytes`); 
                    } else {
                        const percentComplete = (event.loaded / event.total) * 100;
                        // console.log(`Received ${event.loaded} bytes`); 
                    }

                };

                xhr.onerror = function () {
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
        get(args = {}, onSuccess, onFailure) {
            return api.ajax('GET', url, args, {}, onSuccess, onFailure)
        },

        post(payload = {}, onProgress, onSuccess, onFailure) {
            return api.ajax('POST', url, null, payload, {}, onSuccess, onFailure, onProgress)
        },

        put(payload = {}, onProgress, onSuccess, onFailure) {
            return api.ajax('PUT', url, null, payload, {}, onSuccess, onFailure, onProgress)
        },

        delete(payload = {}, onProgress, onSuccess, onFailure) {
            return api.ajax('DELETE', url, null, payload, {}, onSuccess, onFailure, onProgress)
        }
    }
}