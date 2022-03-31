///////////////////////////////////////// Object Literal Syntax
//  const book = {
//     title: "Nineteen Eighty-Four",
//     author: "George Orwell",
//     genre: "Dystopian Future",
//     edition: 1,
//     published: 1949
// };

// console.log(book);
// console.log(book.genre); 


////////////////////////////////////////// Object Prototype Constructor
/* const book = new Object();
book.title = 'Nineteen Eighty-Four';
book.author = 'George Orwell';
book.genre = 'Dystopian Future';
book.edition = 1;
book.published = 1949;

console.log(book);
console.log(book.author); */

/////////////////////////////////////////// Constructor Function 
// const Book = function (title, author, genre, edition, published) {
//     this.title = title;
//     this.author = author;
//     this.genre = genre;
//     this.edition = edition;
//     this.published = published;

// };

// const order = new Book('Nineteen Eighty-Four','George Orwell','Dystopian Future',1, 1949 );
// console.log(order);
// console.log(order.published);

const me = {
    age: 18,
    name: "jack mclaughlin",
    hometown: "Rochester, NH",
    major: "CompSci",
    dog_img: "../../images/harley.jpg",
};

let h2 = document.createElement('h2');
let list = document.createElement('ul');
let ageItem = document.createElement('li');
let majorItem = document.createElement('li');
let townItem = document.createElement('li');

h2.innerText = me.name;
ageItem.innerText = me.age;
majorItem.innerText = me.major;
townItem.innerText = me.hometown;

list.append(ageItem, majorItem, townItem);
let div = document.querySelector('.collector');
div.appendChild(h2);
div.appendChild(list);

let img = document.createElement('img');
img.src = me.dog_img;
div.appendChild(img);


let footer = document.createElement('footer');
let today = new Date();
let dateString = today.toDateString();
footer.innerText = dateString;
div.appendChild(footer);


// Styles

div.style.backgroundColor = 'blue';
div.style.color = 'white';
div.style.padding = '2rem';
div.style.fontFamily = 'Verdana, sans-serif';

h2.style.margin = '5%';
h2.style.textAlign = 'center';

list.style.marginLeft = '45%';

footer.style.textAlign = 'center';