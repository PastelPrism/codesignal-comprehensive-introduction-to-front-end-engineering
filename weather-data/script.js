// assignment 1

fetch('https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=Rome')
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather-info');
        weatherDiv.innerText = `Coordinates for Rome: Latitude ${data.location.lat}, Longitude ${data.location.lng}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));

// assignment 2

fetch('https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=Rome')
  .then(response => response.json())
  .then(data => {
    const lat = data.location.lat;
    const lng = data.location.lng;
    document.getElementById('weatherRome').innerText = `Coordinates of Rome: Latitude ${lat}, Longitude ${lng}`;
  })
  .catch(error => {
    console.error('Fetching Rome weather failed:', error);
  });

  // assignment 3
const city = 'Yerevan';
fetch(`https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=${city}`)
  .then(response => response.json())
  .then(data => {
      const lat = data.location.lat;
      const lng = data.location.lng;
      document.getElementById('forecast').textContent =
          `Coordinates of ${city}: Latitude ${lat}, Longitude ${lng}`;
  })
  .catch(error => {
      document.getElementById('forecast').innerText = 'Error fetching location data';
      console.error('Failed to fetch location:', error);
  });

  // is not working properly - look into this later. 

  // assignment 4
async function fetchLjubljanaLocation() {
  try {
    const response = await fetch('https://api-regional.codesignalcontent.com/weatherManager/getLocation?city=Ljubljana');

    if (!response.ok) {
      throw new Error(`Failed to fetch location. Status: ${response.status}`);
    }

    const data = await response.json();
    const lat = data.location.lat;
    const lng = data.location.lng;

    document.getElementById('forecast1').textContent =
      `Coordinates of Ljubljana: Latitude ${lat}, Longitude ${lng}`;
  } catch (error) {
    document.getElementById('forecast1').textContent = 'Error fetching location data';
    console.error('An error occurred:', error);
  }
}

fetchLjubljanaLocation();

 