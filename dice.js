/* Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer. 
Stabilire il vincitore, 
in base a chi fa il punteggio più alto. */

/* for (let i = 0; i < 1; i++) {
  const randomNumbers = [Math.floor(Math.random() * 6 + 1)];
  console.log(randomNumbers);

  let aiGuess;
  aiGuess = [Math.floor(Math.random() * 6 + 1)];
  console.log(aiGuess);

  let usrGuess;
  usrGuess = parseInt(prompt("guess the number from 0-6"));

  if (usrGuess < randomNumbers) {
    alert("too low");
  } else if (usrGuess > randomNumbers) {
    alert("too hight");
  } else if (usrGuess == randomNumbers) {
    alert("yeeeee");
  } else {
    alert("404 you suck!");
  }
} */
//const usrArray = [1, 2, 3, 4, 5, 6];

/* const aiArray = [1, 2, 3, 4, 5, 6];

const randomNumbers = usrArray[Math.floor(Math.random() * usrArray.length)];
const random = aiArray[Math.floor(Math.random() * usrArray.length)]; */

/* const points = []; */

/* let aiGuess = randomNumbers;

aiGuess = randomNumbers;
console.log(aiGuess);

let usrGuess = randomNumbers;

usrGuess = random;
console.log(aiGuess); */

//----------------------------------------------

const userGuess = Math.floor(Math.random() * 6) + 1;
const aiGuess = Math.floor(Math.random() * 6) + 1;

console.log(userGuess);
console.log(aiGuess);
console.log(userGuess > aiGuess);

for (let i = 0; i < 1; i++) {
  //console.log(randomNumbers);

  if (userGuess > aiGuess) {
    console.log("usr Win");
  } else if (userGuess > aiGuess) {
    alert("ai Win");
  } else {
    console.log("even");
  }
}
