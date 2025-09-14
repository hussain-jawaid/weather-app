import ForecastSection from "./ForecastSection";
import SearchBar from "./SearchBar";
import { useWeather } from "../context/WeatherContext"; // adjust path if needed

export default function ForecastList() {
  const { weather, loading } = useWeather();

  // Safely read current values (optional chaining + nullish coalescing)
  const current = weather?.current;
  const precipitationRaw = current?.precipitation;
  const humidityRaw = current?.humidity;
  const windRaw = current?.wind;

  // Friendly formatting helpers
  const formatPercent = (val) =>
    typeof val === "number" ? `${Math.round(val)}%` : "—";

  const toKmH = (val, unit = "m/s") => {
    if (typeof val !== "number") return "—";

    switch (unit) {
      case "m/s":
        return `${Math.round(val * 3.6)} km/h`;
      case "mph":
        return `${Math.round(val * 1.60934)} km/h`;
      case "knots":
        return `${Math.round(val * 1.852)} km/h`;
      case "km/h":
      default:
        return `${Math.round(val)} km/h`;
    }
  };

  const precipitation = formatPercent(precipitationRaw);
  const humidity = formatPercent(humidityRaw);
  const wind = toKmH(windRaw, "m/s");

  if (loading) {
    return (
      <div className="flex w-sm flex-col gap-6 rounded-tr-2xl rounded-br-2xl bg-[#1e293b] p-6 text-white shadow-lg">
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
    <div className="flex h-96 w-full flex-col gap-6 rounded-2xl bg-[#1e293b] p-6 shadow-lg lg:w-sm lg:rounded-none lg:rounded-tr-2xl lg:rounded-br-2xl">
      {/* Weather Details */}
      <div className="flex flex-col gap-2 text-sm text-white">
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
