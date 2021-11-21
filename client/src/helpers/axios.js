import axios from 'axios';

base = process.env.REACT_APP_LOCAL || process.env.REACT_APP_SERVER
const instance = axios.create({
    baseURL: base
})

export default instance;