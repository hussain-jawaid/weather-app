import {
  MapPin,
  Sun,
  CloudRain,
  Cloud,
  CloudSun,
  Snowflake,
} from "lucide-react";
import { useWeather } from "../context/WeatherContext";

export default function CurrentWeatherCard() {
  const { weather } = useWeather();

  if (!weather?.current) {
    return (
      <div className="flex w-80 h-106 flex-col items-center justify-center rounded-2xl bg-[#5364d3] p-6 text-white shadow-lg">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  const { temperature, code, city, date } = weather.current;

  // Map weatherCode → Icon + Label
  const getWeatherIcon = (code) => {
    if ([1000].includes(code)) return <Sun className="h-12 w-12" />;
    if ([1100, 1101, 1102].includes(code))
      return <CloudSun className="h-12 w-12" />;
    if ([4000, 4200, 4201].includes(code))
      return <CloudRain className="h-12 w-12" />;
    if ([5000, 5100, 5101].includes(code))
      return <Snowflake className="h-12 w-12" />;
    return <Cloud className="h-12 w-12" />;
  };

  const getWeatherLabel = (code) => {
    if ([1000].includes(code)) return "Clear";
    if ([1100, 1101, 1102].includes(code)) return "Partly Cloudy";
    if ([4000, 4200, 4201].includes(code)) return "Rain";
    if ([5000, 5100, 5101].includes(code)) return "Snow";
    return "Cloudy";
  };

  return (
    <div className="flex min-w-83 h-106 flex-col gap-32 rounded-2xl bg-[#5364d3] px-6 pt-6 pb-14 text-white">
      {/* Top Section: Date & Location */}
      <div>
        <h2 className="text-2xl">
          {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}
        </h2>
        <p className="text-sm opacity-90">
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>

        <div className="mt-2 flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>{city}</span>
        </div>
      </div>

      {/* Weather Info */}
      <div className="flex flex-1 flex-col gap-2">
        {getWeatherIcon(code)}
        <p className="text-5xl">{temperature}°C</p>
        <p className="text-lg">{getWeatherLabel(code)}</p>
      </div>
    </div>
  );
}
