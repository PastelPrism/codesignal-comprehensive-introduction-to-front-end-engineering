// First assignment

const celestialBodies = ['Comet', 'Asteroid', 'Meteor', 'Planet', 'Star'];
let discoveriesList = '';
let i = 0;

while (i < celestialBodies.length) {
  discoveriesList += '<li>' + celestialBodies[i] + '</li>';
  i++;
}

document.getElementById("discoveries").innerHTML = discoveriesList;

// Second assignment (changed i to j)
const orbitTimes = [72, 88, 91, 65, 99]; 
let orbitListHTML = '';

let j = 0;
while (j < orbitTimes.length) {
  orbitListHTML += '<li>' + 'Orbit ' + (j+1) + ': ' + orbitTimes[j] + ' seconds' + '</li>';
  j++;
}

document.getElementById("orbit-times").innerHTML = orbitListHTML;

// Third assignment - enter letter k instead of i
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
let listHTML = '';
let k = 0;

while (k < planets.length) {
  listHTML += '<li>' + planets[k] + '</li>';
  k++;
}

document.getElementById("planets-discovered").innerHTML = listHTML;

//Fourth assignment  
const greetings = ["Hello Astronaut!", "Welcome to Mars!", "Discover the Cosmos!"];

let messageList = '';

let l = 0;
while (l < greetings.length) {
  messageList += '<li>' + greetings[l] + '</li>';
  l++;
}

document.getElementById("welcome-messages").innerHTML = messageList;
