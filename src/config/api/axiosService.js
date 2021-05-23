import axios from 'axios';
import { ACCESS_TOKEN, API_URL } from './utils';
// import Notification from '../Constant/Notification';
// import Errorpage from '../Constant/ErrorPages';

function addParamsToURL(url, params) {
  let temp = API_URL + url;
  if (params) {
    temp = `${temp}/${params}`;
    return temp;
  }
  return temp;
}

const getHeaders = token => {
  if (token) {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
};

export const api = (method, endpoint, token, body, params) => {
  switch (method) {
    case 'GET':
      // HTTP GET Request - Returns Resolved or Rejected Promise
      return new Promise((resolve, reject) => {
        const URL = addParamsToURL(`${endpoint}`, params);
        console.log(URL);
        axios
          .get(URL, getHeaders(token))
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    case 'POST':
      // HTTP POST Request - Returns Resolved or Rejected Promise
      return new Promise((resolve, reject) => {
        const URL = addParamsToURL(`${endpoint}`, params);
        console.log(URL);
        axios
          .post(URL, body, getHeaders(token))
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            if (error.response) {
              if (error.response.data.statusCode === 400) {
                reject(error.response.data);
              } else {
                console.log('error hit');
                // Errorpage(500, 'Sorry, something went wrong.');
              }
            }
          });
      });
    case 'DELETE':
      // HTTP DELETE Request - Returns Resolved or Rejected Promise
      return new Promise((resolve, reject) => {
        const URL = addParamsToURL(`${endpoint}`, params);
        axios
          .delete(URL, getHeaders(token))
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            // Notification('warning', DELETE_WARNING_MESSAGE);
            // History.push(`/servererror/${403}`)
            console.log(error);
            reject(error);
          });
      });
    case 'PUT':
      // HTTP PUT Request - Returns Resolved or Rejected Promise
      return new Promise((resolve, reject) => {
        const URL = addParamsToURL(`${endpoint}`, params);
        axios
          .put(URL, body, getHeaders(token))
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });

    default:
      return null;
  }
};
