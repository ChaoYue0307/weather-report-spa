// SERVICES
weatherApp.service('cityService',function(){
    
    this.city = "New York, NY";
})


weatherApp.service('weatherService',['$resource',function($resource){
    this.GetWeather = function(city,days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4a088170110bbc9a079e273904e8f542",{callback:"JSON_CALLBACK"},{get:{method:"JSONP"}});
                                            
    return weatherAPI.get({q:city,cnt:days});
    };
    
}]);