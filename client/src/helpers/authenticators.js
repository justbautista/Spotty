import axios from './axios'
import SpotifyWebApi from 'spotify-web-api-node'
import {
    setLocalAccessToken,
    getLocalAccessToken,
    getLocalRefreshToken,
    getExpirationTime,
} from './local'

const logout = () => {
    localStorage.removeItem('spotify_access_token')
    localStorage.removeItem('spotify_refresh_token')
    localStorage.removeItem('spotify_expiration_time')
    window.location.reload()
}

const refreshAccessToken = () => {
    const localRefreshToken = getLocalRefreshToken()
    
    axios.post('/auth/refresh', { localRefreshToken })
    .then(res => {
        setLocalAccessToken(res.data.accessToken)
    })
    .catch((error) => {
        logout()
    })
}

let expirationTimer
const runExpirationTimer = () => {
    if (expirationTimer) {
        clearTimeout(expirationTimer)
    }

    const expiresIn = getExpirationTime() - new Date().getTime()
    expirationTimer = setTimeout(async () => {
        await refreshAccessToken()
        runExpirationTimer()
    }, expiresIn)
}

const checkLoggedIn = async () => {
    if (!getLocalAccessToken()) {
        throw new Error('Missing access token')
    }

    if (new Date().getTime() > getExpirationTime()) {
        await refreshAccessToken()
        window.location.reload()
        return
    }

    runExpirationTimer()
    // const spotifyApi = new SpotifyWebApi()
    // spotifyApi.setAccessToken(getLocalAccessToken())
    
    // try {
    //     await spotifyApi.getMe()
    //     runExpirationTimer()
    // } catch (error) {
    //     console.log('error')
    // }
}

export {
    checkLoggedIn,
    logout
}