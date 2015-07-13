var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var stringify = require('stringify');

gulp.task('browserify', function() {
    return browserify('./test/main.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./testdist/'));
});

gulp.task('watch', function() {
    var bundler = browserify({
        entries:['./js/src/main.js'],
        cache:{},
        packageCache: {},
        fullPaths: true
    });
    bundler.transform(reactify);
    bundler.transform(stringify(['.html']));
    var bundler = watchify(bundler);

    bundler.on('update', rebundle);

    function rebundle() {
        var date = new Date();
        bundler.bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(gulp.dest('./js/dist/'));
        var ms = (new Date()).getTime() - date.getTime();
        console.log('Rebundled in ' + ms + ' ms');
    }

    return rebundle();
});