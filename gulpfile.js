var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('dist/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
})