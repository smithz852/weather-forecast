var locationInput = document.querySelector('.form-control')
var cityContainer = document.querySelector('#cityDetail')
var searchButton = document.querySelector('.btn')
var APIkey = '35a942fcbd737dc05d350e60c8138a71'
var forecastBox = document.querySelector('.forecastBox')
var boxHeader = document.querySelector('.boxHeader')
var box = document.querySelector('.box')
var cityIcon = document.querySelector('#cityIcon')
var cityName = ''
console.log(cityName)
var weatherURL = ''
var cityGroup = document.querySelector('.list-group')
// var weatherURL = 'https://api.github.com/gists/public?since=2021-06-01&per_page=1'

// for storing location searches
var locationArray = [];

// Initiates api call from search
function getWeather() {
    cityName = localStorage.getItem('location')
    locationArray.push(cityName);
    console.log(locationArray);
    cityList();
    weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + APIkey;
    fetchAPI();
}

// Adds buttons to webpage for users search history
function cityList() {
 var cityContainer = ''

 for (var i = 0; i < locationArray.length; i++) {
   cityContainer += `<button class = 'list-group-item'>${locationArray[i]}</button>`
 }

 cityGroup.innerHTML = cityContainer
}

// The fetch request and data added to webpage upon reading return call
function fetchAPI() {
    fetch(weatherURL).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);

        var weatherImg =''
        var weatherInfo = ''

    for (var i = 0; i < 1; i++) {

        weatherImg = `<img class = 'iconBig' src = 'https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png'>`

        weatherInfo += `<span>
        <h3> ${data.city.name} (${dayjs(data.list[i].dt_txt).format('MM/DD/YYYY')}) ${weatherImg}</h3>
        <p>Temp: ${data.list[i].main.temp}°F</p>
        <p>Wind: ${data.list[i].wind.speed} MPH</p>
        <p>Humidity: ${data.list[i].main.humidity}%</p>
        </span>`

        // weatherImg.textContent = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png'
        
    }

    // cityIcon.innerHTML = weatherImg
    cityContainer.innerHTML = weatherInfo

    var weatherContainer = ''
   for (var i = 3; i < 39 ; i = i + 8) {
        //3, 11, 19, 27, 35
        weatherContainer += `<span class = 'boxStyle' id = 'reset'>
        <h6>${dayjs(data.list[i].dt_txt).format('MM/DD/YYYY')}</h6>
        <img class = 'iconSmall' src ='https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png'>
        <p>Temp: ${data.list[i].main.temp}°F</p>
        <p>Wind: ${data.list[i].wind.speed} MPH</p>
        <p>Humidity: ${data.list[i].main.humidity}%</p>
        </span>`
   }

   box.innerHTML = weatherContainer;
    })
}








// Event listeners for search and history buttons

searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    var location = locationInput.value
    localStorage.setItem('location', location)
    // create an array to store location values
    //pull from local storage array to create list
    getWeather();
})

cityGroup.addEventListener('click', function(event) {
    event.preventDefault();
    var cityChoice = event.target.textContent
    console.log(cityChoice);
    weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityChoice + '&units=imperial&appid=' + APIkey;
    fetchAPI();
})