import Forecast from "../components/ForecastSection/Forecast"
import SearchBar from "../components/SearchBar/searchBar"
import WeatherCard from "../components/WeatherCard/weatherCard"
import { useEffect, useState } from "react"
import { fetchWeather } from "../service/weatherApi"
import { CiCloudOn } from "react-icons/ci";

function WeatherPage() {

  const [city, setCity] = useState("Sari");
  const [query, setQuery] = useState("Sari"); 
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    async function getData() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeather(city);
        setWeather(data);
        setCity(data.location.name);
      } catch (error) {
        setError("Failed to fetch weather data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [city]);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setCity(`${lat},${lon}`);
      },
      () => {
        setError("Unable to retrieve location");
      }
    );
  };


  return (
    <>


      <div className="
       min-h-screen 
      bg-gradient-to-br 
      from-sky-500 
      via-sky-300 
      to-red-400 
      flex 
      flex-col 
      items-center 
      py-12
     ">

        <SearchBar city={city} setCity={setCity} getUserLocation={getUserLocation} />

        {loading ? (
          <div className="flex justify-center items-center h-64  transition ">
            <CiCloudOn
              className="text-sky-500    w-[20rem]  h-[20rem] animate-spin-slow " />
          </div>
        ) : (
          weather && <WeatherCard data={weather} />
        )}

        {error && <p className="text-red-600">{error}</p>}



        {weather && <Forecast data={weather.forecast.forecastday} />}




      </div>
    </>
  )

}


export default WeatherPage