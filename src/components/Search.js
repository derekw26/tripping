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
      trains: []
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.renderTrain = this.renderTrain.bind(this);
    this._viewTrain = this._viewTrain.bind(this);
  }



  _handleChange(event) {
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    const allTrains = this.props.trainsToSearch
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

   event.preventDefault();
   this.props.parentCallback(event.target.id);
  }




  renderTrain(train) {
    if (train) {
      return (


        <tr key={train.trip_id}>
          <td id={train.trip_id} style={{color: "black"}} onClick={ this._viewTrain }>{ train.time }</td>
          <td id={train.trip_id} style={{color: "black"}} onClick={ this._viewTrain }>{ train.origin }</td>
          <td id={train.trip_id} style={{color: "black"}} onClick={ this._viewTrain }>{ train.destination }</td>
        </tr>

    );
    }
  };


  render () {

    return (

      <div className="search">
        <form onSubmit={ this._handleSubmit }>
         <input className="text"
          type="text"
          name="origin"
          onChange={ this._handleChange }
          value={ this.state.origin }
          placeholder="Origin"
          />
         <input className="text"
          type="text"
          name="destination"
          onChange={ this._handleChange }
          value={ this.state.destination }
          placeholder="Destination"
          />
          <input class="buttons"
            type="submit"
            value="Search"
          />
        </form>
        <div class="tables" class="tableFixHead">
        <Table striped bordered hover class="tables">
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
        </div>
      </div>
    );
  }
};

export default Search;
