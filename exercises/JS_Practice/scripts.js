// Styles HTML elements

let div = document.querySelector('.collector');

let footer = document.createElement('footer');
let today = new Date();
let dateString = today.toDateString();
footer.innerText = dateString;
div.appendChild(footer);

let h2 = document.createElement('h2');
HTMLBRElement.innerText = 'yo';
div.appendChild(h2);
