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
        bundler.bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./js/dist/'))
            .pipe(gulp.dest('./js/dist/'));
    }

    bundler.on('log', function (msg) {
        console.log(msg);
    });

    return rebundle();
});