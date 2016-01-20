import axios from 'axios';

const API_KEY = '1d6e0f6d14da3ef3802d079f0b96d7fa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;

    //returns a promise, however redux-promise will wait for a response before sending to reducer
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
