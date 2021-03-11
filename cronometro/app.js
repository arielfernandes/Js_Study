'use strict'

var horas = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000; // 1000 ms = 1s
var cronometro;

document.getElementById('iniciar').addEventListener('click', () => { Start(); });
document.getElementById('pausar').addEventListener('click', () => { Pause(); });
document.getElementById('parar').addEventListener('click', ()=> { Stop(); });

function Start() {
    cronometro = setInterval(() => { timer(); },tempo)
}
function Pause() {
    clearInterval(cronometro);
}

function Stop() {
    clearInterval(cronometro);
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById('counter').innerText = "00:00:00";
}

function timer() {
    segundos++;

    if(segundos == 60) {
        segundos = 0;
        minutos++;
        if(minutos == 60) {
            minutos = 0;
            horas++;
        }
    }

    var format = (horas < 10 ? '0'+horas : horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
    document.getElementById('counter').innerText = format;
    
}   