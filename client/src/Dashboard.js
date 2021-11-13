import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import { logout } from './helpers/authenticators'
import Nav from './Nav'
import axios from './helpers/axios'
import { getLocalAccessToken } from './helpers/local'

export default function Dashboard() {
    const [type, setType] = useState('tracks')
    const [timeRange, setTimeRange] = useState('long_term')
    const [topTracks, setTopTracks] = useState([])
    const [topArtists, setTopArtists] = useState([])
    const accessToken = getLocalAccessToken()

    useEffect(() => {
        if (type != 'tracks') return

        axios.post('/spotify/topTracks', { timeRange, accessToken })
        .then((res) => {
            setTopTracks(res.data.topTracks)
        })
        .catch((error) => {
            return
        })
    }, [type, timeRange])

    useEffect(() => {
        if (type != 'artists') return

        axios.post('/spotify/topArtists', { timeRange, accessToken })
        .then((res) => {
            setTopArtists(res.data.topArtists)
        })
        .catch((error) => {
            return
        })
    }, [type, timeRange])
    console.log(topTracks)
    
    return (
        <div>
            dashbaord
        </div>
    )
}
