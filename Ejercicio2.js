// 2.1 Dado el siguiente array, crea una copia usando spread operators.

console.log(`\n La solución al 2.1 es \n`);

const pointsList1 = [32, 54, 21, 64, 75, 43];

const pointlist1copy = [...pointsList1];

console.log(`La copia del array es:`, pointlist1copy);

pointlist1copy.push(700);

console.log(`El array original es es:`, pointsList1);
console.log(`La copia del array con el 700 añadido es:`, pointlist1copy);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.

console.log(`\n La solución al 2.2 es \n`);

const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toy1copy = { ...toy1 };

console.log(toy1copy);

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.

console.log(`\n La solución al 2.3 es \n`);

const pointsListA = [32, 54, 21, 64, 75, 43];
const pointsListB = [54, 87, 99, 65, 32];

const pointListAB = [...pointsListA, ...pointsListB];

console.log(pointListAB);

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.

console.log(`\n La solución al 2.4 es \n`);

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const bestToy = { ...toy, ...toyUpdate };

console.log(bestToy);

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

console.log(`\n La solución al 2.5 es \n`);

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colors);
console.log(newColors);
