const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const mode = require('gulp-mode');
const notify = require('gulp-notify');
const paths = require('../paths');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const scripts = done => {
  return (
    gulp
      .src(paths.src.js)
      .pipe(
        plumber({
          errorHandler: function(err) {
            notify.onError({
              title: 'JS Error',
              message: 'Error: <%= error.message %>',
            })(err);
            this.emit('end');
          },
        }),
      )
      // .pipe(babel())
      // .pipe(concat('app.js'))
      // .pipe(mode.production(uglify()))
      .pipe(
        webpackStream({
          mode: 'production',
          output: {
            filename: 'app.js',
          },
          module: {
            rules: [
              {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env'],
                },
              },
            ],
          },
        }),
      )
      .pipe(gulp.dest(paths.build.js))
  );
};

module.exports = scripts;
