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
      console.log(movie.Released);

      let date = movie.Released;
      let date2 = date.split(' ');
      let date3 = date2.unshift(date2.splice(1, 1)[0]);
      let formattedDate = date2.join(' ');


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
          output.innerHTML = `
          <div class="row text-center">
            <div class="col-md-6">
              <img src="${movie.Poster}" />
            </div>
            <div class="col-md-6">
              <span class="display-4 mr-2">${movie.Title}</span>
              <span>(${movie.Rated})</span>
              <p>${movie.Runtime}</p>
              <p>${formattedDate}</p>
              <div class="d-block"><img class="icon" src="../img/IMDb.png"></img> ${movie.Ratings[0].Value}</div>
              <div class="d-block mb-1"><img class="icon" src="../img/RottenTomatoes.png"></img> ${movie.Ratings[1].Value}</div>
              <div class="d-block my-2"><img class="icon" src="../img/Metacritic.svg.png"></img> ${movie.Ratings[2].Value}</div>
              <p>Plot: ${movie.Plot}</p>
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


