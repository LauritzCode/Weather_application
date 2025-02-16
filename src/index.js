import './styles/global.css';
import { processWeatherDetails } from './modules/weather';
import { renderWeatherDisplay } from './modules/ui';

window.onload = async () => {
  // Build the UI structure first.
  renderWeatherDisplay();

  // Fetch default weather data for Copenhagen.
  const defaultWeather = await processWeatherDetails("Copenhagen");

  // Update left side details.
  document.querySelector("#displayLocation").textContent = defaultWeather.address;
  document.querySelector("#currentTemp").textContent = defaultWeather.temp;
  document.querySelector("#dateDisplay").textContent = defaultWeather.date;
  document.querySelector("#currentTime").textContent = defaultWeather.time;
  document.querySelector("#description").textContent = defaultWeather.description;
  document.querySelector("#feelsLike").textContent = defaultWeather.feelsLike;

  // Update right side details.
  document.querySelector("#thermalSensation").textContent = defaultWeather.temp;
  document.querySelector("#rainProb").textContent = defaultWeather.rainProb;
  document.querySelector("#windSpeed").textContent = defaultWeather.windSpeed;
  document.querySelector("#airHumid").textContent = defaultWeather.airHum;
  document.querySelector("#uvIndex").textContent = defaultWeather.uvInd;

  // Update 5-day forecast.
  defaultWeather.fiveDays.forEach((day, index) => {
    document.querySelector(`#card-max-temp-${index + 1}`).textContent = day.maxTemp;
    document.querySelector(`#card-min-temp-${index + 1}`).textContent = day.minTemp;
    document.querySelector(`#day-description-${index + 1}`).textContent = day.description;
  });


 

};
