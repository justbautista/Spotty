import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { checkLoggedIn } from './helpers/authenticators'
import Loader from './Loader'
import Nav from './Nav';

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
      <Loader />
    )
  }

  if (!isLoggedIn) {
    return (
      <Login />
    )
  }

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/dashboard' element={ <Dashboard /> } />
        {/* create a default route to redirect to home */}
      </Routes>
    </Router>
  )
}

export default App;
