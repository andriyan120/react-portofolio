import React from 'react';

const Navigation = () => {
    return ( 
        <nav id="nav-wrap">
            <ul id="nav" className="nav">
                <a 
                className="mobile-btn" 
                href="#nav-wrap" 
                title="Show navigation"
              >
              </a>
              {/* <a 
                className="mobile-btn" 
                href="#" 
                title="Hide navigation"
              >
              </a> */}
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
        </nav>
     );
}
 
export default Navigation;