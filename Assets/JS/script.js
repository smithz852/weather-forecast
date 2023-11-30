var locationInput = document.querySelector('.form-control')
var cityContainer = document.querySelector('#cityDetail')
var searchButton = document.querySelector('.btn')
var APIkey = '35a942fcbd737dc05d350e60c8138a71'
var latitude = '-33.865143'
var longitude = '151.209900'
var weatherURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIkey;
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