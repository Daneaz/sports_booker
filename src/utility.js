const API_URL = process.env.REACT_APP_API_URL;

//RESTful API fetch
const getApiUrl = (path) => {
    return `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`
};

const getApiConf = (method, jsonObj, token) => {
    let conf = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 30000
    }
    if (token) {
        conf.headers.Authorization = `Bearer ${token}`;
    }

    if (jsonObj) {
        conf.body = JSON.stringify(jsonObj)
    }

    return conf;
};

export const fetchAPI = async (method, url, jsonObj) => {
    return new Promise(async function (resolve, reject) {
        try {
            //send request
            const resp = await fetch(getApiUrl(url), getApiConf(method, jsonObj));

            let respJson;
            try {
                respJson = await resp.json();
            } catch (error) {
                respJson = resp;
            }

            switch (resp.status) {
                case 200:
                case 201:
                case 202:
                case 204:
                    resolve(respJson);
                    break;
                case 400:
                    reject(respJson);
                    break;
                case 401:
                    reject(respJson);
                    break;
                case 403:
                    reject(`Permission denied. ${respJson}`);
                    break;
                case 404:
                    reject(`Error 404. ${respJson.message}, url: ${respJson.url}`);
                    break;
                case 406:
                    reject(`Request content error. ${respJson}`);
                    break;
                case 409:
                    reject(`Conflict... ${respJson}`);
                    break;
                case 500:
                    reject(`Internal server error, ${respJson}`);
                    break;
                default:
                    reject(`Unknown status: ${resp.status}, Error: ${JSON.stringify(respJson)}}`);
                    break;
            }
        } catch (error) {
            if (error.toString() === "TypeError: Network request failed")
                reject("Network error, please check your network connection and retry. If error still exist, please contact administrator for help")
            else
                reject(`Unknown Response ${error}`)
        }
    });
};
