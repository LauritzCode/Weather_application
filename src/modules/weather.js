import { someFunction } from "./api";

export async function processWeatherDetails(location) {
    const weatherData = await someFunction(location)

    return {
        address: `${weatherData.address}`,
        temp: `${weatherData.temp}°C`,
        date: weatherData.date,
        time: weatherData.time,
        percipitation: `${weatherData.percipitation}`,
        description: `${weatherData.description}`,
        feelsLike: `Feels like ${weatherData.feelsLike}°C`,

        rainProb: `${weatherData.rainProb}%`,
        windSpeed: `${weatherData.windSpeed} Km/h`,
        airHum: `${weatherData.airHum}%`,
        uvInd: weatherData.uvInd
    }
}

