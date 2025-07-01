// assignment 1

fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error fetching asteroid data'); // Throw an error if response is not OK
    }
    return response.json(); // Decode the JSON from the response
  })
  .then(data => {
    document.getElementById('asteroid-info').textContent = 'Successfully fetched the data!';
  })
  .catch(error => {
    document.getElementById('asteroid-info').textContent = 'Error fetching data: ' + error.message;
  });


  // assignment 2

  fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to connect, status code: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    const post = data[4];
    document.getElementById('post').textContent = 'Post data: ' + post.text;
  })
  .catch(error => {
    document.getElementById('post').textContent = 'Communication error: ' + error.message;
  });

  // assignment 3

fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch data, status code: ' + response.status); 
    }
  })
  .then(data => {
    document.getElementById('space-data').innerText = 'Successfully fetched the data!';
  })
  .catch(error => {
    document.getElementById('space-data').innerText = 'Error: ' + error.message;
  });


  // assignment 4
  fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch galactic posts. Status code: ' + response.status);
    }
    return response.json();
  })
  .then(posts => {
    const galacticNewsDiv = document.getElementById('galactic-news');
    galacticNewsDiv.textContent = `Successfully fetched ${posts.length} galactic posts! 🪐`;

    posts.forEach((post, index) => {
      const p = document.createElement('p');
      p.textContent = `#${index + 1}: ${post.text}`;
      galacticNewsDiv.appendChild(p);
    });
  })
  .catch(error => {
    document.getElementById('galactic-news').textContent =
      'Error fetching galactic data: ' + error.message;
  });
