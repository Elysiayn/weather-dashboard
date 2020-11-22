//basic API call example
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=08aa83b741b9cdfacd456989d2913cdf")
// .then(function(response){
// return response.json()
// }) 
// .then(function(data){
//   console.log(data)
// }) 

var apiKey = "08aa83b741b9cdfacd456989d2913cdf"
var cityList = []
var searchQuery; 

var searchFormEl = document.querySelector(".form-inline");
var searchInputEl = document.querySelector("#city-input");



//weather search function
var weatherSearch = function (searchQuery) {
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + searchQuery + "&appid=" + apiKey)
  .then(function(response){
    if (response.ok) {
        response.json()then(function(data) {
          //variable to hold lattitude and longittude 
          var cityLon = data.searchQuery.coord.lon
          var cityLat = data.searchQuery.coord.lat
          return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial" + "&appid=" + apiKey)
          .then(function(response2){
            response2.json().then(function(data) {
              getCityForecast(data)
            })
          })
          getCityForecast(data)
        })
      }
     else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function(error) {
    alert("Network Connection Error");
  })
}

//displays city info

  

var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log (events);
};



//function call
weatherSearch();
searchFormEl.addEventListener("submit", formSubmitHandler);


