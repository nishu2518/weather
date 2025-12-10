async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "95e040e6acba46e580473720251012"; // your API key
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    let resultDiv = document.getElementById("result");

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.error) {
            resultDiv.innerHTML = `<p style="color:red;">City not found!</p>`;
            return;
        }

        resultDiv.innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p><b>Temperature:</b> ${data.current.temp_c}°C</p>
            <p><b>Condition:</b> ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}">
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color:red;">Error fetching data</p>`;
    }
}
