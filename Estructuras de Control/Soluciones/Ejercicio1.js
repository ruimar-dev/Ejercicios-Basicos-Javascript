//Se pide el numero al usuario
let num1 = Number(prompt("ingrese un numero"));

// Bucle do-while para asegurarse de que el usuario ingrese un símbolo válido
do {
  simbolo = prompt("Dame uno de estos símbolos: +, -, *, /, **, %");

} while (simbolo !== '+' && simbolo !== '-' && simbolo !== '*' && simbolo !== '/' && simbolo !== '**' && simbolo !== '%');

// Se pide el segundo numero al usuario
let num2 = Number(prompt("ingrese un numero"));

// Switch para realizar la operacion correspondiente
switch (simbolo) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "**":
    console.log(num1 ** num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
}
