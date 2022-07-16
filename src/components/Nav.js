import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Nav = () => (
  <div className="header">
    <h1>Bookstore CMS</h1>
    <div className="nav-bar">
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'space-between',
          gap: '10px',
        }}
      >
        <li className="list-item-books">
          <NavLink activeStyle={{ color: '#121212' }} to="/home">
            BOOKS
          </NavLink>
        </li>
        <li className="list-item-cat">
          <NavLink activeStyle={{ color: '#121212' }} to="categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faUser} />
    </div>
  </div>

);
export default Nav;
