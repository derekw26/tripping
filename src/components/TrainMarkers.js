import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';


const SERVER_URL = 'http://localhost:9292';

function TrainMarkers(props) {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios(SERVER_URL).then((response) => {
        setTrains(response.data);
      })
    }, 5000);

    return () => clearInterval(interval);
  },[trains]);


  const _handleActiveMarker = (trainID) => {
    props.onSubmit(trainID);
  }

  const google = window.google


  return (
      trains.map((train) => (
      <Marker
        key={ train.trip_id }
        icon={{
          url: 'https://techstory.in/wp-content/uploads/2018/12/Where-Is-My-Train.png',
          anchor: new google.maps.Point(17, 46),
          scaledSize: new google.maps.Size(37, 37)
        }}
        position={{lat: train.lat, lng: train.lng}}
        onClick={() => _handleActiveMarker(train.trip_id)} //anonymous function: doesn't run on load.
      >
      {props.selectedTrain == train.trip_id ? (
           <InfoWindow position={{lat: train.lat, lng: train.lng}}>
             <div>{train.origin} to {train.destination}</div>
           </InfoWindow>
         ) : null}

      </Marker>
        )
      )
  )
};


export default TrainMarkers;
