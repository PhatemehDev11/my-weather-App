import Forecast from "../components/ForecastSection/Forecast"
import SearchBar from "../components/SearchBar/searchBar"
import WeatherCard from "../components/WeatherCard/weatherCard"
import { useEffect, useState } from "react"
import { fetchWeather } from "../service/weatherApi"
import buloon from "../assets/buloon.gif"
import { CiCloudOn } from "react-icons/ci";

function WeatherPage() {

  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


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
    if (!navigator.geolocation) true;
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setCity(`${lat},${lon}`);
        setLoading(false)
      },
      () => {
        setLoading(false)
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

        <SearchBar city={city} setCity={setCity} getUserLocation={getUserLocation} />

        {loading ? (
          <div className="flex justify-center items-center h-64  transition ">
             <CiCloudOn style={{ animation: "spin 3s linear infinite" }}
              className="text-sky-500    w-[20rem]  h-[20rem]  "/>
          </div>
        ) : (
          weather && <WeatherCard data={weather} />
        )}

        {error && <p className="text-red-600">{error}</p>}
      


        <Forecast />




      </div>
    </>
  )

}


export default WeatherPage