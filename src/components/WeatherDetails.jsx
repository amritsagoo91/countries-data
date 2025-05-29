import axios from 'axios';
import React, { useEffect, useState } from 'react';

function WeatherDetails({ country }) {
    const api_key = import.meta.env.VITE_API_KEY;
    const city = country.capital[0];
    const [lat, lon] = country.capitalInfo.latlng;
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`
                );
                setWeather(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchWeather();
    }, [lat, lon, api_key]);

    if (error) return <p>{error}</p>;
    if (!weather || !weather.main || !weather.weather || !weather.wind) {
        return <p>Loading weather...</p>;
    }

    return (
        <div>
            <h3>Weather in {city}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />
            <p>Wind speed: {weather.wind.speed} m/s</p>
        </div>
    );
}

export default WeatherDetails;
