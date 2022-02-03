const words = ["apple", "fizzy", "buzzy", "bezzy"];

// let i = Math.floor(Math.random() * (words.length - 1));

// function randomWordOfTheDay(array, randomIndex) {
//   return array[randomIndex];
// }

// console.log(randomWordOfTheDay(words, i));

function shuffleArray(array) {
  let arrLength = array.length;
  let randomIndex;
  let lastNum;

  while (arrLength) {
    randomIndex = Math.floor(Math.random() * arrLength--); //random index number based on -1 arrayLength

    lastNum = array[arrLength]; // we are selecting the last number in the array and storing it

    array[arrLength] = array[randomIndex]; // so now we are taking the last number from the array and placing it randomly in the array

    array[randomIndex] = lastNum; // so now we are taking the random placed index and placing it at the end so that we dont select it again
  }
  return array;
}

let shuffleOne = shuffleArray(words);

console.log(shuffleOne);

let wordofTheDay = shuffleOne[0];
