// Crear un conjunto (Set) llamado "followers" con algunos nombres
let followers = new Set(["Pablo", "Pepe", "Juan", "Maria", "Laura"]);

// Eliminar elementos del conjunto
followers.delete("Pablo");
followers.delete("Pepe");

// Agregar nuevos elementos al conjunto
followers.add("Luis").add("Ana").add("Luisa").add("Pedro").add("Sergio").add("Jaime").add("Luisa");

// Mostrar el tamaño del conjunto después de las operaciones
console.log("Tamaño del conjunto followers:", followers.size);

// Iterar sobre el conjunto y mostrar cada elemento
for (let elemento of followers) {
    console.log(elemento);
}
