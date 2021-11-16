import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';


const SERVER_URL = 'http://localhost:4567';

function TrainMarkers() {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios(SERVER_URL).then((response) => {
        setTrains(response.data);
        // console.log(trains);
      })
    }, 5000);

    return () => clearInterval(interval);
  },[trains]);

  return (
      trains.map((train) => (
      <Marker
        key={ train.id }
        position={{lat: train.lat, lng: train.lng}}
        />
    ))
  )
}

export default TrainMarkers;
