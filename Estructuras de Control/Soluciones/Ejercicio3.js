// Declaración de variables
let dias = prompt("Introduce los dias");
let horas = prompt("Introduce las horas");
let minutos = prompt("Introduce los minutos");

// Inicialización de la variable `segundos` a 0
let segundos = 0;

// Acumulación de los segundos
segundos += dias * 24 * 60 * 60;
segundos += horas * 60 * 60;
segundos += minutos * 60;

// Mostrar el resultado
console.log(segundos);