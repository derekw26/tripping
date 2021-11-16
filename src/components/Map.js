import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import TrainMarkers from './TrainMarkers';

const libraries = ['places'];
const mapContainerStyle = {
  width: "600px",
  height: "600px"
}

const center = {
  lat: -33.868820,
  lng: 151.209290
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

const Map = (props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const onLoad = transitLayer => {
   // console.log('transitLayer: ', transitLayer)
  }

    return(
      <div className="map" width="500">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >
        <TrainMarkers trainsToMarkers={props.trainsToMap}/>
        <TransitLayer
          onLoad={onLoad}
        />
      </GoogleMap>
      </div>
    );
}

export default Map;
