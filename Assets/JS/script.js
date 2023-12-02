var locationInput = document.querySelector('.form-control')
var cityContainer = document.querySelector('#cityDetail')
var searchButton = document.querySelector('.btn')
var APIkey = '35a942fcbd737dc05d350e60c8138a71'
var forecastBox = document.querySelector('.forecastBox')
var boxHeader = document.querySelector('.boxHeader')
var box =document.querySelector('.box')
var cityIcon = document.querySelector('#cityIcon')
var cityName = ''
console.log(cityName)
var weatherURL = ''
// var weatherURL = 'https://api.github.com/gists/public?since=2021-06-01&per_page=1'

var locationArray = [''];

function getWeather() {
    cityName = localStorage.getItem('location')
    weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + APIkey;
    fetch(weatherURL).then(function(response) {
        
        return response.json();
    }).then(function(data) {
        console.log(data);

        var weatherImg =''

    for (var i = 0; i < 1; i++) {


        var place = document.createElement('h3')
        var air = document.createElement('p')
        var windSpeed = document.createElement('p')
        var humidity = document.createElement('p')
        

        place.textContent = data.city.name + '  (' + dayjs(data.list[i].dt_txt).format('MM/DD/YYYY') + ')'
        air.textContent = 'Temp: ' + data.list[i].main.temp +'°F'
        windSpeed.textContent = 'Wind: ' + data.list[i].wind.speed + ' MPH'
        humidity.textContent = 'Humidity: ' + data.list[i].main.humidity + '%'
        weatherImg.textContent = 'https://openweathermap.org/img/wn/' + data.list[i].weather[0].icon + '@2x.png'


        cityContainer.append(place);
        cityContainer.append(air);
        cityContainer.append(windSpeed);
        cityContainer.append(humidity);
        weatherImg += `<img class = 'iconBig' src = 'https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png'>`
    }

    cityIcon.innerHTML = weatherImg


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


// function resetWeather() {
//  var mainDisplay = document.getElementById('cityDetail')
//  var lowerDisplay = document.getElementById('reset')

//  mainDisplay.parentNode.removeChild(mainDisplay);
//  lowerDisplay.parentNode.removeChild(lowerDisplay)

// }













searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    var location = locationInput.value
    localStorage.setItem('location', location)
    // create an array to store location values
    //pull from local storage array to create list
    // resetWeather();
    getWeather();
})