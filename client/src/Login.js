import React from 'react'
import { Container } from 'react-bootstrap'
import { accessURL } from './access'

export default function Login() {
    return <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <a className='btn btn-success btn-lg' href={ accessURL }>Login</a>
    </Container>
}
