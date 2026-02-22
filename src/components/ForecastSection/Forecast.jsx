function Forecast() {
    const days = [
      { day: "Mon", temp: 22, icon: "🌧" },
      { day: "Tue", temp: 28, icon: "☀️" },
      { day: "Wed", temp: 25, icon: "☁️" },
      { day: "Thu", temp: 27, icon: "🌤" },
      { day: "Fri", temp: 23, icon: "⛈" },
    ];
  
    return (
      <div className="flex gap-6 mt-12">
        {days.map((item, index) => (
          <div
            key={index}
            className="
              w-28
              bg-white/30
              backdrop-blur-md
              rounded-2xl
              shadow-lg
              p-4
              text-center
              text-white
              hover:scale-105
              transition
            "
          >
            <p className="mb-2  text-sky-600 font-bold">{item.day}</p>
            <p className="text-2xl">{item.icon}</p>
            <p className="text-xl font-bold mt-2">{item.temp}°</p>
          </div>
        ))}
      </div>
    );
  }
  


  export default Forecast