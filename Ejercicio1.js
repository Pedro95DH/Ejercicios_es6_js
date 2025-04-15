// 1.1 En base al siguiente javascript, crea variables en base a las propiedades
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

console.log(`\n La solución al 1.1 es \n`);

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log(
  `el titulo del juego es ${title}, pertenece a los generos ${gender} y salió el año ${year}`
);

// 1.2 En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

console.log(`\n La solución al 1.2 es \n`);

const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 1.3 En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

console.log(`\n La solución al 1.3 es \n`);

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log(`The ${name} from the race of ${race}`);

// 1.4 En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

console.log(`\n La solución al 1.4 es \n`);

const car = { namecar: "Mazda 6", itv: [2015, 2011, 2020] };

const { namecar, itv } = car;

const [year15, year11, year20] = car.itv;

console.log(
  `El ${namecar} hapasado las itv de los años ${itv}, pero la que hoy nos interesa es la del año ${year15}.`
);
