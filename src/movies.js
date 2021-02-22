// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => {
        return movie.director;
    });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
    const filteredMoviesArray = moviesArray.filter(movie => {
        return movie.director.toUpperCase() === 'STEVEN SPIELBERG' && movie.genre.includes('Drama');
    });

    return filteredMoviesArray.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const ratesSum = moviesArray.reduce(function (acc, element) {
        if (!element.rate) {
            return acc + 0;
        }

        return acc + element.rate;
    }, 0);

    const avg = (ratesSum / moviesArray.length).toFixed(2);

    return +avg;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = moviesArray => {
    if (moviesArray.length === 0) return 0;

    const dramaAvg = moviesArray.reduce((acc, movie) => {
        if (movie.genre.includes('Drama')) {
            acc.ratesSum += movie.rate;
            acc.dramaMoviesQuantity += 1;

            return acc;
        }

        return acc;
    }, { ratesSum: 0, dramaMoviesQuantity: 0 });

    if (dramaAvg.dramaMoviesQuantity === 0) return 0;

    const avg = (dramaAvg.ratesSum / dramaAvg.dramaMoviesQuantity).toFixed(2);

    return +avg;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
