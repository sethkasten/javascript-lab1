//1//
const name = "Seth Kasten";
let age = 24;
const birthday = "September 27";
let pineapplePizza = true;
const lifeEvents = [
  "I was born in Ypsilanti, Michigan.",
  "I went to the University of Michigan.",
  "I got married in 2020.",
  "I bought a house in 2021.",
];

//2//
if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

//3//
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

//4//
let counter = 0;

//5//
while (1 === 1) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber}!==5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
