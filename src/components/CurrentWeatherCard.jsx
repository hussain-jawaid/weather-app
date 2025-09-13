import { MapPin, Sun } from "lucide-react";

export default function CurrentWeatherCard() {
  return (
    <div className="flex w-sm flex-col gap-32 rounded-2xl bg-[#5364d3] px-6 pt-6 pb-16 text-white">
      {/* Top Section: Date & Location */}
      <div>
        <h2 className="text-2xl">Tuesday</h2>
        <p className="text-sm opacity-90">20 Jun 2022</p>

        <div className="mt-2 flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span className="">Biarritz, FR</span>
        </div>
      </div>

      {/* Weather Info */}
      <div className="flex flex-1 flex-col gap-2">
        <Sun className="h-12 w-12" />
        <p className="text-5xl">29°C</p>
        <p className="text-lg">Sunny</p>
      </div>
    </div>
  );
}
