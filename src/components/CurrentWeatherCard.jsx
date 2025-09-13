import { useWeather } from "../context/WeatherContext";

export default function CurrentWeatherCard() {
  const { weather, loading } = useWeather();

  if (loading) return <p className="text-white">Loading...</p>;
  if (!weather) return <p className="text-red-500">No data available</p>;

  const { current } = weather;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-6 text-white">
      <h2 className="text-xl font-bold">Current Weather</h2>
      <p className="mt-2 text-4xl">{Math.round(current.temperature)}°C</p>
      <p className="mt-1">Precipitation: {current.precipitation}%</p>
      <p className="mt-1">Humidity: {current.humidity}%</p>
      <p className="mt-1">Wind: {current.windSpeed} km/h</p>
    </div>
  );
}
