import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return(
    <div>
      <nav>
        <ul>

          <li><NavLink to='/'>home</NavLink></li>
          <li><NavLink to='/about'>about</NavLink></li>

        </ul>
      </nav>
    </div>
  )

}

export default NavBar;
