const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('less', function(){
	return gulp.src('src/less/style.less')
	.pipe(sourcemaps.init())
	.pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer({
    browsers: [
      "last 4 version",
      "last 2 Chrome versions",
      "last 2 Firefox versions",
      "last 2 Opera versions",
      "last 2 Edge versions"
    ],
    cascade: false
  }))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
});
// Browser-sync
gulp.task('serve', function(){
  browserSync.init({
    server: {
        baseDir: './src'
    }
  });
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

// Start server
gulp.task('default', ['less', 'serve']);

// Copy files
gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});
gulp.task('css', function(){
  return gulp.src('src/css/**')
    .pipe(gulp.dest('public/css'));
});
gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('public/js'));
});
gulp.task('img', function(){
  return gulp.src('src/img/**')
    .pipe(gulp.dest('public/img'));
});
gulp.task('fonts', function(){
  return gulp.src('src/fonts/**')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('public', ['html','css','js','img', 'fonts']);