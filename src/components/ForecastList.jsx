import { useWeather } from "../context/WeatherContext";

export default function ForecastList() {
  const { weather, loading } = useWeather();

  if (loading) return <p className="text-white">Loading forecast...</p>;
  if (!weather) return null;

  return (
    <div className="mt-6 flex gap-3">
      {weather.forecast.slice(0, 4).map((day, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center rounded-xl bg-gray-800 p-4 text-white"
        >
          <p>
            {new Date(day.date).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <p className="text-lg font-bold">{Math.round(day.tempAvg)}°C</p>
        </div>
      ))}
    </div>
  );
}
