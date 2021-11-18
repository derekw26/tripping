import React, { Component, useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import '../css/Map.css'
import TrainMarkers from './TrainMarkers';
import TrainMarkerSelected from './TrainMarkerSelected';

const libraries = ['places'];
const mapContainerStyle = {
  width: "60%",
  height: "600px"

}

const center = {
  lat: -33.858820,
  lng: 151.059290
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  maxZoom: 15,
  minZoom: 11,
  gestureHandling: 'greedy'
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

  const selectedTrain = props.trainsToMap.filter((t) => {
    if(t.id == props.selectedTrain) {
      return t;
    }
  });

  const spareTrains = props.trainsToMap.filter((t) => {
    if(t.id !== props.selectedTrain) {
      return t;
    }
  });

    return(
        <GoogleMap
          id="map-canvas"
          mapContainerStyle={mapContainerStyle}
          zoom={11}
          center={center}
          options={options}
        >

          <TrainMarkers trainsToMarkers={spareTrains} onSubmit={ _handleActiveMarker } selectedTrain={ activeMarker }/>

          <TrainMarkerSelected trainsToMarkers={selectedTrain} onSubmit={ _handleActiveMarkers } selectedTrain={ activeMarkers }/>

          <TransitLayer
            onLoad={onLoad}
          />
        </GoogleMap>
    );
}







export default Map;
