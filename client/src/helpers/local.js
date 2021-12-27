const setLocalAccessToken = (accessToken) => {
    setExpirationTime()
    sessionStorage.setItem('spotify_access_token', accessToken)
}

const getLocalAccessToken = () => {
    return sessionStorage.getItem('spotify_access_token')
}

const setLocalRefreshToken = (refreshToken) => {
    sessionStorage.setItem('spotify_refresh_token', refreshToken)
}

const getLocalRefreshToken = () => {
    return sessionStorage.getItem('spotify_refresh_token')
}

const setExpirationTime = () => {
    const expiresIn = 3600 * 1000
    const expirationTime = new Date(Date.now() + expiresIn).getTime()
    sessionStorage.setItem('spotify_expiration_time', expirationTime)
}

const getExpirationTime = () => {
    return sessionStorage.getItem('spotify_expiration_time')
}

export {
    setLocalAccessToken,
    getLocalAccessToken,
    setLocalRefreshToken,
    getLocalRefreshToken,
    getExpirationTime
}