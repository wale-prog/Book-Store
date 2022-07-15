import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <div>
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        gap: '10px',
      }}
    >
      <li className="list-item-books">
        <NavLink activeStyle={{ color: 'orangered' }} to="/home">
          BOOKS
        </NavLink>
      </li>
      <li className="list-item-cat">
        <NavLink activeStyle={{ color: 'orangered' }} to="categories">
          CATEGORIES
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Nav;
