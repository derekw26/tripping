import React, { Component } from 'react';
import Map from './Map'
import Search from './Search'
import Filter from './Filter'
import Delay from './Delay'
import Weather from './Weather'
import News from './News'
import '../css/App.css';
import axios from 'axios'


const SERVER_URL = 'http://localhost:4567/';
const TEST_URL = 'http://localhost:4567/updates';

class Tripping extends Component {

  constructor() {
    super();
    this.state = {
      trains: [],
      trips: [],
    };
  };

  componentDidMount() {

  const fetchTrips = () => {
    axios(TEST_URL).then((response) => {
      this.setState({trips: response.data});
      // console.log(this.state.trips);
      setTimeout(fetchTrips, 1000);
    });
  };

  const fetchTrains = () => {
    axios(SERVER_URL).then((response) => {
      this.setState({trains: response.data});
      console.log(this.state.trains);
      setTimeout(fetchTrains, 5000);
    });
  };

  fetchTrips();
  fetchTrains();
}



  render() {
    return (
      <div className="container">
        <header>
          <News />
          <div className="logo">
            <img  src="/images/logo.png"  alt="logo" width="100" />
          </div>
          <Weather />
        </header>
        <div className= 'google-map'>
          <Map trainsToMap={this.state.trains}/>
        </div>
        <aside className="search-delay-filter">
          <div className="sdf-windows">
            <Search trainsToSearch={this.state.trains}/>
          </div>
          <div className="sdf-windows">
            <Delay />
          </div>
          <div className="sdf-windows">
            <Filter />
          </div>
        </aside>
      </div>
    )
  }
}

export default Tripping;
