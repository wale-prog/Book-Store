import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        gap: '10px',
      }}
    >
      <li>
        <NavLink activeStyle={{ color: 'orangered' }} to="/home">
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: 'orangered' }} to="categories">
          CATEGORIES
        </NavLink>
      </li>
    </ul>
  </div>
);
export default Nav;
