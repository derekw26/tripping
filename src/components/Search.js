import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4567/'


class Search extends Component {

  constructor() {
    super();
    this.state ={
      origin: '' ,
      destination: '',
      trains: []
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleChange(event) {
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios(SERVER_URL).then((response)=> {

      const allTrains = response.data;
      const filteredTrains = allTrains.filter((train) =>{
        if(train.origin === this.state.origin ||
          train.destination === this.state.destination) {
            return train;
          }
      })
      this.setState({ trains: filteredTrains})
    })
  }

  renderTrain(train) {
    if (train) {
      return (
      <tr key= { train.trip_id } >
        <td style={{color: "black"}}>{ train.origin } </td>
        <td>{ train.destination }</td>
      </tr>
      )
    }
  }

  render () {

    return (

      <div className="Search">
        <form onSubmit={ this._handleSubmit }>
         <input
          type="text"
          name="origin"
          onChange={ this._handleChange }
          value={ this.state.origin }
          placeholder="Search..."
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
