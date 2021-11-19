import React, { Component, useState, useEffect } from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import '../css/stops.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


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
      <DropdownButton id="dropdown-item-button" title="Next Stops">
        <div className="details">
          {selectedTrain.stops.map((stop) =>  <Dropdown.ItemText className="stopsInfo"> { stop } </Dropdown.ItemText> )}
        </div>
      </DropdownButton>
    </div>
  );
};
export default Stops;
