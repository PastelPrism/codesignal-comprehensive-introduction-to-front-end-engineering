// assignment 1
function getAuthorInfo(authorId) {
  const apiUrl = `https://api-regional.codesignalcontent.com/posting-application-2/users/${authorId}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(author => {
      document.getElementById('author-info').innerHTML = `Author: ${author.firstName} ${author.lastName}`;
    });
}

getAuthorInfo('a9f39c40-b073-11ec-b909-0242ac120002');

// assignment 2

const authorEndpoint = 'https://api-regional.codesignalcontent.com/posting-application-2/users/382dffad-4988-45c8-912f-c26477ac0d6d';

fetch(authorEndpoint)
  .then(response => response.json())
  .then(data => {
    document.getElementById('author-info1').textContent = `Name: ${data.firstName} ${data.lastName}`;
  });

  // assignment 3
  const authorId = '274b1a59-026d-4c9d-bcba-cd47a1a4ba96'; // This is the author's unique ID

fetch(`https://api-regional.codesignalcontent.com/posting-application-2/users/${authorId}`)
  .then(response => response.json())
  .then(author => {
    document.getElementById('author-data').textContent = `Author: ${author.firstName} ${author.lastName}`;
  });
