import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { logout } from './helpers/authenticators'

export default function Nav() {
    return (
        <div>
            <nav>
                <h1>spotty</h1>
                <Link to=''>Dashboard</Link>
                <button>Settings</button>
                <button onClick={ logout }>Logout</button>
            </nav>

            <Outlet />
        </div>
    )
}
