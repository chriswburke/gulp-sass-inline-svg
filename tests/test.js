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

gulp.task('sass', ['icons'], function(){
  return gulp.src('test.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'));
})

gulp.task('default', ['sass']);