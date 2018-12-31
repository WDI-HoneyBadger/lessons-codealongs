$(document).ready(() => {
  console.log('jQ connected!');

  // fetches data from the API
  const fetchSpaceData = () => {
    const url = 'http://api.open-notify.org/astros.json';

    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        handleData(data);
      })
      .catch((error) => {
        console.log('ERROR IN FETCHSPACE DATA');
        console.log(error);
      })
  }

  // cleans data.  Calls renderData function
  const handleData = (spaceData) => {
    spaceData.people.forEach((astronaut) => {
      renderAstronaut(astronaut);
    })
  }

  //renders each astronaut
  const renderAstronaut = (astro) => {
    const $newAstro = $('<div>');
    const $name = $('<h2>');
    const $craft = $('<p>');

    $name.text(astro.name);
    $craft.text(astro.craft);

    $newAstro.append($name);
    $newAstro.append($craft);

    $('.astros').append($newAstro);
  }

  const renderHeader = () => {
    $header = $('<h1>').text('astronauts');
    $('body').prepend($header);
  }

  fetchSpaceData();
  renderHeader();


});