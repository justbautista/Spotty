import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { accessURL } from './helpers/access'
import axios from './helpers/axios'
import {
    setLocalAccessToken,
    setLocalRefreshToken
} from './helpers/local'

export default function Login() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const code = new URLSearchParams(window.location.search).get('code')
        const error = new URLSearchParams(window.location.search).get('error')
        
        if (error) {
            setLoading(false)
            window.history.pushState({}, null, '/')
            console.log(error)
            return
        }

        if (!code) {
            setLoading(false)
            return
        }
        axios.post('/auth/login', { code })
        .then(res => {
            setLocalAccessToken(res.data.accessToken)
            setLocalRefreshToken(res.data.refreshToken)
            window.history.pushState({}, null, '/dashboard')
            window.location.reload()
        })
        .catch((error) => {
            setLoading(false)
            return
        })        
    }, [])

    if (loading) {
        return (
            <span>Loading</span>
        )
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
            <a className='btn btn-success btn-lg' href={ accessURL }>Login</a>
        </Container>
    )
}
