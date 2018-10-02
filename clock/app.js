
//-------------------------------------
/*
clock.js
*/
//-------------------
function setDate(secundero,minutes,hours){
    let date = new Date(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hour = date.getHours()
    secundero.style.transform = 'rotate('+ 6*sec + 'deg)';
    minutes.style.transform = 'rotate('+ 6*min + 'deg)';
    hours.style.transform = 'rotate('+ 30*hour + 'deg)';
}
let secundero = document.getElementById("secundero"),
minutero = document.getElementById("minutero"),
horario = document.getElementById("horario"),
point = document.getElementById("point")
//poner la hora al iniciar la pagina
setDate(secundero,minutero,horario);
setInterval(()=>setDate(secundero,minutero,horario),1000);
        
       
