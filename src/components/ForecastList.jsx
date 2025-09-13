import ForecastSection from "./ForecastSection";
import SearchBar from "./SearchBar";
import { useWeather } from "../context/WeatherContext"; // adjust path if needed

export default function ForecastList() {
  const { weather, loading } = useWeather();

  // Safely read current values (optional chaining + nullish coalescing)
  const current = weather?.current;
  const precipitationRaw = current?.precipitation;
  const humidityRaw = current?.humidity;
  const windRaw = current?.windSpeed;

  // Friendly formatting helpers
  const formatPercent = (val) =>
    typeof val === "number" ? `${Math.round(val)}%` : "—";
  const formatWind = (val) =>
    typeof val === "number" ? `${Math.round(val)} km/h` : "—";

  const precipitation = formatPercent(precipitationRaw);
  const humidity = formatPercent(humidityRaw);
  const wind = formatWind(windRaw);

  if (loading) {
    return (
      <div className="flex w-sm flex-col gap-6 rounded-br-2xl rounded-tr-2xl bg-[#1e293b] p-6 text-white shadow-lg">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-xl font-semibold">PRECIPITATION</span>
            <span className="text-lg">{precipitation}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold">HUMIDITY</span>
            <span className="text-lg">{humidity}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold">WIND</span>
            <span className="text-lg">{wind}</span>
          </div>
        </div>

        <ForecastSection />
        <SearchBar />
      </div>
    );
  }

  return (
    <div className="flex w-sm flex-col gap-6 rounded-br-2xl rounded-tr-2xl bg-[#1e293b] p-6 text-white shadow-lg">
      {/* Weather Details */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">PRECIPITATION</span>
          <span className="text-lg">{precipitation}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-semibold">HUMIDITY</span>
          <span className="text-lg">{humidity}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-semibold">WIND</span>
          <span className="text-lg">{wind}</span>
        </div>
      </div>

      {/* Forecast Tiles */}
      <ForecastSection />

      {/* Location Input */}
      <SearchBar />
    </div>
  );
}
