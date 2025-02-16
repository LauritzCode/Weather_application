

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
        const rawTime = json.currentConditions.datetime
        const description = json.currentConditions.conditions
        const precipitation = json.currentConditions.preciptype
        const feelsLike = json.currentConditions.feelslike
        const rainProb = json.currentConditions.precipprob
        const windSpeed = json.currentConditions.windspeed
        const airHum = json.currentConditions.humidity
        const uvInd = json.currentConditions.uvindex
        const dateTimeString = `${rawDate}T${rawTime}`;
        const formattedDate = format(new Date(rawDate), "EEEE, MMMM do yyyy");
        const formattedTime = format(new Date(dateTimeString), "HH:mm");

        // 5-Day forecast: 

        const fiveDays = [
            {
                day: "Mon",
                description: json.days[0].conditions,
                minTemp: json.days[0].tempmin,
                maxTemp: json.days[0].tempmax
            },
            {
                day: "Tue",
                description: json.days[1].conditions,
                minTemp: json.days[1].tempmin,
                maxTemp: json.days[1].tempmax
            },
            {
                day: "Wed",
                description: json.days[2].conditions,
                minTemp: json.days[2].tempmin,
                maxTemp: json.days[2].tempmax
            },
            {
                day: "Thu",
                description: json.days[3].conditions,
                minTemp: json.days[3].tempmin,
                maxTemp: json.days[3].tempmax
            },
            {
                day: "Fri",
                description: json.days[4].conditions,
                minTemp: json.days[4].tempmin,
                maxTemp: json.days[4].tempmax
            }
        ];
        
        

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
            uvInd,
            fiveDays

        }

    } catch (error) {
        console.error(error.message);
    }
}   
