var querier = new MovieQuerier();

document.addEventListener("DOMContentLoaded", function () {
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist !== null) {
        getMovies(watchlist).then(renderMovies);
    }
})

function getMovies(watchlist) {
    moviePromises = watchlist.map(querier.queryMovieByImdbId);

    return Promise.all(moviePromises);
}

function renderMovies(movies) {
    var results = document.getElementById("movies-container");
    var moviesHTML = movies.map(renderMovie);
    results.innerHTML = moviesHTML.join("");
}

function renderMovie(currentMovie) {
    var movieHTML = ``;

    movieHTML = `
        <div class="card col-3 movie">
            <img class="card-img-top" src=\"${currentMovie.Poster}\" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">Released: ${currentMovie.Year}</p>
                    <a class="btn btn-primary" onClick="saveToWatchlist(\'${currentMovie.imdbID}\')">Add</a>
            </div>
        </div>
        `

    return movieHTML;
}