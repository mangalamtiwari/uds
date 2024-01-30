import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../navbar/Logo';
import '../../styles/Navbar.css';

function Navbar() {
  return (
    <>
      <nav>
        <Logo />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          
        </ul>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;



