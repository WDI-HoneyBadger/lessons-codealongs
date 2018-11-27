$(document).ready(function(){
  console.log('jQ connected');

  // add an event to button
  $('button').on('click', function(){
    var playerInput = $('.player-input').val();
    setPlayer(playerInput);
  })

  // function that sets localStorage value
  function setPlayer(name) {
    window.localStorage.setItem('currentPlayer', name);
    renderPlayer();
  }

  // function that renders to the DOM
  function renderPlayer() {
    var player = window.localStorage.getItem('currentPlayer');
    var playerTag = $('<p/>').text(player);
    $('.player-info').empty();
    $('.player-info').append(playerTag);
  }

  renderPlayer();
})