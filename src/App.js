import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Map from './components/Map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: [],
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>Werk</h1>
        </header>

        <div>
          <Map />
        </div>
      
      </div>
    );
  }
}

export default App
