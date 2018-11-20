console.log('js connected');

var body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

var nickname = document.querySelector('#nickname');

nickname.innerHTML = 'T$$';
document.querySelector('#favorites').innerHTML = 'my mom';
document.querySelector('#hometown').innerHTML = 'seattle';

var spanItems = document.querySelectorAll('span');

spanItems.forEach(function(spanItem, index) {
  spanItem.className = `spanitem${index}`;
  spanItem.style.color = 'red';
})

nickname.style.color = 'cornflowerblue';


// for (var i = 0; i < listItems.length; i++) {
//   listItems[i].className = 'listitem';
//   listItems[i].style.color = 'red';
// }