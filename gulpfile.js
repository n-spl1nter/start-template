var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

gulp.task('default', function(){
    gulp.watch('build/*.less', function(e){
        gulp.src(e.path)
            .pipe(less())
            .pipe(gulp.dest('./f/css'))
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./f/css'))
    });
});