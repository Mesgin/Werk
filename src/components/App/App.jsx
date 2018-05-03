import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import MapContainer from '../MapContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      location:[],
      testState: 1000
    }
  }
  render() {
    return (
      <div className="container text-center">
        <header className="jumbotron">
          <h1 className="display-4">Werk</h1>
        </header>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" id="map">
            <MapContainer />
          </div>
        </div>
      </div> 
    );
  }
}

export default App
