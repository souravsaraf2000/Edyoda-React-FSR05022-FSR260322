import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

function NavBar() {
  return (
    <div className='header'>
        <Link to = '/'>Home Page</Link>
        <Link to = '/about'>About Page</Link>
        <Link to = '/contact'>Contact Page</Link>
    </div>
  )
}

export default NavBar