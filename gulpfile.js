var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var pug         = require('gulp-pug2')

gulp.task('serve', ['sass','pug2'], function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("src/*.pug", ['pug2']);
    gulp.watch("src/views/*.pug", ['pug2']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});
gulp.task('pug2', function() {
  return gulp.src('src/*.pug')
  .pipe(pug({ yourTemplate: 'Locals' }))
  .pipe(gulp.dest('app'))
})
gulp.task('default', ['serve']);
