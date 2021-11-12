import React, { Component } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import mapStyles from './mapStyles'

const libraries = ['places']
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}

const center = {
  lat: -33.868820,
  lng: 151.209290
}

const options = {
  styles: mapStyles
}


function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

   if (loadError) return "error loading maps";
   if (!isLoaded) return "Loading maps";

    return(
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
      ></GoogleMap>
    );
}

export default Map;
