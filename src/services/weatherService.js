import axios from "axios";

export async function fetchWeather(lat, lon) {
  const url = "https://api.open-meteo.com/v1/forecast";

  const { data } = await axios.get(url, {
    params: {
      latitude: lat,
      longitude: lon,
      current: "temperature_2m,precipitation,rain,wind_speed_10m",
      hourly: "temperature_2m,precipitation_probability,precipitation",
      forecast_days: 1,
      timezone: "auto"
    }
  });

  return data;
}