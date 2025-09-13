import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastList from "./components/ForecastList";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <CurrentWeatherCard />
      <ForecastList />
    </div>
  );
}

export default App;
