// assignment 1
const getNewPlanetDetails = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const details = {
                name: 'CosmoKnot',
                status: 'Discovered',
                galaxy: 'Milky Way'
            };
            resolve(details);
        }, 1000); 
    });
};

// assignment 2
function getPlanetInfo(callback) {
    setTimeout(() => {
        const planetData = { 
            name: 'Mars', 
            status: 'Habitable zone planet', 
            distanceFromSun: '227.9 million km'
        };
        callback(planetData);
    }, 2000);
}

// assignment 3

const getOrbitInfo = () => new Promise((resolve) => {
    setTimeout(() => resolve("Planet is in stable orbit."), 1000); 
});

async function displayOrbitStatus() {
    const statusElement = document.getElementById('orbitStatus');
    const orbitMessage = await getOrbitInfo(); 
    statusElement.innerText = orbitMessage;    
}
displayOrbitStatus();

// assignment 4

function fetchRotationPeriod() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('24.6 hours - Earth'), 1000);
    });
}

fetchRotationPeriod().then(rotation => {
    document.getElementById('rotation').innerText = rotation;
});
