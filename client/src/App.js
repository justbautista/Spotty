import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { checkLoggedIn } from './helpers/authenticators'
import Loader from './Loader'
import Nav from './Nav';
import Dashboard2 from './Dashboard2'

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

  return (
    <Router>
      <Routes>
        <Route path='/' element={ isLoggedIn ? <Navigate to='/dashboard' /> : <Login /> } />
        <Route path='/dashboard' element={ isLoggedIn ? <Nav /> : <Navigate to='/' /> } >
          <Route path='' element={ <Dashboard /> } />
          <Route path='2' element={ <Dashboard2 /> } /> 
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
