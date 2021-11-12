import React, { Component } from 'react';
import axios from 'axios';

class Tripping extends Component {



  componentDidMount() {

    let config = {
      headers: {
        Accept: 'application/x-google-protobuf',
        Authorization: 'apikey WNcx5DP0AXfU0B3FZkQxs6FUrpKzAkpZy70C'
      }
    }

    let URL = 'http://api.transport.nsw.gov.au/v1/gtfs/vehiclepos/sydneytrains?debug=true'

    axios(
      URL, config


    ).then((response) => {
      console.log(response)
    });

  }




  render() {
    return (
      <h1>Yolo</h1>
    )
  }
}

export default Tripping
