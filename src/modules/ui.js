import { processWeatherDetails } from "./weather";

export const renderWeatherDisplay = (container) => {

    const content = document.querySelector(".content");
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div");

    leftDiv.classList.add("left-inquiry")
    rightDiv.classList.add("right-inquiry")

    leftDiv.innerHTML = `
  <div class="input-search">
      <form class="form">
      <input id="searchInput" type="text" placeholder="Search Location">
      <button id="searchBtn" type="submit">Search</button
      </form>
    </div>
      <div class="displayWeather">
      <div class="top-wrap-time">
      <div class="top-wrap">
      <h1 id="displayLocation">London, City of London</h1>
      <p id="currentTime">17:00</p></div>
      <h2 id="dateDisplay">Saturday, February 15, 2025</h2></div>
      <div class="bottom-wrap">
      <h3 id="currentTemp">6</h3>
      <div class="extra-details">
      <p id="feelsLike">Feels Like 4</p>
      <span>•</span>
      <p id="description">Partially cloudy</p></div></div>
      </div>
    `
    rightDiv.innerHTML = `
    <div class="top-weather-details">
    <h3 class="weather-h3">Today's weather details</h3>
    <div class="weather-detail-container">

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=thermometer-simple-light.svg" alt="icon"></
    <span>Thermal Sensation</span></div>
    <span id="thermalSensation">17 C</span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=cloud-rain-light.svg" alt="icon"></
    <span>Rain Probability</span></div>
    <span id="rainProb">17 C</span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=wind-light.svg" alt="icon"></
    <span>Wind Speed</span></div>
    <span id="windSpeed">17 C</span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=drop-light.svg" alt="icon"></
    <span>Air Humidity</span></div>
    <span id="airHumid">17 C</span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=sun-dim-light.svg" alt="icon"></
    <span>UV Index</span></div>
    <span id="uvIndex">17 C</span>
    </div>
    

    </div>
    </div>
    <div class="weather-forecast-wrap"></div>
    `

    content.appendChild(leftDiv);
    content.appendChild(rightDiv);

    const submit = document.querySelector(".form")
    const input = document.querySelector("#searchInput");

    submit.addEventListener("submit", async (e) => {
        e.preventDefault();
 
        const weatherInfo = await processWeatherDetails(input.value)
        document.querySelector("#displayLocation").textContent = weatherInfo.address
        document.querySelector("#currentTemp").textContent = weatherInfo.temp
        document.querySelector("#dateDisplay").textContent = weatherInfo.date
        document.querySelector("#currentTime").textContent = weatherInfo.time
        document.querySelector("#description").textContent = weatherInfo.description
        document.querySelector("#feelsLike").textContent = weatherInfo.feelsLike

        // right side 

        document.querySelector("#thermalSensation").textContent = weatherInfo.temp
        document.querySelector("#rainProb").textContent = weatherInfo.rainProb
        document.querySelector("#windSpeed").textContent = weatherInfo.windSpeed
        document.querySelector("#airHumid").textContent = weatherInfo.airHum
        document.querySelector("#uvIndex").textContent = weatherInfo.uvInd
        
    })


}
