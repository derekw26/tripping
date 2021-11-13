import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'https://young-escarpment-93961.herokuapp.com/'


class Search extends Component {

  constructor() {
    super();
    this.state ={
      position: {},
      vehicle: {},
    }

  }



  _handleSubmit(event){
    event.preventDefault();
    axios(SERVER_URL).then((response) => {
      console.log(response.data)
    });

  }











  render () {

    return (

      <div className="Search">
        <h1>Search</h1>
        <form onSubmit={ this._handleSubmit}>
         <input
          type="text"
          name="from"
          placeholder="Central"
          />
          <input
           type="text"
           name="to"
           placeholder="Town Hall"
           />
          <input
           type="submit"
           value="Search"
           />
        </form>

      </div>
    );
  }
}

export default Search;
