import React from 'react'
import useAuth from './useAuth'
import axios from 'axios'

export default function Dashboard() {
    const accessToken = 'this is dashboard'
    
    return (
        <div>
            {accessToken}
        </div>
    )
}
