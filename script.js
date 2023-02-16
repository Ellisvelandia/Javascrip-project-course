

document.querySelector("#open-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.add("nav-open")
})


document.querySelector("#close-nav-menu").addEventListener("click", () => {
  document.querySelector("header nav .wrapper").classList.remove("nav-open")
})

const greetingText = "Good morning!"
const weatherConditidon = "Sunny"
const userLocation = "Ibague"
let temperature = 22.867;
let weatherText = `The weather is ${weatherConditidon} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("p#weather").innerHTML = weatherText
