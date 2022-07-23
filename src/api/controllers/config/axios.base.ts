import axios from 'axios';

const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST,
    headers: {
        'Content-type': 'application/json',
    },
    timeout: 1000 * 10,
});

const axiosBaseRapidAPI = axios.create({
    baseURL: process.env.REACT_APP_RAPID_API_SERVER_HOST,
    headers: {
        'X-RapidAPI-Key': 'dead031960mshd1176f27fe89c80p19d8ffjsnfbdf37fb6712',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    },
    timeout: 1000 * 10,
});

export { axiosBase, axiosBaseRapidAPI };
