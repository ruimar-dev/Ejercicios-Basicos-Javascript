// Crear un array de 100 elementos
let array1 = new Array(100);

// Llenar el array con valores aleatorios entre 0 y 99
for (let i = 0; i < array1.length; i++) {
    array1[i] = Math.floor(Math.random() * 100);
}

// Recorrer el array e imprimir los números pares
for (let i = 0; i < array1.length; i++) {
    // Verificar si el elemento en la posición actual es par
    if (array1[i] % 2 === 0) {
        // Imprimir el número par
        console.log(array1[i]);
    }
}
