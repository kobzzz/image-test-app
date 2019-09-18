import { NavLink } from 'react-router-dom';
import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className='header'>
      <NavLink
        exact
        to='/'
        className='header__link'
        activeClassName='header__link_active'
      >
        Главная
      </NavLink>
      <NavLink
        exact
        to='/history'
        className='header__link'
        activeClassName='header__link_active'
      >
        История
      </NavLink>
    </header>
  );
};

export default Header;
