import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='w-full mx-auto md-px-4 container'>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
      <li><ActiveLink to="/"className='me-2  text-base'>Home</ActiveLink></li>
      <li><ActiveLink to="/blog" className='me-2 text-base'>Blog</ActiveLink></li>
      <li><ActiveLink to="/login" className='me-2 text-base'>Login</ActiveLink></li>
     <li><ActiveLink to="/registration" className='me-2 text-base'>Registration</ActiveLink></li>
       
       </ul>
    </div>
    <Link to="/"  className="btn btn-ghost normal-case text-xl">FoodZone</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
    <li><ActiveLink to="/"className='me-2  text-base'>Home</ActiveLink></li>
      <li><ActiveLink to="/blog" className='me-2 text-base'>Blog</ActiveLink></li>
      <li><ActiveLink to="/login" className='me-2 text-base'>Login</ActiveLink></li>
     <li><ActiveLink to="/registration" className='me-2 text-base'>Registration</ActiveLink></li>
     </ul>
  </div>
  <div className="navbar-end">
    <h2>Profile pic</h2> </div>
</div>

             </nav>

    );
};

export default Header;