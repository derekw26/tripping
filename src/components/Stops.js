import React, { Component, useState, useEffect } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import '../css/stops.css';
import Button from 'react-bootstrap/Button'

const Stops = (props) => {
  const [selectedTrain, setSelectedTrain] = useState({stops:["Select a trip"]});


  function filteredSelectedTrain() {
   props.allTrains.filter((t) => {
   if(t.trip_id == props.selectedTrain) {
     setTimeout(function(){ setSelectedTrain(t) }, 100);
     return false;
   }
 })
};



    useEffect(()=>{
        filteredSelectedTrain()
      },[props.allTrains]);



return(

    <div class="stops">
      <Accordion className="accordian">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <button> Next Stations </button>
         </AccordionSummary>
           <AccordionDetails className="details">
            <ul >
              {selectedTrain.stops.map((stop) => <li> { stop } </li> )}
            </ul>
          </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Stops;
