// 3.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().

console.log(`\n La solución al 3.1 es \n`);

const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersName = users1.map((user) => user.name);

console.log(usersName);

// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

console.log(`\n La solución al 3.2 es \n`);

const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersAnacleto = users2.map((user) =>
  user.name.startsWith(`A`) ? `Anacleto` : user.name
);

console.log(usersAnacleto);

// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

console.log(`\n La solución al 3.3 es \n`);

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesVisited = cities.map((city) =>
  city.isVisited ? city.name.concat(" (Visitado)") : city.name
);

console.log(citiesVisited);
