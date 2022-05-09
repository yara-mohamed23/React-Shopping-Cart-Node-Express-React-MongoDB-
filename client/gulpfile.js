//to use gulp
const gulp = require('gulp');

//to use gulp-sass
const gulpSass = require('gulp-sass');

//to use sass
const sass = gulpSass(require('sass'));

gulp.task('sass', async function() {
    gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
});