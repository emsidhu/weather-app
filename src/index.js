let cityInput = document.getElementById("city")
let submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    findWeather(cityInput.value, "metric")
})

async function findWeather(city, units) {
    try{
        let data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=21bbf8d4b0e426fe2fd96a82afa74b3f`)).json();
        console.log(data)
        console.log(data.main)
        console.log(data.weather)
        console.log(data.wind)
    } catch(err){
        console.log(err)
    }
}


findWeather("surrey", "metric")

