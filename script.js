const words = ["apple", "fizzy", "buzzy", "bezzy"];

let i = Math.floor(Math.random() * (words.length - 1));

function randomWordOfTheDay(array, randomIndex) {
  return array[randomIndex];
}

// console.log(randomWordOfTheDay(words, i));
