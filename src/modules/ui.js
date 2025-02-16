import { processWeatherDetails } from "./weather";


export const renderWeatherDisplay = (weatherInfo = null) => {

    const content = document.querySelector(".content");
    const leftDiv = document.createElement("div");
    const rightDiv = document.createElement("div");

    leftDiv.classList.add("left-inquiry")
    rightDiv.classList.add("right-inquiry")

    leftDiv.innerHTML = `
  <div class="input-search">
      <form class="form">
      <img class="logoimg" src="https://weatherwiseapp.vercel.app/images/icons/Logo.svg">
      <input id="searchInput" type="text" placeholder="Search Location">
      </form>
    </div>
      <div class="displayWeather">
      <div class="top-wrap-time">
      <div class="top-wrap">
      <h1 id="displayLocation"></h1>
      <p id="currentTime"></p></div>
      <h2 id="dateDisplay"></h2></div>
      <div class="bottom-wrap">
      <h3 id="currentTemp"></h3>
      <div class="extra-details">
      <p id="feelsLike"></p>
      <span>•</span>
      <p id="description"></p></div></div>
      </div>
    `
    rightDiv.innerHTML = `
    <div class="top-weather-details">
    <h3 class="weather-h3">Today's weather details</h3>
    <div class="weather-detail-container">

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=thermometer-simple-light.svg" alt="icon"></
    <span>Thermal Sensation</span></div>
    <span id="thermalSensation"></span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=cloud-rain-light.svg" alt="icon"></
    <span>Rain Probability</span></div>
    <span id="rainProb"></span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=wind-light.svg" alt="icon"></
    <span>Wind Speed</span></div>
    <span id="windSpeed"></span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=drop-light.svg" alt="icon"></
    <span>Air Humidity</span></div>
    <span id="airHumid"></span>
    </div>

    <div class="single-detail-wrap">
    <div class="detail-span"><img src="https://weatherwiseapp.vercel.app/images/icons/Type=sun-dim-light.svg" alt="icon"></
    <span>UV Index</span></div>
    <span id="uvIndex"></span>
    </div>
    

    </div>
    </div>


    <div class="weather-forecast-wrap">
      <span>Forecast for 5 days</span>
      <div class="forecast-container">
      <div class="day-card">
        <span>Mon</span>
        <img class="svg-img-card"src="https://weatherwiseapp.vercel.app/images/icons/Weather=Cloudy,%20Moment=Day.svg">
        <p class="day-description" id="day-description-1"></p>
        <div class="day-temps">
        <span id="card-max-temp-1"></span>
        <span id="card-min-temp-1"></span></div>
       </div>

      <div class="day-card">
        <span>Tue</span>
        <img class="svg-img-card"src="https://weatherwiseapp.vercel.app/images/icons/Weather=Cloudy,%20Moment=Day.svg">
        <p class="day-description" id="day-description-2"></p>
        <div class="day-temps">
        <span id="card-max-temp-2"></span>
        <span id="card-min-temp-2"></span></div>
       </div>

       <div class="day-card">
        <span>Wed</span>
        <img class="svg-img-card"src="https://weatherwiseapp.vercel.app/images/icons/Weather=Cloudy,%20Moment=Day.svg">
        <p class="day-description" id="day-description-3"></p>
        <div class="day-temps">
        <span id="card-max-temp-3"></span>
        <span id="card-min-temp-3"></span></div>
       </div>

       <div class="day-card">
        <span>Thu</span>
        <img class="svg-img-card"src="https://weatherwiseapp.vercel.app/images/icons/Weather=Cloudy,%20Moment=Day.svg">
        <p class="day-description" id="day-description-4"></p>
        <div class="day-temps">
        <span id="card-max-temp-4"></span>
        <span id="card-min-temp-4"></span></div>
       </div>

       <div class="day-card">
        <span>Fri</span>
        <img class="svg-img-card"src="https://weatherwiseapp.vercel.app/images/icons/Weather=Cloudy,%20Moment=Day.svg">
        <p class="day-description" id="day-description-5"></p>
        <div class="day-temps">
        <span id="card-max-temp-5"></span>
        <span id="card-min-temp-5"></span></div>
       </div>

      </div>
    </div>
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

       weatherInfo.fiveDays.forEach((day, index) => {
        document.querySelector(`#card-max-temp-${index + 1}`).textContent = day.maxTemp
        document.querySelector(`#card-min-temp-${index + 1}`).textContent = day.minTemp
        document.querySelector(`#day-description-${index + 1}`).textContent = day.description
       })

      
    })

    
  
}
