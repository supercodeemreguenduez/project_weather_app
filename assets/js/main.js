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



const minTemp = (addDay, list) => {
    let hourArray = [];
    let minTempArray = [];
    list.forEach(x => {
        let hour = new Date((x.dt * 1000)).getUTCHours();
        hourArray.push(hour)
    });
    let secondDayIndex = hourArray.indexOf(0);
    secondDayIndex += addDay * 8;
    for (let i = secondDayIndex; i < secondDayIndex + 8; i++) {
        if (list[i]) {
            minTempArray.push(list[i].main.temp_min);
        }
    }
    console.log(minTempArray);
    return Math.floor(Math.min(...minTempArray));
}

const maxTemp = (addDay, list) => {
    let hourArray = [];
    let maxTempArray = [];
    list.forEach(x => {
        let hour = new Date((x.dt * 1000)).getUTCHours();
        hourArray.push(hour)
    });
    let secondDayIndex = hourArray.indexOf(0);
    secondDayIndex += addDay * 8;
    for (let i = secondDayIndex; i < secondDayIndex + 8; i++) {
        if (list[i]) {
            maxTempArray.push(list[i].main.temp_max);
        }
    }
    return Math.floor(Math.max(...maxTempArray));
}


//Icon for 5-day-forecast will be taken from 12:00 time
const getIconSatus = (addDay, list) => {
    let hourArray = [];
    list.forEach(x => {
        let hour = new Date((x.dt * 1000)).getUTCHours();
        hourArray.push(hour)
    });
    // return hourArray;
    return list[hourArray.indexOf(12) + (addDay * 8)].weather[0].id;
};

// Icon Switcher
const setIcon = id_input => {
    switch (true) {
        case (id_input < 300):
            return 'assets/img/11d.png';

        case (id_input <= 500):
            return 'assets/img/09d.png';

        case (id_input < 505):
            return 'assets/img/10d.png';

        case (id_input === 511):
            return 'assets/img/13d.png';

        case (id_input < 600):
            return 'assets/img/09d.png';

        case (id_input < 700):
            return 'assets/img/13d.png';

        case (id_input < 800):
            return 'assets/img/50d.png';

        case (id_input === 800):
            return 'assets/img/01d.png';

        case (id_input === 801):
            return 'assets/img/02d.png';

        case (id_input === 802):
            return 'assets/img/03d.png';

        case (id_input > 802):
            return 'assets/img/04d.png';
        default:
            return 'funktioniert nicht'
    }
};

const weekDay = (addDay, list) => {
    let current_day = new Date((list[0].dt * 1000)).getDay()
    if (weekdays[(current_day + addDay)]) {
        return weekdays[(current_day + 1 + addDay)];
    } else {
        addDay -= (6 - current_day);
        if (addDay > 6) {
            addDay = addDay % 7;
        }
        current_day = 0;
        return weekdays[(current_day + addDay)];
    }

}

let weekdays = [
    'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
]


const weatherQuery = standort_input => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${standort_input}&appid=04e1ab889dbc9ff41996c453df63349e&units=metric`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let day1_date = new Date(json.list[0].dt * 1000).getDate();

            // clear previous entries
            document.querySelector('.gridboxchange').textContent = '';
            document.getElementById('icon_current').textContent = '';

            // Header
            document.getElementById('temperatur_current_output').innerHTML = `${Math.floor(json.list[0].main.temp)}°`;
            document.getElementById('real_feel_output').innerHTML = `gefühlt: ${Math.floor(json.list[0].main.feels_like)} °`;
            document.getElementById('standort_output').innerHTML = (json.city.name);

            let topicon = document.createElement('img');
            topicon.setAttribute('src', setIcon(json.list[0].weather[0].id));
            icon_current.appendChild(topicon);

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

            let time_1_icon = document.getElementById("time_1_icon");
            let time_2_icon = document.getElementById("time_2_icon");
            let time_3_icon = document.getElementById("time_3_icon");
            let time_4_icon = document.getElementById("time_4_icon");
            let time_5_icon = document.getElementById("time_5_icon");

            // Weather Forecast 3hours
            time1.innerHTML = json.list[1].dt_txt.slice(10, 13) + ' Uhr';
            time2.innerHTML = json.list[2].dt_txt.slice(10, 13) + ' Uhr';
            time3.innerHTML = json.list[3].dt_txt.slice(10, 13) + ' Uhr';
            time4.innerHTML = json.list[4].dt_txt.slice(10, 13) + ' Uhr';
            time5.innerHTML = json.list[5].dt_txt.slice(10, 13) + ' Uhr';

            time_1_icon.innerHTML = `<img src="${setIcon(json.list[1].weather[0].id)}">`
            time_2_icon.innerHTML = `<img src="${setIcon(json.list[2].weather[0].id)}">`
            time_3_icon.innerHTML = `<img src="${setIcon(json.list[3].weather[0].id)}">`
            time_4_icon.innerHTML = `<img src="${setIcon(json.list[4].weather[0].id)}">`
            time_5_icon.innerHTML = `<img src="${setIcon(json.list[5].weather[0].id)}">`

            temp1.innerHTML = `${Math.floor((json.list[1].main.temp))} °C`;
            temp2.innerHTML = `${Math.floor((json.list[2].main.temp))} °C`;
            temp3.innerHTML = `${Math.floor((json.list[3].main.temp))} °C`;
            temp4.innerHTML = `${Math.floor((json.list[4].main.temp))} °C`;
            temp5.innerHTML = `${Math.floor((json.list[5].main.temp))} °C`;



            // 5-Tage-Vorhersage
            for (let i = 0; i < 4; i++) {
                let day = document.createElement('div');
                let icondiv = document.createElement('div');
                let icon = document.createElement('img');
                let minTemp_output = document.createElement('div');
                let maxTemp_output = document.createElement('div');

                day.textContent = weekDay(i, json.list);
                icon.setAttribute('src', setIcon(getIconSatus(i, json.list)));
                minTemp_output.textContent = `min ${minTemp(i, json.list, day1_date)}°`;
                maxTemp_output.textContent = `max ${maxTemp(i, json.list, day1_date)}°`;

                document.querySelector('.gridboxchange').appendChild(day);
                document.querySelector('.gridboxchange').appendChild(icondiv);
                icondiv.appendChild(icon);
                icondiv.classList.add('dailyicon');
                document.querySelector('.gridboxchange').appendChild(minTemp_output);
                document.querySelector('.gridboxchange').appendChild(maxTemp_output);

            }
        })
}

weatherQuery('Berlin');

document.getElementById('standort_input').addEventListener('change', () => {
    let standort_input = document.getElementById('standort_input').value;
    weatherQuery(standort_input);
});

document.getElementById('standort_input').addEventListener('keydown', a => {
    if (a.key === 'Enter') {
        let standort_input = document.getElementById('standort_input').value;
        a.preventDefault();
        weatherQuery(standort_input);
    }
});