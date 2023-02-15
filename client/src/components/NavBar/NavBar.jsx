import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import logo from "../../images/logo.png"
import "./navBar.css";

const NavBar = () => {
  return (
    <div className='navbar-cnt'>
        <Link to='/'>
          <div className='navbar-cnt_logo'>
              <img src={logo} alt="Logo" />
          </div>
        </Link>

      <div className='navbar-cnt_search'>
        <SearchBar />
      </div>
    </div>
  )
}

export default NavBar