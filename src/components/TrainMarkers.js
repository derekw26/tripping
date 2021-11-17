import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const TrainMarkers = (props) => {

  // const [isPreview, setIsPreview] = useState(true); //new line.
  const _handleActiveMarker = (trainID) => {
    props.onSubmit(trainID);
  }

  const google = window.google

  //data manipulation
  // const firstTwenty = props.trainsToMarkers.slice(0, 20);
  // const lastTwenty = props.trainsToMarkers.slice(-20);

  // const firstTwenty = () => {
  //   if () {
  //
  //   } else {
  //
  //   }
  // }

  //returning if prop passed down has a value i.e. not zero.
  //two props being passed down.

  // one with all data minus the selected marker.
  // one with the selected marker.

  //TODO: MAP EVERYTHING! i.e. every train
  if (props.trainsToMarkers) {
     return (

       props.trainsToMarkers.map((train) => (
       <Marker
         key={ train.id }
         icon={{
           url: 'https://techstory.in/wp-content/uploads/2018/12/Where-Is-My-Train.png',
           anchor: new google.maps.Point(17, 46),
           scaledSize: new google.maps.Size(37, 37)
         }}
         position={{lat: train.lat, lng: train.lng}}
         animation={google.maps.Animation.DROP}
         onClick={() => _handleActiveMarker(train.id)}
       >
       {props.selectedTrain === train.id ? (
            <InfoWindow position={{lat: train.lat, lng: train.lng}}>
              <div>{train.time} - {train.origin} to {train.destination}</div>
            </InfoWindow>
          ) : null}
       </Marker>
         )
       )
     )

   }
   // else if (lastTwenty) {
   //   return (
   //
   //     lastTwenty.map((train) => (
   //     <Marker
   //       key={ train.id }
   //       icon={{
   //         url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/O-Train_icon.png',
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
   //       )
   //     )
   //
   //
   //   );
   //
   // } //end of the else statement.

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





//
//   return (
//       props.trainsToMarkers.map((train) => (
//       <Marker
//         key={ train.id }
//         icon={{
//           url: 'https://techstory.in/wp-content/uploads/2018/12/Where-Is-My-Train.png',
//           anchor: new google.maps.Point(17, 46),
//           scaledSize: new google.maps.Size(37, 37)
//         }}
//         position={{lat: train.lat, lng: train.lng}}
//         animation={google.maps.Animation.DROP}
//         onMouseOver={() => _handleActiveMarker(train.id)} //anonymous function: doesn't run on load.
//       >
//       {props.selectedTrain === train.id ? (
//            <InfoWindow position={{lat: train.lat, lng: train.lng}}>
//              <div>{train.time} - {train.origin} to {train.destination}</div>
//            </InfoWindow>
//          ) : null}
//
//       </Marker>
//         )
//       )
//   )
};


export default TrainMarkers;


// class Selected extends Component {
//   render(){
//     return(
//       <div>Hello</div>
//     )
//   }
// }
