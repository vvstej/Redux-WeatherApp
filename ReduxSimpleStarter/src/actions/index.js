const API_KEY = "3627c8516f67f348cb2ec889fad71046";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // template strings
import axios from 'axios';
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request:', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
