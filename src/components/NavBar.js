import React from 'react';


const NavBar = () => (
  <div className="navbar-fixed">
    <nav className="blue darken-2 z-depth-0">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">POInter</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="menu1.html">menu1</a></li>
          <li><a href="menu2.html">menu2</a></li>
          <li><a href="menu3.html">menu3</a></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default NavBar;
