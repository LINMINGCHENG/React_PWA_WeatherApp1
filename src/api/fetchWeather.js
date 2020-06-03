import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'cd2047e43ab44e234f104d3ef45f1054';
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};