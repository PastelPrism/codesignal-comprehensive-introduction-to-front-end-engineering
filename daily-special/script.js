// Chef greeting
function chefGreeting(name = 'Customer') {
    return `Hello, ${name}! Your meal is being prepared.`;
}
document.getElementById('chef-greeting').textContent = chefGreeting('Alice');

// Personalized welcome message for guests
function createWelcomeMessage(guestName = "guest") {
    return `Welcome to our Restaurant, ${guestName}! We are delighted to serve you.`;
}
document.getElementById('welcome-message').textContent = createWelcomeMessage();

// Today's special dish
function getTodaysSpecial() {
    const specialDish = 'Grilled Salmon';
    return `Today's special is: ${specialDish}. Enjoy your meal!`;
}
document.getElementById('daily-special').textContent = getTodaysSpecial();

// Reception desk welcome message
function receptionWelcomeMessage() {
    return "Welcome to Galactic Grub! Enjoy your cosmic dining experience.";
}
document.getElementById('welcome').textContent = receptionWelcomeMessage();

// Soup of the day
function getSoupOfTheDay() {
    const soup = "Celestial Tomato Bisque";
    return `Today's soup is: ${soup}. Enjoy!`;
}
document.getElementById('soup-of-the-day').textContent = getSoupOfTheDay();


document.getElementById('soup-of-the-day').textContent = message;

