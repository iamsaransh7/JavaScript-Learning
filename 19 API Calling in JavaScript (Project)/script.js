const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
const cityTime = document.getElementById("cityTime");
const cityTemp = document.getElementById("cityTemp");

async function getData(city){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f68d1df3a6b046cc8df114836252403&q=${city}&aqi=yes`
    );

    return await promise.json();
}

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `Location: ${result.location.name} - ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = `Time: ${result.location.localtime}`;
    cityTemp.innerText = `Temperature: ${result.current.temp_c}`;
});

//http://api.weatherapi.com/v1/current.json?key=f68d1df3a6b046cc8df114836252403&q=London&aqi=yes