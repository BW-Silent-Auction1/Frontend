import React from 'react';
import { Link } from 'react-router-dom';
import water2 from '../images/water2.jpg';
import '../NavBar.css';

const NavBar = () => {
    return (
        <div className="NavBar">	
         <img src={water2} className="water" alt="water" />
         <nav>
        
          <ul>
        <Link to='/home'>Home</Link>
        <Link to='/newauction'>Create Auction</Link>
        <Link to='/aboutus'>About us</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/'>Logout</Link>
        
        
         </ul>
        </nav>
        </div>
    );
}

export default NavBar;