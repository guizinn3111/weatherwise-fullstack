import { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getWeatherByLocation() {
    setLoading(true);
    setError("");
    setWeather(null);

    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const response = await fetch(
            `http://localhost:3000/weather/advice?lat=${lat}&lon=${lon}`
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || "Error retrieving weather data.");
          }

          setWeather(data);
        } catch (err) {
          setError("The forecast could not be retrieved.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied.");
        setLoading(false);
      }
    );
  }

  return (
    <main className="container">
      <section className="hero">
        <h1>WeatherWise</h1>
        <p>
        Get rain alerts, clothing recommendations, and the best time to go out.
        </p>

        <button onClick={getWeatherByLocation}>
        Use my location
        </button>
      </section>

      {loading && <p className="loading">Checking the forecast...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <section className="cards">
          <div className="card">
            <h2>Current weather</h2>
            <p>Temperature: {weather.current.temperature}°C</p>
            <p>Chance of rain: {weather.current.rainProbability}%</p>
            <p>Wind: {weather.current.windSpeed} km/h</p>
          </div>

          <div className={`card alert ${weather.alert.level}`}>
            <h2>Alert</h2>
            <p>{weather.alert.message}</p>
          </div>

          <div className="card">
            <h2>Recommended clothing</h2>
            <p>{weather.outfit.recommendation}</p>

            <ul>
              {weather.outfit.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Best time to go out</h2>
            <p>{formatDate(weather.bestTimeToLeave.time)}</p>
            <small>{weather.bestTimeToLeave.reason}</small>
          </div>
        </section>
      )}
    </main>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit"
  });
}

export default App;