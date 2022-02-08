/* function to save to local storage
a way to pull items from local storage
utilize weather api
use information from api to build the display
dyanmically change depending on the city*/

//global variables
let searchHistory = [];
let apiKey = 'e681224f251edf9fe2b18dfc26040eac';
let weatherApi = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}';
let geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

//DOM elements
let srchBtnEl = document.querySelector('.searchButton');
let srchBarEl = document.querySelector('#searchBar');
let weatherContainerEl = document.querySelector('.currentWeatherContainer');
let cardContainerEl = document.querySelector('.card');
let formEl = document.querySelector('#form');


var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = srchBarEl.value.trim();

    if (city) {
        // getUserRepos(username);

        srchBarEl.value = '';
    } else {
        alert('Please enter a city');
    }
};



//fecthing lat and lon of city
// fetch(geoApi)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })





// //fecthing weather of city
// fetch(requestUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

formEl.addEventListener('submit', formSubmitHandler);