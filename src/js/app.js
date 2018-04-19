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
      console.log(movie.Response);

      output.innerHTML += `
        <div class="row">
          <div class="col-md-6">
            <img src="${movie.Poster}" />
          </div>
          <div class="col-md-6">
            <span class="display-4 mr-2">${movie.Title}</span>
            <span>${movie.Rated}</span>
            <p>${movie.Runtime}</p>
            <p>${movie.Released}</p>
            <p>IMDB: ${movie.Ratings[0].Value}</p>
            <p>Rotton Tomatoes: ${movie.Ratings[1].Value}</p>
            <p>Metacritic: ${movie.Ratings[2].Value}</p>
          </div>
        </div>
      `;
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    }); 

});


// function newSearch(){

//   if (movie.Response !== False) {
//     console.log('hi');
//   } else {
//     console.log('no');
//   };
// };

// newSearch()