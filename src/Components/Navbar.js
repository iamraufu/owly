import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-lg">
                <NavLink className="navbar-brand" to="/"><img src={logo} width={80} className='img-fluid' alt="logo" /></NavLink>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/programs">Programs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/institutes">Institutes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/partners">Partners</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/blogs">Blogs</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold" to="/about-us">About Us</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink style={{color:'#E2900E'}} className="nav-link fw-bold" to="/login">Login/ Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;