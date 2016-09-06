const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject', gulp.series(gulp.parallel('styles', 'eslint'), 'inject'));
gulp.task('build', gulp.series('eslint-failonerror','appconfig', 'partials', 'inject', 'other', 'test', 'build', 'assets', 'build-apidocs'));
gulp.task('test', gulp.series('eslint', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('protractor:src', gulp.series('browsersync:e2e', 'webdriver-update', 'run-protractor'));
gulp.task('protractor:dist', gulp.series('browsersync:e2e-dist', 'webdriver-update', 'run-protractor'));
gulp.task('protractor', gulp.series('protractor:src'));
gulp.task('serve', gulp.series('appconfig', 'inject', 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('serve:apidoc', gulp.series('build-apidocs', 'browsersync:apidoc'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch([
    conf.path.src('index.html'),
    'bower.json'
  ], gulp.parallel('inject'));

  gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
  gulp.watch([
    conf.path.src('**/*.css')
  ], gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('inject'));
  done();
}
