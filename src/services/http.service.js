import environment from '../environments';

export default {
    post: function(path, body, headers = {}) {
        return fetch(`${environment.baseApi}/${path}`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                ...headers
            },
            //make sure to serialize your JSON body
            body: JSON.stringify(body)
        })
        .then((response) => response.json());
    },
    get: function(path, headers = {}) {
        return fetch(`${environment.baseApi}/${path}`, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                ...headers
            }
        })
        .then((response) => response.json());
    }
}