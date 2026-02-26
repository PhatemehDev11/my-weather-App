function Forecast({ data }) {


  return (
    <div className="flex gap-6 mt-12">
      {data.map((item) => (
        <div
          key={item.date}
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
          <p className="mb-2  text-sky-600 font-bold">
            {new Date(item.date).toLocaleDateString("en-US", {
              weekday: "shotr",
            })}</p>
          <img
            src={item.day.condition.icon}
            alt={item.day.condition.text}
            className="mx-auto" />
          <p className="text-xl font-bold mt-2">{item.day.avgtemp_c}°</p>
        </div>
      ))}
    </div>
  );
}



export default Forecast