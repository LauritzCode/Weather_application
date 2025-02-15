

import { format } from "date-fns";


export async function someFunction(location) {

    console.log("Module works")
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=SSJ4BEJPV358N9M6WJX8SEM79&contentType=json`
    
    try {
        console.log("Module fetching..?")
        const response = await fetch(url, { mode: "cors" });    
        const json = await response.json();

        console.log(json)
        const address = json.resolvedAddress
        const temp = json.currentConditions.temp
        const rawDate = json.days[0].datetime
        const description = json.currentConditions.conditions
        const precipitation = json.currentConditions.preciptype
        const feelsLike = json.currentConditions.feelslike
        const rainProb = json.currentConditions.precipprob
        const windSpeed = json.currentConditions.windspeed
        const airHum = json.currentConditions.humidity
        const uvInd = json.currentConditions.uvindex

        const formattedDate = format(new Date(rawDate), "EEEE, MMMM do yyyy");
        const formattedTime = format(new Date(), "HH:mm");
        

        return {
            address,
            temp,
            date: formattedDate,
            time: formattedTime,
            description,
            precipitation,
            feelsLike,
            rainProb,
            windSpeed,
            airHum,
            uvInd

        }

    } catch (error) {
        console.error(error.message);
    }
}   
