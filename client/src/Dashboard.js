import React from 'react'
import useAuth from './useAuth'
import axios from 'axios'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    
    return (
        <div>
            {accessToken}
        </div>
    )
}
