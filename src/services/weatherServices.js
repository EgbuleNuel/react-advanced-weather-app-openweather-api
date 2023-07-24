const API_KEY = "baef5233766e44a0aa1c47fd41c2d9cc";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=baef5233766e44a0aa1c47fd41c2d9cc&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appID: API_KEY });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

export default getWeatherData;