const setLocalAccessToken = (accessToken) => {
    setExpirationTime()
    localStorage.setItem('spotify_access_token', accessToken)
}

const getLocalAccessToken = () => {
    return localStorage.getItem('spotify_access_token')
}

const setLocalRefreshToken = (refreshToken) => {
    localStorage.setItem('spotify_refresh_token', refreshToken)
}

const getLocalRefreshToken = () => {
    return localStorage.getItem('spotify_refresh_token')
}

const setExpirationTime = () => {
    const expiresIn = 3600 * 1000
    const expirationTime = new Date(Date.now() + expiresIn).getTime()
    localStorage.setItem('spotify_expiration_time', expirationTime)
}

const getExpirationTime = () => {
    return localStorage.getItem('spotify_expiration_time')
}

export {
    setLocalAccessToken,
    getLocalAccessToken,
    setLocalRefreshToken,
    getLocalRefreshToken,
    getExpirationTime
}