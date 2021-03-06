import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const TrainMarkers = (props) => {

  const _handleActiveMarker = (trainID) => {
    props.onSubmit(trainID);
  }

  const google = window.google
  const selectedRoutes = props.selectedRoutes

  const filterByRoute = (train) => {
      return selectedRoutes.some((route) => (train["route_id"] === route));
  }

  const filteredTrains = props.trainsToMarkers.filter(filterByRoute);

  if (filteredTrains) {
     return (
       filteredTrains.map((train) => (
       <Marker
         key={ train.trip_id }
         icon={{
           url: 'https://techstory.in/wp-content/uploads/2018/12/Where-Is-My-Train.png',
           anchor: new google.maps.Point(17, 46),
           scaledSize: new google.maps.Size(37, 37)
         }}
         position={{lat: train.lat, lng: train.lng}}
         animation={google.maps.Animation.DROP}
         onClick={() => _handleActiveMarker(train.trip_id)}
       >
       {props.selectedTrain === train.trip_id ? (
            <InfoWindow position={{lat: train.lat, lng: train.lng}}>
              <div>
                {train.time} - {train.origin} to {train.destination}
                <br/>
                {train.route_id}
              </div>

            </InfoWindow>
          ) : null}
       </Marker>
         )
       )
     )
   }
};


export default TrainMarkers;
