const movieInput = document.getElementById('movieName');
const submitBtn = document.getElementById('submitBtn');
const url = 'http://www.omdbapi.com/?t=';
const test = '300'
const apiKey = '&apikey=82ed9809';
const output = document.getElementById('output');

let media;

document.addEventListener('submit', (e) => {
  e.preventDefault();


  let movieName = movieInput.value;
  const getMovie = `${url}${movieName}${apiKey}`

  fetch(getMovie)
    .then(res => res.json())
    .then(data => {
      movie = data;
      console.log(movie);
      console.log(movie.Error);
      console.log(movie.Title);

      if (movieInput.value === '') {
        console.log('nothing here')
        movieInput.classList.add("is-invalid");
        submitBtn.classList.remove("btn-dark");
        submitBtn.classList.add("btn-danger");
        submitBtn.innerText = "Try Again";
        output.innerHTML = 'no';
      } else {
        movieInput.classList.remove("is-invalid");
        submitBtn.classList.add("btn-dark");
        submitBtn.classList.remove("btn-danger");
        submitBtn.innerText = "Submit";

          if (movie.Title !== '') {
          console.log('working');
          output.innerHTML = `
          <div class="row text-center">
            <div class="col-md-6">
              <img src="${movie.Poster}" />
            </div>
            <div class="col-md-6">
              <div class="">
                <span class="display-4 mr-2">${movie.Title}</span>
                <span>(${movie.Rated})</span>
                <p>${movie.Runtime}</p>
                <p>${movie.Released}</p>
                <p>IMDB: ${movie.Ratings[0].Value}</p>
                <p>Rotten Tomatoes: ${movie.Ratings[1].Value}</p>
                <p>Metacritic: ${movie.Ratings[2].Value}</p>
              </div>
            </div>
          </div>
        `;
        };
      }
      

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