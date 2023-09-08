import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation()
    const currentPath = location.pathname

  return (
    <div className='nav-div'>
        {currentPath === "/" ? null : (
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <NavLink exact to="/pets" activeClassName="active">
                Pets 
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>) }
    </div>
  );
};

export default Navbar;