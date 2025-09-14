import { useEffect } from "react";
import axios from "axios";
import { useWeather } from "../context/WeatherContext";

export default function useUserLocation() {
  const { setLocation } = useWeather();

  const API_KEY = "0bf6bf970f7d42ed8379c314eecef20a"; // replace with real key

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`,
          );

          const components = response.data.results[0].components;

          let city =
            components.city ||
            components.town ||
            components.village ||
            components.county ||
            components.state_district ||
            components.state;

          // Clean suffixes like “Division” or “District”
          if (city) {
            city = city.replace(/ Division| District/gi, "");
          }

          setLocation(city || "Unknown");
        } catch (err) {
          console.error("Failed to fetch location:", err);
        }
      },
      (err) => {
        console.error("Geolocation error:", err.message);
      },
    );
  }, [setLocation]);
}
