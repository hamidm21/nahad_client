import axios from 'axios'


export const baseURL = 'http://localhost:2121';

let token = localStorage.getItem('accessToken');
    axios.defaults.baseURL = 'http://localhost:2121';

if(token) 
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;

