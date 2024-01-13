const prompt = require("prompt-sync")();

console.log("Welcome to the computer hardware");

const answer1 = prompt("What is the brain of the computer?");
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
    console.log("You got it correct");
} else {    console.log("You got it wrong");
}

const answer2 = prompt("What is the brain of the computer?");
const correct_answer2 = "CPU";

if (answer2.toUpperCase() === correct_answer2) {
    console.log("You got it correct");
} else {    console.log("You got it wrong");
}