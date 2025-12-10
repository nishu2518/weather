function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let url = `http://api.weatherapi.com/v1/current.json?key=95e040e6acba46e580473720251012&q=${city}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let result = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <img src="${data.current.condition.icon}">
                <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
                <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
                <p><strong>AQI:</strong> ${data.current.air_quality.pm2_5} PM2.5</p>
            `;
            document.getElementById("result").innerHTML = result;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "<p>City not found!</p>";
        });
}
