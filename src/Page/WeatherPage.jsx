import Forecast from "../components/ForecastSection/Forecast"
import SearchBar from "../components/SearchBar/searchBar"
import WeatherCard from "../components/WeatherCard/weatherCard"
import { useEffect } from "react"
import { fetchWeather } from "../service/weatherApi"


function WeatherPage() {

useEffect(()=> {
async function getDate() {
  try {
    const data = await fetchWeather("Sari");
    console.log("weather Data", data)
  } catch (error) {
    console.error(error)
  }
}
getDate();
},[]);


 

    return(
   <>
     <div  className="
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
    
    <SearchBar/>
    <WeatherCard/>
    <Forecast/>


     </div>
   </>
    )
    
}


export default WeatherPage