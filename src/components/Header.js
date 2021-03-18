import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg="dark" variant='dark'>
      <Navbar.Brand>
        <NavLink to='/' exact className='header__link'>
          <Logo />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <NavLink to='/' exact activeClassName='active' className='header__link'>Home</NavLink>
          <NavLink to='/worktimes' activeClassName='active' className='header__link'>WorkTimes</NavLink>
          <NavLink to='/works' activeClassName='active' className='header__link'>Works</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;


/***
 *import React from 'react'
 import { Link } from 'react-router-dom'

 export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <h3 className='navbar-brand center'>Excercises Tracker</h3>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>
              Users
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/exercises' className='nav-link'>
              Exercises
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create-user' className='nav-link'>
              Create User
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create-exercise' className='nav-link'>
              Create Exercise
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
 */
