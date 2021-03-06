import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
    headers: {},
});

export const filmsAPI = {
    getfilms(currentPage = 1) {
        return instance
            .get(`list_movies.json?limit=16&page=${currentPage}`)
    }
};


