// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {{
        let directors = movies.map(function (movie) {
            return movie.director;
        });
        return directors;
    }
    getAllDirectors(movies);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrMovies) {

    let arrSpielbergMovie = arrMovies.filter(function (movie) {
        if (movie.director === "Steven Spielberg") return true;
        return false;
    });

    if (arrSpielbergMovie.lenght === 0) return 0;

    let arrSpielbergDrama = arrSpielbergMovie.filter(function (movie) {
        if (movie.genre.indexOf("Drama") >= 0) return true;
        return false;
    })
    return arrSpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
      return 0;
    }
    let totalAverage = moviesArray.reduce((a, b) => {
      if (b.score) {
        return a + b.score;
      } else {
        return a;
      }
    }, 0);
  
    return Number((totalAverage / moviesArray.length).toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesArr = moviesArray.filter(function(eachMovie) {
        return eachMovie.genre.includes('Drama')
    });
    return scoresAverage(dramaMoviesArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titles = moviesArray.map(movie => movie.title) 
  
    titles.sort()
  
    if (titles.length < 20) {
      return titles;
    } else {
      return titles.splice(0,20)
    }
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
