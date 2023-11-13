// Definir una matriz original
let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Inicializar una matriz transpuesta con el mismo número de filas y columnas que la matriz original
let transpuesta = [[], [], []];

// Recorrer las filas de la matriz original
for (let i = 0; i < matriz.length; i++) {
    // Recorrer las columnas de la matriz original
    for (let j = 0; j < matriz[i].length; j++) {
        // Asignar el valor de la matriz original transpuesto en la matriz transpuesta
        // Nota: Se intercambian las posiciones de las filas y columnas
        transpuesta[i][j] = matriz[j][i];
    }
}

// Mostrar en consola la matriz transpuesta
console.log(transpuesta);
