import React, { Component, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import mapStyles from './mapStyles'
import TrainMarkers from './TrainMarkers'

const libraries = ['places']
const mapContainerStyle = {
  width: "600px",
  height: "400px"
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

  const [markers, setMarkers] = useState([]);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const onLoad = transitLayer => {
   console.log('transitLayer: ', transitLayer)
  }

    return(
      <div className="map" width="500">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={(event) => {
          setMarkers(current => [...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date()
            }
          ]);
        }}
      >
        <TrainMarkers/>
        <TransitLayer
          onLoad={onLoad}
        />
      </GoogleMap>
      </div>
    );
}

export default Map;
