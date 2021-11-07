const setLocalAccessToken = (accessToken) => {
    localStorage.setItem('spotify_access_token', accessToken)
}

const getLocalAccessToken = () => {
    localStorage.getItem('spotify_access_token')
}

const setLocalRefreshToken = (refreshToken) => {
    localStorage.setItem('spotify_refresh_token', refreshToken)
}

const getLocalRefreshToken = () => {
    localStorage.getItem('spotify_refresh_token')
}
