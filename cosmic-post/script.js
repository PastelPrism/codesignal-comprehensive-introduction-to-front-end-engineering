// assignment 1
fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
  .then(response => response.json())
  .then(posts => {
    const firstPost = posts[0];
    
    const paragraph = document.createElement('p');

    paragraph.textContent = firstPost.text;

    const cosmicInfoDiv = document.getElementById('cosmic-info');
    cosmicInfoDiv.appendChild(paragraph);
  })
  .catch(error => {
    console.error('Oh noes! No! This is not supposed to happen:', error);
  });

  // assigment 2
  fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
  .then(response => {
    return response.json();
  })
  .then(posts => {
    let maxLikes = posts[0].likesCount;
    let mostLikedPost = posts[0];

    for (let i = 0; i < posts.length; i++) {
      let post = posts[i];
      if (post.likesCount > maxLikes) {
        maxLikes = post.likesCount;
        mostLikedPost = post;
      }
    }

    document.getElementById('star-info').textContent = 'Most liked: ' + mostLikedPost.text;
  })
  .catch(error => {
    console.error('Something went wrong:', error);
  });



  // assignment 3
  fetch('https://api-regional.codesignalcontent.com/posting-application-2/users/2b0722g9-39d6-4acc-87bb-ee7c7339f880')
  .then(response => response.json())
  .then(author => {
    const authorDiv = document.getElementById('author');
    authorDiv.textContent = `${author.firstName} ${author.lastName}`;
  })
  .catch(error => {
    console.error('Error fetching author details:', error);
  });
