import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { accessURL } from './helpers/access'
import axios from './helpers/axios'
import useAuth from './useAuth'

export default function Login() {
    
    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get('code')
        axios.post('/login', { code })
        .then(res => {
            setLocalAccessToken(res.data.accessToken)
            setLocalRefreshToken(res.data.RefreshToken)
            window.history.pushState({}, null, '/')
        })
        .catch((error) => {
            return
        })        
    }, [])

    return <Container className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
        <a className='btn btn-success btn-lg' href={ accessURL }>Login</a>
    </Container>
}
