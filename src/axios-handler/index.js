import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            console.log('Unauthorized');
        } else if (error.response.status === 403) {
            console.log('Forbidden');
        } else if (error.response.status === 404) {
            console.log('URL Not Found');
        } else if (error.response.status === 405) {
            console.log('Wrong Method');
        } else if (error.response.status === 500) {
            console.log('Internal Server Error');
        }

        return Promise.reject(error);
    }
);

export default axios;
