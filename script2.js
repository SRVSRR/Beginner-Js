const prompt = require("prompt-sync")();

const target =  Math.round(Math.random() *100);
console.log(target);

let guess = 0;
const guess = Number(prompt("Guess the number (0-100):"))
