import { WeatherProvider } from "./context/WeatherContext";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastList from "./components/ForecastList";

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
        <CurrentWeatherCard />
        <ForecastList />
      </div>
    </WeatherProvider>
  );
}

export default App;
