// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikesArray = [
  {
    name: "First Bike",
    weight: 50,
  },
  {
    name: "Second Bike",
    weight: 20,
  },
  {
    name: "Third Bike",
    weight: 30,
  },
  {
    name: "Fourth Bike",
    weight: 40,
  },
];

// const bikesWeight = [];

// for (const bikes of bikesArray) {
//   bikesWeight.push(bikes.weight);
// }

// let smallestWeight = bikesWeight[0];
// console.log(bikesWeight);

// for (let i = 0; i < bikesWeight.length; i++) {
//   if (bikesWeight[i] < smallestWeight) {
//     smallestWeight = bikesWeight[i];
//   }
// }
// console.log(`Il peso minore è ${smallestWeight}Kg`);

// --------------------------------------------------------------------------------

let smallestWeight = bikesArray[0];
for (let i = 0; i < bikesArray.length; i++) {
  if (bikesArray[i].weight < smallestWeight.weight) {
    smallestWeight = bikesArray[i];
  }
}
console.log(
  `La bici che pesa di meno è ${smallestWeight.name}, con un peso di ${smallestWeight.weight}`
);

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const serieA = [
  {
    name: "Napoli",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Inter",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Atalanta",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Bologna",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Juventus",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Roma",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Lazio",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Milan",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Sampdoria",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
  {
    name: "Torino",
    points: generateRandomNumber(1, 100),
    receivedFauls: generateRandomNumber(1, 10),
  },
];
console.log(serieA);

const squadStats = [];

for (let i = 0; i < serieA.length; i++) {
  const name = serieA[i].name;
  const receivedFauls = serieA[i].receivedFauls;
  //   const stats = `${serieA[i].name} ${serieA[i].receivedFauls}`;

  const stats = {
    name: name,
    receivedFauls: receivedFauls,
  };

  squadStats.push(stats);
}
console.log(squadStats);
