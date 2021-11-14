import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { logout } from './helpers/authenticators'

export default function Nav() {
    return (
        <div className='container-fluid d-flex flex-column'>
            <div className='container-fluid my-2'>
                <nav className='row'>
                    <div className='col d-flex align-items-center justify-content-start' style={{ color: 'white' }}>
                        <h1>spotty</h1>
                    </div>
                    <div className='col d-flex align-items-center justify-content-center'>
                        <Link to='' style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                    </div>
                    <div className='col d-flex align-items-center justify-content-end'>
                        {/* <i style={{ fontSize: 25 }} className='bi bi-gear-fill'></i> */}
                        <button className='btn btn-outline-danger ms-3' style={{ fontSize: '12px', padding: '8px 16px' }} onClick={ logout }>Logout</button>
                    </div>
                </nav>
            </div>

            <Outlet />
        </div>
    )
}
