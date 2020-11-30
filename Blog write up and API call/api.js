var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://restcountries.eu/rest/v2/all");
xhttp.send();
let response = [];
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.response);
      
      response.forEach( current => {
          console.log(current.flag);
      })
    }
};



