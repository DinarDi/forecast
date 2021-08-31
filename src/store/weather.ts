import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_KEY } from "../keys/key";

interface Iweather {
  main: string;
  description: string;
}

interface Imain {
  temp: number;
  feels_like: number;
}

interface IcurrentWeather {
  name: string;
  weather: Iweather[];
  main: Imain;
}

interface ImainFive {
  temp_min: number;
  temp_max: number;
}

interface IfiveDayForecast {
  dt_txt: string;
  main: ImainFive;
  weather: Iweather[];
}

interface IfiveDayForecastAPI {
  list: IfiveDayForecast[];
}

class Weather {
  currentWeather: IcurrentWeather[] = [];
  fiveDayForecast: IfiveDayForecast[] = [];
  loading: boolean = false;
  error: boolean = false;
  errorText: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchWeather = async (city: string) => {
    try {
      this.fiveDayForecast = [];
      this.loading = true;
      this.error = false;
      this.errorText = "";
      const response = await axios.get<IcurrentWeather>(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: { q: city, units: "metric", appid: API_KEY },
        }
      );
      const responseFive = await axios
        .get<IfiveDayForecastAPI>(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: { q: city, units: "metric", appid: API_KEY },
          }
        )
        .then((resp) => resp.data.list);
      this.currentWeather = [response.data];
      for (let i = 0; i < responseFive.length; i += 8) {
        this.fiveDayForecast = [...this.fiveDayForecast, responseFive[i]];
      }
      this.loading = false;
    } catch (e) {
      this.error = true;
      this.errorText = `${e}`;
    }
  };
}

export default new Weather();
