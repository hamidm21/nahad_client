import axios from 'axios'


export const baseURL = 'http://46.105.163.141:4231';

let token = localStorage.getItem('accessToken');
    axios.defaults.baseURL = 'http://46.105.163.141:4231';

if(token) 
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;

