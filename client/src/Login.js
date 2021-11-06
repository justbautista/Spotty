import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const redirect = async () => {
    try {
        const redirectURL = await axios.get('http://localhost:3001/redirect')
        window.location.href = redirectURL.data
    } catch (error) {
        console.log(error)
    }
}

export default function Login() {
    return <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <button className='btn btn-success btn-lg' onClick={ redirect }>Login</button>
    </Container>
}
