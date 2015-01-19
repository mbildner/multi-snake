/* jshint node:true */
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');

var rimraf = require('rimraf');

gulp.task('build', function () {
  rimraf.sync('dist/');
  return gulp.src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(wrap('document.addEventListener(\'DOMContentLoaded\', function () {<%= contents %>})'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build']);
