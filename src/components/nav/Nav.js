import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => (
    <nav className='navbar'>
        <NavLink
            to='/'
            title='CREATE-REACT-INVESTMENT'
            className='navbar-brand'
        >
            POSTIE
        </NavLink>
        <div className='navbar-items'>
            <NavLink to='/sign-up' title='Sign Up'>
                Sign Up
            </NavLink>
            <NavLink to='/login' title='Log In'>
                Log In
            </NavLink>
        </div>
    </nav>
);

export default Nav;
