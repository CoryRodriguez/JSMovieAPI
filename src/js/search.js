const movieInput = document.getElementById('movieName');
const submitBtn = document.getElementById('submitBtn');
const url = 'http://www.omdbapi.com/?s=';
const test = '300'
const apiKey = '&apikey=82ed9809';
const output = document.getElementById('output');

let movieName = movieInput.value;

let media;

document.addEventListener('submit', (e) => {
  e.preventDefault();

  const getMovie = `${url}${movieInput.value}${apiKey}`


  fetch(getMovie)
    .then(res => res.json())
    .then(data => {
      
      let valid = data.Response.toLowerCase();
      console.log(data);

      // Format released date
      // let date = data.Released;
      // let date2 = date.split(' ');
      // let date3 = date2.unshift(date2.splice(1, 1)[0]);
      // let formattedDate = date2.join(' ');


      if (data !== true) {
        console.log('something here')
       
      } else {

        console.log('nothing here')

        movieInput.classList.add("is-invalid");
        submitBtn.classList.remove("btn-dark");
        submitBtn.classList.add("btn-danger");
        submitBtn.innerText = "Try Again";

      }


    })
    .catch(error => {
      console.log(error);
    }); 



});

function getMovies(movieName){

  console.log(data.Response.toLowerCase());
  console.log(data.Search);
  movieInput.classList.remove("is-invalid");
  submitBtn.classList.add("btn-dark");
  submitBtn.classList.remove("btn-danger");
  submitBtn.innerText = "Submit";

  output.innerHTML = `
          <div class="row text-center">
            <div class="col-md-6">
              <img src="${data.Search[0].Poster}" />
            </div>
            <div class="col-md-6 text-left font-weight-bold">
              <div class="mb-1">
                <span class="display-4 font-weight-normal mr-2">${data.Title}</span>
                <span>(${data.Rated})</span>
              </div>
              <span class="lead small">${formattedDate}</span> |
              <span class="lead small">${data.Genre}</span> |
              <span class="lead small">${data.Runtime}</span> 
              
              <hr>

              <p class="mt-3">${data.Plot}</p>
              
              <hr>

              <div class="row text-center">
                <div class="col-sm-4">
                  <img class="icon" src="../img/IMDb.png"></img>
                  <h4 class="">${data.Ratings[0].Value}</h4>
                </div>
                <div class="col-sm-4">
                  <img class="icon" src="../img/RottenTomatoes.png"></img>
                  <h4>${data.Ratings[1].Value}</h4>
                </div>
                <div class="col-sm-4">
                  <img class="icon mr-2" src="../img/Metacritic.svg.png"></img>
                  <h4>${data.Ratings[2].Value}</h4>
                </div>
              </div>


            </div>
          </div>
        `;
  

};




  // <div class="d-block"><img class="icon" src="../img/IMDb.png"></img> ${movie.Ratings[0].Value}</div>
  // <div class="d-block mb-1"><img class="icon" src="../img/RottenTomatoes.png"></img> ${movie.Ratings[1].Value}</div>
  // <div class="d-block my-2"><img class="icon mr-2" src="../img/Metacritic.svg.png"></img> ${movie.Ratings[2].Value}</div>