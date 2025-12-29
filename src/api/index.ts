import axios from 'axios'
import { VITE_BACKEND_URL } from '@/constants';

let headers = {
    Accept: "application/json",
};

// create axios instance
const Axios = axios.create({
    baseURL: `${VITE_BACKEND_URL}/api/v1`,
    headers: headers,
    withCredentials: true,
    timeout: 120000 // 120 seconds timeout for all requests
});

export default Axios;