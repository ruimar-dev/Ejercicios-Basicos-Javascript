// Declaración de variables
let base; // Base del triángulo, rectángulo o círculo
let altura; // Altura del triángulo, rectángulo o círculo
let opcion; // Opción seleccionada por el usuario
let radio; // Radio del círculo

// Bucle do-while para seguir pidiendo al usuario una opción hasta que ingrese 4
do {
  // Petición de la opción al usuario
  opcion = prompt("Introduce una opción");

  // Sentencia switch para manejar las diferentes opciones
  switch (opcion) {
    case "1": // Calcular el área de un triángulo
      // Petición de la base y la altura al usuario
      base = prompt("Introduce la base");
      altura = prompt("Introduce la altura");

      // Cálculo del área del triángulo
      console.log(base * altura / 2);

      break;
    case "2": // Calcular el área de un rectángulo
      // Petición de la base y la altura al usuario
      base = prompt("Introduce la base");
      altura = prompt("Introduce la altura");

      // Cálculo del área del rectángulo
      console.log(base * altura);

      break;
    case "3": // Calcular el área de un círculo
      // Petición del radio al usuario
      radio = prompt("Introduce el radio");

      // Cálculo del área del círculo
      console.log(Math.PI * radio * radio);

      break;
    default: // Si el usuario ingresa una opción no válida, mostrar un mensaje de error
      console.log("Opción no válida");

      break;
  }
} while (opcion != "4"); // Seguir repitiendo el bucle hasta que el usuario ingrese 4

