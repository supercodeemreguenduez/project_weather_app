// Geocode latitude-longitude API

fetch('http://api.openweathermap.org/geo/1.0/direct?q=Berlin&limit=5&appid=4d0b14ce24e912efc3f78767002e0237')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })


// weather API (needs Latitude Data)

fetch('https://api.openweathermap.org/data/2.5/weather?lat=52.5170365&lon=13.3888599&appid=4d0b14ce24e912efc3f78767002e0237')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })

// Standort-Suche

function search(source, name) {
    var results;

    name = name.toUpperCase();
    results = source.filter(function (entry) {
        return entry.name.toUpperCase().indexOf(name) !== -1;
    });
    return results;
}