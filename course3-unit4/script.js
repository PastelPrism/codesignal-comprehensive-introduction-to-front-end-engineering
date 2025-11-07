// Assignment 3
function createWelcomeMessage(guestName) {
  let message = `Welcome to our Restaurant, ${guestName}! We are delighted to serve you.`;
  return message;
}
document.getElementById('welcome-message').textContent = createWelcomeMessage("Guest");

// Assignment 4
function getTodaysSpecial() {
    let specialDish = 'Grilled Salmon';
    return `Today's special is: ${specialDish}. Enjoy your meal!`;
}

let todaysSpecial = getTodaysSpecial();
document.getElementById('daily-special').textContent = todaysSpecial;

// Assignment 5

function welcomeMessage() {
    
    let message = "Welcome to our Galatic Dining Restaurant! Dine fine with aliens from all over the universe and try out new galatic dishes.";
    return message;
}

let message;
function  initializeMessage() {
    message = welcomeMessage();
}
initializeMessage();

document.getElementById('welcome').innerText = message;

// Assignment 6

function soupOfTheDay () {
    let soups = ['Tomato Soup', 'Chicken Soup', 'Noodle Soup', 'Pumpkin Soup', 'Pea Soup'];
    let randomIndex = Math.floor(Math.random() * soups.length);
    return `Today's soup of the day is: ${soups[randomIndex]}. Enjoy!`;
}

let message1 = soupOfTheDay();
document.getElementById('soup-of-the-day').textContent = message1;