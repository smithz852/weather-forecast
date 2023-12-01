var locationInput = document.querySelector('.form-control')
var cityContainer = document.querySelector('#cityDetail')
var searchButton = document.querySelector('.btn')
var APIkey = '35a942fcbd737dc05d350e60c8138a71'
var forecastBox = document.querySelector('.forecastBox')
var boxHeader = document.querySelector('.boxHeader')
var box =document.querySelector('.box')
// var latitude = '-33.865143'
// var longitude = '151.209900'
var cityName = 'Sydney'
var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + APIkey;
// var weatherURL = 'https://api.github.com/gists/public?since=2021-06-01&per_page=1'

var locationArray = [''];

function getWeather() {
    fetch(weatherURL).then(function(response) {
        
        return response.json();
    }).then(function(data) {
        console.log(data);

    for (var i = 0; i < 1; i++) {
        var place = document.createElement('h3')
        var air = document.createElement('p')
        var windSpeed = document.createElement('p')
        var humidity = document.createElement('p')

        place.textContent = data.city.name
        air.textContent = data.list[i].main.temp
        windSpeed.textContent = data.list[i].wind.speed
        humidity.textContent = data.list[i].main.humidity

        cityContainer.append(place);
        cityContainer.append(air);
        cityContainer.append(windSpeed);
        cityContainer.append(humidity);
    }
    var weatherContainer = ''
   for (var i = 3; i < 39 ; i = i + 8) {
        //3, 11, 19, 27, 35
        weatherContainer += `<span class = 'boxStyle'>
        <h6>${dayjs(data.list[i].dt_txt).format('MM/DD/YYYY')}</h6>
        <img class = 'iconSmall' src ='https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png'>
        <p>${data.list[i].main.temp}</p>
        <p>${data.list[i].wind.speed}</p>
        <p>${data.list[i].main.humidity}</p>
        </span>`
        
// add link for weather icons to first p tag above

   }
   box.innerHTML = weatherContainer;



    })
}
















searchButton.addEventListener('click', function(event) {
     event.preventDefault();
    var location = locationInput.value
    localStorage.setItem('location', location)
    // create an array to store location values
    //pull from local storage array to create list
    getWeather(); //testing
})