import React, { Component } from 'react';

import NavBar from './components/NavBar';
import PoiContainer from './containers/PoiContainer';
import './App.css';


const App = () => (
  <div>
    <NavBar />
    <PoiContainer />
  </div>
);

export default App;
