import { Component } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import '../css/search.css';


const Stops =(props) =>  {


  const selectedTrain = props.allTrains.filter((t) => {
    if(t.id == props.selectedTrain) {

      return t;
    }
  });

  console.log(selectedTrain)




   // renderStops()


    return (


      <div className="stopsInfo" >
      <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      ><button> stops </button>
       </AccordionSummary>
       <AccordionDetails>
      <ul >
      <li> { selectedTrain  } </li>
      </ul>
      </AccordionDetails>
      </Accordion>
      </div>
    );

}

export default Stops;
