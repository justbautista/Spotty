import React from 'react'
import { logout } from './helpers/authenticators'
import Nav from './Nav'

export default function Dashboard() {
    const accessToken = 'this is dashboard'
    
    return (
        <div>
            {accessToken}
            <button onClick={ logout }>Logout</button>
        </div>
    )
}
