// Assignment 3
let moons = [
    { name: "Europa", planet: "Jupiter", type: "icy" },  
    { name: "Titan", planet: "Saturn", type: "rocky" }
];

document.getElementById("moonInfo").innerHTML =
    "1. " + moons[0].name + " orbits " + moons[0].planet + " and is an " + moons[0].type + " moon<br>" +
    "2. " + moons[1].name + " orbits " + moons[1].planet + " and is a " + moons[1].type + " moon";

// Assignment 4

let planet = {
    name: "Mars",
    moons: ["Phobos", "Deimos"]
};

planet.moons = ["Phobos"]; 
const message = "One of the Red Planet " + planet.name + " moons is " + planet.moons;

document.getElementById("cosmosInfo").textContent = message;


// Assignment 5

// Define an array of planet objects, each with name and moons properties
let planets = [
  { name: "Mercury", moons: [] },
  { name: "Venus", moons: [] },
  { name: "Earth", moons: ["Moon"] },
  { name: "Mars", moons: ["Phobos", "Deimos"] }
];

const message1 = "The first moon of " + planets[planets.length - 1].name + " is " + planets[planets.length - 1].moons[0] + ".";

document.getElementById("planetData").textContent = message1;

// Assignment 6

let solarSystem = {
  Mercury: {
    orderFromSun: 1,
    moons: []
  },
  Venus: {
    orderFromSun: 2,
    moons: []
  },
  Earth: {
    orderFromSun: 3,
    moons: ["Moon"]
  },
  Mars: {
    orderFromSun: 4,
    moons: ["Phobos", "Deimos"]
  }
};

let details = `Earth is the ${solarSystem.Earth.orderFromSun}rd planet from the Sun and has ${solarSystem.Earth.moons.length} moon(s) named: ${solarSystem.Earth.moons.join(", ")}.`;

document.getElementById("planetDetails").textContent = details;

// Assignment 7 

let saturnInfo = {
    name: "Saturn",
    type: "Gas Giant",
    numberOfMoons: "Unknown"
};

saturnInfo.numberOfMoons = 82;

document.getElementById("planetDetails1").textContent =
    saturnInfo.name + " is a " + saturnInfo.type +
    " with " + saturnInfo.numberOfMoons + " moons.";

// Assignment 8

let moonsOfMercury = []; 

moonsOfMercury.push("Proto");

let message2 = "Mercury moons count: " + moonsOfMercury.length;

document.getElementById("moonsCount").textContent = message2;