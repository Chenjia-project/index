const gulp = require('gulp');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const webp = require('gulp-webp');
const removeHtml = require('gulp-remove-html');
const removeEmptyLines = require('gulp-remove-empty-lines');
const uglifycss = require('gulp-uglifycss');

function copy () {
gulp.src('src/**/*')
    .pipe(gulp.dest('public'))
}

function minifyHtml () {
gulp.src('public/**/*.html')
    .pipe(removeHtml())
    .pipe(removeEmptyLines())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('public'))
}

function minifyJavascript () {
gulp.src('public/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('public'))
}

function minifyCss () {
gulp.src('public/**/*.css')
    .pipe(uglifycss())
    .pipe(cleanCSS())
    .pipe(gulp.dest('public'))
}

function minifyPic () {
gulp.src('public/**/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('public'))
}

function build(cb) {
  copy();
  minifyHtml();
  minifyJavascript();
  minifyCss();
  minifyPic();
  cb();
}

exports.default = gulp.series(build);
