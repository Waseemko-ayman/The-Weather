const apiKey = "3c4d38ef92331c8e0383c41876671a9c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404 || searchBox.value == "") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";
        let data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".Wind").innerHTML = `${parseInt(data.wind.speed)}km/h`;
        
        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "Clouds.svg";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "Clear.svg";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "Rain.svg";
        }
        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "Snow.svg";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Drizzle.svg";
        }
    
        document.querySelector(".weather").style.display = "block";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});