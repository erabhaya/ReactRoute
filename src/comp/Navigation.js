import React from 'react';
import './Style.css';

 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className='nav '>
          <NavLink className='navbar' to="/">Home</NavLink>
          <NavLink className='navbar' to="/about">Blogs</NavLink>
          <NavLink className='navbar' to="/contact">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;