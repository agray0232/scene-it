class MovieQuerier {

    queryMoviesByKeyword(titleSearch) {
        var moviesPromise = new Promise(function (resolve, reject) {

            var sanitizedSearchInput = encodeURIComponent(titleSearch);
            $.get("http://www.omdbapi.com/?apikey=3430a78&s=" + sanitizedSearchInput)
                .then(function (movieData) {
                    resolve(movieData.Search);
                });
        });

        return moviesPromise;
    }

    queryMovieByImdbId(id) {
        var moviePromise = new Promise(function (resolve, reject) {

            var sanitizedId = encodeURIComponent(id);
            $.get("http://www.omdbapi.com/?apikey=3430a78&i=" + sanitizedId)
                .then(function (movieData) {
                    var movie =
                    {
                        Title: movieData.Title,
                        Year: movieData.Year,
                        imdbID: movieData.imdbID,
                        Type: movieData.Type,
                        Poster: movieData.Poster
                    }
                    resolve(movie);
                });
        });

        return moviePromise;
    }

    queryMovieByYear(year) {

    }

}