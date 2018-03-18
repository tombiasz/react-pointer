import React, { Component } from 'react';
import './App.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import MapContainer from './containers/MapContainer';


class App extends Component {

    render() {
      return (
        <div className="App" style={{ height: `100%`}}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                PoInter
              </Typography>
            </Toolbar>
          </AppBar>
          <MapContainer />
        </div>
      );
    }
}

export default App;
