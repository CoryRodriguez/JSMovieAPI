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

      // console.log(data.Response.toLowerCase());
      console.log(data.Search);      
      console.log(data.Search[0].Title);

      movieInput.classList.remove("is-invalid");
      submitBtn.classList.add("btn-dark");
      submitBtn.classList.remove("btn-danger");
      submitBtn.innerText = "Submit";

      for (let i = 0; i <= data.Search.length; i++){
        console.log(data.Search[i].Title);
        output.innerHTML += `
          
   
          <div class="col-6 col-md-4 col-lg-3 card-group">
            <div class="card bg-dark mb-4">
              <img class="card-img-top" src="${data.Search[i].Poster}">
              <div class="card-body d-flex flex-column">
                <h4 class="card-title mt-auto">${data.Search[i].Title}</h4>
                <button type="button" class="mt-auto btn btn-block btn-secondary">Details</button>
              </div>
            </div>
          </div>
        `;
      };


      // NEED TO DO FOREACH ITERATION


      // Format released date
      // let date = data.Released;
      // let date2 = date.split(' ');
      // let date3 = date2.unshift(date2.splice(1, 1)[0]);
      // let formattedDate = date2.join(' ');

      // <span class="lead small">${formattedDate}</span> |


      // if (data !== true) {
      //   console.log('something here')
       
      // } else {

      //   console.log('nothing here')

      //   movieInput.classList.add("is-invalid");
      //   submitBtn.classList.remove("btn-dark");
      //   submitBtn.classList.add("btn-danger");
      //   submitBtn.innerText = "Try Again";

      // }


    })
    .catch(error => {
      console.log(error);
    }); 



});

function getMovies(movieName){

  
  

};




  // <div class="d-block"><img class="icon" src="../img/IMDb.png"></img> ${movie.Ratings[0].Value}</div>
  // <div class="d-block mb-1"><img class="icon" src="../img/RottenTomatoes.png"></img> ${movie.Ratings[1].Value}</div>
  // <div class="d-block my-2"><img class="icon mr-2" src="../img/Metacritic.svg.png"></img> ${movie.Ratings[2].Value}</div>