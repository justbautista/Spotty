import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://song-bird-app-server.herokuapp.com'
})

export default instance;