// JavaScript to toggle the space navigation on small screens
document.querySelector('.space-toggle').addEventListener('click', function() {
  document.getElementById('space-items').classList.toggle('space-hidden');
});


// assignment 4
document.getElementById('cosmos-toggle').addEventListener('click', () => {
  const menu = document.getElementById('cosmos-links');
  menu.classList.toggle('menu-hidden1');
});