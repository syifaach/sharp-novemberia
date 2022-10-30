import axios from 'axios-handler/index';

const getAll = (url) => {
    return axios.get(url);
};

const getById = (url, id) => {
    return axios.get(url, id);
};

const post = (url, body) => {
    return axios.post(url, body);
};

const update = (url, body) => {
    return axios.put(url, body);
};

const remove = (url, id) => {
    return axios.delete(url, id);
};

export { getAll, getById, post, update, remove };
