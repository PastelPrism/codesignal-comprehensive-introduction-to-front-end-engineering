// assignment 1

let cookieImage = document.createElement("img");
cookieImage.setAttribute('src', 'https://codesignal-staging-assets.s3.amazonaws.com/uploads/1719866292743/245fc1c2-08b1-41a8-a7ca-680bf664fc39.jpg');

cookieImage.setAttribute('alt', 'Delicious cookie');

document.getElementById("cookies-recipe").appendChild(cookieImage);


let descriptionElement = document.createElement("p");
descriptionElement.innerHTML = "These cookies are soft, chewy, and delicious!";
document.getElementById("cookies-recipe").appendChild(descriptionElement);

// assignment 2

let cookieImg = document.createElement("img");
cookieImg.src = 'https://codesignal-staging-assets.s3.amazonaws.com/uploads/1719866292743/245fc1c2-08b1-41a8-a7ca-680bf664fc39.jpg';
cookieImg.alt = 'Amazing Space Cookies';
cookieImg.width = 100;

document.getElementById("cookies-gallery").appendChild(cookieImg);

// assignment 3
let cakeImage = document.createElement("img");
cakeImage.src = "https://codesignal-staging-assets.s3.amazonaws.com/uploads/1719866410566/ff04dbed-f2f3-4e5d-9f42-3a4c372e270a.jpg";
cakeImage.alt = "Scrumptious Carrot Cake";

document.getElementById("cake-recipe").appendChild(cakeImage);

let stepsParagraph = document.createElement("p");
stepsParagraph.innerHTML = "To make carrot cake, one needs lots of carrots. A cake would come in handy too. If you mix these together you will have a nice carrot cake!";

document.getElementById("cake-recipe").appendChild(stepsParagraph);

// assignment 4
let cheesecakeImage = document.createElement("img");

cheesecakeImage.src = "https://codesignal-staging-assets.s3.amazonaws.com/uploads/1719866514448/4e1a1a0e-c1b3-47b2-99b9-0ae6947ad18e.jpg";
cheesecakeImage.alt = "Cheesecake Delight";
cheesecakeImage.style.borderRadius = "50%"; 
cheesecakeImage.style.width = "200px"; 

document.getElementById("cheesecake-gallery").appendChild(cheesecakeImage);
