import axios from 'axios';
import { useImperativeHandle } from 'react';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast'
const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'imperial',
      APPID: API_KEY
    }
  });

  return data
}

// export const getFiveDay = async (query) => {
//   const { data } = await axios.get(fiveDayURL, {
//     params: {
//       q: query,
//       units: 'imperial',
//       APPID: API_KEY
//     }
//   });

//   return data;
// }
