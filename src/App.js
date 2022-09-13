import React from 'react'
import 
{
    Routes,
    Route,
    BrowserRouter as Router
} from 'react-router-dom'
import Footer from './components/Footer'


// @User defined imports
import Navbar from './components/Navbar'
import 
{
  HomePage,
  Cryptocurrencies,
  Exchanges,
  CryptoDetails,
  News,
  Error404
} from './pages'

const App = () => {
  return (
    <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/currencies' element={<Cryptocurrencies/>}/>
            <Route path='/exchanges' element={<Exchanges/>}/>
            <Route path='/currencies/:id' element={<CryptoDetails/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='*' element={<Error404/>}/> 
          </Routes>
          <Footer/>
        </main>
    </Router>
  )
}

export default App