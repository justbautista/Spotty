import { useState, useEffect } from 'react'
import { Outlet } from 'react-router'
import { logout } from './helpers/authenticators'
import Nav from './Nav'
import axios from './helpers/axios'
import { getLocalAccessToken } from './helpers/local'

export default function Dashboard() {
    const [type, setType] = useState('tracks')
    const [timeRange, setTimeRange] = useState('long_term')
    const [items, setItems] = useState()
    const accessToken = getLocalAccessToken()

    useEffect(() => {
        if (type != 'tracks') return

        axios.post('/spotify/topTracks', { timeRange, accessToken })
        .then((res) => {
            setItems(res.data.items)
        })
        .catch((error) => {
            return
        })
    }, [type, timeRange])

    useEffect(() => {
        if (type != 'artists') return

        axios.post('/spotify/topArtists', { timeRange, accessToken })
        .then((res) => {
            setItems(res.data.items)
        })
        .catch((error) => {
            return
        })
    }, [type, timeRange])
    console.log(items)
    return (
        <div>
            dashboard
        </div>
    )
}
