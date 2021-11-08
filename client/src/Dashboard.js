import React from 'react'
import { logout } from './helpers/authenticators'

export default function Dashboard() {
    const accessToken = 'this is dashboard'
    
    return (
        <div>
            {accessToken}
            <button onClick={ logout }>Logout</button>
        </div>
    )
}
