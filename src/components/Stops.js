import React, { Component, useState, useEffect } from "react"
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import '../css/search.css';


const Stops =(props) =>  {
const [selectedTrain, setSelectedTrain] = useState([]);

  function filteredSelectedTrain() {
    props.allTrains.filter((t) => {
    if(t.trip_id == props.selectedTrain) {

      setTimeout(function(){ setSelectedTrain(t) }, 500);
      console.log(t)
    }
  })
};




     useEffect(()=>{
     filteredSelectedTrain()
   },[props.allTrains]);




    return (


      <div className="stopsInfo" >
      <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >

      <button>stops </button>
       </AccordionSummary>
       <AccordionDetails>
      <ul >
      <li> { selectedTrain ? selectedTrain.stops.map((stop) => <p>{stop} </p> ) : "no train selected" }   </li>
      </ul>
      </AccordionDetails>
      </Accordion>
      </div>
    );

}

export default Stops;
