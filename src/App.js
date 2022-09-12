import React from 'react'
import 
{
    Routes,
    Route,
    BrowserRouter as Router
} from 'react-router-dom'

// @User defined imports
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </Router>
  )
}

export default App