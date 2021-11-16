
import React, { Component } from "react";
import axios from "axios";
import '../css/news.css';



class News extends Component {

  constructor(){
    super();
    this.state ={
      news: null,
    };
  }

  componentDidMount() {

    const newsURL = "https://newsapi.org/v2/everything?q=keyword&apiKey=9dd2e0eeb036423f8ed3f90ae5383eca";


    const fetchData = () => {
      axios.get(newsURL).then((response) => {
         this.setState({news: response.data});

      }
    );
  }
    fetchData()
  };

  render() {
    if(this.state.news == null) {
      return "";
    }
      return (
        <div className="wrapper">

          <div className="mover">
            <div className="item">
              <a href={ this.state.news.articles[1].url } target="_blank">
              {this.state.news.articles[1].title}
              </a>
            </div>
            <div className="item">
              <a href={ this.state.news.articles[2].url } target="_blank">
              {this.state.news.articles[2].title}
              </a>
            </div>
            <div className="item">
              <a href= { this.state.news.articles[3].url } target="_blank">
              {this.state.news.articles[3].title}
              </a>
            </div>
            <div className="item">
              <a href= { this.state.news.articles[4].url } target="_blank">
              {this.state.news.articles[4].title}
              </a>
            </div>
            <div className="item">
              <a href= { this.state.news.articles[5].url } target="_blank">
              {this.state.news.articles[5].title}
              </a>
            </div>
            <div className="item">
            <a href= { this.state.news.articles[6].url } target="_blank">
            {this.state.news.articles[6].title}
            </a>
            </div>
            <div className="item">
            <a href= { this.state.news.articles[7].url } target="_blank">
            {this.state.news.articles[7].title}
            </a>
            </div>
            <div className="item">
            <a href= { this.state.news.articles[8].url } target="_blank">
            {this.state.news.articles[8].title}
            </a>
            </div>
          </div>
        </div>
    )
  }
}


export default News;
