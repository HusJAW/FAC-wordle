// const words = ["apple", "fizzy", "buzzy", "bezzy"];

// let i = Math.floor(Math.random() * (words.length - 1));

// function randomWordOfTheDay(array, randomIndex) {
//   return array[randomIndex];
// }

// console.log(randomWordOfTheDay(words, i));

// function shuffleArray(array) {
//   let arrLength = array.length;
//   let randomIndex;
//   let lastNum;

//   while (arrLength) {
//     randomIndex = Math.floor(Math.random() * arrLength--); //random index number based on -1 arrayLength

//     lastNum = array[arrLength]; // we are selecting the last number in the array and storing it

//     array[arrLength] = array[randomIndex]; // so now we are taking the last number from the array and placing it randomly in the array

//     array[randomIndex] = lastNum; // so now we are taking the random placed index and placing it at the end so that we dont select it again
//   }
//   return array;
// }

// use api
//local storge
//

const link =
  "https://random-words5.p.rapidapi.com/getMultipleRandom?count=10&wordLength=5";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "random-words5.p.rapidapi.com",
    "x-rapidapi-key": "11c9d0aad2msh5e9b84b925c48abp13a7d3jsn79a559ddbd6f",
  },
};

let data;
let wordOfTheDay;

const getData = async () => {
  const fetchResult = await fetch(link, options);
  const finalResult = await fetchResult.json();
  // console.log(finalResult);
  return finalResult;
};

const btn = document.querySelector("button");
const wordDom = document.querySelector("span");

const setGlobalData = async () => {
  const finalResult = await getData();
  data = finalResult;
  wordOfTheDay = data[0];
  console.log({ data, wordOfTheDay });
  wordDom.innerText = `"${wordOfTheDay}"`;
};

// setGlobalData()

btn.addEventListener("click", setGlobalData);
