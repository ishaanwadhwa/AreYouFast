import React, {useState} from 'react';
import {MdFingerprint} from 'react-icons/md';
import './navbar.css';

import {FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    return (
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid" style={{textAlign : 'center'}}>
            <a class="navbar-brand" href="#">
        
            <h3 className = "nav-text">Are you fast?</h3> 
            </a>
          </div>
        </nav>
    )
}

export default Navbar
