const movieInput = document.getElementById('movieName');
const url = 'http://www.omdbapi.com/?t=';
const test = '300'
const apiKey = '&apikey=82ed9809';
const output = document.getElementById('output');


document.addEventListener('submit', (e) => {
  e.preventDefault();
  let movieName = movieInput.value;
  const getMovie = `${url}${movieName}${apiKey}`

  fetch(getMovie)
    .then(res => res.json())
    .then(data => {
      let movie = data;
      console.log(movie);

      output.innerHTML += `
        <img src="${movie.Poster}" />
        <h1>${movie.Title}</h1>
      `;
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    }); 

});

