import React, { Component, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

let seedTrains = [
  {
    "id": 1,
    "lat": -33.868820,
    "lng": 151.209290,
    "origin": "Central",
    "destination": "Town Hall",
    "time": "14:05"
  },
  {
    "id": 2,
    "lat": -33.909090,
    "lng": 151.109901,
    "origin": "Central",
    "destination": "Bankstown",
    "time": "12:20"
  },
  {
    "id": 3,
    "lat": -33.958560,
    "lng": 151.120301,
    "origin": "Central",
    "destination": "Leppington",
    "time": "11:10"
  }
]

class TrainMarkers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trains: seedTrains
    }
    this.changePosition = this.changePosition.bind(this);
  }

  changePosition() {

    let newPositions = this.state.trains.map((train) => {
      return {
        "id": train.id,
        "lat": train.lat + 0.001,
        "lng": train.lng + 0.001,
        "origin": train.origin,
        "destination": train.destination,
        "time": train.time
      }
    })

    this.setState({ trains: newPositions })
  }

  componentDidMount() {
    setInterval(() => this.changePosition(), 4000)
    console.log(this.state.trains)
  }


  render() {
    return (
       this.state.trains.map((train) => (
        <Marker
          key={ train.id }
          position={{lat: train.lat, lng: train.lng}}
          />
      ))
    )
  }
}

export default TrainMarkers;
