/* function to save to local storage
a way to pull items from local storage
utilize weather api
use information from api to build the display
dyanmically change depending on the city*/



//DOM elements
let srchBtnEl = document.querySelector('.searchButton');
let srchBarEl = document.querySelector('#searchBar');
let weatherContainerEl = document.querySelector('.currentWeatherContainer');
let cardContainerEl = document.querySelector('.card');
let formEl = document.querySelector('#form');

//global variables
let searchHistory = [];
let apiKey = 'e681224f251edf9fe2b18dfc26040eac';
let weatherApi = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`;
// let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apiKey}`;

//DOM elements
// let srchBtnEl = document.querySelector('.searchButton');
// let srchBarEl = document.querySelector('#searchBar');
// let weatherContainerEl = document.querySelector('.currentWeatherContainer');
// let cardContainerEl = document.querySelector('.card');
// let formEl = document.querySelector('#form');


const getCityCords = function (city) {
    console.log(`Getting coordinates for: ${city}`)
    let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apiKey}`;

    fetch(geoApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let latitude = data[0].lat;
            let longitude = data[0].lon;
            
            console.log(`The latitude for ${city} is ${latitude}`);
            console.log(`The longitude for ${city} is ${longitude}`);

            getWeather(latitude, longitude);
        })

}



const getWeather = function (latitude, longitude) {
    console.log(`Lat and lon for city: ${latitude} & ${longitude}`);
    let weatherApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(weatherApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            let temperature = data.current.temp;
            temperature = Math.floor((temperature - 273.15) * 9 / 5 + 32);
            console.log(`The temperature is: ${temperature}`);

            let humidity = data.current.humidity;
            console.log(`The humidity is: ${humidity}`);

            let wind = data.current.wind_speed;
            console.log(`The wind speed is: ${wind} `);

            let uvIndex = data.current.uvi;
            console.log(`The UV Index is : ${uvIndex}`);

            let currentCity = document.createElement('h3');
            let currentCityTemp = document.createElement('p');
            let currentCityHumidity = document.createElement('p');
            let currentCityWind = document.createElement('p');
            let currentCityUvindex = document.createElement('p');

            currentCity.textContent = srchBarEl.value.toUpperCase();
            currentCityTemp.textContent = `Temperature: ${temperature}`;
            currentCityHumidity.textContent = `Humidity: ${data.current.humidity}`;
            currentCityWind.textContent = `Wind Speed: ${data.current.wind_speed}`;
            currentCityUvindex.textContent = `UV Index: ${data.current.uvi}`;

            weatherContainerEl.append(currentCity);
            weatherContainerEl.append(currentCityTemp);
            weatherContainerEl.append(currentCityHumidity);
            weatherContainerEl.append(currentCityWind);
            weatherContainerEl.append(currentCityUvindex);

            srchBarEl.value = '';

            

    })

}

/*city name
date
icon representing the weather condition
temperature
humidity
wind speed
UV index */



let formSubmitHandler = function (event) {
    event.preventDefault(); 
    console.log('Submitting form')

    let city = srchBarEl.value.trim();
    console.log(city);
    if (city) {

        getCityCords(city);

    } else {
        alert('Please enter a city');
    }
};

formEl.addEventListener('submit', formSubmitHandler);