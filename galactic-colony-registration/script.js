// Spacecraft Speed Registration
document.getElementById("speedForm").addEventListener("submit", function(event) {
    const speedInput = document.querySelector('input[name="maxSpeed"]');
    const speedValue = parseFloat(speedInput.value);

    if (speedValue > 250000) {
        alert("Warning! Speed exceeds safe interstellar travel limits. And usually that means no good!");
        event.preventDefault(); 
    }
});

// Planet Distance Validator
document.getElementById("distanceForm").addEventListener("submit", function(event) {
    const avgDistanceInput = document.querySelector('input[name="averageDistance"]');
    const avgDistanceValue = parseFloat(avgDistanceInput.value);

    if (avgDistanceValue < 10) {
        alert("Error: Distance too small for a planet! It's just a rock");
        event.preventDefault();
    } else {
        alert("Planet distance validated! Hurray!");
    }
});

// Orbit Distance Checkpoint
document.getElementById("orbitDistanceForm").addEventListener("submit", function(event) {
    const minDistanceInput = document.querySelector('input[name="minDistance"]');
    const minDistanceValue = parseFloat(minDistanceInput.value);

    if (minDistanceValue < 2) {
        alert("Error: Noooooo! You're flying too close to the Sun! Don't be Pegasus! Must be at least 2 million km.");
        event.preventDefault();
    } else {
        alert("Success! Whew, we're safe.");
    }
});