console.log('javascript connected!');

var animal = document.querySelector('.animal');
var body = document.body;
console.log(animal);

var position = 0;

function moveRight(subject) {
  console.log('subject', subject)
  // create new position that is current position and adds 2px to it
  var newPosition = position + 2;
  // save current position to new position
  position = newPosition;
  subject.style.left = position + 'px';
  console.log('animal moved to ', position);
}

function spawnBadger() {
  var newBadger = document.createElement('img');
  newBadger.src = "https://vignette.wikia.nocookie.net/farcry/images/a/ae/FC4_Animal_%2816%29.png/revision/latest?cb=20180521150551";
  newBadger.style.height 
  body.appendChild(newBadger);
}

function randomSize() {
  return Math.random() * 1000 + 'px';
}

function randomPlace() {
  return Math.random() * window.innerHeight + 'px';
}


// animal.style.height = randomSize();
// animal.style.top = randomPlace();
moveRight(animal);
// spawnBadger();

/* fun ideas:
- beginner: make the animal grow as it goes across the screen
- beginner: make the animal fade away (opacity) as it goes across the screen
- medium: rotate the animal as it goes across the screen.
- beginner/medium: when you click on the animal the animal goes back to the beginning.
- medium: when the animal hits the end of the screen, it moves back to the beginning of the screen:
  - use and if statement that uses window.innerWidth
- medium/hard: randomly generates circles on the page
  - the circles grow after being appended
- beginner: array of different animal images
  - every time you refresh you get a different animal
- medium: every time an animal hits the end of a screen, one more animal joins in
*/

var moveAnimal = setInterval(moveRight, 1000);