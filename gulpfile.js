//Packages
// ======================================================
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass');

//Globs
// ======================================================
    var publicPath = {
      spa: './public/index.html',
      scss: './public/scss/**/*.scss*',
      js: './public/js/**/*.js*',
      img: 'public/images/raw/*'
    };

    var output = {
      public: 'public/',
      img : 'public/images/compressed/'
    };

// ======================================================


//gulp-sass
// ======================================================

  gulp.task('sass',function(){
    return gulp.src(publicPath.scss)
           .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
           .pipe(rename('main.min.css'))
           .pipe(gulp.dest(output.public));
  });

  gulp.task('minifyJS', function(){
    return gulp.src(publicPath.js)
          .pipe(uglify())
  });

  gulp.task('image-min',function(){
    return gulp.src(publicPath.img)
          .pipe(imagemin())
          .pipe(gulp.dest(output.img));
  });

  // browser-sync reload
  gulp.task('browser-sync', function() {
      browserSync.init({
          server: {
              baseDir: "./public"
          }
      });

      //Watch files on reload
      gulp.watch(publicPath.spa).on('change', browserSync.reload);
      gulp.watch(publicPath.scss,['sass']).on('change', browserSync.reload);
      gulp.watch(publicPath.js).on('change', browserSync.reload);
  });

gulp.task('watch', function(){
  gulp.watch(publicPath.spa).on('change', browserSync.reload);
  gulp.watch(publicPath.scss,['sass']).on('change', browserSync.reload);
  gulp.watch(publicPath.js).on('change', browserSync.reload);
});

// gulp.task('default',['sass','watch']);
// ======================================================


// Defaults
gulp.task('default', ['browser-sync','sass', 'watch']);

gulp.task('succ', ['sass','watch']);
