/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are splitted in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var errorHandler = function(title) {
  'use strict';

  return function(err) {
    $.util.log($.util.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

gulp.task('stylus', function(){
  return gulp.src(['src/ai-style.styl'])
    .pipe($.stylus()).on('error', errorHandler('stylus'))
    .pipe($.autoprefixer()).on('error', errorHandler('autoprefixer'))
    .pipe(gulp.dest('.'))
    .pipe($.csso())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('.'));
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', function () {
  gulp.start('stylus');
});
