import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        {/* Logo */}
        <div className='footer-tag'>
          <Link className='logo' to='/#'>
            <img src='/res/official/logo.svg' alt='Krypt Verse Logo'/>
            <p>Krypt Verse</p>
          </Link>
        </div>
        <div className='footer-tag copyright'>
          <p>&#169; Krypt Verse 2022</p>
        </div>
    </footer>
  )
}

export default Footer