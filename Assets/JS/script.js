var locationInput = document.querySelector('.form-control')
var searchButton = document.querySelector('.btn')





searchButton.addEventListener('click', function(event) {
    //prevent default?
    var location = locationInput.value
    localStorage.setItem('location', location)
})