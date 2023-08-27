const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city 

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click",(e) =>{
    getWeather(city.value)
})
getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct_Mum.innerHTML = response.cloud_pct
        temp_Mum.innerHTML = response.temp
        feels_like_Mum.innerHTML = response.feels_like
        humidity_Mum.innerHTML = response.humidity
        min_temp_Mum.innerHTML = response.min_temp
        max_temp_Mum.innerHTML = response.max_temp
        wind_speed_Mum.innerHTML = response.wind_speed
        // wind_degrees_Mum.innerHTML = response.wind_degrees
        sunrise_Mum.innerHTML = response.sunrise
        sunset_Mum.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct_london.innerHTML = response.cloud_pct
        temp_london.innerHTML = response.temp
        feels_like_london.innerHTML = response.feels_like
        humidity_london.innerHTML = response.humidity
        min_temp_london.innerHTML = response.min_temp
        max_temp_london.innerHTML = response.max_temp
        wind_speed_london.innerHTML = response.wind_speed
        // wind_degrees_london.innerHTML = response.wind_degrees
        sunrise_london.innerHTML = response.sunrise
        sunset_london.innerHTML = response.sunset
    })
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=America', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        cloud_pct_america.innerHTML = response.cloud_pct
        temp_america.innerHTML = response.temp
        feels_like_america.innerHTML = response.feels_like
        humidity_america.innerHTML = response.humidity
        min_temp_america.innerHTML = response.min_temp
        max_temp_america.innerHTML = response.max_temp
        wind_speed_america.innerHTML = response.wind_speed
        // wind_degrees_america.innerHTML = response.wind_degrees
        sunrise_america.innerHTML = response.sunrise
        sunset_america.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Russia', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct_Russia.innerHTML = response.cloud_pct
        temp_Russia.innerHTML = response.temp
        feels_like_Russia.innerHTML = response.feels_like
        humidity_Russia.innerHTML = response.humidity
        min_temp_Russia.innerHTML = response.min_temp
        max_temp_Russia.innerHTML = response.max_temp
        wind_speed_Russia.innerHTML = response.wind_speed
        // wind_degrees_Russia.innerHTML = response.wind_degrees
        sunrise_Russia.innerHTML = response.sunrise
        sunset_Russia.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
