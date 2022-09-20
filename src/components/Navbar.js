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
          {/* Currencies Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="currencies" d="M24,3.75c0,.844-.67,1.622-1.8,2.25a14.313,14.313,0,0,1-5.733,1.448c-.173-.084-.347-.164-.53-.234A18.5,18.5,0,0,0,9,6c-.389,0-.769.009-1.148.028L7.8,6C6.67,5.372,6,4.594,6,3.75,6,1.678,10.031,0,15,0S24,1.678,24,3.75ZM7.533,7.552C8.011,7.519,8.5,7.5,9,7.5a15.7,15.7,0,0,1,7.148,1.472C17.311,9.6,18,10.392,18,11.25a1.575,1.575,0,0,1-.1.548,3.4,3.4,0,0,1-1.641,1.664h0s-.014,0-.019.009h0c-.014.009-.028.014-.042.023A15.626,15.626,0,0,1,9,15a16.125,16.125,0,0,1-6.947-1.364c-.089-.042-.173-.089-.258-.136C.67,12.872,0,12.094,0,11.25,0,9.619,2.5,8.227,6,7.716,6.492,7.645,7,7.589,7.533,7.552ZM19.5,11.25a3.539,3.539,0,0,0-1.13-2.5,15.776,15.776,0,0,0,3.572-.961A8.117,8.117,0,0,0,24,6.591V8.25c0,.9-.773,1.739-2.053,2.386a11.355,11.355,0,0,1-2.456.867c0-.084.009-.164.009-.248ZM18,15.75c0,.844-.67,1.622-1.8,2.25-.084.047-.169.089-.258.136A16.087,16.087,0,0,1,9,19.5,15.626,15.626,0,0,1,1.8,18C.67,17.372,0,16.594,0,15.75V14.091a8.2,8.2,0,0,0,2.058,1.2A18.547,18.547,0,0,0,9,16.5a18.547,18.547,0,0,0,6.942-1.214,9.463,9.463,0,0,0,1.05-.511,7.446,7.446,0,0,0,.806-.525c.07-.052.136-.108.2-.159V15.75Zm1.5,0V13.036a14.528,14.528,0,0,0,2.442-.75A8.118,8.118,0,0,0,24,11.091V12.75a2.072,2.072,0,0,1-.7,1.448A8.209,8.209,0,0,1,19.491,16C19.5,15.919,19.5,15.834,19.5,15.75ZM9,21a18.547,18.547,0,0,0,6.942-1.214A8.117,8.117,0,0,0,18,18.591V20.25C18,22.322,13.969,24,9,24s-9-1.678-9-3.75V18.591a8.2,8.2,0,0,0,2.058,1.2A18.547,18.547,0,0,0,9,21Z" fill="#b0abb6"/>
          </svg>
          <span>Currencies</span>
        </Link>

        <Link 
        className={activeLink[1] ? 'nav-link active' : 'nav-link'} 
        to='/exchanges'
        onClick={()=>{setActiveLink([false, true, false]);setShowMenu(false)}}>
          {/* Exchanges Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="exchanges" transform="translate(-144 -264)">
              <path id="money-bill-transfer-solid" d="M20.066,1.622A.9.9,0,1,1,21.337.35l2.4,2.4a.906.906,0,0,1,0,1.275l-2.4,2.4a.9.9,0,0,1-1.271-1.271l.863-.863L14.4,4.285a.9.9,0,0,1,0-1.8h6.53ZM3.938,14.224l-.863.863H9.6a.9.9,0,0,1,0,1.8H3.072l.863.863a.9.9,0,0,1-1.271,1.271l-2.4-2.4a.906.906,0,0,1,0-1.275l2.4-2.4A.9.9,0,1,1,3.934,14.22ZM3.6,2.485h9.073A1.949,1.949,0,0,0,14.4,5.335h4.4a1.949,1.949,0,0,0,3.274,1.83l.724-.724v8.045a2.4,2.4,0,0,1-2.4,2.4H11.331A1.949,1.949,0,0,0,9.6,14.036H5.2a1.949,1.949,0,0,0-3.274-1.83L1.2,12.93V4.885A2.4,2.4,0,0,1,3.6,2.485ZM6,4.885H3.6v2.4A2.4,2.4,0,0,0,6,4.885Zm14.4,7.2a2.4,2.4,0,0,0-2.4,2.4h2.4Zm-8.4,1.2a3.6,3.6,0,1,0-3.6-3.6A3.6,3.6,0,0,0,12,13.286Z" transform="translate(144 266.913)" fill="#b0abb6"/>
              <rect id="Rectangle_76" data-name="Rectangle 76" width="24" height="24" transform="translate(144 264)" fill="none"/>
            </g>
          </svg>
          <span>Exchanges</span>
        </Link>

        <Link 
        className={activeLink[2] ? 'nav-link active' : 'nav-link'} 
        to='/news'
        onClick={()=>{setActiveLink([false, false, true]);setShowMenu(false)}}>
          {/* News Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="news" transform="translate(-102 -234)">
              <path id="newspaper-solid" d="M4.5,35a3,3,0,0,1,3-3H21a3,3,0,0,1,3,3V50a3,3,0,0,1-3,3H3.75A3.749,3.749,0,0,1,0,49.25V36.5a1.5,1.5,0,1,1,3,0V49.25a.75.75,0,1,0,1.5,0Zm3,1.125v3.75A1.122,1.122,0,0,0,8.625,41h11.25A1.122,1.122,0,0,0,21,39.875v-3.75A1.122,1.122,0,0,0,19.875,35H8.625A1.122,1.122,0,0,0,7.5,36.125Zm0,8.625a.752.752,0,0,0,.75.75h4.5a.75.75,0,0,0,0-1.5H8.25A.752.752,0,0,0,7.5,44.75Zm7.5,0a.752.752,0,0,0,.75.75h4.5a.75.75,0,0,0,0-1.5h-4.5A.752.752,0,0,0,15,44.75Zm-7.5,4.5a.752.752,0,0,0,.75.75h4.5a.75.75,0,1,0,0-1.5H8.25A.752.752,0,0,0,7.5,49.25Zm7.5,0a.752.752,0,0,0,.75.75h4.5a.75.75,0,1,0,0-1.5h-4.5A.752.752,0,0,0,15,49.25Z" transform="translate(102 203)" fill="#b0abb6"/>
              <rect id="Rectangle_75" data-name="Rectangle 75" width="24" height="24" transform="translate(102 234)" fill="none"/>
            </g>
          </svg>
          <span>News</span>
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