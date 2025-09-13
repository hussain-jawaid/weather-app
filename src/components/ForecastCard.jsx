export default function ForecastCard({ Icon, weekday, temperature }) {
  return (
    <div className="flex h-32 flex-col items-center justify-center gap-1 rounded-xl bg-white/10 px-4 py-3">
      {/* Weather Icon */}
      <Icon className="h-9 w-9" />

      {/* Weekday */}
      <span className="text-sm">{weekday}</span>

      {/* Temperature */}
      <span className="font-semibold">{Math.round(temperature)}°C</span>
    </div>
  );
}
