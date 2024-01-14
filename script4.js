const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play? (y/n");

if(answer.toLowerCase() === "y") {
    const answer2 = prompt("Would you like to go left or right? (right/left) ");

    if (answer2 === "left") {
        console.log("Oops, you died"); }
        else {
            console.log("You found a bridge")
            const answer3 = prompt("Would you like to cross the bridge or go another way? (cross/turn) ");
            if (answer3 === "cross") {
                console.log("You found your way out");
            } else {
                console.log("You turned back and got biten by a snake");
            }
            
        }
    }
 else {
    console.log("That's Too Bad");
}