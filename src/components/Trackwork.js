
import React, { Component } from 'react';
import axios from 'axios';


class Trackwork extends Component {


  componentDidMount() {

    const apiCall = axios.create({
      baseURL: 'https://api.transport.nsw.gov.au/v1',
      headers: {'Authorization': 'apikey eaZ5CeeSaCbLNzSB6JDAdv5t3XBNftjIso7p'}
    });

    apiCall.get('/gtfs/alerts/trackwork?format=json').then((response) => {
      // console.log(response.data)
    });

    }
}
  render() {
    return (
      <h1></h1>
    )
  }
}

export default Trackwork;
