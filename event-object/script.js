
function alertElementId(event) {
    alert('Clicked element ID is: ' + event.target.id);
}
document.getElementById('galaxy_img').addEventListener('click', alertElementId);


function displaySpaceFact() {
    document.getElementById('space_fact').innerText = 'Space is completely silent. There is no atmosphere in space, which means that sound has no medium or way to travel to be heard.';
}
document.getElementById('space_fact').addEventListener('click', displaySpaceFact);


function showMarsFact() {
    alert('Did you know? Mars has the largest dust storms in our solar system!');
}
document.getElementById('planet_mars').addEventListener('click', showMarsFact);


function launchSpaceMessage() {
    alert("✨ Welcome to the wonders of the universe! Fasten your seatbelt and enjoy the ride.");
}
document.getElementById('rocket_launch').addEventListener('click', launchSpaceMessage);

function displayOrbitFact() {
    alert('Did you know? The International Space Station orbits Earth every 90 minutes!');
}
document.getElementById('orbit_fact_btn').addEventListener('click', displayOrbitFact);

const greetings = ["Hello Astronaut!", "Welcome to Mars!", "Discover the Cosmos!"];
let messageList = '';
for (let i = 0; i < greetings.length; i++) {
    messageList += '<li>' + greetings[i] + '</li>';
}
document.getElementById("welcome-messages").innerHTML = messageList;

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
let listHTML = '';
for (let i = 0; i < planets.length; i++) {
    listHTML += '<li>' + planets[i] + '</li>';
}
document.getElementById("planets-discovered").innerHTML = listHTML;

const orbitTimes = [72, 88, 91, 65, 99];
let orbitListHTML = '';
for (let i = 0; i < orbitTimes.length; i++) {
    orbitListHTML += '<li>' + 'Orbit ' + (i + 1) + ': ' + orbitTimes[i] + ' seconds' + '</li>';
}
document.getElementById("orbit-times").innerHTML = orbitListHTML;