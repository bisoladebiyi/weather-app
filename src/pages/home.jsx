import React, { useState } from "react";
import weather from "../icons/weather.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=0c8b41179f5e0e85745e60a5a044c871&units=metric";
  const cityName = (e) => {
    setCity(e.target.value);
  };
  const submit = (e) => {
    axios.get(url).then((response) => {
      localStorage.setItem('weatherResponse', JSON.stringify(response.data))
    //   console.log(weatherResponse);
    });
  };
  return (
    <div className="home-page">
      <div className="home">
        <div className="heading-img">
          <h1 className="welcome-heading">Welcome!</h1>
          <img className="weather-img" src={weather} alt="" />
        </div>

        <form action="">
          <input
            type="text"
            placeholder="Enter City name"
            onChange={(e) => cityName(e)}
          />
          <Link to="/response">
            <a href onClick={submit}>
              click me
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
