export default function ForecastCard({
  Icon,
  weekday,
  temperature,
  bgColor,
  textColor,
}) {
  return (
    <div
      className="flex h-32 flex-col items-center justify-center gap-1 rounded-xl px-4 py-3"
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
    >
      {/* Weather Icon */}
      <Icon className="h-9 w-9" />

      {/* Weekday */}
      <span className="text-sm">{weekday}</span>

      {/* Temperature */}
      <span className="font-semibold">{Math.round(temperature)}°C</span>
    </div>
  );
}
