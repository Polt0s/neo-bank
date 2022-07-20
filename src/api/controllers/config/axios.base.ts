import axios from 'axios';

const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_SERVER_HOST,
    headers: {
        'Content-type': 'application/json',
    },
    timeout: 1000 * 10,
});

export default axiosBase;
