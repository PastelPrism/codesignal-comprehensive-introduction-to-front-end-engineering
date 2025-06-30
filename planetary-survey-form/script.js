// assignment 1

function savePlanetInfo() {
    let form = document.forms["surveyForm"];
    let diameter = form["planetDiameter"].value;
    
    const atmosphere = form["planetAtmosphere"].value;
    
    document.getElementById("log").innerText = "Planet Diameter: " + diameter + " km, Atmosphere: " + atmosphere;
}

// assignment 2


function submitComet() {
  // Fetch the form with comet details
  let form = document.forms["cometForm"];
  
  let cometName = form["cometName"].value;
  let cometSpeed = form["cometSpeed"].value;
  
 
  document.getElementById("cometInfo").innerText = "Comet " + cometName + " is traveling at " + cometSpeed + " km/s!";
}

// assignment 3

function recordObjectName() {
    let form = document.forms["orbitForm"];
    
    function recordObjectName() {
    let form = document.forms["orbitForm"];
    let name = form["objectName"].value;
    let message = "Recorded Cosmic Object: " + name;
    document.getElementById("recordedInfo").innerText = message;
}
    
    let message = "Recorded Cosmic Object: " + name;
    document.getElementById("recordedInfo").innerText = message;
}

// assignment 4
function applyForMission() {
    let form = document.forms["astronautForm"];
    let name = form["astronautName"].value;
    let duration = form["missionDuration"].value;

    let message = name + ", your application for a " + duration + " month(s) is confirmed!";
    document.getElementById("applicationStatus").innerText = message;
}
