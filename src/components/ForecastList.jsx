import { useState } from "react";
import ForecastSection from "./ForecastSection";
import SearchBar  from "./SearchBar";

export default function ForecastList() {
  const [location, setLocation] = useState("");

  return (
    <div className="flex w-md flex-col gap-6 rounded-2xl bg-[#1e293b] p-6 text-white shadow-lg">
      {/* Weather Details */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">PRECIPITATION</span>
          <span className="text-lg">0%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-semibold">HUMIDITY</span>
          <span className="text-lg">42%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-semibold">WIND</span>
          <span className="text-lg">3 km/h</span>
        </div>
      </div>

      {/* Forecast Tiles */}
      <ForecastSection />

      {/* Location Input */}
      <SearchBar />
    </div>
  );
}
