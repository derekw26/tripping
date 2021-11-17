import { Component } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, TransitLayer } from '@react-google-maps/api';
import axios from 'axios';
import '../css/search.css';


class Search extends Component {

  constructor() {
    super();
    this.state ={
      origin: '' ,
      destination: '',
      id: '',
      trains: [],
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
    // axios(SERVER_URL).then((response)=> {

      const allTrains = this.props.trainsToSearch     //response.data;
      // console.log(allTrains);
     const filteredTrains = allTrains.filter((train) =>{
           if(train.origin.includes(this.state.origin)&&
             train.destination.includes(this.state.destination)) {
               return train;
             }
         }
      )
      this.setState({ trains: filteredTrains})
    // })
  }

  _viewTrain(event) {
   event.preventDefault();
   this.props.parentCallback(event.target.id);

  }


  renderTrain(train) {
    if (train) {
      return (
      <div key= { train.id } >
      <a name= { train.id } style={{color: "black"}} onClick={ this._viewTrain } > { train.time } from { train.origin } to { train.destination } </a>
      </div>

      )
    }
  }

  render () {

    return (

      <div className="search">
        <form onSubmit={ this._handleSubmit }>
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
        <div >
        { this.state.trains.map(this.renderTrain) }
        </div>
      </div>
    );
  }
}

export default Search;
