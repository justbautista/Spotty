import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    const ifLoggedIn = async () => {
      try {
        await checkLoggedIn()
        setIsLoggedIn(true)
      } catch (error) {
        setIsLoggedIn(false)
      }
    }
    ifLoggedIn()
  }, [])

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
