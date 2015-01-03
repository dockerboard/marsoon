'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var jade = require('gulp-jade');

gulp.task('default', function () {
  return gulp.src('src/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
    .pipe(deploy());
});