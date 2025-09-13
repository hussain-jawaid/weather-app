import { useWeather } from "../context/WeatherContext";
import { Sun, CloudSun, CloudRain, Snowflake, Cloud } from "lucide-react";

export default function ForecastSection() {
  const { weather } = useWeather();

  if (!weather?.forecast) {
    return (
      <div className="grid grid-cols-4 gap-3">
        {forecastDays.map((day, index) => {
          const weekday = new Date(day.date).toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div
              key={index}
              className="flex h-32 flex-col items-center justify-center gap-1 rounded-xl bg-white/10 px-4 py-3"
            >
              {/* Weather Icon */}
              {getWeatherIcon(day.code)}

              {/* Weekday */}
              <span className="text-sm">{weekday}</span>

              {/* Temperature */}
              <span className="font-semibold">{Math.round(day.tempMax)}°C</span>
            </div>
          );
        })}
      </div>
    ); // No forecast data yet
  }

  const getWeatherIcon = (code) => {
    if ([1000].includes(code)) return <Sun className="h-9 w-9" />;
    if ([1100, 1101, 1102].includes(code))
      return <CloudSun className="h-9 w-9" />;
    if ([4000, 4200, 4201].includes(code))
      return <CloudRain className="h-9 w-9" />;
    if ([5000, 5100, 5101].includes(code))
      return <Snowflake className="h-9 w-9" />;
    return <Cloud className="h-9 w-9" />;
  };

  // Take only the first 4 days
  const forecastDays = weather.forecast.slice(0, 4);

  return (
    <div className="grid grid-cols-4 gap-3">
      {forecastDays.map((day, index) => {
        const weekday = new Date(day.date).toLocaleDateString("en-US", {
          weekday: "short",
        });

        return (
          <div
            key={index}
            className="flex h-32 flex-col items-center justify-center gap-1 rounded-xl bg-white/10 px-4 py-3"
          >
            {/* Weather Icon */}
            {getWeatherIcon(day.code)}

            {/* Weekday */}
            <span className="text-sm">{weekday}</span>

            {/* Temperature */}
            <span className="font-semibold">{Math.round(day.tempMax)}°C</span>
          </div>
        );
      })}
    </div>
  );
}
