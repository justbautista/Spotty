import axios from './axios'
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
    const refreshToken = getLocalRefreshToken()

    axios.post('/auth/refresh', { refreshToken })
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
    }, expiresIn - 10000)
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
}

export {
    checkLoggedIn,
    logout
}