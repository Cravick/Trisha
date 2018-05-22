var gulp = require('gulp');
var print = require('gulp-print').default;
var less = require('gulp-less');
var babel = require('gulp-babel');
var sync = require('browser-sync');
var reload = sync.reload;

gulp.task('sync', function() {
    sync({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('less', function () {
    return gulp.src('app/styles.less')
    .pipe(print())
    .pipe(less())
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src('app/js/index.js')
    .pipe(print())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('reload', function() {
    sync.reload();
});

gulp.task('default', ['sync'], function() {
    gulp.watch("/app/index.html", ['reload']);
});