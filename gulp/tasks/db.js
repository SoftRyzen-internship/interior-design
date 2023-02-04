const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-api');
const data = require('gulp-data');
const paths = require('../paths');

function getDataForFile(file) {
  return {
    example: 'data loaded for ' + file.relative,
  };
}

const db = () => {
  return gulp
    .src(paths.src.data)
    .pipe(data(getDataForFile))
    .pipe(
      nunjucksRender({
        src: 'src/json/',
        extension: 'inherit',
      }),
    )
    .pipe(gulp.dest(paths.build.db));
};

module.exports = db;
