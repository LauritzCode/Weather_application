# Weather App (Odin Project)

## Description

This weather app is built as part of the Odin Project curriculum. It fetches current weather data and a 5-day forecast from the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) and displays the information dynamically. The app also changes the background color of the weather display based on both weather conditions and the time of day.
Visit here: https://lauritzcode.github.io/Weather_application/

## Features

- **API Data Fetching**: Retrieves weather data—including temperature, conditions, and a short-term forecast—from the Visual Crossing Weather API.
- **Dynamic UI**: Displays key weather details such as location, temperature, date, time, and additional weather metrics.
- **Default Location**: Automatically loads weather data for Copenhagen on page load.
- **Location Search**: Allows users to search for and display weather data for different locations.

## Limitations

- **SVG Icons**: Although there's initial logic to change SVG icons based on weather and time, this functionality is not fully implemented. The icons do not update dynamically at this time.
- **Incomplete Icon Updates**: Additional SVG assets and corresponding logic for dynamic icon updates are still in progress.
- **Basic Error Handling**: While errors from the API are logged, more robust error management could improve the user experience.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd weather-app
   ```

3. **Install Dependencies:**

   If you haven't already, install the required packages:

   ```bash
   npm install
   ```

4. **Run the Project:**

   Use a local development server (such as `webpack-dev-server` or `live-server`) to run the project:

   ```bash
   npm start
   ```

   Alternatively, open the `index.html` file in your browser.

## Usage

- **On Page Load**: The app automatically displays weather data for Copenhagen.
- **Search Functionality**: Type a location into the search field and submit to fetch and display new weather data.

## API Information

This project uses the **Visual Crossing Weather API**, which provides weather data including:
- Resolved location names
- Current conditions (temperature, humidity, wind speed, etc.)
- A 5-day forecast

The API returns data in JSON format, which is then processed and displayed within the app.

## Learning Outcomes

- **API Integration**: Gained hands-on experience in fetching and processing JSON data from a third-party API.
- **DOM Manipulation**: Learned to update the UI dynamically based on asynchronous API responses.
- **Debugging Asynchronous Code**: Improved skills in handling errors and debugging asynchronous JavaScript code.

## Project Context

This project is part of The Odin Project, a free open-source coding curriculum. It emphasizes building real-world projects to apply skills in JavaScript, API consumption, and front-end development. Although the dynamic SVG icon updates are still a work in progress, the project provided valuable insight into working with external APIs and dynamically updating web pages.

## Future Improvements

- **SVG Icon Updates**: Complete the functionality to dynamically update SVG icons based on weather conditions and time of day.
- **Enhanced Error Handling**: Provide better user feedback and error recovery for API failures.
- **UI/UX Enhancements**: Improve styling and animations for a more engaging user experience.

## Credits

- **Visual Crossing Weather API**: For providing comprehensive and reliable weather data.
- **The Odin Project**: For inspiring this project and providing excellent learning resources.
- **Date-fns**: For handling date formatting within the app.


Feel free to tweak the content and formatting as needed for your GitHub repository!
