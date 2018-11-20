console.log('js connected!');

/* getElementsByClassName returns a nodelist (similar to an array)
of all DOM elements that have the class */
var navBar = document.getElementsByClassName('nav');
// var containers = document.getElementsByClassName('container');
// var projectsContainer = containers[1];
/* console.log(navBar[0]);
console.log(containers);
console.log(projectsContainer); */


/* getElementById returns a single element that matches the id passed through*/
var firstProfileText = document.getElementById('first-profile');
// console.log(firstProfileText);

/* getElementsByTagName */
var aTags = document.getElementsByTagName('a');
// console.log(aTags);

/* querySelector */
var nav = document.querySelector('.nav');
var container1 = document.querySelector('.container');
var firstProf = document.querySelector('#first-profile');

// console.log(nav);
// console.log(container1)

/* querySelectorAll */
var allContainers = document.querySelectorAll('.container');
var alATags = document.querySelectorAll('a');
var navElements = document.querySelectorAll('.nav > div');
// console.log(allContainers);

var header = document.querySelector('h1');
// console.log(header);
header.style.color = 'darkgreen';

function randomBg() {
  var randomRed = Math.floor(Math.random() * 255);
  var randomGreen = Math.floor(Math.random() * 255);
  var randomBlue = Math.floor(Math.random() * 255);
  
  header.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 0.4)`;  
}

setInterval(randomBg, 1000);

var image = document.querySelector('img');

image.src = 'https://placekitten.com/600/500';
image.className = 'smaller-img';

var body = document.getElementsByTagName('body')[0];

// container1.innerHTML = '<h1>OH NO</h1> <p>I just changed the whole page</p>';

var project4Container = document.querySelector('.project4');

var newImg = document.createElement('img');
newImg.src = 'https://placekitten.com/300/700';
newImg.style.border = '2px solid black';

project4Container.appendChild(newImg);

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('screeeeeee');

newParagraph.appendChild(paragraphText);
project4Container.appendChild(newParagraph);

var navOption1 = document.querySelectorAll('.nav > div')[0];

// navOption1.addEventListener('click', function() {
//   console.log('click');
// })

function changeBodyColor() {
  console.log('CLICK!!!!');
  body.style.backgroundColor = 'cyan';
}

navOption1.addEventListener('click', changeBodyColor);

var input = document.querySelector('#user-word');
var button = document.querySelector('#user-button');
var resultSection = document.querySelector('.form-result');

function capitalizeAndAppend(){
  console.log('clickity click');
  // get the value of the input
  var userInput = input.value;
  console.log('input value is ', userInput);
  // capitalize that value
  var capitalizedInput = userInput.toUpperCase();
  console.log(capitalizedInput);
  // append the capitalized value to the resultSection
  var newPTag = document.createElement('p');
  var newPTagText = document.createTextNode(capitalizedInput);

  newPTag.appendChild(newPTagText);
  resultSection.appendChild(newPTag);
}

button.addEventListener('click', capitalizeAndAppend);


