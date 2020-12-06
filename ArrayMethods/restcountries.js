//Get all the countries from Asia continent using Filter function
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    data = data.filter(current => current.region === "Asia");
    console.log(data);
}


//Get all the countries with population of less than 2 lacs using Filter function

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    data = data.filter(current => current.population < 200000);
    console.log(data);
}



//Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach(current => {
        console.log(`Country name is ${current.name}`);
        console.log(`Capital of country is ${current.capital}`);
        console.log(`Find flag at this url :- ${current.flag}`);
    })
}



//Print the total population of countries using reduce function

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    let arr = [11,22,33,44];
    let totalPopulation = data.reduce((total, current) => {
        return total + current.population;
    }, 0)
   console.log(`Total population is ${totalPopulation}`);
}



// Print the total population of countries in Asia continent using reduce and filter function
var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    let totalPopulation = data.filter(current => current.region === "Asia").reduce((total, current) => {
        return total + current.population;
    }, 0)
   console.log(`Total population is ${totalPopulation}`);
}


// Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all',true);

request.send();

request.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach(current => {
        if(current.currencies[0].name === "United States dollar"){
            console.log(`Country name with US doller is ${current.name}`);
        }
    })
    console.log(data);
}


//Add error handling to the xml http request code

var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/al',true);

request.onerror = function () {
    console.log("** An error occurred during the transaction");
  };

request.send();

try {
    request.onload = function(){
        var data = JSON.parse(this.response);
        data.forEach(current => {
            if(current.currencies[0].name === "United States dollar"){
                console.log(`Country name with US doller is ${current.name}`);
            }
        })
        console.log(data);
    }
} catch (error) {
    console.log(`Error :- ${error}`)
}

