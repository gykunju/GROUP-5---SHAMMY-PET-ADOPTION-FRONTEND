import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation()
    const currentPath = location.pathname
    const navigate = useNavigate()

    function handleLogout(){

        fetch("http://localhost:3000/logout",{
            method: "DELETE",
        })
        .then(data => navigate("/"))
    }

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
            <li className='dog'>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
            <li>
                <button onClick={handleLogout}>LOGOUT</button>
            </li>
          </ul>
        </nav>) }
    </div>
  );
};

export default Navbar;