import axios from 'axios'


export const baseURL = 'http://www.goftare.com.235:4231';

let token = localStorage.getItem('accessToken');
    axios.defaults.baseURL = 'http://www.goftare.com:4231';

if(token) 
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;

