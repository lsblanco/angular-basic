const gulp = require('gulp');
const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');

const browserSyncConf = require('../conf/browsersync.conf');
const browserSyncDistConf = require('../conf/browsersync-dist.conf');
const browserSyncApiDocConf = require('../conf/browsersync-apidoc.conf');

browserSync.use(spa());

gulp.task('browsersync', browserSyncServe);
gulp.task('browsersync:dist', browserSyncDist);
gulp.task('browsersync:apidoc', browserSyncApiDoc);
gulp.task('browsersync:e2e', browserSyncE2e);
gulp.task('browsersync:e2e-dist', browserSyncE2eDist)

function browserSyncE2e(done) {
  browserSync.init(browserSyncConf());
  done();
}

function browserSyncE2eDist(done){
  browserSync.init(browserSyncDistConf());
  done();
}

function browserSyncServe(done) {
  browserSync.init(browserSyncConf());
  done();
}

function browserSyncDist(done) {
  browserSync.init(browserSyncDistConf());
  done();
}

function browserSyncApiDoc(done) {
  browserSync.init(browserSyncApiDocConf());
  done();
}