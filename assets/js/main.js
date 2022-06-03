// Geocode latitude-longitude API

// fetch('http://api.openweathermap.org/geo/1.0/direct?q=Berlin,DE&limit=5&appid=4d0b14ce24e912efc3f78767002e0237')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })


// weather API (needs Latitude Data)

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Frankfurt an der Oder&appid=4d0b14ce24e912efc3f78767002e0237')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })
// my api key 04e1ab889dbc9ff41996c453df63349e

// fetch('https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         for (let i = 0; i < 5; i++) {
//             // console.log(json.list[i]);
//             console.log(json.list[i]);
//             // console.log(json[i]);
//             document.body.innerHTML = json.list[i].main.dt;
//             // document.body.innerHTML = json.list[i].weather[0].description;
//             // document.body.innerHTML = json.list[i].weather[0].description;
//             // document.body.innerHTML = json.list[i].weather[0].main;
//         }
//     })
