import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { API_KEY } from "../keys/key";
import {
  IcurrentWeather,
  IfiveDayForecast,
  IfiveDayForecastAPI,
} from "../types/types";

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
      runInAction(() => {
        this.currentWeather = [response.data];
        for (let i = 0; i < responseFive.length; i += 8) {
          this.fiveDayForecast = [...this.fiveDayForecast, responseFive[i]];
        }
        this.loading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = true;
        this.errorText = `Something went wrong. Try again.`;
      });
    }
  };
}

export default new Weather();
