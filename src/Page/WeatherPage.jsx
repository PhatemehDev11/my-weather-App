import Forecast from "../components/ForecastSection/Forecast"
import SearchBar from "../components/SearchBar/searchBar"
import WeatherCard from "../components/WeatherCard/weatherCard"
import { useEffect, useState } from "react"
import { fetchWeather } from "../service/weatherApi"


function WeatherPage() {

  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    async function getDate() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (error) {
        setError("Failed to fetch weather data", error);
      } finally {
        setLoading(false)
      }
    }
    getDate();
  }, [city]);





  // get user Location 
  const getUserLocation = () => {
    if (!navigator.geolocation) return;
    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setCity(`${lat},${lon}`);
        setLocating(false);
      },
      () => {
        setLocating(false);
      }
    )
  }

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

        <SearchBar city={city} setCity={setCity}    getUserLocation={getUserLocation} />

        {loading && <p className="text-white text-lg">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {weather && <WeatherCard data={weather} />}


        <Forecast />

       


      </div>
    </>
  )

}


export default WeatherPage