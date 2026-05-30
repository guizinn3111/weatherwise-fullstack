import { fetchWeather } from "../services/weatherService.js";
import {
  getRainAlert,
  getOutfitSuggestion,
  getBestTimeToLeave
} from "../services/recommendationService.js";

export async function getWeatherAdvice(req, res) {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({
        error: "Latitude and longitude are required."
      });
    }

    const weather = await fetchWeather(lat, lon);

    const current = weather.current;
    const rainProbability = weather.hourly.precipitation_probability[0] ?? 0;

    const alert = getRainAlert(
      rainProbability,
      current.precipitation
    );

    const outfit = getOutfitSuggestion(
      current.temperature_2m,
      rainProbability,
      current.wind_speed_10m
    );

    const bestTimeToLeave = getBestTimeToLeave(weather.hourly);

    return res.json({
      location: {
        lat,
        lon
      },
      current: {
        temperature: current.temperature_2m,
        precipitation: current.precipitation,
        rain: current.rain,
        windSpeed: current.wind_speed_10m,
        rainProbability
      },
      alert,
      outfit,
      bestTimeToLeave
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error retrieving the weather forecast."
    });
  }
}