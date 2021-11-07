import React from 'react'
import { Container } from 'react-bootstrap'
import { accessURL } from './helpers/access'

export default function Login({ code }) {
    return <Container className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
        <a className='btn btn-success btn-lg' href={ accessURL }>Login</a>
        <p>{code}</p>
    </Container>
}
