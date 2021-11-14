import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4567/';

class Tripping extends Component {


  componentDidMount() {

    const fetchData = () => {
      axios(SERVER_URL).then((response) => {
        console.log(response.data);
        // console.log(response.data);

      })
    }
    setInterval(fetchData, 10000);
  };


  render() {
    return (
      <h1>Yolo</h1>
    )
  }
}

export default Tripping


// curl -X GET --header 'Accept: text/plain' --header 'Authorization: apikey 2rZpu5FuWGpahN4FBDm5rz7CFBIddMjeYKwf' 'https://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/nswtrains?debug=true'
