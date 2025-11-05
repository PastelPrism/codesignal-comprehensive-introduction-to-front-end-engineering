let planetName = 'Jupiter';  // Declare a block-scoped variable 'planetName'
let orbitPeriod = 29.46;   // Incorrectly declared as a constant, change to 'let' 
planetName = 'Saturn';       // Change 'planetName' to 'Saturn'
document.getElementById('planetInfo').innerText = planetName + ' orbits the Sun every ' + orbitPeriod + ' Earth years.';

const constellation = 'Orion'; // Constellations do not change position and hence can be constant
let starsVisible = 7; // Can you spot the problem with this line?

starsVisible = 8;

document.getElementById('constellationInfo').innerText = 'Constellation ' + constellation + ' has ' + starsVisible + ' stars visible from Earth.'; 

const universe = 'Observable Universe'; // The universe stays the same

let planet = 'Mercury';
planet = 'Venus';

document.getElementById('orbit-info').innerText = 'Planet ' + planet + ' is part of the ' + universe + '.'; 

const cosmicBody = 'Sun';

let planet1 = 'Mercury';
planet1 = 'Venus';

document.getElementById('discovery').innerText = 'The planet ' + planet1 + ' orbits the ' + cosmicBody + '.';