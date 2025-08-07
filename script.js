document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = '3900df0f4a12b7f5326d4d88bfb0750b'; // replace with your key if needed
  const CITY = 'Brussels';
  const UNITS = 'metric';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const temp = Math.round(data.main.temp);
      const weather = data.weather[0].description;
      document.getElementById('weather-data').innerText = `Temp: ${temp}°C, ${weather}`;
    })
    .catch(error => {
      document.getElementById('weather-data').innerText = 'Error loading weather.';
      console.error('Weather fetch error:', error);
    });
});
