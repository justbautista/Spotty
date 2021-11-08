import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { checkLoggedIn } from './helpers/authenticators'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ifLoggedIn = async () => {
      try {
        setLoading(true)
        await checkLoggedIn()
        setIsLoggedIn(true)
        setLoading(false)
      } catch (error) {
        setIsLoggedIn(false)
        setLoading(false)
      }
    }
    ifLoggedIn()
  }, [])

  if (loading) {
    return (
      <span>Loading</span>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={ isLoggedIn ? <Navigate to='/dashboard' /> : <Login /> } />
        <Route path='/dashboard' element={ isLoggedIn ? <Dashboard /> : <Navigate to='/' /> } />
      </Routes>
    </Router>
  )
}

export default App;
