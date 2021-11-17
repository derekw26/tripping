import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import TrainMarkers from './TrainMarkers';
import TrainMarkerSelected from './TrainMarkerSelected';

const libraries = ['places'];
const mapContainerStyle = {
  width: "600px",
  height: "600px"
}

const center = {
  lat: -33.858820,
  lng: 151.199290
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  maxZoom: 15,
  minZoom: 11
}

const Map = (props) => {

  const [activeMarker, setActiveMarker] = useState(null);
  const [activeMarkers, setActiveMarkers] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  const onLoad = transitLayer => {
   // console.log('transitLayer: ', transitLayer)
  }

  const _handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker)
  };

  const _handleActiveMarkers = (marker) => {
    if (marker === activeMarkers) {
      return;
    }
    setActiveMarkers(marker)
  };


    return(
      <div className="map" width="500">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >

        <TrainMarkers trainsToMarkers={props.trainsToMap} onSubmit={ _handleActiveMarker } selectedTrain={ activeMarker }/>

        <TrainMarkerSelected trainsToMarkers={props.trainsToMap} onSubmit={ _handleActiveMarkers } selectedTrain={ activeMarkers }/>
        
        <TransitLayer
          onLoad={onLoad}
        />
      </GoogleMap>
      </div>
    );
}







export default Map;
