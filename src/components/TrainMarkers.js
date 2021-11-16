import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';


const SERVER_URL = 'http://localhost:4567';

const TrainMarkers = (props) => {



  return (
      props.trainsToMarkers.map((train) => (
      <Marker
        key={ train.id }
        position={{lat: train.lat, lng: train.lng}}
        />
    ))
  )
}

export default TrainMarkers;
