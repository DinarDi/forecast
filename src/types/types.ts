interface Iweather {
  main: string;
  description: string;
}

interface Imain {
  temp: number;
  feels_like: number;
}

export interface IcurrentWeather {
  name: string;
  weather: Iweather[];
  main: Imain;
}

interface ImainFive {
  temp_min: number;
  temp_max: number;
}

export interface IfiveDayForecast {
  dt_txt: string;
  main: ImainFive;
  weather: Iweather[];
}

export interface IfiveDayForecastAPI {
  list: IfiveDayForecast[];
}
