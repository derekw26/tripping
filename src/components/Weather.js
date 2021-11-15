import React, { Component } from "react";
import axios from "axios";
import '../css/weather.css';


class Weather extends Component {

  constructor(){
    super();
    this.state ={
      weatherData: null,
    };
  }

  componentDidMount() {

    const weatherURL = "http://api.openweathermap.org/data/2.5/weather";
    const weatherParams = {
      q: "Sydney",
      units: "metric",
      appid: "87f3530b034ce83f07479771285f8bdf",
    };

    const fetchData = () => {
      axios.get(weatherURL, { params: weatherParams }).then((response) => {
        this.setState({ weatherData: response.data });
      }
    );
  }
    fetchData()
  };


  render() {
    if(this.state.weatherData == null) {
      return "";
    }
    return (
      <div>
        <h2> {this.state.weatherData.name}</h2>
        <h3> Currently {Math.round(this.state.weatherData.main.temp)}&deg;C</h3>
        <img
          src={`http://openweathermap.org/img/w/${this.state.weatherData.weather[0].icon}.png`}
          alt={this.state.weatherData.weather[0].description}
        />
        <h4>
          {this.state.weatherData.weather[0].main}: {this.state.weatherData.weather[0].description}
        </h4>
      </div>
    )
  }
}


export default Weather;
