function WeatherCard({data}) {

    const city = data.location.name;
    const country = data.location.country;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const icon =data.current.condition.icon;
    const humidity = data.current.humidity;
    const wind = data.current.wind_kph;
    const feelsLike = data.current.feelslike_c;

    


    return (
      <div className="
        w-[400px]
        bg-white/30
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        p-8
        text-center
        text-white
        flex 
        items-center
        justify-center
        flex-col
      ">
        <h1 className="text-7xl   text-sky-600 font-bold mb-4">{temp}°</h1>

        <img
         src={icon}
         alt={condition}
         className="w-[6rem]"
         />
  
        <p className="text-2xl font-semibold">{condition}</p>
        <p className="text-lg opacity-80 mb-6">{city}, {country}</p>
        <div className="border-t border-sky-600 pt-4 flex justify-between text-l font-bold  w-[98%]">
          <span>💧 {humidity}%</span>
          <span>🌬 {wind} km/h</span>
          <span>Feels {feelsLike}°</span>
        </div>
      </div>
    );
  }

  
export default WeatherCard;