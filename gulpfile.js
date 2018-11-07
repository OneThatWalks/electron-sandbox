'use strict';

const gulp = require('gulp');
const gulpTypescript = require('gulp-typescript');
const gulpSourcemaps = require('gulp-sourcemaps');
const del = require('del')
const gulpSass = require('gulp-sass');

// TODO: externalize


const tsProject = gulpTypescript.createProject('./tsconfig.json');

gulp.task('compile', function () {
    return tsProject.src()
        .pipe(gulpSourcemaps.init({ loadMaps: true }))
        .pipe(tsProject())
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return del([
        "./dist/**/*",
    ])
});

gulp.task('copy', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
})

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', gulp.series('clean', 'compile', 'copy', 'sass'));

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled rejection at: Promise', p, 'reason:', reason);
    process.exit(1);
})