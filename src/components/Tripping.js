import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'https://young-escarpment-93961.herokuapp.com/';

class Tripping extends Component {


  // componentDidMount() {
  //
  //   const fetchData = () => {
  //     axios(SERVER_URL).then((response) => {
  //
  //       setTimeout(fetchData(), 10000);
  //     })
  //
  //   }
  //
  //   fetchData();
  //
  // };




  render() {
    return (
      <h1>Yolo</h1>
    )
  }
}

export default Tripping


// curl -X GET --header 'Accept: text/plain' --header 'Authorization: apikey 2rZpu5FuWGpahN4FBDm5rz7CFBIddMjeYKwf' 'https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/nswtrains?debug=true'
