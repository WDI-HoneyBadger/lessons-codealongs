var amazingFrenchAuthors = [
  "Alexandre Dumas", 
  "Gustave Flaubert", 
  "Voltaire", 
  "Marcel Proust"
];

console.log(amazingFrenchAuthors.length);

var lastAuthor = amazingFrenchAuthors.pop() //removes from the array, also returns it so it can be saved to a variable
console.log('last author ', lastAuthor)

amazingFrenchAuthors.push('Jean Paul Sartre');
// amazingFrenchAuthors.reverse(); //reverses the entire array.
amazingFrenchAuthors.shift(); //removes first element from the array
amazingFrenchAuthors.unshift('trevor preston');  //adds to the beginning of an array
var authorsString = amazingFrenchAuthors.join(); //joins all the elements of an array into a string
var remadeArray = authorsString.split(','); //splits a string by a character and creates an array where each element is words from that string
// console.log('authors string is, ', authorsString);
// console.log('remadeArray is', remadeArray);

amazingFrenchAuthors.splice(1, 1); // removes parameter-1 number of elements starting at index of parameter-2's value

console.log(amazingFrenchAuthors.includes('Ghadeer')); // returns true if the element is found witinn the array
console.log(amazingFrenchAuthors.indexOf('Ghadeer'));  // returns the specific index where the element can be found in the array


console.log(amazingFrenchAuthors);
