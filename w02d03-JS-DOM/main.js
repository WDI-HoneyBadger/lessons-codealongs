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

console.log(nav);
console.log(container1)

/* querySelectorAll */
var allContainers = document.querySelectorAll('.container');
var alATags = document.querySelectorAll('a');
console.log(allContainers);