//to use gulp
const gulp = require('gulp');

//to use gulp-sass
const gulpSass = require('gulp-sass');

//to use sass
const sass = gulpSass(require('sass'));



//watch('src/components/**/*.scss') --> watch the changes in this file
//.pipe(sass()) --> compile it by sass
//gulp.dest('src/css') --> put it in this folder

// gulp.task('sass', async function() {
//     gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
// });  //to run this go to package.json add this to scripts --> "sass": "gulp sass"


//to run this go to package.json and add this to scripts --> "sass": "gulp watch"
gulp.task('watch', async function() {
    gulp.watch('src/components/**/*.scss', async function() {
        gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))

    })
})