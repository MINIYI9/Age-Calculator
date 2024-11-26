let day = document.getElementById("day")
let month = document.getElementById("month")
let year = document.getElementById("year")
let spanYear = document.getElementById("spanyear")
let spanMonth = document.getElementById("spanmonth")
let spanDay = document.getElementById("spanday")

function calc(){

let currentDate = new Date
let d = currentDate.getDate()
let m = currentDate.getMonth() +1
let y = currentDate.getFullYear()
 
let realday =d - day.value 
let realmonth= m - month.value
let realyear= y - year.value

spanDay.innerText= realday
spanMonth.innerText= realmonth
spanYear.innerText= realyear
console.log(realday, realmonth, realyear)
}