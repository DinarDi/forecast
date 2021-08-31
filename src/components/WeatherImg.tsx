import React from "react";
import { useStyles } from "../hooks/useStyles";
import clear from "../img/Clear.png";
import cloud from "../img/Clouds.png";
import drizzle from "../img/Drizzle.png";
import rain from "../img/Rain.png";
import thunderstorm from "../img/Thunderstorm.png";
import snow from "../img/Snow.png";

interface IWeatherImg {
  main: string;
}

const WeatherImg: React.FC<IWeatherImg> = ({ main }) => {
  const { weatherImg } = useStyles();
  let img;
  switch (main) {
    case "Clouds":
      img = cloud;
      break;
    case "Thunderstorm":
      img = thunderstorm;
      break;
    case "Drizzle":
      img = drizzle;
      break;
    case "Rain":
      img = rain;
      break;
    case "Snow":
      img = snow;
      break;
    case "Clear":
      img = clear;
      break;
    default:
      img = clear;
      break;
  }

  return <img src={img} alt="weather" className={weatherImg} />;
};

export default WeatherImg;
