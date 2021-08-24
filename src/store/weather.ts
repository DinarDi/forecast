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

class Weather {
  currentWeather: IcurrentWeather[] = [];
  loading: boolean = false;
  error: boolean = false;
  errorText: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchCurrentWeather = async (city: string) => {
    try {
      this.loading = true;
      this.error = false;
      this.errorText = "";
      const response = await axios.get<IcurrentWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      this.currentWeather = [response.data];
      this.loading = false;
    } catch (e) {
      this.error = true;
      this.errorText = `${e}`;
    }
  };
}

export default new Weather();
