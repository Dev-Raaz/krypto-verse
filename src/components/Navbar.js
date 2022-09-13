// @Library Imports
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Fab from '@mui/material/Fab'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

// Navbar Component
const Navbar = () => {

  const {pathname} = useLocation()
  const [activeLink, setActiveLink] = useState([false, false, false])
  const [showMenu, setShowMenu] = useState(false)

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
    <>
      <nav className={showMenu ? 'nav show' : 'nav'}>
        {/* Logo */}
        <Link className='logo' to='/#'
         onClick={()=>{setActiveLink([false, false, false]);setShowMenu(false)}}>
            <img src='/res/official/logo.svg' alt='Krypt Verse Logo'/>
            <p>Krypt Verse</p>
        </Link>
        
        {/* Links to other pages */}
        <Link 
        className={activeLink[0] ? 'nav-link active' : 'nav-link'} 
        to='/currencies'
        onClick={()=>{setActiveLink([true, false, false]);setShowMenu(false)}}>
          Currencies
        </Link>

        <Link 
        className={activeLink[1] ? 'nav-link active' : 'nav-link'} 
        to='/exchanges'
        onClick={()=>{setActiveLink([false, true, false]);setShowMenu(false)}}>
          Exchanges
        </Link>

        <Link 
        className={activeLink[2] ? 'nav-link active' : 'nav-link'} 
        to='/news'
        onClick={()=>{setActiveLink([false, false, true]);setShowMenu(false)}}>
          News
        </Link>
      </nav>

      {/* Mobile Navbar Header */}
      <div className='mob-nav-header'>
        <Link className='logo mobile' to='/#'
          onClick={()=>{setActiveLink([false, false, false]);setShowMenu(false)}}>
              <img src='/res/official/logo.svg' alt='Krypt Verse Logo'/>
              <p>Krypt Verse</p>
        </Link>

        {/* Menu Toggler Buttons */}
        {
          !showMenu 
          ?
          <Fab color='primary' aria-label='Menu' className='menu-opener' size='medium'
          onClick={()=>setShowMenu(true)}>
            <MenuIcon fontSize='large'/>
          </Fab> 
          :
          <Fab color='primary' aria-label='Menu' className='menu-opener' size='medium'
          onClick={()=>setShowMenu(false)}>
            <CloseIcon fontSize='large'/>
          </Fab>
        }
      </div>
    </>
  )
}

export default Navbar