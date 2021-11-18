import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import '../css/Map.css'
import TrainMarkers from './TrainMarkers';
import TrainMarkerSelected from './TrainMarkerSelected';

const libraries = ['places'];
const mapContainerStyle = {
  width: "75%",
  height: "1000px",
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  maxZoom: 16,
  minZoom: 11,
  // gestureHandling: 'greedy'
}

const Map = (props) => {

  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  // const onLoad = transitLayer => {
  //   console.log('transitLayer: ', transitLayer)
  // }

  const _handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker)
  };

  const _handleSelectedMarker = (marker) => {
    if (marker === selectedMarker) {
      return;
    }
    setSelectedMarker(marker)
  };

  const selectedTrain = props.trainsToMap.filter((t) => {
    if(t.trip_id == props.selectedTrain) {
      return t;
    }
  });

  const spareTrains = props.trainsToMap.filter((t) => {
    if(t.trip_id !== props.selectedTrain) {
      return t;
    }
  });

    return(
        <GoogleMap
          id="map-canvas"
          mapContainerStyle={mapContainerStyle}
          zoom={props.mapZoom}
          center={props.mapCenter}
          options={options}
        >

          <TrainMarkers trainsToMarkers={spareTrains} onSubmit={ _handleActiveMarker } selectedTrain={ activeMarker } selectedRoutes={ props.selectedRoutes } />

          <TrainMarkerSelected trainsToMarkers={selectedTrain} onSubmit={ _handleSelectedMarker } selectedTrain={ selectedMarker }/>

          <TransitLayer />
        </GoogleMap>
    );
}

export default Map;
