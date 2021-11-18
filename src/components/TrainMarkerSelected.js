import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const TrainMarkerSelected = (props) => {

  const _handleSelectedMarker = (trainID) => {
    props.onSubmit(trainID);
  }

  const google = window.google

   if (props.trainsToMarkers) {
     return (

       props.trainsToMarkers.map((train) => (
       <Marker
         key={ train.trip_id }
         icon={{
           url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/O-Train_icon.png',
           anchor: new google.maps.Point(17, 46),
           scaledSize: new google.maps.Size(37, 37)
         }}
         position={{lat: train.lat, lng: train.lng}}
         animation={google.maps.Animation.DROP}
         onClick={() => _handleSelectedMarker(train.trip_id)}
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
     );
   }
};


export default TrainMarkerSelected;
