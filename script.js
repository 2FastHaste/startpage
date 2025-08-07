document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = '3900df0f4a12b7f5326d4d88bfb0750b'; // Your API key
  const CITY = 'Brussels';
  const UNITS = 'metric';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      const temp = Math.round(data.main.temp);
      const desc = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.getElementById('weather-data').innerHTML = `
        <div><strong>${temp}°C</strong>, ${desc}</div>
        <div>Humidity: ${humidity}%</div>
        <div>Wind: ${windSpeed} m/s</div>
      `;
    })
    .catch(error => {
      document.getElementById('weather-data').innerText = 'Error loading weather.';
      console.error('Weather fetch error:', error);
    });
});
