import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastList from "./components/ForecastList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center gap-5 bg-gray-900 px-4 pt-10 lg:flex-row lg:justify-center lg:gap-0 lg:px-0 lg:pt-0">
        <CurrentWeatherCard />
        <ForecastList />
      </div>
    </>
  );
}

export default App;
