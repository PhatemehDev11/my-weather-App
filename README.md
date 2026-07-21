![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8)
![Netlify Status](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?logo=netlify)

# 🌤️ Weather App

A modern, responsive, and installable **Progressive Web App (PWA)** built with **React**, **Vite**, and **Tailwind CSS**. It allows users to search for any city or use their current location to view real-time weather information and forecast data.

## 🚀 Live Demo

🔗 https://myweatherappmeow.netlify.app

---

## ✨ Features

- 🔍 Search weather by city name
- 📍 Get weather using the device's current location
- 🌡️ Display current temperature
- ☁️ Show weather conditions with dynamic icons
- 💨 Wind speed
- 💧 Humidity
- 🌡️ Feels-like temperature
- 📅 Multi-day weather forecast *(depending on the WeatherAPI plan)*
- 📱 Fully responsive design
- ✨ Modern glassmorphism UI
- ⚡ Progressive Web App (PWA)
- 📥 Installable on desktop and mobile devices

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- WeatherAPI
- React Icons
- Vite PWA Plugin

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Forecast/
│   ├── SearchBar/
│   └── WeatherCard/
│
│── pages/
│   └── WeatherPage.jsx
│
│── service/
│   └── weatherApi.js
│
└── App.jsx
```



## 📦 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

### Navigate to the project

```bash
cd weather-app
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

### Start the development server

```bash
npm run dev
```

---

## 🌐 Deployment

This project is deployed on **Netlify**.

**Live Demo:** https://myweatherappmeow.netlify.app

---

## 🔑 API

Weather data is provided by **WeatherAPI**.

https://www.weatherapi.com/

> **Note:** The number of forecast days depends on your WeatherAPI subscription plan.

---

## 📸 Preview

![Weather App Preview](./assets/weather-app.png)

---

## 📄 License

This project is licensed under the **MIT License**.
