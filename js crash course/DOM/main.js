//console.log(window); to see all the documents

//Single element selectors

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// MULTIPLE ELEMENTS
console.log(document.querySelectorAll('.item'));//better to use this always 
console.log(document.getElementsByClassName('item'));

/* TO LOOP THROUGHT THE ITEMS
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item)); */

/* REMOVE LIST FROM HTML 
const ul = document.querySelector('.items');

ul.remove(); */
ul.lastElementChild.remove(); // will remove last list element
ul.firstElementChild.textContent = 'Hello'; //will change the name of the first line ul 
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; //will change the last one tex to big hello

//CHANGE SOME STYLE 
const btn = document.querySelector('.btn');
btn.style.background = 'red';

//EVENTS LISTENER
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
})

//to see what you need to target by clicking on it so it prints to console log
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.id);
}) 

//WHEN WE CLICK CHANGE THE BACKGROUND
const btn = document.querySelector('.btn')

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
});

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

