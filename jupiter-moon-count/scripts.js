// Jupiter and its moons
let planetJupiter = {
    name: "Jupiter",
    moons: ["Io", "Europa", "Ganymede", "Callisto"]
};
const jupiterMessage = "Planet " + planetJupiter.name + " has " + planetJupiter.moons.length + " major moons.";
document.getElementById("planetInfo").textContent = jupiterMessage;

// Moons info
let moons = [
    { name: "Europa", planet: "Jupiter", type: "Icy" },
    { name: "Titan", planet: "Saturn", type: "Rocky" }
];
document.getElementById("moonInfo").innerHTML =
    "1. " + moons[0].name + " orbits " + moons[0].planet + " and is an " + moons[0].type + " moon<br>" +
    "2. " + moons[1].name + " orbits " + moons[1].planet + " and is a " + moons[1].type + " moon";

// Mars and its moon
let planetMars = {
    name: "Mars",
    moons: ["Phobos"]
};
const marsMessage = "One of the Red Planet " + planetMars.name + " moons is " + planetMars.moons[0] + ".";
document.getElementById("cosmosInfo").textContent = marsMessage;

// Array of planets
let planets = [
  { name: "Mercury", moons: [] },
  { name: "Venus", moons: [] },
  { name: "Earth", moons: ["Moon"] },
  { name: "Mars", moons: ["Phobos", "Deimos"] }
];
const lastPlanet = planets[planets.length - 1];
const lastPlanetMessage = "The first moon of " + lastPlanet.name + " is " + lastPlanet.moons[0] + ".";
document.getElementById("planetData").textContent = lastPlanetMessage;

// Explore the planets

const solarSystem = {
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

const earth = solarSystem.Earth;
const details = `Earth is planet number ${earth.orderFromSun} from the Sun. It has ${earth.moons.length} moon(s): ${earth.moons.join(", ")}.`;

document.getElementById("planetDetails").textContent = details;

// Planet information

let saturnInfo = {
    name: "Saturn",
    type: "Gas Giant",
    numberOfMoons: "Unknown"
};

saturnInfo.numberOfMoons = 82;

document.getElementById("planetDetails-1").textContent =
    saturnInfo.name + " is a " + saturnInfo.type +
    " with " + saturnInfo.numberOfMoons + " moons.";

let moonsOfMercury = []; 

moonsOfMercury.push("Proto");

let message = "Mercury moons count: " + moonsOfMercury.length;

document.getElementById("moonsCount").textContent = message;
