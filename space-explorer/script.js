// assignment 1

const jsonData = `[
  {"moon": "Europa", "planet": "Jupiter", "orbital_period_days": 3.55},
  {"moon": "Titan", "planet": "Saturn", "orbital_period_days": 15.95},
  {"moon": "Ganymede", "planet": "Jupiter", "orbital_period_days": 7.15}
]`;

try {
  const moons = JSON.parse(jsonData);

  const jupiterMoons = moons.filter(m => m.planet === "Jupiter");

  const moonsHtml = jupiterMoons
    .map(m => `<p>${m.moon} orbits ${m.planet} every ${m.orbital_period_days} days.</p>`)
    .join('');

  document.getElementById('space-info').innerHTML = moonsHtml;
} catch (error) {
  console.error("Parsing JSON data failed: ", error);
}

// assignment 2
const jsonData1 = `[
  {"name": "Mercury", "orbital_period_days": 88},
  {"name": "Venus", "orbital_period_days": 225},
  {"name": "Earth", "orbital_period_days": 365},
  {"name": "Mars", "orbital_period_days": 687}
]`;

try {
  const planets = JSON.parse(jsonData1);

  const shortOrbitPlanets = planets.filter(planet => planet.orbital_period_days < 365);

  document.getElementById('short-orbit-planets').innerText =
    `Planets with short orbital periods: ${shortOrbitPlanets.map(p => p.name).join(', ')}.`;
} catch (error) {
  console.error('Failed to parse planet JSON data: ', error);
}


// assignment 3

const jsonData2 = `[
  {"name": "John Doe", "role": "Astronaut"},
  {"name": "Jane Smith", "role": "Engineer"},
  {"name": "Sam Johnson", "role": "Astronaut"}
]`;

try {
  const crewMembers = JSON.parse(jsonData2);

  const astronauts = crewMembers.filter(member => member.role === "Astronaut");

  const astronautNames = astronauts.map(a => a.name).join(', ');

  document.getElementById('contributors').textContent = `Astronaut crew: ${astronautNames}`;
} catch (error) {
  console.error('Error parsing JSON data:', error);
}

// assignment 4
const cosmicJsonData = `[
  {"name": "Mercury", "type": "Planet", "orbital_period_days": 88},
  {"name": "Venus", "type": "Planet", "orbital_period_days": 224.7},
  {"name": "Earth", "type": "Planet", "orbital_period_days": 365.26},
  {"name": "Mars", "type": "Planet", "orbital_period_days": 687},
  {"name": "Jupiter", "type": "Planet", "orbital_period_days": 4333},
  {"name": "Europa", "type": "Moon", "orbital_period_days": 3.55},
  {"name": "Ganymede", "type": "Moon", "orbital_period_days": 7.15}
]`;

try {
  
  const celestialBodies = JSON.parse(cosmicJsonData);

  const planets = celestialBodies.filter(body => body.type === "Planet");

  const planetNames = planets.map(planet => planet.name);

  document.getElementById('cosmic-data').innerText = `Planets: ${planetNames.join(', ')}`;
} catch (error) {
  
  console.error('Error parsing cosmic data:', error);
}
