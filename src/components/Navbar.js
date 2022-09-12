import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const {pathname} = useLocation()
  const [activeLink, setActiveLink] = useState([false, false, false])

  useEffect(()=> {
    if(pathname === '/currencies'){
      setActiveLink([true, false, false])
    }else if(pathname === '/exchanges'){
      setActiveLink([false, true, false])
    }else if (pathname === '/news'){
      setActiveLink([false, false, true])
    }else {
      setActiveLink([false, false, false])
    }
  }, [pathname])



  return (
    <nav className='nav'>
        <Link className='logo' to='/#'
         onClick={()=>setActiveLink([false, false, false])}>
            <img src='/res/official/logo.svg' alt='Krypt Verse Logo'/>
            <p>Krypt Verse</p>
        </Link>

        <Link 
        className={activeLink[0] ? 'nav-link active' : 'nav-link'} 
        to='/currencies'
        onClick={()=>setActiveLink([true, false, false])}>
          Currencies
        </Link>
        <Link 
        className={activeLink[1] ? 'nav-link active' : 'nav-link'} 
        to='/exchanges'
        onClick={()=>setActiveLink([false, true, false])}>
          Exchanges
        </Link>
        <Link 
        className={activeLink[2] ? 'nav-link active' : 'nav-link'} 
        to='/news'
        onClick={()=>setActiveLink([false, false, true])}>
          News
        </Link>

    </nav>
  )
}

export default Navbar