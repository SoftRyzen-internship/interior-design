const gulp = require('gulp');
const paths = require('../paths');

const php = () => {
  return gulp
  .src(paths.src.php)
  .pipe(gulp.dest(paths.build.php));
};

module.exports = php;
