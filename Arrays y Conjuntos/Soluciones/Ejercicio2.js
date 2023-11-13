// Ejercicio 3.4
//Voy a modelar un array de arrays para representar una liga de futbol. Cada array representa un equipo y tiene los siguientes campos:
//[0] => Nombre del equipo
//[1] => Puntos
//[2] => Partidos jugados
//[3] => Partidos ganados
//[4] => Partidos empatados
//[5] => Partidos perdidos
//[6] => Goles a favor
//[7] => Goles en contra

let equipos = [
    ["Equipo A", 20,6,3,2,1,7,2],
    ["Equipo B", 18,6,3,0,3,5,5],
    ["Equipo C", 22,6,3,1,2,8,4],
    ["Equipo D", 35,6,5,0,1,10,1],
    ["Equipo E", 25,6,4,1,1,9,3]
];


//El codigo de abajo es para saber el equipo ganador de la liga
let equipoGanador = equipos[0];
for (let i = 1; i < equipos.length; i++) {
    if (equipos[i][1] > equipoGanador[1]) {
        equipoGanador = equipos[i];
    }
}

console.log("El equipo ganador es: " + equipoGanador[0]);
console.log("Puntos del equipo ganador: " + equipoGanador[1]);

//Es para mostrar toda la informacion del equipo ganadores 
console.log("Informacion del equipo ganador: ");
for (let i = 0; i < equipoGanador.length; i++) {
    console.log(equipoGanador[i]);
}