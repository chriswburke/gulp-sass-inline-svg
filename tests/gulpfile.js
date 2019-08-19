'use strict';

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var sass = require('gulp-sass');
var inlinesvg = require('../index.js');

gulp.task('icons', function(){
  return gulp.src('icons/**/*.svg')
    .pipe(svgmin())
    .pipe(inlinesvg());
})

gulp.task('sass', gulp.series('icons', function(){
  return gulp.src('test.css')
    .pipe(sass())
    .pipe(gulp.dest('.'));
}))

gulp.task('default', gulp.series('sass'));
