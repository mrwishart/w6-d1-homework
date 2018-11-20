// EPISODE 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

//*************************

// Prediction: Miss Scarlet
// Reason: scenario.murderer will be available throughout the program
// Therefore: The function will grab the name from the scenario object
// Therefore, when it is called, the verdict should have the name

// Result: Correct!

//*************************

// EPISODE 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prediction: Program will crash
// Reason: the changeMurderer function will attempt to change a constant.

// Result: Correct!

//*************************

// EPISODE 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Prediction: First verdict will be Mrs Peacock, second will be Professor Plum
// Reason: The murderer variable is only changed to Mrs Peacock within the scope of the declareMurderer function. So, for the second verdict, it returns to the original value (i.e Professor Plum)

// Result: Correct!

//*************************

// EPISODE 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Prediction: The suspects will be Scarlet, Plum and Mustard. Suspect three will be Peacock.
// Reason: Like above, suspectThree only changes within the scope of declareAllSuspects

// Result: Correct!

//*************************

// EPISODE 5


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Prediction: The weapon is the Revolver
// Reason: the changeWeapon function will affect the scerario variable outside of it.
// Therefore: When the verdict is printed, it will have the new weapon
// (Note: This is assuming you can alter the inner workings of the object without annoying const)

// Result: Correct!


//*************************

// EPISODE 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prediction: The murder is Mrs White
// Reason: changeMurderer affects the murder variable for the whole 'episode'
// Therefore: The murderer changes to Green, then changes to White when plotTwist is called

// Result: Correct!

//*************************

// EPISODE 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prediction: The murderer is Mr Green
// Reason: Ok, this was actually spoiled for me, but I think what happens is the let on line 163 means any change to the variable murderer is ignored outside of the function plotTwist.
// Therefore: The only change that remains outside of the changeMurder function is on line 160

// Result: Correct!

//*************************

// EPISODE 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);


// Prediction: The weapon is the Candle Stick
// Reason: changeScenario does the following:
// - Changes murderer to Mrs Peacock, room to Dining Room
// - Runs plotTwist
// - - plotTwist changes murderer to Colonel Mustard (as room === Dining Room is true)
// - - runs unexpectedOutcome
// - - - unexpectedOutcome changes weapon to Candle Stick (as murder === Colonel Mustard is now true)
//

// Result: Correct!

//*************************

// EPISODE 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Professor Plum
// Reason: While the if statement on 246 is true, line 247 is a 'let', meaning it only remains applicable within it's block
// Therefore: It'll return to Professor Plum after that block of code

// Result: Correct!

//*************************
