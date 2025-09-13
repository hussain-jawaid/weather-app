import { useWeather } from "../context/WeatherContext";
import { Sun, CloudSun, CloudRain, Snowflake, Cloud } from "lucide-react";
import ForecastCard from "./ForecastCard";

export default function ForecastSection() {
  const { weather } = useWeather();

  // Show skeleton placeholders if no forecast yet
  if (!weather?.forecast) {
    return (
      <div className="grid grid-cols-4 gap-3">
        {Array(4) 
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex h-32 animate-pulse flex-col items-center justify-center gap-1 rounded-xl bg-white/10 px-4 py-3"
            />
          ))}
      </div>
    );
  }

  const getWeatherIcon = (code) => {
    if ([1000].includes(code)) return <Sun className="h-9 w-9" />;
    if ([1100, 1101, 1102].includes(code)) return CloudSun;
    if ([4000, 4200, 4201].includes(code)) return CloudRain;
    if ([5000, 5100, 5101].includes(code)) return Snowflake;
    return Cloud;
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
          <>
            <ForecastCard key={index} Icon={getWeatherIcon(day.code)} weekday={weekday} temperature={day.tempMax} />
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
          </>
        );
      })}
    </div>
  );
}
