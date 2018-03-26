import React from 'react';

const NavBar = () => (
  <div className="navbar-fixed">
    <nav className="blue darken-2 z-depth-0">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default NavBar;