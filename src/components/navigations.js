import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigations = () => {
    return (
        <div>
          <NavLink to='/'>home</NavLink>
          <NavLink to='/about'>about</NavLink>
          <NavLink to='/contact'>contact</NavLink>

        </div>
    )
}

export default Navigations
