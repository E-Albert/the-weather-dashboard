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


let getCityCords = function (city) {
    console.log(`Getting coordinates for: ${city}`)
    let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apiKey}`;

    fetch(geoApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })

}



//fecthing lat and lon of city
// fetch(geoApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

const getWeather = function (lat, lon) {
    
}



// //fecthing weather of city
// fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })


let formSubmitHandler = function (event) {
    event.preventDefault(); 
    console.log('Submitting form')

    let city = srchBarEl.value.trim();
    console.log(city);
    if (city) {

        getCityCords(city);

        srchBarEl.value = '';
    } else {
        alert('Please enter a city');
    }
};

formEl.addEventListener('submit', formSubmitHandler);