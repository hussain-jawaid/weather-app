import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = ""; // replace with your Tomorrow.io key
  const LOCATION = "karachi";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        // Fetch both in parallel
        const [realtimeRes, forecastRes] = await Promise.all([
          axios.get("https://api.tomorrow.io/v4/weather/realtime", {
            params: { location: LOCATION, apikey: API_KEY },
            headers: { accept: "application/json" },
          }),
          axios.get("https://api.tomorrow.io/v4/weather/forecast", {
            params: { location: LOCATION, apikey: API_KEY },
            headers: { accept: "application/json" },
          }),
        ]);

        // --- Parse current weather (Realtime API) ---
        const currentData = realtimeRes.data.data.values;
        const current = {
          temperature: currentData.temperature,
          humidity: currentData.humidity,
          windSpeed: currentData.windSpeed,
          precipitation: currentData.precipitationProbability,
          code: currentData.weatherCode,
        };

        // --- Parse forecast (Forecast API) ---
        const daily = forecastRes.data.timelines.daily.map((day) => ({
          date: day.time,
          tempAvg: day.values.temperatureAvg,
          tempMin: day.values.temperatureMin,
          tempMax: day.values.temperatureMax,
          humidity: day.values.humidityAvg,
          wind: day.values.windSpeedAvg,
          code: day.values.weatherCodeMax,
        }));

        setWeather({ current, forecast: daily });
      } catch (err) {
        console.error("Weather fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
