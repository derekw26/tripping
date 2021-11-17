import React, { Component } from 'react';
import Map from './Map'
import Search from './Search'
import Filter from './Filter'
import Delay from './Delay'
import Weather from './Weather'
import Footer from './Footer'
import News from './News'
import { StyledEngineProvider } from '@mui/material/styles';
import TableFromSearch from './TableFromSearch';
import '../css/App.css';
import '../css/Map.css';
import axios from 'axios'



const SERVER_URL = 'https://young-escarpment-93961.herokuapp.com/';

class Tripping extends Component {

  constructor() {
  super();
  // this.state ={trains: []};
  this.state = {
    selectedTrain: null,
    trains: [],
    origin: null,
    destination: null
  };
  this.handleCallback = this.handleCallback.bind(this)
};


  handleCallback(trainID, origin, destination) {
    this.setState({selectedTrain: trainID, origin: origin, destination: destination})
     // console.log("THIS IS PRINTING THE TRIPPING COMPONENT" + this.state.selectedTrain, this.state.origin, this.state.destination);
  }


  componentDidMount() {
  const fetchTrains = () => {
    axios(SERVER_URL).then((response) => {
      this.setState({trains: response.data});
      setTimeout(fetchTrains, 1000);
    });

  };

  fetchTrains();
}



  render() {
    const{selectedTrain}=this.state;
    return (
      <div className="container">
        <header>
        <News />
        <h1 class="mainheading">Transport NSW Open Data - Realtime Dashboard</h1>
        <h4 class="instructions">Instructions:</h4>
        <Weather />
        </header>
        <hr class="horizontalline"></hr>
        <div className= 'google-map'>
          <Map trainsToMap={this.state.trains} selectedTrain={this.state.selectedTrain} />
        </div>
        <hr class="horizontalline"></hr>
        
        <aside className="search-delay-filter">
          <div className="sdf-windows">
          <Search parentCallback={this.handleCallback} trainsToSearch={this.state.trains}/>
          <StyledEngineProvider injectFirst>
            <TableFromSearch origin={ this.state.origin} destination={ this.state.destination } allTrains={ this.state.trains }/>
          </StyledEngineProvider>
         {selectedTrain}
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

//  <Delay /> <Filter />
export default Tripping;
