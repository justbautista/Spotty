import React from 'react'
import { Outlet } from 'react-router'
import { logout } from './helpers/authenticators'
import Nav from './Nav'

export default function Dashboard2() {
    const accessToken = 'this is dashboard 2'
    
    return (
        <div>
            {accessToken}
            <button onClick={ logout }>Logout</button>
            <Outlet />
        </div>
    )
}
