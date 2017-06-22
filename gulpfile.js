var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

gulp.task('default', function(){
    gulp.watch('./src/css/*.less', function(e){
        gulp.src(e.path)
            .pipe(less())
            .pipe(gulp.dest('./build/css'))
            .pipe(autoprefixer())
            .pipe(gulp.dest('./build/css'))
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./build/css'))
    });
});

gulp.task('compressjs', function () {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./build/js/'))
});