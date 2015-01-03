'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('default', function () {
});

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
    .pipe(deploy());
});