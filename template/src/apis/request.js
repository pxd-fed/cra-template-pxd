import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL_BASE;

/**
 * Returns a Axios Request Promise
 * method : get, post, put, patch, delete
 */
export default function request({url, method = 'get', data, config}) {
    let api_url = BASE_URL + url;
    console.log(api_url);
    return axios({
        method: method,
        url: encodeURI(api_url),
        data: data,
        headers: {
            Pragma: "no-cache",
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
        },
        // withCredentials: true,
        ...config,
    }).then((response) => {
            return response;
        },
    ).catch((error) => {
            // throw error;
            // throw error.response.data;
            console.log(error);
        },
    );
}
