/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

const hasSword = false;
const haveCoins = true;

console.log("You come across an ogre who offers his compass for 5 coins.");
const choice2 = readline.question("Do you want to make this trade?");

if (choice2 === "yes" && haveCoins) {
  console.log("Successful trade! Continue your journey.");

} else if (choice2 === "yes" && !haveCoins) {
  console.log("The ogre left you in the dust. You continue on your journey.");

} else if (choice2 === "no" && !hasSword || !haveCoins) {
  console.log("You decide to fight the ogre with your sword.");

  if (!hasSword) {
    console.log("What fortunate luck! You've beat the ogre! Now pick up the compass and be on your way! Hurry!")
  } else (console.log("What an unfortunate end. Game over!"))

} else if (choice2 === "no" && haveCoins) {
  console.log("You refused the trade. Continue on your journey.");
}


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
