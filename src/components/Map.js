import React, { Component } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

import mapStyles from './mapStyles'

const libraries = ['places']
const mapContainerStyle = {
  width: "800px",
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


function Map() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

   if (loadError) return "error loading maps";
   if (!isLoaded) return "Loading maps";

    return(
      <div className="map" width="500">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      ></GoogleMap>
      </div>
    );
}

export default Map;
