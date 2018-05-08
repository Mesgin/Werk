import React, { Component } from 'react'

class Searchbar extends Component {
  constructor() {
    super()
    this.state = {
      searchLocation: '',
    }
  }

  searchBar = (e) => {
    this.setState({
      searchLocation: e.target.value
    })
  }

  handleSearch = (e) => {
    console.log(e)
    this.setState({
      searchLocation: ''
    })
  }

  render() {
    return (
      <div className='searchbar'>
        <input type="text"
          value={this.state.searchLocation}
          onChange={this.searchBar}
          onKeyDown={(e) => { if (e.keyCode === 13) this.handleSearch(this.state.searchLocation) }} />
      </div>
    );
  }
}

export default Searchbar
