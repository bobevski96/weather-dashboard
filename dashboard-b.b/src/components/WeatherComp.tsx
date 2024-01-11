import { useState } from "react";
import axios from "axios";
import "./style.css";
import CityIcon from "../assets/city";
import TemperatureIcon from "../assets/temp";
import Globe from "../assets/country";
import DescriptionIcon from "../assets/description";
import EyeVision from "../assets/eye";
import Humidity from "../assets/humidity";
import MinTemp from "../assets/mintemp";
import MaxTemp from "../assets/maxtemp";
import WeatherAnimation from "../assets/weatherAnimation";

export const WeatherComp = () => {
  // Weather API states
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiKey = "7afb210fa2534745d03d8588d75b8530";

  // Getting city from the user
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  // Getting data from the API
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="main-div">
      <div className="input-div">
        <input
          className="input-value"
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {weatherData && (
       <div className="main-card-div">
       <div className="icon">
         <WeatherAnimation weatherCondition={weatherData.weather[0].description.toLowerCase() as 'clear sky' | 'light rain' | 'overcast clouds' | 'light Snow' | 'thunderstorm'} />
       </div>

          <div className="icon">
            <CityIcon />
            <h1>{weatherData.name}</h1>
          </div>
          <div className="icon">
            <TemperatureIcon />
            {<h2>{Math.floor(weatherData.main.temp)}°C</h2>}
          </div>
          <div className="icon">
            <Globe />
            <h2>{weatherData.sys.country}</h2>
          </div>
          <div className="icon">
            <DescriptionIcon />
            <h2 className="description">
              {weatherData.weather[0].description}
            </h2>
          </div>
        </div>
      )}
      <div>
        {weatherData && (
          <div className="other-info">
            <div className="icon icon-class">
              <EyeVision />
              <h3>{weatherData.visibility}</h3>
            </div>
            <div className="icon icon-class">
              <Humidity />
              <h3>{weatherData.main.humidity}%</h3>
            </div>
            <div className="icon icon-class">
              <MinTemp />
              <h3>{weatherData.main.temp_min}</h3>
            </div>
            <div className="icon icon-class">
              <MaxTemp />
              <h3>{weatherData.main.temp_max}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
