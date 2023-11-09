// Bucle for para imprimir los números impares no múltiplos de 3 ni de 7 del 1 al 100
for (i = 1; i <= 100; i++) {
  // Condición para verificar si el número es impar y no múltiplo de 3 ni de 7
  if (i % 2 != 0 && i % 3 != 0 && i % 7 != 0) {
    // Impresión del número
    console.log(i);
  }
}
