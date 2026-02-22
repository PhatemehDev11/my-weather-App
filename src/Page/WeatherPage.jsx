import Forecast from "../components/ForecastSection/Forecast"
import SearchBar from "../components/SearchBar/searchBar"
import WeatherCard from "../components/WeatherCard/weatherCard"

function WeatherPage() {

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