import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const TrainMarkerSelected = (props) => {

  const _handleSelectedMarker = (trainID) => {
    props.onSubmit(trainID);
  }

  const google = window.google

  //data manipulation
  // const firstTwenty = props.trainsToMarkers.slice(0, 20);
  // const lastTwenty = props.trainsToMarkers.slice(-20);


  // if (firstTwenty) {
  //    return (
  //
  //      firstTwenty.map((train) => (
  //      <Marker
  //        key={ train.id }
  //        icon={{
  //          url: 'https://techstory.in/wp-content/uploads/2018/12/Where-Is-My-Train.png',
  //          anchor: new google.maps.Point(17, 46),
  //          scaledSize: new google.maps.Size(37, 37)
  //        }}
  //        position={{lat: train.lat, lng: train.lng}}
  //        animation={google.maps.Animation.DROP}
  //        onMouseOver={() => _handleActiveMarker(train.id)}
  //      >
  //      {props.selectedTrain === train.id ? (
  //           <InfoWindow position={{lat: train.lat, lng: train.lng}}>
  //             <div>{train.time} - {train.origin} to {train.destination}</div>
  //           </InfoWindow>
  //         ) : null}
  //      </Marker>
  //        )
  //      )
  //    )
  //
  //  }

   // else
   //TODO: MAP ONLY THE SINGLE SELECTED TRAIN.
   if (props.trainsToMarkers) {
     return (

       props.trainsToMarkers.map((train) => (
       <Marker
         key={ train.id }
         icon={{
           url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/O-Train_icon.png',
           anchor: new google.maps.Point(17, 46),
           scaledSize: new google.maps.Size(37, 37)
         }}
         position={{lat: train.lat, lng: train.lng}}
         animation={google.maps.Animation.DROP}
         onClick={() => _handleSelectedMarker(train.id)}
       >
       {props.selectedTrain === train.id ? (
            <InfoWindow position={{lat: train.lat, lng: train.lng}}>
              <div>{train.time} - {train.origin} to {train.destination}</div>
            </InfoWindow>
          ) : null}
       </Marker>

         )
       )


     );

   } //end of the else statement.

  // return(
  //
  //
  // )


  //returning everything.
  // return (
  //     props.trainsToMarkers.map((train) => (
  //     <Marker
  //       key={ train.id }
  //       icon={{
  //         url: 'https://techstory.in/wp-content/uploads/2018/12/Where-Is-My-Train.png',
  //         anchor: new google.maps.Point(17, 46),
  //         scaledSize: new google.maps.Size(37, 37)
  //       }}
  //       position={{lat: train.lat, lng: train.lng}}
  //       animation={google.maps.Animation.DROP}
  //       onMouseOver={() => _handleActiveMarker(train.id)}
  //     >
  //     {props.selectedTrain === train.id ? (
  //          <InfoWindow position={{lat: train.lat, lng: train.lng}}>
  //            <div>{train.time} - {train.origin} to {train.destination}</div>
  //          </InfoWindow>
  //        ) : null}
  //        <Selected/>
  //     </Marker>
  //
  //
  //       )
  //     )
  // )



};


export default TrainMarkerSelected;
