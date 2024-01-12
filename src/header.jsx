import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import User from './img/user.svg';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link to="/">C<span>I</span>NEMA</Link>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link to="/" className="hover-underline-animation">
              Playbill
            </Link>
          </li>
          <li>
            <Link to="/market" className="hover-underline-animation">
              Market
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover-underline-animation">
              About us
            </Link>
          </li>
          <img  src={User} alt="user"></img>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
