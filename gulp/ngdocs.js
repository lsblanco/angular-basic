const gulp = require('gulp');
const gulpDocs = require('gulp-ngdocs');
const connect = require('gulp-connect');
const path = require('path');

const conf = require('../conf/gulp.conf');

gulp.task('build-apidocs', ngdocs);
/*
gulp.task('run-apidocs', run_ngdocs);
*/
function ngdocs(){
  var options = {
    html5Mode: true,
    title: conf.titleApiDoc,
    scripts: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular/angular.min.js.map',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-animate/angular-animate.min.js.map'
    ]
  }
  return gulp.src(path.join(conf.paths.src, '/**/*.js'), path.join('!', conf.paths.src, '/**/*.spec.js'))
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest('docs/api/'));
}
/*
function run_ngdocs(){

  connect.server({
    root: ['docs/api'],
    port: 3000
  });
}
*/