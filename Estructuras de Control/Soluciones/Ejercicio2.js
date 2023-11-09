// Declaración de variables
let numeroDNI = Number(prompt("ingrese su numero de DNI"));
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

// Bucle while para asegurarse de que el número de DNI ingresado sea válido
while (numeroDNI < 0 || numeroDNI > 99999999) {
  // Se muestra un mensaje de error
  alert("El número proporcionado no es válido");

  // Se vuelve a pedir el número de DNI
  numeroDNI = Number(prompt("ingrese su numero de DNI"));
}

// Cálculo de la letra del DNI
let letraCalculada = letras[numeroDNI % 23];

// Mostrar la letra calculada
console.log(letraCalculada);
