// Canvas 
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Stars
const starCount = 600;
const stars = [];

function Star(x, y, radius, alpha, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.alpha = alpha;
  this.dx = dx;
  this.dy = dy;
}

function initStars() {
  stars.length = 0; 
  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = 2 + Math.random() * 3; 
    const alpha = 0.9 + Math.random() * 0.1; 
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    stars.push(new Star(x, y, radius, alpha, dx, dy));
  }
}
initStars();
window.addEventListener('resize', initStars);

// Falling stars
class FallingStar {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * (canvas.height / 2);
    this.length = 100 + Math.random() * 100;
    this.speed = 8 + Math.random() * 4;
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; 
    this.alpha = 1;
    this.life = 0;
    this.maxLife = 60 + Math.random() * 30;
  }
  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);
    this.life++;
    this.alpha = 1 - this.life / this.maxLife;
    if (
      this.life > this.maxLife ||
      this.x > canvas.width ||
      this.y > canvas.height
    ) {
      this.reset();
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x - this.length * Math.cos(this.angle),
      this.y - this.length * Math.sin(this.angle)
    );
    ctx.stroke();
    ctx.restore();
  }
}

const fallingStars = [];
for (let i = 0; i < 5; i++) {
  fallingStars.push(new FallingStar());
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
  stars.forEach(star => {
    star.x += star.dx;
    star.y += star.dy;

   
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;

    star.alpha += (Math.random() - 0.5) * 0.05;
    star.alpha = Math.max(0.1, Math.min(1, star.alpha));

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  });

  fallingStars.forEach(fallingStar => {
    fallingStar.update();
    fallingStar.draw(ctx);
  });

  requestAnimationFrame(animate);
}
animate();