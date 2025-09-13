import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { apiKey } from "../assets/utils";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const [location, setLocation] = useState("toronto");
  const API_KEY = apiKey;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);

        const [realtimeRes, forecastRes] = await Promise.all([
          axios.get("https://api.tomorrow.io/v4/weather/realtime", {
            params: { location, apikey: API_KEY },
            headers: { accept: "application/json" },
          }),
          axios.get("https://api.tomorrow.io/v4/weather/forecast", {
            params: { location, apikey: API_KEY },
            headers: { accept: "application/json" },
          }),
        ]);

        const currentData = realtimeRes.data.data.values;
        const current = {
          temperature: currentData.temperature,
          code: currentData.weatherCode,
          city: location,
          date: new Date().toISOString(),
          precipitation: currentData.precipitationProbability,
          humidity: currentData.humidity,
          wind: currentData.windSpeed,
        };

        const daily = forecastRes.data.timelines.daily.map((day) => ({
          date: day.time,
          tempAvg: day.values.temperatureAvg,
          tempMin: day.values.temperatureMin,
          tempMax: day.values.temperatureMax,
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
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{ weather, loading, setLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
