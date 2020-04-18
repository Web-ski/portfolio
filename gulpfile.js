//deklaracje zmiennych
var gulp = require('gulp');
var paths = {
  src: 'src/**/*',
  srcHTML: 'src/**/*.html',
  srcCSS: 'src/**/*.css',
  srcJS: 'src/**/*.js',
  srcJSON: 'src/**/*.json',
  srcSVG: 'src/**/*.svg',
  srcPNG: 'src/**/*.png',
  srcJPG: 'src/**/*.jpg',
  srcGIF: 'src/**/*.gif',
  dist: 'dist',
  distHTML: 'dist/**/*.html',
  distCSS: 'dist/**/*.css',
  distJSON: 'src/**/*.json',
  distJS: 'dist/**/*.js',
  distSVG: 'dist/**/*.svg',
  distPNG: 'dist/**/*.png',
  distJPG: 'src/**/*.jpg',
  distGIF: 'src/**/*.gif'
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
gulp.task('json', () => {
  return gulp.src(paths.srcJSON).pipe(gulp.dest(paths.dist));
});
gulp.task('js', () => {
return gulp.src(paths.srcJS).pipe(gulp.dest(paths.dist));
});
gulp.task('svg', () => {
  return gulp.src(paths.srcSVG).pipe(gulp.dest(paths.dist));
});
gulp.task('png', () => {
  return gulp.src(paths.srcPNG).pipe(gulp.dest(paths.dist));
});
gulp.task('jpg', () => {
  return gulp.src(paths.srcJPG).pipe(gulp.dest(paths.dist));
});
gulp.task('gif', () => {
  return gulp.src(paths.srcGIF).pipe(gulp.dest(paths.dist));
});

/*łączenie zadań*/
gulp.task('copy', gulp.series(gulp.parallel('html', 'css', 'json', 'js', 'svg', 'png', 'jpg', 'gif')));