
// Variables Weather Forecast 3hours //

let time1 = document.getElementById('time_1');
let time2 = document.getElementById('time_2');
let time3 = document.getElementById('time_3');
let time4 = document.getElementById('time_4');
let time5 = document.getElementById('time_5');

let temp1 = document.getElementById("time_1_temperature");
let temp2 = document.getElementById("time_2_temperature");
let temp3 = document.getElementById("time_3_temperature");
let temp4 = document.getElementById("time_4_temperature");
let temp5 = document.getElementById("time_5_temperature");

// Fetch forecast Api //

fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        // console.log(json.list[0].main.temp);
        time1.innerHTML = json.list[1].dt_txt.slice(10, 13) + ' Uhr';
        temp1.innerHTML = `${Math.floor((json.list[1].main.temp))} °C`;
        time2.innerHTML = json.list[2].dt_txt.slice(10, 13) + 'Uhr';
        temp2.innerHTML = `${Math.floor((json.list[2].main.temp))} °C`;
        time3.innerHTML = json.list[3].dt_txt.slice(10, 13) + 'Uhr';
        temp3.innerHTML = `${Math.floor((json.list[3].main.temp))} °C`;
        time4.innerHTML = json.list[4].dt_txt.slice(10, 13) + 'Uhr';
        temp4.innerHTML = `${Math.floor((json.list[4].main.temp))} °C`;
        time5.innerHTML = json.list[5].dt_txt.slice(10, 13) + 'Uhr';
        temp5.innerHTML = `${Math.floor((json.list[5].main.temp))} °C`;
    })


// Weather Forecast 5 days - days Variables and Function


//5 day forecast Api 

let day2Min = document.getElementById('day2_min');
let day2Max = document.getElementById('day2_max');
let day3Min = document.getElementById('day3_min');
let day3Max = document.getElementById('day3_max');
let day4Min = document.getElementById('day4_min');
let day4Max = document.getElementById('day4_max');
let day5Min = document.getElementById('day5_min');
let day5Max = document.getElementById('day5_max');

fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        // console.log(json.list[0].main.temp);
        day2Min.innerHTML = `Min : ${Math.floor((json.list[6].main.temp_min))} °C`;
        day2Max.innerHTML = `Max : ${Math.floor((json.list[10].main.temp_max))} °C`;
    })



// Fetch Header Api //

let inputOrt = document.getElementById('standort_input');
let outputFeel = document.getElementById('real_feel_output');
let iconCurrent = document.getElementById('icon_current');
let outputCurTemp = document.getElementById('temperatur_current_output');

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e&units=metric')
    .then(response => response.json())
    .then(json => {
        document.getElementById('temperatur_current_output').innerHTML = `${Math.floor(json.list[0].main.temp)}°`;
        document.getElementById('real_feel_output').innerHTML = `gefühlt: ${Math.floor(json.list[0].main.feels_like)} °`;
        document.getElementById('standort_output').innerHTML = (json.city.name);
        document.getElementById('icon_current').innerHTML = (json.list[0].weather[0].id);

    })













// fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
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

// fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
//     .then((response) => response.json())
//     .then((json) => {
//         standort_input.innerHTML = json.name;
//         temperatur_current_output.innerHTML = `${json.outputCurTemp.toFixed(0)}°C`;
//         real_feel_output.innerHTML = `Gefühlt wie ${json.main.outputFeel.toFixed(0)}°C`;
//     }
//     )


// fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=Berlin&appid=04e1ab889dbc9ff41996c453df63349e')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         console.log(json.name);
//         temperatur_current_output.innerHTML = (`Temperatur: ${json.main.temp.toFixed(1)} °C`);
//     }
//     )

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm;

    document.getElementById("uhrzeit_output").innerHTML = time;
}
currentTime();


const currentDate = new Date();
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
console.log(currentDate.toLocaleDateString('de-DE', options));

document.getElementById("date_output").innerHTML = currentDate.toLocaleDateString('de-DE', options)
