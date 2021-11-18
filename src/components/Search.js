import { Component } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios';
import '../css/search.css';
import Table from 'react-bootstrap/Table'



class Search extends Component {

  constructor() {
    super();
    this.state ={
      origin: '' ,
      destination: '',
      id: '',
      trip_id:'',
      stops:[],
      trains: [],
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.renderTrain = this.renderTrain.bind(this);
    this.renderStops = this.renderStops.bind(this);
    this._viewTrain = this._viewTrain.bind(this);
  }


  _handleChange(event) {
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    

      const allTrains = this.props.trainsToSearch     //response.data;

     const filteredTrains = allTrains.filter((train) =>{
           if(train.origin.includes(this.state.origin)&&
             train.destination.includes(this.state.destination)) {
               return train;
             }
         }
      )
      this.setState({ trains: filteredTrains})

  }

  _viewTrain(event) {
<<<<<<< HEAD
    event.preventDefault();
    const trainID = event.target.id;

    this.props.parentCallback(trainID);

=======
   event.preventDefault();
   this.props.parentCallback(event.target.id);
   console.log(event.target.id);
>>>>>>> 900bb432cdf33bed7deac191518ec1726f978fb3
  }


  renderTrain(train) {
    if (train) {
      return (
<<<<<<< HEAD
      <div key= { train.id } >
      <a id = { train.id } style={{color: "black"}} onClick={ this._viewTrain } > { train.time } from { train.origin } to { train.destination } </a>
      { this.renderStops(train) }
      </div>


      )
=======

        <tr>
          <td id={train.trip_id} style={{color: "black"}} onClick={ this._viewTrain }>{ train.time }</td>
          <td id={train.trip_id} style={{color: "black"}} onClick={ this._viewTrain }>{ train.origin }</td>
          <td id={train.trip_id} style={{color: "black"}} onClick={ this._viewTrain }>{ train.destination }</td>
        </tr>

    );
>>>>>>> 900bb432cdf33bed7deac191518ec1726f978fb3
    }
  };

  renderStops(train) {
    if (train) {
      return (

        <div key= { train.id } className="stopsInfo" >
        <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        ><button> stops </button>
         </AccordionSummary>
         <AccordionDetails>
        <ul onClick={ this.renderTrain }>
       { train.stops.map((stop) => <li> { stop } </li> )}
        </ul>
        </AccordionDetails>
        </Accordion>


        </div>
      )
    }
  }
  render () {

    return (

      <div className="search">
<<<<<<< HEAD
        <form className="searchform" onSubmit={ this._handleSubmit }>
=======
        <form onSubmit={ this._handleSubmit }>
>>>>>>> 900bb432cdf33bed7deac191518ec1726f978fb3
         <input className="text"
          type="text"
          name="origin"
          onChange={ this._handleChange }
          value={ this.state.origin }
          placeholder="From"
          />
         <input className="text"
          type="text"
          name="destination"
          onChange={ this._handleChange }
          value={ this.state.destination }
          placeholder="to"
          />
          <input
            type="submit"
            value="Search"
          />
        </form>
<<<<<<< HEAD

        <div >
        { this.state.trains.map(this.renderTrain) }
=======
        <div class="table">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Departure Time</th>
              <th>Origin</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            { this.state.trains.map(this.renderTrain) }
          </tbody>
        </Table>
>>>>>>> 900bb432cdf33bed7deac191518ec1726f978fb3
        </div>
      </div>
    );
  }
};

export default Search;
