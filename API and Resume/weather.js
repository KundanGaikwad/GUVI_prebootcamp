//By city name
var request = new XMLHttpRequest();

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=0681297bf49f1c0c27fb3b3fe7286117', true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(`City is ${data.name}`);
    console.log(`Current weather is ${data.weather[0].main}`);
    console.log(`Wind speed is ${data.wind.speed}`);
    console.log(`Temperature is ${data.main.temp - 273.15} degree`);
    console.log(`Visibility is ${data.visibility}`);
}

//By city ID
var request = new XMLHttpRequest();

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=1275339&appid=0681297bf49f1c0c27fb3b3fe7286117', true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(`City is ${data.name}`);
    console.log(`Current weather is ${data.weather[0].main}`);
    console.log(`Wind speed is ${data.wind.speed}`);
    console.log(`Temperature is ${data.main.temp - 273.15} degree`);
    console.log(`Visibility is ${data.visibility}`);
}


//By lat lang
var request = new XMLHttpRequest();

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=19.01&lon=72.85&appid=0681297bf49f1c0c27fb3b3fe7286117', true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(`City is ${data.name}`);
    console.log(`Current weather is ${data.weather[0].main}`);
    console.log(`Wind speed is ${data.wind.speed}`);
    console.log(`Temperature is ${data.main.temp - 273.15} degree`);
    console.log(`Visibility is ${data.visibility}`);
}
