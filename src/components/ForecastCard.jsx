import { Sun } from "lucide-react";

export default function ForecastCard({ Icon = Sun, day, temperature }) {
  return (
    <div className="flex h-32 flex-col items-center justify-center gap-1 rounded-xl bg-white/10 px-4 py-3">
      <Icon className="h-9 w-9" />
      <span className="text-sm">{day}</span>
      <span className="font-semibold">{temperature}°C</span>
    </div>
  );
}
