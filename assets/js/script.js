//basic API call example
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=08aa83b741b9cdfacd456989d2913cdf")
// .then(function(response){
// return response.json()
// }) 
// .then(function(data){
//   console.log(data)
// }) 

var apiKey= "08aa83b741b9cdfacd456989d2913cdf"


//weather search function
var weatherSearch = function (searchQuery) {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&appid=" + apiKey)
  .then(function(response){
      return response.json()
    }) 
    .then(function(data){
      console.log(data)
    }) 
}


//function call
weatherSearch("Jacksonville");


