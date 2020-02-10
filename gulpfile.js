//deklaracje zmiennych
var gulp = require('gulp');
var paths = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcCSS: 'src/**/*.css',
  //srcJS: 'src/**/*.js',
  srcSVG: 'src/**/*.svg',
  srcPNG: 'src/**/*.png',
  dist: 'dist',
  distHTML: 'dist/**/*.html',
  distCSS: 'dist/**/*.css',
  //distJS: 'dist/**/*.js',
  distSVG: 'dist/**/*.svg',
  distPNG: 'dist/**/*.png'
};

//definicje tasków
gulp.task('hello', () => {
  console.log('Hello You ;)');
});

gulp.task('html', () => {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.dist));
});
gulp.task('css', () => {
  return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.dist));
});
// gulp.task('js', () => {
//   return gulp.src(paths.srcJS).pipe(gulp.dest(paths.dist));
// });
gulp.task('svg', () => {
  return gulp.src(paths.srcSVG).pipe(gulp.dest(paths.dist));
});
gulp.task('png', () => {
  return gulp.src(paths.srcPNG).pipe(gulp.dest(paths.dist));
});

/*łączenie zadań*/
gulp.task('copy', gulp.series(gulp.parallel('html', 'css', 'svg', 'png')));