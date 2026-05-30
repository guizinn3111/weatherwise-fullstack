# WeatherWise Frontend 

## About the Project

WeatherWise Frontend is a React-based application that uses a weather forecast API to provide real-time weather information based on the user’s location.

In addition to the weather forecast, the app offers rain alerts, clothing suggestions, and recommendations for the best time to leave the house.

## Features

* Captures the user’s location in real time.
* Displays the current temperature.
* Rain risk alert.
* Suggestions for weather-appropriate clothing.
* Recommendation for the best time to go out.

## Technologies Used

* React
* JavaScript
* CSS3
* Vite
* Geolocation API

## How to Run

Install the dependencies:

```bash
npm install
```

Start the project:

```bash
npm run dev
```

The application will be available at:

```txt
http://localhost:5173
```

## API Integration

The frontend sends the user’s latitude and longitude to the API and receives weather information to display on the interface.

Example:

```http
GET /weather/advice?lat=-22.9068&lon=-43.1729
```

## Objective

This project was developed to practice React concepts, REST API consumption, geolocation, state management, and the creation of modern interfaces.

