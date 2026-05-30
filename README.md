# WeatherWise 

A REST API and web application that uses real-time geolocation to:

- Check the weather forecast
- Provide rain alerts
- Recommend clothing
- Suggest the best time to go out


## Technologies

### Backend

- Node.js
- Express
- Axios
- Open-Meteo API



## Features

### Weather Forecast

Checks temperature, wind, and precipitation.

### Rain Alert

Analyzes the probability of rain and generates alerts.

### Clothing Suggestion

Recommends appropriate clothing for the temperature.

### Best Time to Go Out

Analyzes the coming hours and recommends the time with the lowest chance of rain.

### Geolocation

Automatically retrieves the users location.

---

## Architecture

Frontend → Backend → Open-Meteo API

---

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```