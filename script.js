const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c4a7af11d7mshacb34aad99e109cp1da782jsne61efe0a6fc9',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

async function getWeather() {
    const res = await fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-79.3832&lat=43.6532&units=metric', options)
    const data = await res.json();
    const list = await data.data;
    
    // list.map((item) => {
    //     const name = item.city_name;
    //     const weather = item.weather.description;
    //     document.querySelector(".city-name").textContent = name;
    // })

    const name = "Toronto";
    const weather = "Rain"; // Fog Drizzle Rain Showers Flurries Snow Hail Thunder Overcast Partly-Cloudy Clear
    document.querySelector(".weather").textContent = weather;
    document.querySelector(".city-name").textContent = name;
    setWeather(weather);
}
getWeather();

function setWeather(weather) {
    const style = document.querySelector(".this");
    const iconHolder = document.querySelector(".icon");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");

    if (weather == "Fog") {
        icon.classList.add("fa-smog");
        style.classList.add("is-fog");
    } else if (weather == "Drizzle") {
        icon.classList.add("fa-droplet");
        style.classList.add("is-drizzle");
    } else if (weather == "Rain") {
        icon.classList.add("fa-cloud-rain");
        style.classList.add("is-rain");
    } else if (weather == "Showers") {
        icon.classList.add("fa-cloud-showers-heavy");
        style.classList.add("is-showers");
    } else if (weather == "Flurries") {
        icon.classList.add("fa-snowflake");
        style.classList.add("is-flurries");
        setTextWhite();
    } else if (weather == "Snow") {
        icon.classList.add("fa-snowman");
        style.classList.add("is-snow");
        setTextWhite();
    } else if (weather == "Hail") {
        icon.classList.add("fa-cloud-meatball");
        style.classList.add("is-hail");
        setTextWhite();
    } else if (weather == "Thunder") {
        icon.classList.add("fa-cloud-bolt");
        style.classList.add("is-thunder");
    } else if (weather == "Overcast") {
        icon.classList.add("fa-cloud");
        style.classList.add("is-overcast");
    } else if (weather == "Partly Cloudy") {
        icon.classList.add("fa-cloud-sun");
        style.classList.add("is-partly-cloudy");
    } else if (weather == "Clear") {
        icon.classList.add("fa-sun");
        style.classList.add("is-clear");
    }
    iconHolder.appendChild(icon);
}

function setTextWhite() {
    document.querySelector(".weather").classList.remove("has-text-white");
    document.querySelector(".city-name").classList.remove("has-text-white");
}

