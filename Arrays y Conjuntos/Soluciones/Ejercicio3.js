// Crear un array de 10 elementos
let array2 = new Array(10);

// Inicializar el array con números aleatorios múltiplos de 5
for (let i = 0; i < array2.length; i++) {
    array2[i] = Math.floor(Math.random() * 20) * 5; // Número aleatorio entre 0 y 19, multiplicado por 5
}

// Ajustar el primer elemento si es igual o menor de 50
while (array2[0] <= 50) {
    array2[0] += 5;
}

// Ajustar el último elemento si es igual o mayor de 50
while (array2[array2.length - 1] >= 50) {
    array2[array2.length - 1] -= 5;
}

// Mostrar en consola el array resultante
console.log(array2);
