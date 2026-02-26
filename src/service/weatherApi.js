const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export async function fetchWeather(city) {

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`
    );
  

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
  
    const data = await response.json();
    return data;
  }