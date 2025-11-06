// Assignment 3
let giftBox;
document.getElementById('giftMessage').textContent = "The gift box is: " + giftBox;

giftBox = "mystery" // change this to a string value
document.getElementById('giftMessage').textContent += ". Now it is: " + giftBox;

// Assignment 4
let initialMessage = "New planet is ";

let planetName = "Jupiter"; // Declared planetName variable
let fullMessage = initialMessage + planetName; 

document.getElementById('section').innerText = fullMessage; 

// Assignment 5
let signalStatus = "active"; 
signalStatus = "active";
let message = "Signal is: " + signalStatus;

document.getElementById('statusMessage').textContent = message; 

// Assignment 6

let planetName1 = 'Cosmos X';
let planetGravity = 9.81; 
let multiplyBy = 1.2; 

let cosmosXGravity = planetGravity * multiplyBy;

document.getElementById('name').innerText = planetName1;
document.getElementById('planetInfo').innerText = `What is the gravity on ${planetName1}?`;
document.getElementById('planetInfo').innerText += ` The gravity on ${planetName1} is ${cosmosXGravity}.`;

// Assignment 7

const planet = "Cosmos X";

let isOrbitStable = undefined; 
isOrbitStable = null;

document.getElementById('planetName2').textContent = planet;
document.getElementById('orbitStatus').textContent = isOrbitStable;

// Assignment 8 

let greeting = 'Welcome to ';
let planet1 = 'Planet Zero, ';
let status = 'the orbit is stable!';

let greetingMessage = 'Hello! ' + greeting + planet1 + 'Current Status: ' + status;  // Strikethrough through status is only a lint warning, it doesnt affect the code itself. 
document.getElementById('greetingMessage').textContent = greetingMessage;