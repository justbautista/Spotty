import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://git.heroku.com/song-bird-app.git'
})

export default instance;