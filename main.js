function loadWeather(city){
    const searchField= document.getElementById('search-field')
    const searchText= searchField.value
    searchField.value=''
    const url=`
    https://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&appid=de67e2cac41cd36494503c7d9421af76
    `
    fetch(url)
    .then(response => response.json())
    .then(data=>displayWeather(data))
}
function displayWeather(data){
    const {name}=data;
    const {icon, description} = data.weather[0];
    const {temp, humidity}= data.main
    const {speed}= data.wind
    console.log(name,icon, description,temp,humidity,speed)
    document.querySelector(".city").innerHTML=`Weather in ${name}`
    document.querySelector(".icon").src=`https://openweathermap.org/img/wn/${icon}.png`
    document.querySelector(".description").innerHTML=`${description}`
    document.querySelector(".temp").innerHTML=`${temp}°C`
    document.querySelector(".humidity").innerHTML=`humidity: ${humidity}% `
    document.querySelector(".wind").innerHTML=`Wind speed: ${speed}km/h `

}