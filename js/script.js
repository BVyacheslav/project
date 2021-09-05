/* jshint -W097 */
"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// switch (true) {
//     case numberOfFilms < 10:
//         alert('Просмотрено мало фильмов');
//         break;
//     case numberOfFilms >= 10 && numberOfFilms <= 30:
//         alert('Вы классический зритель');
//         break; 
//     case numberOfFilms > 30:
//         alert('Вы киноман');
//         break; 
//     default:
//         alert('Произошла ошибка');
//         break;
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из просмотренных фильмов?', '');
//     if (a.length == 0 || a.length > 10) {
//         alert('Error');
//         a = prompt('Один из просмотренных фильмов?', '');
//     }

//     let b = prompt('На сколько оцените его?', '');
//     if (b.length == 0 || b.length > 10) {
//         alert('Error');
//         b = prompt('На сколько оцените его?', '');
//     }
//     personalMovieDB.movies[a] = b;
// }

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 1;
// while (i < 3) {
//     let a = prompt('Один из просмотренных фильмов?', '');
//     if (a.length == 0 || a.length > 10) {
//         alert('Error');
//         a = prompt('Один из просмотренных фильмов?', '');
//     }

//     let b = prompt('На сколько оцените его?', '');
//     if (b.length == 0 || b.length > 10) {
//         alert('Error');
//         b = prompt('На сколько оцените его?', '');
//     }
//     personalMovieDB.movies[a] = b;
//     i++;
// }

// do {
//     let a = prompt('Один из просмотренных фильмов?', '');
//     if (a.length == 0 || a.length > 10) {
//         alert('Error');
//         a = prompt('Один из просмотренных фильмов?', '');
//     }

//     let b = prompt('На сколько оцените его?', '');
//     if (b.length == 0 || b.length > 10) {
//         alert('Error');
//         b = prompt('На сколько оцените его?', '');
//     }
//     personalMovieDB.movies[a] = b;
//     i++;
// } while(i < 0);

console.log(personalMovieDB);