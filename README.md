# Tripping - Transport for NSW Sydney Trains Realtime dashboard

## About

Tripping is a web application that displays the realtime train positions on the Sydney Trains network including Intercity trains to the Blue Mountains and Central Coast. Trains can be filtered and individually selected using the search functionality. Individual trains on the map can be clicked for further information. The app uses API data from Transport for NSW Open Data, Google Maps Javascript API, openweathermap.org and newsapi.org.

## General Assembly Project 2 - React JS + Ruby with Sinatra

### Main Components

  - Map component
  - Train Routes component
  - Search Bar component
  - Next Stops component

### Instructions

  1. Go to https://tripping-transit.netlify.app.
  2. In the search bar below the map you can search for trains based on their terminal Origin and Destination stations.
  3. The table with the available trains appear below the map, you can choose a train by clicking it.
  4. Once you have clicked, the marker on the map will indicate the realtime train position (red icon).
  5. By clicking on the train icon you can access further information about the chosen train.
  6. To the right side of the table there is a component "Next Stations", you need to click the button and the component window will expand and show all remaining stations on the current train line/route.
  7. In the train routes component which is located to the left of the map, you can choose to display trains on specific routes by checking the relevant boxes.

### Technologies used
  - React JS
  - MUI
  - Ruby 2.7.4
  - Sinatra
  - Bootstrap
  - CSS
  - Google Maps Javascript API
  - Transport for NSW Open Data API
  - openweathermap.org API
  - newsapi.org API
  - Netlify for front end hosting
  - Heroku for live server hosting

- Access site: https://tripping-transit.netlify.app/
- Live server: https://young-escarpment-93961.herokuapp.com/

### To be added in future versions:
  - Ability to search a train by any station on a given route
  - Functional sign-in feature to save user's favourite routes
  - Detect the user's geolocation

### Contributors

    @go_berniego
    @Alexhappylucky
    @derekw26
    @dcc26
