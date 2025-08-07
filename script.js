const API_KEY = 'YOUR_API_KEY';
const CITY = 'Brussels';
const UNITS = 'metric';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    document.getElementById('weather-data').innerText = `Temp: ${temp}°C, ${weather}`;
  })
  .catch(error => {
    document.getElementById('weather-data').innerText = 'Error loading weather.';
  });