const elementoHora = document.getElementById('hora')
const elementoMinuto = document.getElementById('minuto')
const elementoSegundo = document.getElementById('segundo')

function newTime(){
const date = new Date();
const horas = date.getHours();
const minutos = date.getMinutes();
const segundos = date.getSeconds();

elementoHora.textContent = fixTime(horas)
elementoMinuto.textContent = fixTime(minutos)
elementoSegundo.textContent = fixTime(segundos)
}



function fixTime(time){
    return time < 10 ? '0'+time:time
}
newTime()
setInterval(newTime, 1000)