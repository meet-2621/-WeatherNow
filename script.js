
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "0cb35ff80deddcb308c64edffeb6b5f3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weatherInfo").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weatherInfo").innerHTML = "<p>City not found.</p>";
        }
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = "<p>Error fetching data.</p>";
    }
}
