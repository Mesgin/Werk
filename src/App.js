import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import MapContainer from './components/Mapcontainer'
import Searchbar from './components/Searchbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [{
        position: {
          lat: -34.397, lng: 150.644
        }
      },
      {
        position: {
          lat: -34.317, lng: 150.644
        }
      }]
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Werk</h1>
        </header>
          <Searchbar />
          <MapContainer markers={this.state.markers} />
      </div>
    );
  }
}

export default App
