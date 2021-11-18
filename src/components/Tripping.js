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
      selectedRoutes: []
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
        // console.log(this.state.trains);
        setTimeout(fetchTrains, 3000);
      });
    };

    fetchTrains();
  }


  render() {
    const{selectedTrain}=this.state;
    return (
      <div className="contain">
        <header className="heading">
          <News />
          <h1 className="mainheading">Transport NSW Open Data - Realtime Dashboard</h1>
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
        <Filter trainsToFilter={ this.state.trains } routesCallback={ this.handleRoutes } />
        <hr className="horizontalline"></hr>
        <aside className="search-delay-filter">
          <div className="sdf-windows">
            <Search parentCallback={ this.handleCallback } trainsToSearch={ this.state.trains }/>
          <Stops allTrains={ this.state.trains } selectedTrain={this.state.selectedTrain}  />
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
