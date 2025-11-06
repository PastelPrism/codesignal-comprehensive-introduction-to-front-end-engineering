// Assignment 3

let cookies = 10;
let cake = false; 

let snackMessage = "";
if (cookies > 5 && cake) { 
  snackMessage = "Welcome to the party! We have lots of snacks for you!";
} else {
  snackMessage = "Welcome! Our snacks are limited today.";
}

document.getElementById("party-plan").innerText = snackMessage;

// Assignment 4

let isSpaceSuitPacked = false; 

let statusMessage = null;
if (!isSpaceSuitPacked) { 
    statusMessage = "Spacesuit is NOT ready. Let's prepare!"
 } else {
     statusMessage = "Spacesuit is ready for the party!";
 }

document.getElementById("spacesuit-status").innerText = statusMessage;

// Assignment 5

let hasMusicBand = true;
let spaceWeather = "clear";
let message = '';

if (hasMusicBand && spaceWeather === "clear") {
    message = "Music is ready to make our party stellar!";
} else {
    message = "Oh no! No music band and stormy weather. Let's reschedule.";
}

document.getElementById("music-status").innerText = message;

// Assignment 6 

let temperature = 20;  

let attireMessage = '';
if (temperature > 25) { 
  attireMessage = "It's warm! Wear your light space suit.";
} else if (temperature === 0 || temperature === null) {  
  attireMessage = "No temperature data. Dress comfortably.";
} else {
  attireMessage = "It's a bit chilly. Wear your insulated space suit.";
}

document.getElementById("attire-status").innerText = attireMessage;

// Assignment 7

let hasHelmet = true;
let hasSpaceSuit = true;
let outfitStatus = '';
if (hasHelmet && hasSpaceSuit) {
    outfitStatus = "Your space party outfit is complete!";
} else {
    outfitStatus = "Your space party outfit is NOT complete.";
}

document.getElementById("costume-status").innerText = outfitStatus;

// Assignment 8

let astronaut1Attending = true;
let astronaut2Attending = false;

let partyStatus = '';
if (astronaut1Attending || astronaut2Attending) {
    partyStatus = "the party is on!";
} else {
    partyStatus = "the cosmic party is canceled.";
}

document.getElementById("party-announcement").innerText = partyStatus;