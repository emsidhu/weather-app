/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDJGQUEyRixLQUFLLFNBQVMsTUFBTTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKVxubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpXG5cbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZpbmRXZWF0aGVyKGNpdHlJbnB1dC52YWx1ZSwgXCJtZXRyaWNcIilcbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRXZWF0aGVyKGNpdHksIHVuaXRzKSB7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IChhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPTIxYmJmOGQ0YjBlNDI2ZmUyZmQ5NmE4MmFmYTc0YjNmYCkpLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5tYWluKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLndlYXRoZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEud2luZClcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cblxuZmluZFdlYXRoZXIoXCJzdXJyZXlcIiwgXCJtZXRyaWNcIilcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9