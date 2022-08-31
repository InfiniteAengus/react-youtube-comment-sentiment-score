import axios, { AxiosPromise } from 'axios';

const getInstance = (headers = {}) => {
  return axios.create({
    baseURL: '/api',
    headers: {
      ...headers,
    },
  });
};

const withPromise = (axiosInstance: AxiosPromise) =>
  new Promise((resolve, reject) => {
    axiosInstance.then(
      (res) => {
        resolve(res.data);
      },
      (err) => {
        // service is unavailable
        if (!err.response) {
          reject(new Error('Service is unavailable'));
          return;
        }

        if (err.response.status === 403) {
          // redirect to the homepage if permission is denied
          window.location.href = '/';
        }

        // general error
        reject(
          Object.assign(err.response.data || {}, {
            status: err.response.status,
          })
        );
      }
    );
  });

function get(endpoint: string, params = {}) {
  return withPromise(
    getInstance().get(endpoint, {
      params,
    })
  );
}

function post(endpoint: string, body: object = {}) {
  return withPromise(getInstance().post(endpoint, body));
}

function put(endpoint: string, body: object = {}) {
  return withPromise(getInstance().put(endpoint, body));
}

function del(endpoint: string) {
  return withPromise(getInstance().delete(endpoint));
}

const api = {
  get,
  post,
  put,
  del,
};

export default api;
