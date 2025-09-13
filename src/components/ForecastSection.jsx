import ForecastCard from "./ForecastCard";
import { Sun, Cloud, CloudRain } from "lucide-react";

export default function ForecastSection() {
  return (
    <div className="grid grid-cols-4 gap-1">
      <ForecastCard Icon={Sun} day="Tue" temperature={30} />
      <ForecastCard Icon={Cloud} day="Wed" temperature={25} />
      <ForecastCard Icon={CloudRain} day="Thu" temperature={22} />
      <ForecastCard Icon={CloudRain} day="Fri" temperature={31} />
    </div>
  );
}
