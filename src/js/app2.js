const movieInput = document.getElementById('movieName');
const submitBtn = document.getElementById('submitBtn');
const url = 'http://www.omdbapi.com/?t=';
const test = '300'
const apiKey = '&apikey=82ed9809';
const output = document.getElementById('output');

let media;

document.addEventListener('submit', (e) => {
  e.preventDefault();

  output.innerText = `${movieInput.value + 1}`;

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


      if (movie.Response.toLowerCase() !== true) {

        (console.log(movie.Response.toLowerCase()));
        movieInput.classList.remove("is-invalid");
        submitBtn.classList.add("btn-dark");
        submitBtn.classList.remove("btn-danger");
        submitBtn.innerText = "Submit";

        if (movie.Title !== '') {
          console.log(String(movie.Response));
          output.innerHTML = `
          <div class="row text-center">
            <div class="col-md-6">
              <img src="${movie.Poster}" />
            </div>
            <div class="col-md-6 text-left font-weight-bold">
              <div class="mb-1">
                <span class="display-4 font-weight-normal mr-2">${movie.Title}</span>
                <span>(${movie.Rated})</span>
              </div>
              <span class="lead small">${formattedDate}</span> |
              <span class="lead small">${movie.Genre}</span> |
              <span class="lead small">${movie.Runtime}</span> 
              
              <hr>

              <p class="mt-3">${movie.Plot}</p>
              
              <hr>

              <div class="row text-center">
                <div class="col-sm-4">
                  <img class="icon" src="../img/IMDb.png"></img>
                  <h4 class="">${movie.Ratings[0].Value}</h4>
                </div>
                <div class="col-sm-4">
                  <img class="icon" src="../img/RottenTomatoes.png"></img>
                  <h4>${movie.Ratings[1].Value}</h4>
                </div>
                <div class="col-sm-4">
                  <img class="icon mr-2" src="../img/Metacritic.svg.png"></img>
                  <h4>${movie.Ratings[2].Value}</h4>
                </div>
              </div>


            </div>
          </div>
        `;
        };
      } else {

        console.log('nothing here')
        movieInput.classList.add("is-invalid");
        submitBtn.classList.remove("btn-dark");
        submitBtn.classList.add("btn-danger");
        submitBtn.innerText = "Try Again";
        output.innerHTML = 'no';
      }
      

    })
    .catch(error => {
      console.log(JSON.stringify(error));
    }); 

});



  // <div class="d-block"><img class="icon" src="../img/IMDb.png"></img> ${movie.Ratings[0].Value}</div>
  // <div class="d-block mb-1"><img class="icon" src="../img/RottenTomatoes.png"></img> ${movie.Ratings[1].Value}</div>
  // <div class="d-block my-2"><img class="icon mr-2" src="../img/Metacritic.svg.png"></img> ${movie.Ratings[2].Value}</div>