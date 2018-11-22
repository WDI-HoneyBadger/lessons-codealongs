$(document).ready(function() {
  console.log('jQ ready!');
  var $body = $('body');

  // vanilla:
  var nav = document.querySelector('.nav');
  // jQ:
  var $nav = $('.nav');

  // vanilla:
  var divs = document.querySelectorAll('div');
  // jQ:
  var $divs = $('div');

  // vanilla:
  var userWord = document.querySelector('#user-word');
  // jQ
  var $userWord = $('#user-word');

  // hiding all images in vanilla:
  // var images = document.querySelectorAll('img');

  // for (var i = 0; i < images.length; i++) {
  //   images[i].style.display = 'none';
  // }

  // in jQ:
  // $('img').hide();

// all css selectors are valid in jQ
  $('ul li:last-child');
  $('.nav > div');

  // you can use the .css method to update css properties:
  $body.css('background-color', 'white')
  // $('.container').css('height', '800px');
  $('h1').css('color', '#00796B');


  // console.log(nav.childNodes);
  // console.log($nav.children());

  /* CREATING ELEMENTS */
 
  // create a new h2 (or whatever):
  var $subTitle = $('<h2/>').addClass('special').text('what a great page');
  $body.append($subTitle);


  //other syntax (not recommended):
  var $subTitle = $('<h2 class="special">what a great page</h2>');

  var $project2ish = $('<div/>').addClass('project-cont project2ish').text('this is space for project2ish')
  $('.project2').after($project2ish);

  var $project1 = $('.project1');
  var $functionality = $('<div/>').addClass('functionality').text('this project bakes potatoes');

  $project1.prepend($functionality);

  // adding option 0 to the beginning of nav:
  var $nav = $('.nav');

  var $newDiv = $('<div/>');
  var $newA = $('<a/>').attr('href', '#').text('option0');

  $newDiv.append($newA);

  // console.log($newDiv[0]);
  // how do we prepend this new div to the .nav div?
  $nav.prepend($newDiv);

  // goal:  move the purple box to the right by 400px;
  var $techDiv = $('.tech');
  // var $techDiv = $('.project2 > div');

  // $techDiv.css({
  //   'left': '400px',
  //   'background-color' : 'cornflowerblue',
  //   'height' : '300px',
  //   'width' : '400px'
  // });

  // `.animate` - the multi-tool, super powerful, super flexible
  $techDiv.animate({
    'left': '400px',
    'height' : '300px',
    'width' : '300px',
  }, 5000, function() {
    $techDiv.fadeOut();  // fadeOut() will fade out an element and change it's display property to none
  });

  // $techDiv.fadeOut(3000);

  function fadeTechIn() {
    console.log('hi')
    $techDiv.fadeIn(2000); // opposite of fadeOut()
  }

  $('img').hide();  // changes display property to none
  // $('img').show(); // changes display property back to default from none
  
  setTimeout(function() {
    $('img').show()
  }, 1500);
  // $('img').toggle();  // changes display property to none if it is displayed, and turns it to default display value if it is none;


  /*toggleClass will run removeClass('class-name') on an element that has
  class 'class-name'.  Or it will run addClass('class-name') on an element
  that does not have the class 'class-name'*/

/*   setInterval(function(){
    $('p').toggleClass('blue-text');
  }, 500); */
  
  // add a click event listener, option 1:
/*   $('p').click(function(){
    console.log('you clicked a p tag');
  }) */
  // option 2:
/*   $('p').on('mouseenter', function(){
    console.log('entering');
  })
  $('p').on('mouseout', function(){
    console.log('leaving');
  }) */

/*   $('body').on('mousemove', function(event){
    console.log(event.clientX, event.clientY);
  }) */

  // other popular events:  mouseenter, mouseout
  // also: mouseover

  /* .remove() : */
  $('h1').on('click', function(){
    $('p').remove();
  })
  

})

// appending methods:
/* 
$parent.append($child) : appends the child at the bottom of the parent
.prepend() : appends the child at the beginning of the parent
.insertAfter() : create an element and put it after another element
.insertBefore() : create an element and put it before another element
*/
