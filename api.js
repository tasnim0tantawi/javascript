let apiLink = "https://api.weatherstack.com/current?query=Bahrain&access_key=bb5c32409416bf8589e64d95ac2df1d4";

let data = "";
fetch(apiLink)
    .then(response => response.json())
    .then(json => {
        data = json;
        console.log(data);
        console.log(data.location);
        console.log(data.location.name);
        console.log(data.location.country);
        document.getElementById("location").innerHTML = data.location.name;
        document.getElementById("country").innerHTML = data.location.country;
        document.getElementById("weather").innerHTML = data.current.weather_descriptions
        document.getElementById("temperature").innerHTML = data.current.temperature;
    })
    .catch(error => console.error('Error:', error));

// put the data in the html

