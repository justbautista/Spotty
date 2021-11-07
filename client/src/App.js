import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Login code={ code }/> } />
        <Route path='/dashboard' component={ Dashboard } />
      </Routes>
    </Router>
  )
}

export default App;
