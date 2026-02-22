function WeatherCard() {
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
      ">
        <h1 className="text-7xl   text-sky-600 font-bold mb-4">26°</h1>
  
        <p className="text-2xl font-semibold">Partly Cloudy</p>
        <p className="text-lg opacity-80 mb-6">Tehran, IR</p>
  
        <div className="border-t border-sky-600 pt-4 flex justify-between text-l font-bold">
          <span>💧 40%</span>
          <span>🌬 12 km/h</span>
          <span>⬆ 29°</span>
        </div>
      </div>
    );
  }

  
export default WeatherCard;