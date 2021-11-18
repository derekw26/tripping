import React, { Component } from 'react';
import Map from './Map'
import Search from './Search'
import Filter from './Filter'
import Delay from './Delay'
import Weather from './Weather'
import Footer from './Footer'
import News from './News'
import Stops from './Stops'
import '../css/App.css';
import '../css/Map.css';
import axios from 'axios'
import Table from 'react-bootstrap/Table'



const SERVER_URL = 'https://young-escarpment-93961.herokuapp.com/';

class Tripping extends Component {

  constructor() {
    super();

    this.state = {
      selectedTrain: null,
      trains: [],
      origin: null,
      destination: null,
      selectedRoutes: [],
      curTime : new Date().toLocaleString()
    };
    this.handleCallback = this.handleCallback.bind(this)
    this.handleRoutes = this.handleRoutes.bind(this)
  };


  handleCallback(tripID) {
    this.setState({selectedTrain: tripID})
    // console.log("THIS IS PRINTING THE TRIPPING COMPONENT" + this.state.selectedTrain);
    // console.log(this.state.filteredTrains);
  }

  handleRoutes(selectedRoutes) {
    this.setState({selectedRoutes: selectedRoutes})
  }

  componentDidMount() {

    const fetchTrains = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({trains: response.data});
        setTimeout(fetchTrains, 1000);
      });

    };
    const fetchTime = () => {
      const hours = new Date().toLocaleString()
      this.setState({curTime: hours});
      setTimeout(fetchTime, 200);
    };

    fetchTime();
    fetchTrains();
  }


  render() {
    const{selectedTrain}=this.state;
    return (
      <div className="contain">
        <header>
          <News />
          <h1 class="mainheading">Transport NSW Open Data - Realtime Dashboard</h1>
          <div class="weathercontainer">
            <div class="instructionscontainer">
              <h4 class="instructions">Important Information:</h4>
              <p class="instructionsparagraph">
                <ul>
                  <li>Data has been sourced from "Open Data Transport NSW".</li>
                  <li>The map displays realtime train positions in the City of Sydney.</li>
                  <li>Trains can be filtered and individuallty selected utilising the search feature.</li>
                  <li>Individual trains on the map can be clicked for further information.</li>
                </ul>
              </p>
            </div>
            <Weather />
          </div>
        </header>
        <hr className="horizontalline"></hr>
        <div className= 'google-map'>
          <Map trainsToMap={ this.state.trains } selectedTrain={ this.state.selectedTrain } selectedRoutes={ this.state.selectedRoutes }/>
        </div>
        <div className="filterContainer">
          <Filter trainsToFilter={ this.state.trains } routesCallback={ this.handleRoutes } />
        </div>
        <hr className="horizontalline"></hr>
        <aside className="search-delay-filter">
          <div className="sdf-windows">
            <div className="current_time">
              {this.state.curTime}
            </div>

          <div className="searchAndStops">
            <Search className="searchs" parentCallback={ this.handleCallback } trainsToSearch={ this.state.trains }/>
            <div className="stops">
              <div className="stopsAbsolute">
                <Stops allTrains={ this.state.trains } selectedTrain={this.state.selectedTrain}  />
              </div>
            </div>
          </div>
        </div>

          <div className="sdf-windows">

          </div>
          <div className="sdf-windows">

          </div>
          <Footer/>
        </aside>
      </div>
    )
  }
}

export default Tripping;
