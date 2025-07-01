// assignment 1

document.getElementById("planet").addEventListener("click", function(event) {
  alert("Orbiting the planet!");
  event.stopPropagation();
});

document.getElementById("parent").addEventListener("click", function(event) {
  alert("Orbiting the planet parent!");
});

// assignment 2

document.getElementById("universe").addEventListener("click", function(event) {
    if (event.target.id === 'neptune') {
        
        let neptuneEvent = new CustomEvent('neptuneClicked', { 
            detail: { message: 'Navigating the waters of Neptune!' } 
        });
        event.target.dispatchEvent(neptuneEvent);
    }
});


document.getElementById("neptune").addEventListener('neptuneClicked', function(e) {
    alert(e.detail.message);
});

// assignment 3


document.getElementById("planet").addEventListener("click", function() {
    this.dispatchEvent(new CustomEvent("orbitCompleted", { detail: { message: "Orbit successfully completed!" } }));
});

document.getElementById("planet").addEventListener("orbitCompleted", function(e) {
    alert(e.detail.message);
});

// assignment 4

document.getElementById("orbit-container").addEventListener("click", function() {
    alert("Orbit container was clicked!");
});


document.getElementById("comet").addEventListener("click", function(event) {
    alert("Comet launched!");
    event.stopPropagation(); 
});
