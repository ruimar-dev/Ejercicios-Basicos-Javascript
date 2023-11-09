// Declaración de variables
let numero = Number(prompt("Deme un numero"));
let factorial = 1;

// Bucle for para calcular el factorial
for (let i = 1; i <= numero; i++) {
  // Multiplicación del factorial por el número actual
  factorial = factorial * i;
}

// Impresión del factorial
console.log(factorial);
