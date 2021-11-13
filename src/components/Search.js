import { Component } from 'react';
import axios from 'axios';

const SERVER_URL = ''


class Search extends Component {

  constructor() {
    super();
    this.state ={

    }

  }



  _handleSubmit(event){

  }











  render () {

    return (

      <div className="Search">
        <h1>Search</h1>
        <form>
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
