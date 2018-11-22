console.log('javascript connected!');

var animal = document.querySelector('.animal');
console.log(animal);

var position = 0;

function moveRight() {
  // create new position that is current position and adds 2px to it
  var newPosition = position + 2;
  // save current position to new position
  position = newPosition;
  animal.style.left = position + 'px';
  console.log('animal moved to ', position);
}

var moveAnimal = setInterval(moveRight, 10);