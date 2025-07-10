const earth = document.getElementById('earth');
const msg   = document.getElementById('message');

earth.addEventListener('click', () => {
  
// message shows and disappears
  msg.style.display = 'block';
  setTimeout(() => msg.style.display = 'none', 5000);
});
