// Obtendo referências dos elementos HTML
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Definindo um intervalo para atualização do relógio a cada segundo
const relogio = setInterval(function time() {
    // Obtendo a data e hora atual
    let dateToday = new Date();

    // Obtendo as horas, minutos e segundos
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Adicionando um zero à esquerda se o valor for menor que 10 para manter o formato '00'
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    // Atualizando o conteúdo dos elementos HTML com as horas, minutos e segundos
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    // O relógio é atualizado a cada segundo
}); 
