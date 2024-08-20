"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const film1 = prompt('Один из последних просмотренных фильмов');
const grade1 = +prompt('На сколько оцените его?');
const film2 = prompt('И ещё один из последних просмотренных фильмов');
const grade2 = +prompt('А на сколько оцените его?');

console.log(film1)



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

personalMovieDB.movies[film1] = grade1;
personalMovieDB.movies[film2] = grade2;

console.log(personalMovieDB)


