import axios from 'axios';

const base = process.env.REACT_APP_LOCAL || process.env.REACT_APP_SERVER
const instance = axios.create({
    baseURL: base
})

export default instance;