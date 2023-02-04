const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const nunjucksRender = require('gulp-nunjucks-render');
const htmlmin = require('gulp-htmlmin');
const cachebust = require('gulp-cache-bust');
const mode = require('gulp-mode')();
const paths = require('../paths');

const htmlminConfig = {
  collapseWhitespace: true,
};

const cachebustConfig = {
  type: 'timestamp',
};

const manageEnvironment = function (environment) {
  environment.addFilter('json', function (value) {
    return JSON.parse(value); // convert the complete string imported by Nunjucks into JSON and return
  });
};

const getDataForFile = file => {
  return require('../../src/json/data.json');
};

const html = () => {
  return gulp
    .src(paths.src.html)
    .pipe(data(getDataForFile))
    .pipe(
      nunjucksRender({
        path: ['src/html/partials'],
        manageEnv: manageEnvironment, // set up the environment using the additional filter
        envOptions: {
          autoescape: false,
        },
        watch: true,
      }),
    )
    .pipe(mode.production(htmlmin(htmlminConfig)))
    .pipe(mode.production(cachebust(cachebustConfig)))
    .pipe(gulp.dest(paths.build.html));
};

module.exports = { html };
